import React from "react"

export default class Reset extends React.Component {
  render() {
    return (
      <button onClick={() => localStorage.clear()}> Clear Storage</button>
    )
  }
}
