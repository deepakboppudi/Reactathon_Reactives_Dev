import React from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;

    }

    render() {
        const { user, submitted } = this.state;
        
        return(
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" placeholder="Enter FirstName" className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {submitted && !user.firstName &&
                                    <div className="text-danger">First Name is required</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" placeholder="Enter LastName" className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} name="lastName" value={user.lastName} onChange={this.handleChange} />
                                {submitted && !user.lastName &&
                                    <div className="text-danger">Last Name is required</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Enter Username" className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} name="username" value={user.username} onChange={this.handleChange} />
                                {submitted && !user.username &&
                                    <div className="text-danger">Username is required</div>
                                }
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Enter Password" className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} name="password" value={user.password} onChange={this.handleChange} />
                                {submitted && !user.password &&
                                    <div className="text-danger">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Register</button>
                             </div>
                            <div className="text-center">
                                <Link to="/" className="btn btn-link">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;