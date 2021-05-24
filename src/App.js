import "./App.css";
import { Footer } from "./Components/Footer";
import { LandingPage } from "./Pages/LandingPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Transparencia } from "./Pages/Transparencia";
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/transparencia">
            <Transparencia />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
