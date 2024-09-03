import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainHeader = styled.header`
  text-align: center;
  color: #BC002D;
  font-size: 28px;
`;

const Header = ({ title = "Japan Blogg"}) => {
  return (
    <MainHeader>
      <h1>{title}</h1>
    </MainHeader>
  )
}

Header.propTypes = {
    title: PropTypes.string, 
}

export default Header
