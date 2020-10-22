import React from 'react';
import {Todo} from './Todo';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import axios from 'axios';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todoList:[]}
    }

    componentDidMount() {
    	axios.get('http://localhost:8080/api/allTask'
    	,{ headers: { authorization:localStorage.getItem("token") } })
        .then(response =>{
            this.setState({todoList: response.data});
        })
        .catch(error=>{
            console.log(error)
        })
    };
  	


    render() {
        const todoList = this.state.todoList.map((todo, i) => {
            return (
                <GridListTile key={i}>
                    <Todo key={i} text={todo.description} name={todo.responsable.name} status={todo.status} dueDate={todo.dueDate}/>
                </GridListTile>
            );
        });

        return (
            <div className="root">
                <GridList cellHeight={160} className="gridList" cols={3}>
                {todoList}
                </GridList>
            </div>
        );


    }

}