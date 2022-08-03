import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FindPoints from './components/FindPoints';
import FindRating from './components/FindRating';
import Navigate from './components/Navigate';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <div></div>

        <h1>Arena Points Calculator</h1>

        <Navigate />

        <div className="routes-container">
          <Routes>
            <Route index element={<FindPoints />} />
            <Route path="/" element={<FindPoints />} />
            <Route path="/findrating" element={<FindRating />} />
            <Route path="*" element={<FindPoints />} />
          </Routes>
        </div>

        <div></div>
      </HashRouter>
    </>
  );
};

export default App;
