import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, selectedSuggestion} = props
  const {suggestion} = suggestionsList
  const onSelectingSuggestion = () => {
    selectedSuggestion(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button
        type="button"
        className="suggestion-button"
        onClick={onSelectingSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="select-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
