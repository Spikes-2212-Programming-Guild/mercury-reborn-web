import React from "react"
import {Subscribe, Provider} from "unstated"
import {MatchList} from "../components/match-list"
import {Route} from "react-router-dom"
import ScoutingMenuContainer from "../containers/scouting-menu-container"
import Match from "../components/scouting-menu/match/match"
import FormViewer from "./ViewerForm"
import ScoutingForm from "./ScoutingForm"
import * as tbaApi from "../connectors/tba-api/connector"


function MatchesMenu(props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        console.log("matches")
        return <MatchList {...props} matches={container.state.matches}/>
      }}
    </Subscribe>
  )
}


class ScoutingMenu extends React.Component {
  constructor(props) {
    super(props)
    this.container = new ScoutingMenuContainer()
    tbaApi.fetchMatchesForScoutingMenu().then(matches => this.container.setMatches(matches))
  }

  render() {
    return (
      <Provider inject={[this.container]}>
        <Route exact path={`${this.props.match.path}/field/matches`} component={props => <MatchesMenu parentURL={`${this.props.match.path}/field`}/>}/>
        <Route path={`${this.props.match.path}/field/matches/:name`} component={props => <Match parentURL={`${this.props.match.path}/field/matches/scout/`}/>}/>
        <Route path={`${this.props.match.path}/field/matches/scout/:name/:team/`} component={ScoutingForm}/>
        <Route exact path={`${this.props.match.path}/form-viewer`} component={FormViewer}/>
      </Provider>
    )
  }
}

export default ScoutingMenu
