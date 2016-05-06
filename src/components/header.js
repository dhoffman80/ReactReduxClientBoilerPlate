/**
 * Created by David on 4/28/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    renderLinks(){
        if(this.props.authenticated){
            return(
            <li className="nav-item">
                <Link className="nav-link" to="/signout"> Sign Out </Link>
            </li>
            );
        }else {
            return [
                <li className="nav-item" key="signin">
                    <Link className="nav-link" to="/signin"> Sign In </Link>
                </li>,
                <li className="nav-item" key="signup">
                    <Link className="nav-link" to="/signup"> Register </Link>
                </li>
            ]
        }
    }

    render(){
        return (
           <nav className="navbar navbar-light">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <Link className="navbar-brand" to="/">
                           <img alt="Brand" src=""/>
                       </Link>
                   </div>
                   <ul className="nav navbar-nav navbar-right">
                       {this.renderLinks()}
                   </ul>
               </div>
           </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps )(Header);
