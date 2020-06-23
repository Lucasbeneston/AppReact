import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <Fragment>
        <div>
            <h2>Je suis le component Nav</h2>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/post/:id">Post</Link>
            </li>
          </ul>
        </nav>
        </div>
        </Fragment>
    )
}
