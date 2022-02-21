import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/mocopa_logo.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light has-text-black-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "25em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-light has-text-white-ter">
          <div className="container has-background-light has-text-black-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tutorial">
                        Getting Started
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Modules
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <a href="https://forms.gle/iUWQAYkSMFASBKnEA">Contact</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/shima2cgstudio">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
