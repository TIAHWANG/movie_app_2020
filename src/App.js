import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    render() {
        console.log("I am rendering");
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                {/* this.add(): immediately call function
                this.add: only when click button, call function */}
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
                {/* click button => setState 호출 => refresh state => render function 호출 with new state */}
            </div>
        );
    }
}

export default App;
