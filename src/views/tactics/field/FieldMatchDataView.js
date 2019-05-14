import React, { useState, useEffect } from "react"
import { fetchFieldMatch } from "../../../connectors/mercury-api-connector"
import FormTable from "../../../components/display-data/FormTable"
import { Header } from "semantic-ui-react"

export default (props) => {
  const [match, setMatch] = useState({})

  const {team_id, match_name} = props.match.params

  useEffect(() => {fetchFieldMatch(team_id, match_name).then(matchData => setMatch(matchData))}, [])

  return (
    <div>
      <Header as={"h3"}>{`Match ${match_name} For Team ${team_id}`}</Header>
      <FormTable data={match}/>
    </div>
  )
}