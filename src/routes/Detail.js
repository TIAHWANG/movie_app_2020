import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const STATE = location.state;
            return (
                <div className="detail__container">
                    <img
                        src={STATE.poster}
                        alt={STATE.title}
                        title={STATE.title}
                    />
                    <div className="detail__data">
                        <h3 className="detail__title">{STATE.title}</h3>
                        <h5 className="detail__year">{STATE.year}</h5>
                        <ul className="detail__genres">
                            {STATE.genres.map((genre, index) => (
                                <li key={index} className="genres__genre">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <p className="detail__summary">{STATE.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
