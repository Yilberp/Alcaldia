import "./App.css";
import { Card } from "./Components/Card";
import { Section } from "./Components/Section";
import cards from "./card.json"
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div className="container">
      <Section/>
      <div className="grid_container">
        {
          cards.map(card =>
            <Card key={card.id} img={card.urlImg} title={card.title} />)
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
