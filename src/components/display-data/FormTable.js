import React from "react"
import { Table } from "semantic-ui-react"
import SimpleTable from "./SimpleTable"
import * as _ from "lodash"

function FormTable (props) {
  console.log("props are", props)
  const {Header} = Table
  delete props.data["team_id"]
  delete props.data["name"]
  const {data} = props
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

export default FormTable
