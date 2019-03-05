import React from "react"
import { fetchFieldMatch } from "../../../connectors/mercury-api-connector"
import FormTable from "../../../components/display-data/FormTable"
import { Header } from "semantic-ui-react"

export default class FieldMatchDataView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      match: null
    }
    console.log(props.match)
    const {team_id, match_name} = props.match.params
    fetchFieldMatch(team_id, match_name).then(matchData => this.setState({match: matchData}))
    console.log(1)
  }

  render () {
    console.log("tattt")
    if (this.state.match) {
      const {team_id, match_name} = this.props.match.params
      return (
        <div>
          <Header as={"h3"}>{`Match ${match_name} For Team ${team_id}`}</Header>
          <FormTable data={this.state.match}/>
        </div>
      )
    } else {
      return ""
    }
  }
}