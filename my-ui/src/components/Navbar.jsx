import "./Navbar.css";

function Navbar() {

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className = "Main-conatiner">
    <nav
      className="navbar-container"
     >
      {/* LOGO */}
      <div className="port-logo">
        <img src = "https://www.thepixelfreak.co.uk/wp-content/uploads/2020/01/Lion-Head-Logo-Design.jpg" alt = "Portfolio Logo" />
        <p className ="port-color">Portfolio</p>
      </div>
      {/* NAVIGATION */}
      <ul className="nav-links">
        {navItems.map((item) => (
          <li
            key={item.name} 
          >
            <a href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;