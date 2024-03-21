import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BoldButton,
  ItalicButton,
  UnderLineButton,
  TextArea,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    activeBold: false,
    activeItalic: false,
    activeUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({activeBold: !prevState.activeBold}))
  }

  onClickItaly = () => {
    this.setState(prevState => ({activeItalic: !prevState.activeItalic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({activeUnderline: !prevState.activeUnderline}))
  }

  render() {
    const {activeBold, activeItalic, activeUnderline} = this.state
    const activeBoldColor = activeBold === false ? '#f1f5f9' : ' #faff00'
    const activeItalicColor = activeItalic === false ? '#f1f5f9' : ' #faff00'
    const activeUnderLineColor =
      activeUnderline === false ? '#f1f5f9' : ' #faff00'

    const activeBoldText = activeBold === false ? 'normal' : 'bold'
    const activeItalicText = activeItalic === false ? 'normal' : 'italic'
    const activeUnderLineText =
      activeUnderline === false ? 'normal' : 'underline'

    return (
      <div className="bg-container">
        <h1 className="heading">Text Editor</h1>
        <div className="mini-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
            className="text-image"
          />
          <div className="text-card">
            <ul className="icons-buttons">
              <li>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  onClick={this.onClickBold}
                  color={activeBoldColor}
                >
                  <VscBold className="icons" />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  data-testid="italic"
                  onClick={this.onClickItaly}
                  color={activeItalicColor}
                >
                  <GoItalic className="icons" />
                </ItalicButton>
              </li>

              <li>
                <UnderLineButton
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                  color={activeUnderLineColor}
                >
                  <AiOutlineUnderline className="icons" />
                </UnderLineButton>
              </li>
            </ul>
            <hr />
            <TextArea
              activeBoldText={activeBoldText}
              activeItalicText={activeItalicText}
              activeUnderLineText={activeUnderLineText}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
