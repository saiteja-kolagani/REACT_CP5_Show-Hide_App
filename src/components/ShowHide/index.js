// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}

  showFirstNameFnc = () => {
    this.setState(prevState => ({showFirstname: !prevState.showFirstname}))
  }

  showLastNameFnc = () => {
    this.setState(prevState => ({showLastname: !prevState.showLastname}))
  }

  render() {
    const {showFirstname, showLastname} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="sub-content-container">
            <div className="card1">
              <button
                className="button"
                type="button"
                onClick={this.showFirstNameFnc}
              >
                Show/Hide Firstname
              </button>
              {showFirstname && (
                <div className="sub-card">
                  <p className="name">Joe</p>
                </div>
              )}
            </div>
            <div className="card">
              <button
                className="button"
                type="button"
                onClick={this.showLastNameFnc}
              >
                Show/Hide Lastname
              </button>
              {showLastname && (
                <div className="sub-card">
                  <p className="name">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
