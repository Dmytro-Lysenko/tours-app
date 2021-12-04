import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
