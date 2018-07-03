import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Dashboard from '../components/Dashboard';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        return (
            <div className="fixed-nav sticky-footer bg-dark">
                <NavigationBar/>
                <Dashboard/>
            </div>
        );
    }
}

export default HomePage; 