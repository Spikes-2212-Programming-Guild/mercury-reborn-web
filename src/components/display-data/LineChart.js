import React from "react"
import SimpleTable from "./SimpleTable"


export default class LineChart extends React.Component {
  constructor (props) {
    super(props)

  }

  render() {
    const {dataSet} = this.props
    return <SimpleTable data={dataSet}/>
  }
}
