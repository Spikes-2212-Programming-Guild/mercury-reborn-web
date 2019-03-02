import React from "react"
import { Subscribe, Provider } from "unstated"
import { MatchList } from "../components/match-list"
import { Route } from "react-router-dom"
import ScoutingMenuContainer from "../containers/scouting-menu-container"
import Match from "../components/scouting-menu/match/match"
import FormViewer from "./ViewerForm"
import ScoutingForm from "../components/ScoutingForm"
import * as tbaApi from "../connectors/tba-api/connector"
import * as configManager from "../util/config-manager"
import TeamsList from "../components/teams-list"
import { submitFieldForm } from "../connectors/mercury-api-connector"

function MatchesMenu (props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        console.log("matches")
        return <MatchList {...props} matches={container.state.matches}/>
      }}
    </Subscribe>
  )
}

function TeamsMenu (props) {
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        return <TeamsList {...props} teams={container.state.teams}/>
      }}
    </Subscribe>
  )
}

class ScoutingMenu extends React.Component {
  constructor (props) {
    super(props)
    this.container = new ScoutingMenuContainer()
    tbaApi.fetchMatchesForScoutingMenu().then(matches => this.container.setMatches(matches))
    tbaApi.fetchTeamsForTeamsList().then(teams => this.container.setTeams(teams))
  }

  render () {
    return (
      <Provider inject={[this.container]}>
        <Route
          exact
          path={`${this.props.match.path}/field/matches`}
          component={() => <MatchesMenu parentURL={`${this.props.match.path}/field`}/>}/>
        <Route
          path={`${this.props.match.path}/field/matches/:name`}
          component={() => <Match parentURL={`${this.props.match.path}/field/matches/scout/`}/>}/>
        <Route
          path={`${this.props.match.path}/field/matches/scout/:name/:team/`}
          component={(props) => (
            <ScoutingForm
              {...props}
              formPromise={configManager.getFieldForm()}
              formConsumer={submitFieldForm}
              title={`Scouting - ${props.match.params.team.replace("frc", "")}`}/>
          )}/>
        <Route exact path={`${this.props.match.path}/pit/teams`} component={(props) => <TeamsMenu {...props}/>}/>
        <Route
          exact
          path={`${this.props.match.path}/viewer/matches`}
          component={() => <MatchesMenu parentURL={`${this.props.match.path}/viewer`}/>}/>
        <Route
          exact
          path={`${this.props.match.path}/pit/:team`}
          component={(props) => (
            <ScoutingForm
              {...props}
              formPromise={configManager.getPitForm()}
              title={`Pit - ${props.match.params.team}`}/>
          )}/>
        <Route
          exact
          path={`${this.props.match.path}/viewer/matches/:match`}
          component={props => (
            <ScoutingForm
              {...props}
              formPromise={configManager.getViewerForm()}
              title={`Match - ${props.match.params.match}`}/>
          )}/>
      </Provider>
    )
  }
}

export default ScoutingMenu
