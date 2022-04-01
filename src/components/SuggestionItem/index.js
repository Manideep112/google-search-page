// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchItem, arrowFunction} = props
  const {suggestion} = searchItem

  const clickArrow = () => {
    arrowFunction(suggestion)
  }

  return (
    <li className="ul-list">
      <p className="paragraph">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="imgsize"
        onClick={clickArrow}
      />
    </li>
  )
}

export default SuggestionItem
