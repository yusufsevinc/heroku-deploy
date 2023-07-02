import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewPage from "./pages/UserProfile";
import * as PropTypes from "prop-types";
import UserProfile from "./pages/UserProfile";

function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};

function App() {
  return (
      <Router>
        <Switch>
          {/* Diğer rotalar */}
          <Route path="/new" component={UserProfile} />
        </Switch>
      </Router>
  );
}

export default App;
