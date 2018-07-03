import React from 'react';

class DashboardDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Dashboard Detail page
                <a href="#" onClick={() => this.props.backHandler()}>Back </a>
                <p> Hackathon Name : {this.props.hackName}</p>
                <p> Hackathon Desc : {this.props.hackDesc} </p>
                </div>
        )
    }

}

export default DashboardDetail;