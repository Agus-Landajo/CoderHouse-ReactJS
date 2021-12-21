import "./App.css";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <div className="App">
      <div className="App-header"></div>
      <Header/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
