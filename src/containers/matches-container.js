import React, {useState} from "react"
import {createContainer} from "unstated-next"
import * as _ from "lodash"


const MatchesContainer = () => {
  const [matches, setMatches] = useState([])
  const getMatch = (name) => _.filter(matches, match => match.name === name)[0]
  return {matches, setMatches, getMatch}
}

export default createContainer(MatchesContainer)