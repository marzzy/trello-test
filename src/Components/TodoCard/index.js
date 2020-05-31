import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UneditableCard from './UneditableCard'; 
import EditableCard from './EditableCard'; 

function TodoCard({cardId}) {
    const cardData = useSelector(state => state.todos.find(item => item.key === cardId));
    const [isEditable, setIsEditableValue] = useState(false);
    const Component = isEditable ? EditableCard : UneditableCard;

    if (cardData) {
        const { key, title, description } = cardData;

        return (
            <Component
                todoId={key}
                title={title}
                description={description}
                setIsEditableValue={setIsEditableValue}
            />
        )
    }
    return null
}

export default TodoCard;
