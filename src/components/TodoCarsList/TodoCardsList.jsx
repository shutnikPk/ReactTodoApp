import React from 'react';

import PropTypes from 'prop-types';

import TodoCard from '../TodoCard/TodoCard';
import AddForm from '../TodoForm/TodoForm';

function TodoCardsList({ onEdit, todoItems, onDelete, editTaskId, setEditTaskId, closeForm }) {

    if (!todoItems.length) {

        return (
            <p>No Tasks Yet</p>
        );
    }

    return (
        <div className="todos-container">
            {
                todoItems.map((e) => {

                    if (editTaskId === e.id) {
                        return (
                            <AddForm
                                key={e.id}
                                closeForm={() => setEditTaskId(null)}
                                onSubmit={onEdit}
                                todoItem={e}
                            />
                        );
                    }

                    return (
                        <TodoCard
                            key={e.id}
                            todo={e}
                            onDelete={onDelete}
                            setEditTaskId={setEditTaskId}
                            editTaskId={editTaskId}
                            closeForm={closeForm}
                        />
                    );
                })
            }
        </div>
    );

}

TodoCardsList.propTypes = {
    onEdit: PropTypes.func.isRequired,
    todoItems: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    editTaskId: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    setEditTaskId: PropTypes.func.isRequired,
};

export default TodoCardsList;
