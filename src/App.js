import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	};
  }

  render() {
  return (
    <div className="App">
      	<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={SignUp} />
				</Switch>
    </div>
  );
}
}

export default App;