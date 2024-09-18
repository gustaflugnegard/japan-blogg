import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post seven`;
const posted = `Posted by Gustaf on 18 Sep 2024`;
const text = 
` 
Dag 10. MT FUJI
Mt Fuji. Dagen började relativt sent för en hike. Vi gick upp ca 8.00 och åt frukost. Första bussen rullade 9:40 mot femte stationen som är den plats man startar klättringen. Innan bussresan köpte vi på oss lite snacks och vatten och gjorde en uppskattning på vad som skulle behövas i kläder uppe på berget. Mt Fuji är känt för att sällan visa sig, då det nästan alltid är omgivet i moln. Dessa moln kan ofta vara fyllda med regn, därav måste man ha en del respekt för väderförändringarna i berget. Denna tid av året är sannolikheten ca 20–30 procent att få se toppen av Mt Fuji från marken pga moln. Framme på femte stationen rörde vi oss sakta mot starten. Då alla rutter är stängda för året var vi tvungna att hoppa över avspärrningarna och påbörja vandringen helt på egen risk. Ganska snabbt var vi uppdelade, jag hängde på den tyska tjejen de andra 2 för sig. Det kändes tryggt att vara 2 kan jag säga då visibiliteten var extremt låg i början av klättringen. Jag och tysken kämpade på och såg till att ta pauser varje timme för lite vätskepåfyllning och snacks. Mot toppen började det kännas att man över 3000 m då syret blev tunnare och tunnare. 

`;
const more_text = 
`
<br /> <br />
Väl andfådda och svettiga kämpade vi på sista biten och kom till slut upp till toppen på 3700m med ca 1500 höjdmeter klättrade. Vandringen upp tog oss 2.52 h vilket är väldigt bra ska jag säga då det flesta räknar med att vara uppe på ca 6 timmar. På mt Fuji gick vi ett var på toppen vilket var större än jag trodde ca 6km tror jag det var. Efter det tog vi en liten väl förtjänt paus och njöt av utsikten. Vandringen ner kändes lättare och tog oss bara 1.25 h. Hela vandringen tog oss 5.18 h, vilket inte bara är en tid men också ett minne för livet. Idag när jag skriver detta är jag rejält sliten i bena!
`;

const picture_1 = `/assets/images/dag8/selfie.jpg`;
const desc_pic_1 = `Hakone lake and shrine`

const picture_2 = `/assets/images/dag8/king.jpg`;
const desc_pic_2 = `castle odawara`

const picture_3 = `/assets/images/dag8/mt.JPG`;
const desc_pic_3 = `Tempel Fuji`

// END OF POST ------------------

// Styled components
const BlogDesign = styled.article`
  overflow: hidden;
  border: 2px #ccc solid;
  padding: 10px;
  border-radius: 35px;
  margin-bottom: 35px;
`;

const Margin = styled.h3`
  margin-bottom: 0;
`;

const ReadMoreButton = styled.button`
  color: #BC002D;
  font-family: serif;
  font-size: 16px;
  border: none;
  background-color: #FAF9F6;
  cursor: pointer;

  &:hover {
    color: darkred; /* Adjust as needed */
  }
`;

const PostImage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 35px;

  a {
    flex: 1 1 200px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border: 2px #ccc solid;
    border-radius: 35px;
  }
`;

const Text = styled.p`
  .more-text {
    display: ${props => props.showMore ? 'inline' : 'none'}; /* Conditionally hide/show */
  }

  .dots {
    display: ${props => props.showMore ? 'none' : 'inline'};
  }
`;

const Blogpost7 = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  return (
    <BlogDesign>
      <Margin>{post_number}</Margin>
      <small>{posted}</small>
      <Text showMore={showMore}>
        {text}
        <span className="dots">...</span>
        <span> </span>
        <span className="more-text" dangerouslySetInnerHTML={{ __html: more_text }} />
      </Text>
      <ReadMoreButton onClick={handleReadMoreClick}>
        {showMore ? 'Read less' : 'Read more'}
      </ReadMoreButton>
      <PostImage>
        <a href={picture_1}>
          <img src={picture_1} alt={desc_pic_1} />
        </a>
        <a href={picture_2}>
          <img src={picture_2} alt={desc_pic_2} />
        </a>
        <a href={picture_3}>
          <img src={picture_3} alt={desc_pic_3} />
        </a>
      </PostImage>
    </BlogDesign>
  );
}

export default Blogpost7;
