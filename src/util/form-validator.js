import * as _ from "lodash"

export function generateValidationReport(form) {

  const data = {}
  let status = true
  _.map(form, (questions, category) => {
    data[category] = []
    _.map(questions, (answer, question) => {
      if (answer === "") {
        data[category].push(question)
        status = false
      }
    })
  })

  return {status, data}
}