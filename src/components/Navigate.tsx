import React from 'react';
import { Link } from 'react-router-dom';

import './Navigate.css';

const Navigate: React.FC = () => {
  return (
    <>
      <p>
        <Link to="/">Find Points</Link>
        <Link to="/findrating">Find Rating</Link>
      </p>
    </>
  );
};

export default Navigate;
