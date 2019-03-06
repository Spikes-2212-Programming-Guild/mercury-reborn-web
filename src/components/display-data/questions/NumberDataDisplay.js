import React from "react"
import SimpleTable from "../SimpleTable"
import LineChart from "../LineChart"

import * as _ from "lodash"

export default function NumberDataDisplay (props) {
  const {data, matches, questionName} = props


  const results = data.results.all

  delete data.results.all

  return (
    <div>
      <h4>{questionName}</h4>
	  #<LineChart dataSet={_.zipObject(matches, results)}/>
      <SimpleTable data={data}/>
    </div>
  )
}
