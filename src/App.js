import Todo from './components/Todo';
const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Make Applications' />
    </div>
  );
};
export default App;
