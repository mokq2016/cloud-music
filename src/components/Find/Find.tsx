import * as React from "react"


export default class Find extends React.Component {

  public render() {
    const {children} = this.props
    return (
      <div>
        find{children}
      </div>
    )
  }
}
