import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import ContactPage from './screens/ContactPage';
import CommentPage from './screens/CommentPage';
import MyWorksPage from './screens/MyWorksPage';
import {Helmet} from "react-helmet";

function App() {
  return (
    
    <Router>
      <div className='App'>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/myworks">
          <MyWorksPage />
        </Route>
        <Route path="/comments">
          <CommentPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
