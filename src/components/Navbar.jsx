import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex align-items-center">
      <span className="navbar-brand fw-bold mb-0">Pizzería Mamma Mia!</span>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-light btn-sm">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}
      </div>
      <button className="btn btn-outline-info btn-sm ms-auto">
        🛒 Total: ${formatPrice(total)}
      </button>
    </nav>
  );
};

export default Navbar;
