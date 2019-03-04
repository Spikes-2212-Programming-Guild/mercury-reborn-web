import React from "react"
import { Table, Header } from "semantic-ui-react"
import * as _ from "lodash"

class SimpleTable extends React.Component {
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
            <Table columns={2} basic celled>
              <Header>
                <HeaderCell>Key</HeaderCell>
                <HeaderCell>Value</HeaderCell>
              </Header>

              <Table.Body>
                {
                  _.map(questions, (value, key) => (
                    <Row>
                      <Cell>
                        {key}
                      </Cell>
                      <Cell>
                        {value}
                      </Cell>
                    </Row>
                  ))
                }
              </Table.Body>
            </Table>
          </div>
        )
      )
    )
  }
}

export default SimpleTable
