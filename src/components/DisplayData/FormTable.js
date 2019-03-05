import React from "react"
import { Table, Header } from "semantic-ui-react"
import * as _ from "lodash"

class FormTable extends React.Component {
  render () {
    const {Row, Cell, Header, HeaderCell} = Table
    delete this.props.data["team_id"]
    delete this.props.data["name"]
    const {data} = this.props
    return (
      _.map(data, (questions, category) =>
        (
          <div>
            <Header as={"h3"}>{category}</Header>
            <FormTable data={questions}/>
          </div>
        )
      )
    )
  }
}

export default FormTable
