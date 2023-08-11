import React from 'react';

class ClassComp extends React.Component {
    render(){
        return <p>hello {this.props.name} | from {this.props.place} | Welcome to Home</p>
    }
}

export default ClassComp;