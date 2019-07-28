import React, { Component, fragment } from 'react';

class TodoList extends Component{
    render() {
        return (
            <fragment>
                <input />
                <ul>
                    <li>learn React</li>
                    <li>learn Component</li>
                </ul>
            </fragment>
        )
    }
}

export default TodoList;