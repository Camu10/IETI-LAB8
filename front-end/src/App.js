import React, {Component} from 'react';
import logo from './components/logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import {TodoApp} from "./components/TodoApp";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from './components/Login';
import Drawer from './components/Drawer';
import Cards from './components/Cards';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import NewTask from './components/NewTask';
import { Home } from "./components/Home";
import { UserProfile } from "./components/UserProfile";


class App extends Component {

    constructor(props) {
    	const LoginView = () => (<Login login={this.handleIsLogin}/>);
        const TodoAppView = () => (<Home />);
        super(props);
        this.state = {
        	LoginView: LoginView,
      		TodoAppView: TodoAppView,
            isLoggedIn: false  
        };
        this.handleIsLogin = this.handleIsLogin.bind(this);
    }

    handleIsLogin() {
        this.setState({
            isLoggedIn: true
        });
    }

    render() {
        const newTask = () => <NewTask />;
       	const userProfile = () => <UserProfile />
        

        var redirect;
        if(this.state.isLoggedIn === false && localStorage.getItem('isLoggedIn') === null){
            redirect = <Redirect to={"/"} />;
        }else{
            redirect = <Redirect to={"/todo"} />
        }
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <div>
                    	{}
                        <Route exact path="/" component={this.state.LoginView}/>
                        <Route path="/home" component={this.state.TodoAppView} />
                        <Route path="/newTask" component={newTask}/>
                        <Route path="/userProfile" component={userProfile}/>
                    </div>
                </div>
            </Router>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
