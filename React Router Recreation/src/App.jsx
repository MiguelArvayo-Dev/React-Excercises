import "./App.css";
import { lazy, Suspense } from "react";
import { EVENTS } from "./assets/const";
import { HomePage } from "./pages/Home";
//import { AboutPage } from "./pages/About";
import { Router } from "./Router";
import { Search } from "./pages/Search";
import { Route } from "./Route";

const LazyAboutPage = lazy(() => import("./pages/About.jsx"));

const routes = [{ path: "/search/:query", component: Search }];

function App() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Router routes={routes}>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
