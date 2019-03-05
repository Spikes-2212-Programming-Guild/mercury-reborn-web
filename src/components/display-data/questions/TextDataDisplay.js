import React from "react"

import * as _ from "lodash"
import SimpleTable from "../SimpleTable"

export default function TextDataDisplay (props) {

  const {matches, results, questionName} = props

  const dataSet = _.zipObject(matches, results)
  console.log("dataset is", dataSet)
  return (
    <div>
      <h4>{questionName}</h4>
      <SimpleTable data={dataSet}/>
    </div>
  )
}