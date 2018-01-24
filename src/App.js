import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

const personal = { href: "https://skatiruas.github.io/", title: 'Tiago Ruas' }
const project = { href: "https://github.com/skatiruas/gopro-js", title: 'gopro-js' }
const link = ({ href, title }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>{title}</a>
)

const App = () => (
  <div className={styles.holder}>
    <div className={styles.logoHolder}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.links}>
        Created by {link(personal)} using {link(project)}
      </div>
    </div>
  </div>
)

export default App;
