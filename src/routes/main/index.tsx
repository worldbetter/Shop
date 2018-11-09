import React from 'react';
import { connect } from 'dva';
import {MainStatus as MainModelStatus,PREFIX as MainNamespace} from "../../models/main";
import Header from '../../components/header'

type MainProps = MainModelStatus

class Main extends React.Component<MainProps,{}> {

  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <Header currentCommodity={this.props.currentCommodity} currentShow={this.props.currentShow}/>
      </div>
    )
  }
}

function mapStateToProps(state:any):MainProps {
  return state[MainNamespace]
}
export default connect(mapStateToProps)(Main)

