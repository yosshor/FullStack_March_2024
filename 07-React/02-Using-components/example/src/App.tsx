import "./App.css";

//component
import Header from "./view/components/header/Header";
import Card from "./view/components/card/Card";

function App() {
 
  //render
  return (
    <div>
      <Header />
      <Card title={"Michael"} />
      <Card title={"Olga"}/>
      <Card title={"Maya"} />
      <Card title={"Orly"}/>
      <Card title={"Israel"}/>
  
    </div>

  );
}

export default App;
