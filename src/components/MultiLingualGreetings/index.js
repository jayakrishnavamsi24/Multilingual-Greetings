import {Component} from 'react'
import './index.css'
import LanguageButton from '../LanguageButton'

class MultiLingualGreetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languageGreetingsList: props.languageGreetingsList,
      activeLanguage: props.languageGreetingsList[0].buttonText,
    }
  }

  changeActiveLanguage = buttonText => {
    this.setState({activeLanguage: buttonText})
  }

  getImage = () => {
    const {languageGreetingsList, activeLanguage} = this.state
    const LanguageObject = languageGreetingsList.filter(
      eachLanguageGreeting =>
        eachLanguageGreeting.buttonText === activeLanguage,
    )
    return (
      <img
        src={LanguageObject[0].imageUrl}
        alt={LanguageObject[0].imageAltText}
      />
    )
  }

  render() {
    const {languageGreetingsList, activeLanguage} = this.state
    return (
      <div className="bg-container">
        <h1> Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachLanguageGreeting => (
            <LanguageButton
              key={eachLanguageGreeting.id}
              eachLanguageGreeting={eachLanguageGreeting}
              changeActiveLanguage={this.changeActiveLanguage}
              activeLanguage={activeLanguage}
            />
          ))}
        </ul>
        <div>{this.getImage()}</div>
      </div>
    )
  }
}

export default MultiLingualGreetings
