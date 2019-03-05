import React from "react"
import { Table } from "semantic-ui-react"

import * as _ from "lodash"

export default function SimpleTable (props) {
  const {data} = props
  const {Row, Cell, Header, HeaderCell} = Table
  return (
    <div>
      <Table columns={2} basic celled>
        <Header>
          <HeaderCell>Key</HeaderCell>
          <HeaderCell>Value</HeaderCell>
        </Header>

        <Table.Body>
          {
            _.map(data, (value, key) => (
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

}
