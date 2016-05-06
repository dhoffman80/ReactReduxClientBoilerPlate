/**
 * Created by David on 5/5/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Main extends Component{

    componentWillMount(){
        this.props.getMainData();
    }

    render(){
        return (
            <div>
                <div>Your main page behind the login</div>
                <div>{this.props.message}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return {message: state.main.message};
}

export default connect(mapStateToProps, actions )(Main);
