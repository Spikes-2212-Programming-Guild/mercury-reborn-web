import React from "react"
import {Label, Grid, Button, Menu} from "semantic-ui-react"
import {Subscribe} from "unstated"
import ScoutingMenuContainer from "../../../containers/scouting-menu-container"
import "./style.css"

function Index(props) {
  const {match} = props
  const {name}  = match.params
  return (
    <Subscribe to={[ScoutingMenuContainer]}>
      {container => {
        const matchData = container.getMatch(name)
        if (matchData) {
          const {blue, red} = container.getMatch(name)

          const joined = []
          for (let i = 0; i < blue.length; i++) {
            joined.push({blue: blue[i], red:red[i]});
          }
          return (
            <div >
              <Grid centered padded columns={2}>
                <Grid.Column>
                  <Button.Group color={"blue"} inverted vertical fluid >
                    {blue.map(team => <Button class_name="team_button">{team}</Button>)}
                  </Button.Group>
                </Grid.Column>
                <Grid.Column>
                  <Button.Group color={"red"} inverted vertical fluid >
                    {red.map(team => <Button class_name="team_button">{team}</Button>)}
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

export default Index