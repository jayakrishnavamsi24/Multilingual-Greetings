import './index.css'

const LanguageButton = props => {
  const {eachLanguageGreeting, activeLanguage, changeActiveLanguage} = props

  const onLanguageButtonClick = () => {
    changeActiveLanguage(eachLanguageGreeting.buttonText)
  }

  return (
    <li key={eachLanguageGreeting.id}>
      <button
        className={
          activeLanguage === eachLanguageGreeting.buttonText
            ? 'active-button'
            : 'normal-button'
        }
        type="button"
        onClick={onLanguageButtonClick}
      >
        {eachLanguageGreeting.buttonText}
      </button>
    </li>
  )
}

export default LanguageButton
