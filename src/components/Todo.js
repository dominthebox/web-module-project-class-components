import React from 'react';

const ToDo = (props) => {
    return(
        <div>
            <p>
                {props.todo.task}
            </p>
        </div>
    )
}

export default ToDo