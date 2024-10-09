
 import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
// import LogoBlue from "../../assets/images/logo_blue.svg";
// import LogoWhite from "../../assets/images/logo_white.svg";
import logo from '../../assets/images/logo.png'
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import { adminNavigation, staffNavigation } from "./navigation"; // Import navigation data
import "./Sidebar.scss";

const Sidebar = ({ userRole }) => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // Determine the correct navigation based on user role
  const navigation = userRole === "staff" ? staffNavigation : adminNavigation;
  // const navigation = userRole === "admin" ? adminNavigation : staffNavigation;


  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? logo : logo} style={{ width: "30px" }} alt="Logo" />
          <span className="sidebar-brand-text">Msajili Wa Hazina</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            {navigation.map((item, index) => (
              <li className="menu-item" key={index}>
                <Link to={item.path} className="menu-link">
                  <span className="menu-link-icon">{item.icon}</span>
                  <span className="menu-link-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
