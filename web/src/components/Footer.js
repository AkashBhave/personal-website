import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import "@fortawesome/fontawesome-free/css/all.css";
import Logo from "~images/logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      commit: latestCommit {
        sha
        url: html_url
      }
    }
  `);

  const getCopyrightDate = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2019;

    if (currentYear === startYear) {
      return currentYear;
    } else {
      return startYear + "-" + currentYear;
    }
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="flex flex-col text-center mb-4">
          <img id="footer-logo" className={styles.logo} src={Logo} alt="Logo" />
          <div className="py-2 text-lg">
            <span>Copyright </span>
            <i className="far fa-copyright"></i>
            <span> {getCopyrightDate()} </span>
            <span className="font-bold">Akash Bhave. </span>
            <span>All rights reserved.</span>
          </div>
        </div>
        <div id="footer-links" className="flex flex-wrap text-left mb-4">
          <div className="md:w-1/3 w-full md:mb-0 mb-4">
            <h3 className="uppercase text-xl mb-1">Menu</h3>
            <ul className="text-lg">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full md:mb-0 mb-4">
            <h3 className="uppercase text-xl mb-1">Online</h3>
            <ul className="text-lg">
              <li>
                <a href="https://github.com/AkashBhave">
                  <i className="fab fa-github fa-fw"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/AkashBhave">
                  <i className="fab fa-gitlab fa-fw"></i>
                  <span>GitLab</span>
                </a>
              </li>
              <li>
                <a href="https://keybase.io/akashbhave">
                  <i className="fab fa-keybase fa-fw"></i>
                  <span>Keybase</span>
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/4552814/akashbhave">
                  <i className="fab fa-stack-overflow fa-fw"></i>
                  <span>Stack Overflow</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full md:mb-0 mb-4">
            <h3 className="uppercase text-xl mb-1">Social</h3>
            <ul className="text-lg">
              <li>
                <a href="https://www.linkedin.com/in/akashbbhave/">
                  <i className="fab fa-linkedin fa-fw"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AkashBhave">
                  <i className="fab fa-twitter fa-fw"></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.strava.com/athletes/akashbhave">
                  <i className="fab fa-strava fa-fw"></i>
                  <span>Strava</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-2">
          <p className="text-lg">
            Made with
            <i className="fab fa-react text-green-200 ml-1"></i>,
            <i className="fas fa-coffee text-orange-300 ml-1"></i>, and most
            importantly,
            <i className="fas fa-heart text-red-400 ml-1"></i>
          </p>
        </div>
        <div className="text-center text-sm opacity-75">
          <a href="https://github.com/AkashBhave/personal-website">
            <i className="fas fa-code text-purple-200 mr-2"></i>
            <span>Source</span>
          </a>
          <span className="mx-2">|</span>
          <a href={data.commit.url}>
            <i className="fas fa-pen text-purple-200 mr-2"></i>
            <span>Revision: </span>
            <span className="font-mono">{data.commit.sha}</span>
          </a>
          <span className="mx-2">|</span>
          <a href="https://github.com/AkashBhave/personal-website/commits/master">
            <i className="fas fa-file-alt text-purple-200 mr-2"></i>
            <span>Changelog</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
