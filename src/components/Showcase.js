import styled from 'styled-components';
import pic from '../assets/images/designer.jpeg'; 

const ShowCase = styled.section` 
    color: white;
    text-align: center;
    border:2px #ccc solid;
    padding: 10px;
    border-radius: 35px;
    margin-bottom: 35px;
    background-image: url(${pic});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Showcase = ({text = "Följ min resa genom Japan! Resan börjar 6 Septmeber och planeras att avslutas 31 November"}) => {
  return (
    <ShowCase>
        <h1>{text}</h1>
    </ShowCase>
  )
}

export default Showcase
