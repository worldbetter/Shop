import React from 'react'
import {Button} from 'antd'

function Commodity(props) {
  const comStyle = {
    // height: '300px',
    // width: '30px',
    // textAlign: 'center'
  }

  const rowStyle = {
    display: 'flex'
  }
  const colStyle = {
    flex: 1
  }
  const imgStyle = {
    height: '50px',
    width:'100px'
  }
  const titleStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '15px'
  }

  const moneyStyle = {
    color: '#B0B0B0',
    fontSize: '11px',
    marginTop: '5px'
  }
  return (
    <div style={comStyle}>
      {props.itemDetail.map((item) => (
        <div style={rowStyle}>
          {item.map((com) => {
            let imageUrl = com.image
            let image = require(`../../${imageUrl}.jpg`)
            return (
              <div style={colStyle}>
                <div>
                  <img src={image}></img>
                </div>
                <div style={titleStyle}>{com.title}</div>
                <div style={moneyStyle}>${com.price}</div>
              </div>
              )
          })}
        </div>
      ))}
    </div>
  )
}

export default Commodity
