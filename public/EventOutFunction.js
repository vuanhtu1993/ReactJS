function EventOut(name) {
    alert(name);
}

class ButtonAlert extends React.Component {
    getInfo(param){
       alert(param)
    }
    render(){
        return(
            <div>
                <button onClick={() => EventOut(this.props.children)}>Click me</button><br/>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <h1 className="renderFirst"> Web Developer </h1>,
    document.getElementById("root")
);

ReactDOM.render(
    <div>
        <ButtonAlert>EventOut Function </ButtonAlert>
    </div>,

    document.getElementById('content'),
);