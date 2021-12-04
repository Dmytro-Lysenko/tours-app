import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">All tours</Link>
          </li>
          <li>
            <Link to="/add-new-tour">Add New Tour</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
