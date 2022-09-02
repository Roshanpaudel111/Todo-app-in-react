import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
const Todo = (prop) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='card'>
      <h2>{prop.text}</h2>
      <button className='btn' onClick={deleteHandler}>
        Delete
      </button>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
