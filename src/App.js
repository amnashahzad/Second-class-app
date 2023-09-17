import logo from './logo.svg';
import './App.css';
import Button from './Component/Button/Button';
// import Contact from './containers/Contact';
import Contact from './containers/contact';

function App() {
  return (
    <div className="App">
     <Button title="New Button"/>
     <h1>New React App</h1>
     <Button title="Click Me"/>
     <Contact title="Click Me"/>
    </div>
  );
}

export default App;
