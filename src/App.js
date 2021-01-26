import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage";

import PrivateRoute from "./components/privateRoute";
import AdminPanelDashboard from "./pages/adminPanelDashboard";
import InfluencerProfileComponent from "./components/influencerProfileComponent";
function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <PrivateRoute path="/adminPanel" exact component={AdminPanelDashboard} />
      <PrivateRoute
        path="/influencerprofile/:influencerName"
        exact
        component={InfluencerProfileComponent}
      />
    </Router>
  );
}

export default App;
