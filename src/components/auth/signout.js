/**
 * Created by David on 5/5/16.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth_actions'; 


class SignOut extends Component{

    componentWillMount(){
        this.props.signOutUser();
    }

    render(){
        return (
           <div>
               <p>
                   Thanks! See you soon!
               </p>
           </div>
        );
    }
}



export default connect(null, actions)(SignOut);
