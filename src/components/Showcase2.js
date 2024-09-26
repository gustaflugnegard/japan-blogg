import styled from 'styled-components';

const ShowCase = styled.section` 
    color: #BC002D;
    text-align: center;
    border:2px #ccc solid;
    padding: 10px;
    border-radius: 35px;
    margin-bottom: 35px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Showcase2 = ({text = "Följ min resa genom Japan! Resan börjar 6 Septmeber och planeras att avslutas 31 November"}) => {
    return (
      <ShowCase>
        <h3>{text}</h3>
        <a href="https://photos.app.goo.gl/hqf3RextY5ovxGSS7" target="_blank" rel="noopener noreferrer">
        [Klicka här för att gå vidare]
        </a>
      </ShowCase>
    );
  }

export default Showcase2
