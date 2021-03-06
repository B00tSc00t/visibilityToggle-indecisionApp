const { default: jsx } = require("babel-plugin-syntax-jsx");

console.log('App.js is running!');

// JSX - JavaScript XLM
const app = {
	title: 'Indecision App',
	subtitle: 'This is a subtitle',
	options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  render();
  };
};

const removeAllButton = () => {
  app.options = [];
  render();
};

const onMakeDescision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled = {app.options.length === 0}onClick={onMakeDescision}>What should I do?</button>
        <button onClick = {removeAllButton}>Remove All</button>
           <ol>
            {
              app.options.map((option) => <li key={option}>{option}</li>)
            }
           </ol>
           <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
           </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

render();