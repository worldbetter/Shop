import React from 'react'
import {Button} from 'antd'


export class Display extends React.Component {

  constructor(props){
    super(props)
  }

  render (){
    const displayStyle = {
      width: '100%',
      height: '200px'
    }
    const typeStyle = {
      marginTop: '10px',
      fontSize: '16px',
      fontWeight: 'bold'
    }
    const itemStyle = {
      marginTop: '5px',
      color: '#B0B0B0',
      fontSize: '10px'
    }
    return (
      <div>
        <div>
          <img src={this.props.imageUrl} alt={"Image"}></img>
        </div>
        <div style={typeStyle}>{this.props.type || 'clothes type'}</div>
        <div style={itemStyle}>({this.props.itemNumber} items)</div>
      </div>
    )
  }
}

