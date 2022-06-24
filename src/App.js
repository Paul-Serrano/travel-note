import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "./data"

function App() {
    const cards = data.map(item => {
        return <Card
            key={item.key}
            item={item}
        />
    })
  return (
    <div className="App">
        <div className="app-container">
            <Nav />
            <div className="card-block">
                {cards}
            </div>
        </div>
    </div>
  );
}

export default App;
