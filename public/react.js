// Declare Component
function Component(props) {
    return (
        <div>
            Hello {props.name}
        </div>
    );
}

function TestRender() {
    return (
        <div>
            <Component name="Sara"/>
            <Component name="Cahal"/>
            <Component name="Edite"/>
        </div>
    );
}

function Sum(props) {
    return(
        <div>
            A + B = {props.result} <br/>
            {props.solution} <br/>
            {props.children}
        </div>
    );
}

function HandlingEvent() {
    function ActiveLink(e) {
        e.preventDefault();
        console.log('The link was click')
    }
    return(
        <div>
            <a href="#" onClick={ActiveLink}>Click on me</a>
        </div>
    );
}

class ButtonAlert extends React.Component {
    getInfo(){
        alert(this.props.children);
    }
    render(){
        return(
            <div>
                <button onClick={this.getInfo}>Click me </button> <br/>
                {this.props.children}
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <h1 className="renderFirst"> Web Developer </h1>,
    document.getElementById("root"));

ReactDOM.render(
    <div>
        <TestRender />
        <Sum result="10" solution="xyz">Children Props Test </Sum>
        Handling Event
        <HandlingEvent />
        Button Alert
        <ButtonAlert> You're clicked on Button </ButtonAlert>
        Toggle <br/>
        <Toggle />

    </div>,
    document.getElementById('content')
);