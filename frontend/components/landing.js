import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Landing extends Component {
    state = { 
        email: '',
        errors: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.setState({ errors: [] })
    }

    handleChange = (e) => {
        let a = this.state;
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.createUser();
    }

    createUser = () => {
        const email = this.state.email;
        const payload = Object.assign({}, {email});

        const errors = this.validate(email);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }

        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            }).then(response => {
                return response.json()
                })
            .then(json => {
                const user_id = json.id;
                const stateData = Object.assign({}, this.state);
                const submission = {...stateData, ...{user_id}};

                this.createSubmission(submission)
            }).catch(err => {
                console.log(err)
            })
    }

    createSubmission = (submission) => {
        fetch('/api/submissions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submission)
            }).then(response => {
                return response.json()
                })
            .then(json => {
                const props = this.props;
                props.history.push({
                    pathname: '/Result',
                    state: { data: json }
                })
            }).catch(err => {
                console.log(err)
            })
    }

    validate = (email) => {
        var regex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
            if (regex.test(email)) {
                return true;
            } else if (email == '' || !regex.test(email)) {
                return false;
            }
    }

    render() {
        const { errors } = this.state;

        return ( 
            <div className="landing-container">
                <div className="form-header">
                    <h3 className="header-title">Discover Your Perspective</h3>
                    <h4 className="header-body">Complete the 7 min test and get a detailed report of your lenses on the world.</h4>

                </div>

                <div className="form-section">
                    <form className="main-form" onSubmit={this.handleSubmit}>

                    <div className="question">
                        <h5>You find it takes effort to introduce yourself to other people.</h5>
                        <div className="choices">
                            <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='1' checked={this.state.ans1 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='2' checked={this.state.ans1 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='3' checked={this.state.ans1 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='4' checked={this.state.ans1 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='5' checked={this.state.ans1 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='6' checked={this.state.ans1 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans1" value='7' checked={this.state.ans1 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>You consider yourself more practical than creative.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='1' checked={this.state.ans2 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='2' checked={this.state.ans2 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='3' checked={this.state.ans2 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='4' checked={this.state.ans2 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='5' checked={this.state.ans2 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='6' checked={this.state.ans2 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans2" value='7' checked={this.state.ans2 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>Winning a debate matters less to you than making sure no one gets upset.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='1' checked={this.state.ans3 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='2' checked={this.state.ans3 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='3' checked={this.state.ans3 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='4' checked={this.state.ans3 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='5' checked={this.state.ans3 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='6' checked={this.state.ans3 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans3" value='7' checked={this.state.ans3 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>You get energized going to social events that involve many interactions.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='1' checked={this.state.ans4 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='2' checked={this.state.ans4 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='3' checked={this.state.ans4 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='4' checked={this.state.ans4 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='5' checked={this.state.ans4 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='6' checked={this.state.ans4 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans4" value='7' checked={this.state.ans4 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>You often spend time exploring unrealistic and impractical yet intriguing ideas.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='1' checked={this.state.ans5 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='2' checked={this.state.ans5 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='3' checked={this.state.ans5 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='4' checked={this.state.ans5 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='5' checked={this.state.ans5 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='6' checked={this.state.ans5 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans5" value='7' checked={this.state.ans5 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>Deadlines seem to you to be of relative rather than absolute importance.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='1' checked={this.state.ans6 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='2' checked={this.state.ans6 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='3' checked={this.state.ans6 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='4' checked={this.state.ans6 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='5' checked={this.state.ans6 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='6' checked={this.state.ans6 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans6" value='7' checked={this.state.ans6 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>Logic is usually more important than heart when it comes to making important decisions.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='1' checked={this.state.ans7 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='2' checked={this.state.ans7 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='3' checked={this.state.ans7 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='4' checked={this.state.ans7 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='5' checked={this.state.ans7 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='6' checked={this.state.ans7 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans7" value='7' checked={this.state.ans7 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>Your home and work environments are quite tidy.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='1' checked={this.state.ans8 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='2' checked={this.state.ans8 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='3' checked={this.state.ans8 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='4' checked={this.state.ans8 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='5' checked={this.state.ans8 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='6' checked={this.state.ans8 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans8" value='7' checked={this.state.ans8 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>You do not mind being at the center of attention.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='1' checked={this.state.ans9 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='2' checked={this.state.ans9 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='3' checked={this.state.ans9 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='4' checked={this.state.ans9 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='5' checked={this.state.ans9 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='6' checked={this.state.ans9 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans9" value='7' checked={this.state.ans9 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>Keeping your options open is more important than having a to-do list.</h5>
                        <div className="choices">
                        <span className="disagree">Disagree</span>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='1' checked={this.state.ans10 === '1'} required/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='2' checked={this.state.ans10 === '2'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='3' checked={this.state.ans10 === '3'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='4' checked={this.state.ans10 === '4'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='5' checked={this.state.ans10 === '5'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='6' checked={this.state.ans10 === '6'}/><label></label>
                            <input onChange={this.handleChange} type="radio" name="ans10" value='7' checked={this.state.ans10 === '7'}/><label></label>
                            <span className="agree">Agree</span>
                        </div>
                    </div>

                    <div className="question">
                        <h5>Your Email</h5>
                        <input onChange={this.handleChange} type="email" name="email" placeholder="you@example.com" value={this.state.email} required /><br />
                    </div>

                    <div className="submit-button">
                        <div className="host_form_errors">
                            {errors.map(error => (
                                <p key={error}>&#10060; {error}</p>
                            ))}
                        </div>
                        <button type="submit">Save & Continue</button>
                    </div>
                    </form>

                    <div className="errors-container">
                        <div className="errors-main">
                                <h1 className={this.state.ans1 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 1</h1>
                                <h1 className={this.state.ans2 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 2</h1>
                                <h1 className={this.state.ans3 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 3</h1>
                                <h1 className={this.state.ans4 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 4</h1>
                                <h1 className={this.state.ans5 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 5</h1>
                                <h1 className={this.state.ans6 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 6</h1>
                                <h1 className={this.state.ans7 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 7</h1>
                                <h1 className={this.state.ans8 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 8</h1>
                                <h1 className={this.state.ans9 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 9</h1>
                                <h1 className={this.state.ans10 === undefined ? 'invalid' : 'valid'}>Choose an option for Question 10</h1>
                                <h1 className={this.validate(this.state.email) ? 'valid' : 'invalid'}>Valid email address must be entered</h1>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default withRouter(Landing);