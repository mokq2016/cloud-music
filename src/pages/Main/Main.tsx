import * as React from "react"

export default class Main extends React.Component {
  public render() {
    const {children} = this.props
    console.log(this.props)
    return (
      <div className="main">
        main
      {children}
      </div>
    )
  }
}
