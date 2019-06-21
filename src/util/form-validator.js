import * as _ from "lodash"

export function generateValidationReport(form) {

  const data = {}
  let status = true
  _.map(form, (questions, subform) => {
    data[subform] = []
    _.map(questions, (questionData, question) => {
      if (questionData.value === "" && !questionData.optional) {
        data[subform].push(question)
        status = false
      }
    })
  })

  return {status, data}
}