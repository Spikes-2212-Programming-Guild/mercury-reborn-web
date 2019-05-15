import React from "react"
import { TextArea } from "semantic-ui-react"
import propTypes from "prop-types"
import ScoutingFormContainer from "../../containers/scouting-form-container"


function Text({subform, name}){

  const container = ScoutingFormContainer.useContainer()
  const set = (value) => container.set(subform, name, value)
  const get = () => container.get(subform, name).value

  return (
    <TextArea onChange={(event, data) => set(data.value)} value={get()}/>
  )
}

Text.propTypes = {
  subform: propTypes.string,
  name: propTypes.string
}

export default Text
