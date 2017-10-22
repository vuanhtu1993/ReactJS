function EventOut(name) {
    alert(name);
}

class ButtonAlert extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => EventOut(this.props.children)}>Click me</button>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

class Scuti extends React.Component {
    // STATE
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            member: 10,
        };
    }
    // adjust STATE
    changeState() {
        this.setState({
           member: this.state.member + 1,
        });

    };
    // arrow function again
    render() {
        return (
            <div>
                {this.state.member}
                <button onClick={() => this.changeState()}> Add member</button>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// arrow function là cách định nghĩa nhanh một function, Tức là thực thi arrow function trước khi thực thi các hàm trong arrow function
ReactDOM.render(
    <h1 className="renderFirst"> Web Developer </h1>,
    document.getElementById("root")
);

ReactDOM.render(
    <div>
        <ButtonAlert>EventOut Function </ButtonAlert>
        <Scuti> </Scuti>
    </div>,
    document.getElementById('content'),
);