import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./stream/StreamList";
import StreamEdit from "./stream/StreamEdit";
import StreamCreate from "./stream/StreamCreate";
import StreamWatch from "./stream/StreamWatch";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/edit" exact component={StreamEdit} />
        <Route path="/stream/create" exact component={StreamCreate} />
        <Route path="/stream/watch" exact component={StreamWatch} />
      </BrowserRouter>
    </div>
  );
};

export default App;
