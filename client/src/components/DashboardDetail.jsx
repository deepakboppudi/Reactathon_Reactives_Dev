import React from 'react';

class DashboardDetail extends React.Component{
    constructor(props){
        super(props);
    }

    showPopup(){
        console.log("signup popup");
    }

    render(){
        return(
            <div>
                Dashboard Detail page
                <a href="#" onClick={() => this.props.backHandler()}>Back </a>
                <p> Hackathon Name : {this.props.hackName}</p>
                <p> Hackathon Desc : {this.props.hackDesc} </p>
                <a href="#" onClick={() => this.showPopup()}>Sign up </a>
                </div>
        )
    }

}

export default DashboardDetail;