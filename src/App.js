import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import GoPro from 'gopro-js';
import CORS from './CORS';
import { ProgressBar } from 'react-toolbox'

const personal = { href: "https://skatiruas.github.io/", title: 'Tiago Ruas' }
const project = { href: "https://github.com/skatiruas/gopro-js", title: 'gopro-js' }
const link = ({ href, title }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>{title}</a>
)

class App extends React.Component {
  state = { cors: undefined }

  componentDidUpdate() {
    if (this.state.cors) this.connect()
  }

  connect = () => {
    if (this.state.gopro) return
    (new GoPro()).discover().then(gopro => {
      this.setState({ model: gopro.lastResult.model, gopro })
    }).catch(this.connect)
  }

  message = () => (
    this.state.gopro ? `Connected to ${this.state.model}` : 'Waiting for GoPro'
  )

  render() {
    const { cors } = this.state
    return (
      <div className={styles.holder}>
        <div className={styles.logoHolder}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div className={styles.links}>
            Created by {link(personal)} using {link(project)}
          </div>
          <div className={styles.content}>
            {cors === undefined && <ProgressBar type='circular' mode='indeterminate' />}
            <CORS present={cors} set={cors => this.setState({ cors })} />
            {cors && this.message()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
