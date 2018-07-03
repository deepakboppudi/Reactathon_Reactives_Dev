import React from 'react';
import { Link } from 'react-router-dom';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            emailid: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { emailid, password } = this.state;

    }

    render() {
        const { emailid, password, submitted } = this.state;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                        <div className="card-body">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="emailid">Email Address</label>
                                    <input type="text" placeholder="Enter Email Adress" className={'form-control' + (submitted && !emailid ? ' is-invalid' : '')} name="emailid" value={emailid} onChange={this.handleChange} />
                                    {submitted && !emailid &&
                                        <div className="text-danger">Email Address is required</div>
                                    }
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder="Enter Password" className={'form-control' + (submitted && !password ? ' is-invalid' : '')} name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="text-danger">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Login</button>
                                </div>
                                <div className="text-center">
                                    <Link to="/register" className="btn btn-link">Register</Link>
                                </div>
                                <div className="text-center">
                                    <Link to="/forgotPassword" className="btn btn-link">Forgot Password ?</Link>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default LoginPage; 