const Modal = (prop) => {
  const cancelHandler = () => {
    prop.onCancel();
  };
  const confirmHandler = () => {
    prop.onConfirm();
  };
  return (
    <div className='modal'>
      <p>Are you Sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
