import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post 10`;
const posted = `Posted by Gustaf on 8 Okt 2024`;
const text = 
` 
Dag 28–34
Framme på Okinawa. Flyget hit var ganska lugnt förutom vid landningen. Det varnades om turbulens men jäklar vad det skakade och gungande när vi började att sjunka mot landningen. Man ville hålla tag i något för att sitta stilla men likväl förstod man ju att det inte spelade någon som helst roll vare sig hur landningen skulle bli. Hursomhelst landade vi till ett fuktigt men varmt landskap. Solen hade gått ner så jag kunde inte se så värst mycket. Strax därefter hämtade jag ut bagaget, hoppade på pendeln mot stan och gjorde sedan ett sista byte till buss för att ta mig till hostelet. Yonabaru heter byn jag är belägen i. Det ligger nära huvudstaden men på den östra sidan av ön. Hostellet är ett väldigt bohemiskt ställe med en avslappnad atmosfär. Jag tror förresten att det är ett gästhus för ägande familj bor här också. Det är såklart bara japaner som bor här så en blandning av gester, google translate och engelska används när vi kommunicerar. De har också svårt att säga hela mitt namn och därför har jag fått smeknamnet ”Gus”, uttalat precis likadant som Gus i breaking bad. 

`;
const more_text = 
`
<br /> <br />
Dagarna här har gått väldigt fort och vädret har varierat lite. Jag har hunnit besöka 2 sevärda stränder varav ett snorkeläventyr utöver det vanliga. Jag antar att ni har hunnit se mitt instagram inlägg om detta. Snorklingen var helt sjukt kul och fascinerande. Kristallblått vatten, färgglada fiskar och en havstemperatur på 30 grader, lika varmt som på land nästan. Mot land reste sig klippor höga med grottor som blottas endast för havsfolket. Snorkelutrustning hittade jag för 250 kr! Sprillans grejor. Glasögon, snorkel och fötter, hur bra är inte det. Det andra dagarna har gått åt till att andas och plugga. Man behöver sådana dagar också. Nästan alla dagar har jag hunnit träna också vilket känns bra. 200m från boendet ligger en gammal park med en integrerad löparbana vilket är helt perfekt. Det ska dock nämnas att det är helt annat att löpa i detta klimat. I parken ligger även en basketplan och på basketplan står en metallåda fylld med basketbollar för allmänheten. Det får en att undra. Hur länge tror ni att bollarna hade legat kvar i lådan i Sverige? En dag är min gissning. Än värre hade förmodligen den första personen tagit alla.
`;

const picture_1 = `/assets/images/dag32/bat.jpg`;
const desc_pic_1 = `The Bambuforest in Kyoto`

const picture_2 = `/assets/images/dag32/dyk.jpg`;
const desc_pic_2 = `Thusands gates in Kyoto`

const picture_3 = `/assets/images/dag32/grotta.jpg`;
const desc_pic_3 = `En gentleman i Nara`

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

const Blogpost10 = () => {
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

export default Blogpost10;
