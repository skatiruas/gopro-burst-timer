import React from 'react';
import { Button } from 'react-toolbox';
import styles from './CORS.css';

const id = 'nlfbmbojpeacfghkpbjhddihlkkiljbi'
const href = `https://chrome.google.com/webstore/detail/${id}`

export default class CORS extends React.Component {
  componentDidMount() {
    let img = new Image();
    img.onerror = () => this.props.set(false)
    img.onload = () => this.props.set(true)
    img.src = `chrome-extension://${id}/images/on.png`
  }

  render() {
    if (this.props.present === undefined) return null
    return !this.props.present && (
      <div className={styles.holder}>
        <div>
          When running in a browser this app needs to allow Cross-Origin Resource Sharing (CORS)
        </div>
        <Button icon='file_download' raised label="Install Extension" href={href} target='_blank'/>
      </div>
    )
  }
}
