/** @jsxImportSource @emotion/react */

import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bodyCss, mainContainerCss } from "./App.styles";
import Browse from "./Routes/Browse";
import Favorites from "./Routes/Favorites";
import Details from "./Routes/Details";
import { MyMooProvider } from "./Context/MyMooContext";

function App() {
  return (
    <Router>
      <MyMooProvider>
        <div css={bodyCss}>
          <div css={mainContainerCss}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Browse} />
              <Route exact path="/m/:movieId" component={Details} />
              <Route exact path="/mymoos" component={Favorites} />
            </Switch>
          </div>
        </div>
      </MyMooProvider>
    </Router>
  );
}

export default App;
