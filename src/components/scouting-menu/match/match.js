import React from "react"
import {Grid, Button} from "semantic-ui-react"
import {Subscribe} from "unstated"
import ScoutingMenuContainer from "../../../containers/scouting-menu-container"
import {withRouter} from "react-router-dom"
import "./style.css"


class Match extends React.Component {

  constructor (props) {
    super(props)
  }

  scoutTeam(matchName, team) {
    const newPath = `/${window.location.pathname.split("/")[1]}/matches-field/scout/${matchName}/${team}`
    this.props.history.push(newPath)
  }


  render() {
    const {match} = this.props
    const {name} = match.params
    return (
      <Subscribe to={[ScoutingMenuContainer]}>
        {container => {
          const matchData = container.getMatch(name)
          if (matchData) {
            const {blue, red} = matchData

            const joined = []
            for (let i = 0; i < blue.length; i++) {
              joined.push({blue: blue[i], red: red[i]});
            }
            return (
              <div>
                <Grid centered padded columns={2}>
                  <Grid.Column>
                    <Button.Group color={"blue"} inverted vertical fluid>
                      {blue.map(team => (
                        <Button
                          class_name="team_button"
                          onClick={() => this.scoutTeam(name, team)}>
                          {team}
                        </Button>
                      ))}
                    </Button.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <Button.Group color={"red"} inverted vertical fluid>
                      {red.map(team => (
                        <Button
                          class_name="team_button"
                          onClick={() => this.scoutTeam(name, team)}>
                          {team}
                        </Button>
                      ))}
                    </Button.Group>
                  </Grid.Column>
                </Grid>
              </div>
            )
          }
          return ""
        }}
      </Subscribe>
    )
  }
}

export default withRouter(Match)