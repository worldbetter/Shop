import React from 'react'

export class Detail extends React.Component{
  constructor(props){
    super(props)
  }

  render () {
    const detailStyle = {
      display: 'flex'
    }
    const leftStyle = {
      flex: 1
    }
    const rightStyle = {
      flex: 1
    }
    return (
      <div style={detailStyle}>
        <div style={leftStyle}>
          Text
        </div>
        <div style={rightStyle}>
          Text
        </div>
      </div>
    )
  }
}
