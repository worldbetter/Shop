import React from 'react';
import { connect } from 'dva';
import { PREFIX as MainNamespace } from "../../models/main";
import Header from '../../components/header';
import { style } from 'typestyle';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const mainStyle = style({
            fontFamily: "Georgia,sans-serif",
            marginTop: "30px",
            textAlign: "center"
        });
        return (<div className={mainStyle}>
        <Header currentCommodity={this.props.currentCommodity} currentShow={this.props.currentShow}/>
      </div>);
    }
}
function mapStateToProps(state) {
    return state[MainNamespace];
}
export default connect(mapStateToProps)(Main);
