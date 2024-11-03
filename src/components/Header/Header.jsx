import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./Header.css";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* <h3 className="header__title">Isaiah Vickers</h3> */}
        <div className="header__logo">
          <img src="/logo.png" alt="" />
        </div>
        <nav className="header__nav">
          <a
            href="https://github.com/izzymadethat"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/isaiah-vickers"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:isaiah.vickers@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail />
          </a>
        </nav>
      </header>
    </>
  );
};
export default Header;
