import { Route, Router } from "brouther";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home.view";
import Linktree from "./pages/linktree.view";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router notFound={() => <div>Not Found</div>}>
        <Route exact path="/" component={Home} />
        <Route path="/linktree" component={Linktree} />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
