// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    input: '',
  }

  userInput = event => {
    this.setState({input: event.target.value})
  }

  clickingArrow = text => {
    this.setState({input: text})
  }

  render() {
    const {suggestionsList} = this.props
    const {input} = this.state

    const filteredList = suggestionsList.filter(eachsearch =>
      eachsearch.suggestion.includes(input),
    )

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img-size"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                className="input-el"
                placeholder="Search Google"
                type="search"
                onChange={this.userInput}
                value={input}
              />
            </div>
            <ul className="ul-list1">
              {filteredList.map(eachsearch => (
                <SuggestionItem
                  searchItem={eachsearch}
                  key={eachsearch.id}
                  arrowFunction={this.clickingArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
