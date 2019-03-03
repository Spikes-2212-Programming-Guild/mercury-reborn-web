import React from "react"
import {Table} from "semantic-ui-react"

class SimpleTable extends React.Component {
  render() {
    const {Row, Cell, HeaderCell} = Table
    return (
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Row>
            <HeaderCell>Key</HeaderCell>
            <HeaderCell>Value</HeaderCell>
          </Row>
        </Table.Header>
        <Table.Body>
          {this.props.data.map((a, i) => (
            <Row key={i}>
              <Cell>{a[1]}</Cell>
              <Cell>{a[0]}</Cell>
            </Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

export default SimpleTable
