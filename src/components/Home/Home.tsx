import * as React from "react"

export default class Home extends React.Component {

  public render() {
    const {children} = this.props
    return (
      <div>
        home
        {children}
      </div>
    )
  }
}
