import styled from 'styled-components'

export const BoldButton = styled.button`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const ItalicButton = styled.button`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const UnderLineButton = styled.button`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 25px;
  rows: '6';
  font-style: ${props => props.activeItalicText};
  text-decoration: ${props => props.activeUnderLineText};
  font-weight: ${props => props.activeBoldText};
`
