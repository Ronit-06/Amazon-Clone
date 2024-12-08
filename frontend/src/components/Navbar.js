import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="Header">
        <Link to="/">
          <img
            src="/assets/amazon-logo-s3f.png"
            alt="pic"
            class="headerimage"
          ></img>
        </Link>

        <div className="search-bar">
          <select className="category-dropdown">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="Search Amazon.ae"
          />
          <button className="search-button">
            <span role="img" aria-label="search-icon">
              🔍
            </span>
          </button>
        </div>

        <div className="cart-button">
          <Link to="/cart">
            <img src="/assets/cart_logo.jpeg" alt="pic" class="cartimage"></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
