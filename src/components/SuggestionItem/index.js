import './index.css'
const SuggestionItem = props => {
  const {details, onArrow} = props
  const {suggestion} = details

  const clickArrow = () => {
    onArrow(suggestion)
  }

  return (
    <li className="row-box">
      <div className="row">
        <p>{suggestion}</p>
        <button type="button" className="arrow" onClick={clickArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem