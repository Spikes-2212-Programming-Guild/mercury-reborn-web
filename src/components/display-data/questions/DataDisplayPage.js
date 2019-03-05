import React from "react"
import NumberDataDisplay from "./NumberDataDisplay"

import * as _ from "lodash"
import EnumDataDisplay from "./EnumDataDisplay"
import TextDataDisplay from "./TextDataDisplay"

export default function (props) {

  const {matches, questions} = props

  return (
    <div>
      {
        _.map(questions,(question, questionName) => {
          if (question.type === "number") {
            return <NumberDataDisplay data={question} key={questionName} matches={matches} questionName={questionName}/>
          }

          if (question.type === "boolean" || question.type === "enum") {
            return <EnumDataDisplay data={question.results} questionName={questionName} key={questionName}/>
          }

          if (question.type === "text") {

            console.log("text data", question)
            return <TextDataDisplay results={question.results} matches={matches} key={questionName} questionName={questionName}/>
          }
        })
      }
    </div>
  )

}