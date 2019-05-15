import React, {useState, useEffect} from "react"
import {Header} from "semantic-ui-react"
import { fetchSpectatorMatch } from "../../../connectors/mercury-api-connector"
import FormTable from "../../../components/display-data/FormTable"

export default (props) => {
  const [match, setMatch] = useState({})

  const {match_name} = props.match.params

  useEffect(() => {fetchSpectatorMatch(match_name).then(match => setMatch(match))}, [])

  return (
    <div>
      <Header as={"h3"}>{`Spectator Scouting For ${match_name}`}</Header>
      <FormTable data={match}/>
    </div>
  )
}