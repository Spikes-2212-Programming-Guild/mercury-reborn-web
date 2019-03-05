import * as _ from "lodash"

export function generateValidationReport(form) {

  const report = {}

  _.map(form, (category, questions) => {
    report[category] = []
    _.map(questions, (answer, question) => {
      if (answer === "") {
        report[category].push(question)
      }
    })
  })

  return {status: (report === {}), report}
}