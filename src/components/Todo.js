const Todo = (prop) => {
  const deleteHandler = () => {
    console.log('Clicked!!');
    console.log(prop.text);
  };
  return (
    <div className='card'>
      <h2>{prop.text}</h2>
      <button className='btn' onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
