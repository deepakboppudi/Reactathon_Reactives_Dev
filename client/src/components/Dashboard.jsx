import React from 'react';
import Footer from './Footer';
import DashboardDetail from './DashboardDetail';
import HackathonCards from './HackathonCards';
import ScrollToTop from './ScrollToTop';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dboard:true};
        this.curHackathonName='';
        this.curHackathonDesc='';
    }

    handleBackFromDD(){
        console.log('dboard state change to true');
        this.setState({dboard:true})
    }

    handleHackClick(hackName,hackDesc){
        this.curHackathonName=hackName;
        this.curHackathonDesc=hackDesc;
        this.setState({dboard:false})
    }

    render() {
        console.log('dbaord : '+this.state.dboard);
        const isDboard = this.state.dboard;
        console.log('dboard : '+isDboard);
        var hackdemo = {"hackathons":{"hacks":[{"hacksName":"reactathon","hackDesc":"Hackathon using react"},{"hacksName":"speedathon","hackDesc":"Speed matters"}]}}
        this.handleBackFromDD = this.handleBackFromDD.bind(this);
        this.handleHackClick = this.handleHackClick.bind(this);
        return (
            <div className="content-wrapper" style={{marginTop : '80px'}}>
            {isDboard ? (
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Hackathons</li>
                    </ol>
                    <h1>HACKATHONS</h1>
                    <hr/>
                    <HackathonCards onHackClick={this.handleHackClick} hackathons={hackdemo.hackathons}/>                   
                    <div style={{height: '1000px'}}></div>

                </div>
            ):(
                <DashboardDetail hackName={this.curHackathonName} hackDesc={this.curHackathonDesc} backHandler={this.handleBackFromDD}/>
        )}
                <Footer/>
                <ScrollToTop/>
            </div>
        );
    }
}

export default Dashboard; 