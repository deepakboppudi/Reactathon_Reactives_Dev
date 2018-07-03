import React from 'react';
import HackerInfoDtls from "./HackerInfoDtls";

class HackathonCards extends React.Component{

    constructor(props) {
        super(props);
    }

    getBgColor(i){
        i = i%3;
        switch(i){
            case 0:
                return "bg-primary";
            case 1:
                return "bg-warning";
            case 2:
                return "bg-success";
        }
    }


    render(){

       return(
            <div className="row">
                {
                    this.props.hackathons.hacks.map((item,i) => {
                       return <div className="col-xl-3 col-sm-6 mb-3">
                            <div className={"card text-white o-hidden h-100 "+this.getBgColor(i)}>
                                <div className="card-body">
                                    <div className="card-body-icon">
                                        <i className="fa fa-fw fa-list"></i>
                                    </div>
                                    <div className="mr-5">{item.hacksName}</div>
                                </div>
                                <a className="card-footer text-white clearfix small z-1" href="#">
                                    <span className="float-left">{item.hackDesc}</span>
                                    <span className="float-right">
                                        <i className="fa fa-angle-right">
                                        </i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>

        );
    }

}

export default HackathonCards;