import React from "react"
import SimpleTable from "../SimpleTable"

export default function EnumDataDisplay (props) {
  const {data, questionName} = props
  return (
    <div>
      <h4>{questionName}</h4>
      <SimpleTable data={data}/>
    </div>
  )
}