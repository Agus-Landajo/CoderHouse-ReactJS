import "./App.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <Header/>
      <ItemListContainer texto="Este texto viene de un props que imprime el ItemListContainer"/>
    </div>
  );
}

export default App;
