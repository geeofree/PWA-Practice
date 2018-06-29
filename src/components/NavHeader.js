import styled from 'styled-components'
import {hexToRGB} from 'utils'

function getThemeColor(themeColor='primary', callback) {
  return props => callback ? callback(props.theme[themeColor]) : props.theme[themeColor]
}

const NavHeader = styled.div`
  background-color: ${getThemeColor()};
  padding: 2rem;
  box-shadow: 0 2px 3px rgba(${getThemeColor('dark', hexToRGB)}, 0.6);
`

export default NavHeader
