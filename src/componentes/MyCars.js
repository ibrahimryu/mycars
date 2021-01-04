import React from 'react';
import Cars from './Cars'

class MyCars extends React.Component {
    render() {
        return (
            <div className="myCars">
            <h1>{this.props.title}Boriko</h1>
                <Cars>Ford</Cars>
                <Cars>Peugeot</Cars>
                <Cars>Renault</Cars>
            </div>
        );
    }
}

export default MyCars;
