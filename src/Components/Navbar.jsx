//imrc tab

import React, { Component } from 'react';
//cc tab
class Navbar extends Component {
    
    render() { 
        return ( 
            <h1>Welcome, {this.props.name}</h1>
         );
    }
}
 
export default Navbar;