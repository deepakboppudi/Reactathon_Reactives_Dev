import React from 'react';
import Footer from './Footer';
import DashboardDetail from './DashboardDetail';
import HackathonCards from './HackathonCards';
import ScrollToTop from './ScrollToTop';
import CreateHackathon from './CreateHackathon';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dboard:true,hcreate:false};
        this.curHackathonName='';
        this.curHackathonDesc='';
    }

    handleBackFromCH(){
        console.log('hcreate state change to false');
        this.setState({hcreate:false})
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

    onCreateHack(){
      this.setState({hcreate:true})
    }

    render() {
        console.log('dbaord : '+this.state.dboard);
        const isDboard = this.state.dboard;
        const isHcreate = this.state.hcreate;
        console.log('dboard : '+isDboard);
        var hackdemo = {"hackathons":{"hacks":[{"hacksName":"reactathon","hackDesc":"Hackathon using react"},{"hacksName":"speedathon","hackDesc":"Speed matters"}]}}
        this.handleBackFromDD = this.handleBackFromDD.bind(this);
        this.handleHackClick = this.handleHackClick.bind(this);
        this.handleBackFromCH = this.handleBackFromCH.bind(this);
        this.onCreateHack = this.onCreateHack.bind(this);
        return (
            <div className="content-wrapper" style={{marginTop : '80px'}}>
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Hackathons</li>
                </ol>
                {isHcreate ? (<CreateHackathon backHandler={this.handleBackFromCH}/>) : (
                  <div>
            {isDboard ? (
              <div>
                    {this.props.userType ==0 ?(
                      <div>
                      <button type="button"className="btn btn-dark btn-lg" onClick={() => this.onCreateHack()}>
                          Add Hackathon
                      </button>
                      </div>
                    ):(
                      <div>
                      <h1>MY HACKATHONS</h1>
                    <hr/>
                    <HackathonCards onHackClick={this.handleHackClick} hackathons={hackdemo.hackathons}/>
                    </div>
                  )}
                    <br/><br/>
                    <h1>ALL HACKATHONS</h1>
                    <hr/>
                    <HackathonCards onHackClick={this.handleHackClick} hackathons={hackdemo.hackathons}/>
                    <div style={{height: '1000px'}}/>
                </div>

            ):(
                <DashboardDetail hackName={this.curHackathonName} hackDesc={this.curHackathonDesc} backHandler={this.handleBackFromDD}/>
        )}
        </div>
      )}
        </div>
                <Footer/>
                <ScrollToTop/>
            </div>

        );
    }
}

export default Dashboard;
