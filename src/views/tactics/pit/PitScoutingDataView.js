import React, {useState, useEffect} from "react"
import { fetchPitScouting } from "../../../connectors/mercury-api-connector"
import { Header } from "semantic-ui-react"
import FormTable from "../../../components/display-data/FormTable"

export default ({match}) => {
  const [form, setForm] = useState({})

  const {team_id} = match.params

  useEffect(() => {fetchPitScouting(team_id).then(form => setForm(form))}, [])

  return (
    <div>
      <Header as={"h3"}>{`Pit Scouting For Team ${team_id}`}</Header>
      <FormTable data={form}/>
    </div>
  )
}