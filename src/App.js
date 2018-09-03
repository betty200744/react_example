import React, { Component } from 'react';
import './App.css';

class Simple extends Component {
  constructor (props) {
    super(props);
    this.age = 0;
  }

  render() {
    return (
      <div>
        Hello {this.props.name} , I'am {this.props.age} old
      </div>
    );
  }
}

function Conditional(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
      return (
        <h1>welcome !</h1>
      );
  }
  return (
    <h1>please sign up!</h1>
  );
}

class Stateful extends Component {
  constructor (props) {
    super(props); // Component父类的props, 可直接this.props ， 当有自定义属性时， 先 super(props), 之后调用this
    this.state = {seconds: 0}
  }

  tick () {
    this.setState (prevState => {
      return {seconds: prevState.seconds + 1}
    })
  }

  componentDidMount () { // 1s调一次tick方法， 设一次时间
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        Seconds: { this.state.seconds }
      </div>
    );
  }
}

class TodoList extends Component {
  render () {
    return (
      <ul>
        {this.props.items.map(item => {
          return (
            <li key={item.id}>
              {item.text}
            </li>
          )
        })}
      </ul>
    )
  }
}

class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.state = {items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) { // input 设置 state
    this.setState({text: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault();
    const newItem = { // submit 取state
      id: Date.now(),
      text: this.state.text,
    };
    this.setState(prevState => ({
      items: prevState.items.concat (newItem),
      text:''
    }))
  }

  render () {
    return (
      <div>
        <h3>TODO APP</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What should to be done?
          </label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>

      </div>
    )
  }
}

// class MarkdownEditor extends Component {
//   constructor (props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {value: 'Hello **world**!'};
//   }
//
//   handleChange (e) {
//     this.setState({value: e.target.value})
//   }
//
//   render () {
//     return (
//       <div className="MarkdownEditor">
//         <h3>Input</h3>
//         <label htmlFor="MarkdownEditor">Enter some markdown</label>
//         <textarea id="markdown-content" onChange={this.handleChange} defaultValue={this.state.value}/>
//         <h3>Output</h3>
//         <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}/>
//       </div>
//     )
//   }
// }

function NumberLists(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => <li key={index.toString()}> {number} </li>);
  return (
    <ul>{listItems}</ul>
  )
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }


  handelSubmit (e) {
    alert('has submit');
    e.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Essay
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          favorite food:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="apple">Apple</option>
            <option value="sugar apple">Sugar Apple</option>
            <option value="kiwi">Kiwi</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

class MouseTracker extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x: 0, y: 0};
  }

  handleMouseMove (e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render () {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Simple name="betty" age="12"/>
        <Stateful/>
        <TodoApp/>
        <Conditional isLoggedIn={false}/>
        <NumberLists numbers = {[1, 2, 3]}/>
        <NameForm/>
        <MouseTracker/>
      </div>
    )
  }
}

// export single
export default App

// export multi
// export {
//   Simple,
// }