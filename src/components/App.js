import React from 'react'
import '../scss/main.scss'
import qrcode from '../images/qrcode.jpg'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello there!!!</h2>
        <img src={qrcode} alt="" />
      </div>
    )
  }
}

export default App
