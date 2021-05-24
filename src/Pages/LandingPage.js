import { Card } from "../Components/Card";
import { Section } from "../Components/Section";
import cards from "../card.json";
export function LandingPage() {
  return (
    <div>
      <Section />
      <div className="grid_container">
        {cards.map((card) => (
          <Card key={card.id} url={card.url} img={card.urlImg} title={card.title} />
        ))}
      </div>
    </div>
  );
}
