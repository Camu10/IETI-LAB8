import React from 'react';
import {Todo} from './Todo';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
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