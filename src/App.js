import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! This is a test for the CI/CD pipeline with Github Actions.
        </p>
        <h1> Backend URL: {process.env.BACKEND_URL}</h1>
      </header>
    </div>
  );
}

export default App;
