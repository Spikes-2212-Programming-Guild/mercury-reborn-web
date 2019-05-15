import {useState} from "react"
import {createContainer} from "unstated-next"
import * as _ from "lodash"


const TeamsContainer = () => {
  const [teams, setTeams] = useState([])
  const getTeam = (name) => _.fitler(teams, team => team === name)[0]

  return {teams, setTeams, getTeam}
}

export default createContainer(TeamsContainer)
