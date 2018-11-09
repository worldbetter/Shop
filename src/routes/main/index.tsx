import React from 'react';
import { connect } from 'dva';
import {MainStatus as MainModelStatus,PREFIX as MainNamespace} from "../../models/main";
import Header from '../../components/header'
import {style} from 'typestyle'

type MainProps = MainModelStatus

class Main extends React.Component<MainProps,{}> {

  constructor(props){
    super(props)
  }

  render () {
    const mainStyle = style({
      fontFamily: "Georgia,sans-serif",
      marginTop: "30px",
      textAlign: "center"
    })
    return (
      <div className={mainStyle}>
        <Header currentCommodity={this.props.currentCommodity} currentShow={this.props.currentShow}/>
      </div>
    )
  }
}

function mapStateToProps(state:any):MainProps {
  return state[MainNamespace]
}
export default connect(mapStateToProps)(Main)
