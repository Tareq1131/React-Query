import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {ReactQueryDevtools} from 'react-query/devtools'
import HomePage from "./components/HomePage";
import { Link } from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroesPage";
import RQSuperHeroespage from "./components/RQSuperHeroesPage";
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroespage />} />
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen = {false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
