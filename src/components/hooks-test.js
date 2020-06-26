import React from "react"

 class Hook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "gabriel", age:0}
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                />
                <p>Age : {this.state.age}</p>
                <button onClick={() => this.setState({age: this.state.age +1})}>
                    Augmenter Age
                </button>
                <p>State: {this.state.name}, {this.state.age}</p>
            </div>
    )
    }

 }

 export default Hook;













