import React from "react"
import {Subscribe, Provider} from "unstated"
import {MatchList} from "../components/match-list"
import {Route} from "react-router-dom"
import ScoutingMenuContainer from "../containers/scouting-menu-container"
import Index from "../components/scouting-menu/match/index"


function MatchesMenu(props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        console.log("matches")
        return <MatchList matches={container.state.matches}/>
      }}
    </Subscribe>
  )
}


class ScoutingMenu extends React.Component {
  constructor(props) {
    super(props)
    this.container = new ScoutingMenuContainer()
    this.container.fetchMatches()
  }

  render() {
    return (
      <Provider inject={[this.container]}>
        <Route exact path={`${this.props.match.path}/matches`} component={MatchesMenu}/>
        <Route path={`${this.props.match.path}/matches/:name`} component={Index}/>
      </Provider>
    )
  }
}

export default ScoutingMenu