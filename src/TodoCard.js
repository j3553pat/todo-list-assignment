import React from 'react';


function TodoCard(props) {
  const {title, clickToDelete, index} = props;

  return (
    <li style={{backgroundColor: 'beige'}} className="listItem">
      {title}
      <button style={{display: 'flex'}}onClick={() => {clickToDelete(index)}} className="deleteBtn">X</button>
      <hr />
    </li>
  )
}

export default TodoCard;