import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './stream/StreamList';
import StreamEdit from './stream/StreamEdit';
import StreamCreate from './stream/StreamCreate';
import StreamView from './stream/StreamView';
import StreamUpdate from './stream/StreamUpdate';
import StreamDelete from './stream/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Switch>
        <Router history={history}>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/view/:id" exact component={StreamView} />
          <Route path="/stream/update" exact component={StreamUpdate} />
          <Route path="/stream/edit/:id" exact component={StreamEdit} />
          <Route path="/stream/delete/:id" exact component={StreamDelete} />
        </Router>
      </Switch>
    </div>
  );
};

export default App;
