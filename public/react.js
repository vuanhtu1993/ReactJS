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


ReactDOM.render(
    <h1 className="renderFirst"> Web Developer </h1>,
    document.getElementById("root"));

ReactDOM.render(
    <div>
        <TestRender/>
        <Sum result="10" solution="xyz">Children Props Test </Sum>
    </div>,
    document.getElementById('content')
);