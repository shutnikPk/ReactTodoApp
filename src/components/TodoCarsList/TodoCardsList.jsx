import React, {
    useState
} from 'react';

import PropTypes from 'prop-types';

import TodoCard from '../TodoCard/TodoCard';
import AddForm from '../AddForm/AddForm';

function TodoCardsList({ editTodo, todoItems, onDelete }) {

    const [editTaskId, setEditTaskId] = useState(false);

    if (!todoItems.length) {

        return (
            <p>No Tasks Yet</p>
        );
    }

    return (

        < div className="todos-container" >
            {
                todoItems.map((e) => {

                    if (editTaskId === e.id) {
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
                            editTodo={editTodo}
                            key={e.id}
                            todo={e}
                            onDelete={onDelete}
                            setEditTaskId={setEditTaskId}
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
