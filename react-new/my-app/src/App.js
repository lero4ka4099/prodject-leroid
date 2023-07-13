import './App.css';
import HeaderMenu from "./components/HeaderMenu";
import Form from "./components/Form";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
    <h1>Hello World!</h1>
      <HeaderMenu/>
      <div>
        <Form/>
      </div>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
