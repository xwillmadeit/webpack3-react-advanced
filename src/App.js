import React from 'react'
import './scss/app.scss'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="this is cool" />
        <Test1 />
        <Test2 />
      </div>
    )
  }
}

export default App
