import React from "react"
import { Button, Grid } from "semantic-ui-react"
import { Subscribe } from "unstated"
import { withRouter } from "react-router-dom"
import "./style.css"
import MatchesContainer from "../../../containers/matches-container"

function Match (props) {

  const scoutTeam = (matchName, team) => {
    const newPath = `${props.parentURL}${matchName}/${team}`
    props.history.push(newPath)
  }

  const {match} = props
  const {name} = match.params
  const container = MatchesContainer.useContainer()
  const matchData = container.getMatch(name)

  if (matchData) {
    const {blue, red} = matchData

    const joined = []
    for (let i = 0; i < blue.length; i++) {
      joined.push({blue: blue[i], red: red[i]})
    }
    return (
      <div>
        <Grid centered padded columns={2}>
          <Grid.Column>
            <Button.Group color={"blue"} inverted vertical fluid>
              {blue.map(team => (
                <Button
                  key={team}
                  class_name="team_button"
                  onClick={() => scoutTeam(name, team)}>
                  {team}
                </Button>
              ))}
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <Button.Group color={"red"} inverted vertical fluid>
              {red.map(team => (
                <Button
                  key={team}
                  class_name="team_button"
                  onClick={() => scoutTeam(name, team)}>
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
}

export default withRouter(Match)
