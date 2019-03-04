import React from "react"
import { Route } from "react-router-dom"
import FieldHomepage from "../field/FieldHomepage"
import FieldMatchesMenu from "../field/FieldMatchesMenu"
import MatchesContainer from "../../../containers/matches-container"
import { fetchSavedFieldMatches } from "../../../connectors/mercury-api-connector"
import { Provider } from "unstated"
import Match from "../../../components/scouting-menu/match/match"
import { fetchMatchesForScoutingMenu } from "../../../connectors/tba-api/connector"
import FieldMatchDataView from "../field/FieldMatchDataView"

export class FieldRoutes extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      matchesContainer: new MatchesContainer()
    }
    fetchSavedFieldMatches().then(matchNames => {
      fetchMatchesForScoutingMenu(matchNames).then(matches => this.state.matchesContainer.setMatches(matches))
    })  }

  render () {
    console.log(this.props.match)
    return (
      <Provider inject={[this.state.matchesContainer]}>
        <div>
          <Route path={`${this.props.match.path}/field`} exact component={FieldHomepage}/>
          <Route path={`${this.props.match.path}/field/match`} exact component={FieldMatchesMenu}/>
          <Route path={`${this.props.match.path}/field/match/matches/:name`} component={() => <Match parentURL={`${this.props.match.path}/field/match/view/`}/>}/>
          <Route path={`${this.props.match.path}/field/match/view/:match_name/:team_id`} component={FieldMatchDataView}/>
        </div>
      </Provider>
    )
  }
}