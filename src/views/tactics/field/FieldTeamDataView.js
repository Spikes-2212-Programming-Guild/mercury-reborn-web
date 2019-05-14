import React, { useState, useEffect } from "react"
import { fetchFieldTeamSummary } from "../../../connectors/mercury-api-connector"
import DataDisplayPage from "../../../components/display-data/questions/DataDisplayPage"
import * as _ from "lodash"

export default ({match}) => {
  const [summary, setSummary] = useState({})
  const [matches, setMatches] = useState([])

  const {team_id} = match.params

  useEffect(() => {fetchFieldTeamSummary(team_id).then(summary => {
    const {matches} = summary
    delete summary.matches
    setMatches(matches)
    setSummary(summary)
  })}, [])

  return (
    <div>
      {
        _.map(summary, (questions, section) => (
          <div key={section}>
            <h3>{section}</h3>
            <DataDisplayPage matches={matches} questions={questions}/>
          </div>
        ))
      }
    </div>
  )
}