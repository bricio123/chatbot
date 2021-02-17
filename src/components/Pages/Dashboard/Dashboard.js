import React from "react";
import {Link} from 'react-router-dom';
export default function Dashboard() {
  return (
    <div>
      <Link to="/App">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
