import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from '../components/Home'
import Todo from '../components/Todo'
import TodoServer from '../components/TodoServer'
import TableSpan from '../components/TableSpan'
import TodoEdit from '../components/TodoEdit'
import TodoEditServer from '../components/TodoEditServer'

function BasicExample() {
  return (
    <Router>
      <div>

        <Navbar/>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={TableSpan} />
        {/* <Route exact path="/todo" component={Todo} /> */}
        <Route exact path="/todo" component={TodoServer} />
        {/* <Route exact path="/todo/:todoId" component={TodoEdit} /> */}
        <Route exact path="/todo/:todoId" component={TodoEditServer} />
      </div>
    </Router>
  );
}


function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;