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
// arrow function là cách định nghĩa nhanh một function, Tức là thực thi arrow function trước khi thực thi các hàm trong arrow function
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