import React from "react"
import { Header, Table } from "semantic-ui-react"
import SimpleTable from "./SimpleTable"
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
            <SimpleTable data={questions}/>
          </div>
        )
      )
    )
  }
}

export default FormTable
