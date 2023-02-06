import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onEnteringData = event => {
    this.setState({searchInput: event.target.value})
  }

  selectedSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const finalSuggestionList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="suggestions-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="input-bar"
              placeholder="Search Google"
              onChange={this.onEnteringData}
              value={searchInput}
            />
          </div>
          <div className="search-items-container">
            <ul className="list-container">
              {finalSuggestionList.map(each => (
                <SuggestionItem
                  suggestionsList={each}
                  key={each.id}
                  selectedSuggestion={this.selectedSuggestion}
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
