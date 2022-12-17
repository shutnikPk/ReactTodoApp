import React from 'react';

import PropTypes from 'prop-types';

import TodoCard from '../TodoCard/TodoCard';

function TodoCardsList({ todoItems, onDelete }) {


    if (!todoItems.length) {

        return <p>No Tasks Yet</p>;
    }
    return (
        < div className="todos-container" >
            {
                todoItems.map((e) => (
                    <TodoCard
                        key={e.id}
                        todo={e}
                        onDelete={onDelete}
                    />
                ))
            }
        </div>
    );

}

TodoCardsList.propTypes = {
    todoItems: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TodoCardsList;
