import './App.css'
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Greeting />
      <Profile />
      <Button text="Click Me" />
      <Button text="Submit" />
      <Button text="Learn More" />
    </div>
  );
}

export default App;
