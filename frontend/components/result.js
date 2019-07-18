import React, { Component } from 'react';

import { BeatLoader } from 'react-spinners';

class Result extends Component {
    state = {
        data: {},
        type: {
            e: true,
            s: true,
            t: true,
            j: true
        },
        loading: true
    }

    componentDidMount() {
        let data = this.props.location.state.data;

        this.setState(
            { data }, 
            () => this.checkScore()
        );
    }

    checkScore = () => {
        const { ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10 } = this.state.data;

        let score = { 
            e: 0, 
            s: 0, 
            t: 0, 
            j: 0 
        }

        ans1 > 4 ? score.e -= 1 : score.e += 1;
        ans2 > 4 ? score.s += 1 : score.s -= 1;
        ans3 > 4 ? score.t -= 1 : score.t += 1;
        ans4 > 4 ? score.e += 1 : score.e -= 1
        ans5 > 4 ? score.s -= 1 : score.s += 1;
        ans6 > 4 ? score.j -= 1 : score.j += 1;
        ans7 > 4 ? score.t += 1 : score.t -= 1;
        ans8 > 4 ? score.j += 1 : score.j -= 1;
        ans9 > 4 ? score.e += 1 : score.e -= 1;
        ans10 > 4 ? score.j -= 1 : score.j += 1;

        this.checkType(score)
    }

    checkType = (score) => {
        let type = {
            e: true,
            s: true,
            t: true,
            j: true
        }

        score.e >= 0 ? type.e = true : type.e = false;
        score.s >= 0 ? type.s = true : type.s = false
        score.t >= 0 ? type.t = true : type.t = false
        score.j >= 0 ? type.j = true : type.j = false

        this.setState({ type })
        this.setState({ type, loading: false })
    }

    render() { 
        if (this.state.loading) {
            const override = `
                display: block;
                margin: 0 auto;
                border-color: red;
            `;
            debugger
            return (
                <div className="loader-container">
                    <BeatLoader
                    css={ override}
                    sizeUnit={"px"}
                    size={40}
                    color={'#435DF8'}
                    loading={this.state.loading}
                    />
                </div>
            )
        } else {
            const { e, s, t, j } = this.state.type;
            let type = '';

            e ? type += 'E' : type += 'I';
            s ? type += 'S' : type += 'N';
            t ? type += 'T' : type += 'F';
            j ? type += 'J' : type += 'P';

            return ( 
                <div className="result-container">
                    <div className="result-section">
                        <div className="result-header">Your Perspective</div>
                        <div className="result-subheader">Your Perspetive Type is {type}</div>
                        <div>
                            <a href={`https://www.truity.com/personality-type/${type}`}>Click here to learn more about your type!</a>
                        </div>
                    </div>

                    <div className="result-chart">
                        <div className="chart-type">

                            <div className="chart-subtype">
                                <div className="type-a">
                                    <span>Introversion (I)</span>
                                </div>
                                <div className="chart-bar">
                                    <div className={e ? 'inactive-bar' : 'active-bar'}></div>
                                    <div className={e ? 'active-bar' : 'inactive-bar'}></div>
                                </div>
                                <div className="type-b">
                                    <span>Extraversion (E)</span>
                                </div>
                            </div>

                            <div className="chart-subtype">
                                <div className="type-a">
                                    <span>Sensing (S)</span>
                                </div>
                                <div className="chart-bar">
                                    <div className={s ? 'active-bar' : 'inactive-bar'}></div>
                                    <div className={s ? 'inactive-bar' : 'active-bar'}></div>
                                </div>
                                <div className="type-b">
                                    <span>Intuition (N)</span>
                                </div>
                            </div>

                            <div className="chart-subtype">
                                <div className="type-a">
                                    <span>Thinking (T)</span>
                                </div>
                                <div className="chart-bar">
                                    <div className={t ? 'active-bar' : 'inactive-bar'}></div>
                                    <div className={t ? 'inactive-bar' : 'active-bar'}></div>
                                </div>
                                <div className="type-b">
                                    <span>Feeling (F)</span>
                                </div>
                            </div>

                            <div className="chart-subtype">
                                <div className="type-a">
                                    <span>Judging (J)</span>
                                </div>
                                <div className="chart-bar">
                                    <div className={j ? 'active-bar' : 'inactive-bar'}></div>
                                    <div className={j ? 'inactive-bar' : 'active-bar'}></div>
                                </div>
                                <div className="type-b">
                                    <span>Perceiving (P)</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }
}
 
export default Result;