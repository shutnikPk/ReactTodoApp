import React, {
    useState
} from 'react';

import PropTypes from 'prop-types';

import TodoCard from '../TodoCard/TodoCard';
import AddForm from '../AddForm/AddForm';

function TodoCardsList({ editTodo, todoItems, onDelete, editTaskId, setEditTaskId, canEdit }) {

    if (!todoItems.length) {

        return (
            <p>No Tasks Yet</p>
        );
    }

    return (
        < div className="todos-container" >
            {
                todoItems.map((e) => {

                    if (editTaskId && editTaskId === e.id) {
                        return (
                            <AddForm
                                key={e.id}
                                toggleFormVisability={() => setEditTaskId(null)}
                                callback={editTodo}
                                todoItem={e}
                            />
                        );
                    }

                    return (
                        <TodoCard
                            canEdit={canEdit}
                            key={e.id}
                            todo={e}
                            onDelete={onDelete}
                            setEditTaskId={setEditTaskId}
                            editTaskId={editTaskId}
                        />
                    );
                })
            }
        </div>
    );

}

TodoCardsList.propTypes = {
    todoItems: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
};

export default TodoCardsList;
