import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post six`;
const posted = `Posted by Gustaf on 18 Sep 2024`;
const text = 
` 
Dag 7,8,9. 
Mycket har hunnits med sen sist. Hakone, Odawara och nu mt Fuji. 
I Hakone låg det mysiga stugor längs det slingriga vägarna tillsammans en blandning av tropiska växter och vanliga träd. Jag sprang in i ett spindelnät uppe i bergen och spindeln fastnade i ansiktet. Gissa vad jag googlade direkt efteråt! Som tur är finns det inga dödliga spindlar i Japan. Hakone var superfint och mysigt, ett riktigt vandringsställe som jag gärna hade spenderat 3 dagar i. Där uppe bjöds det både på onsen (hot springs) och vandringsleder. Jag hade tyvärr bara 1 dag där så jag fick välja ut det absolut viktigaste att se, vilket är Hakone Shrine som ligger vid en stor sjö omgiven av berg. I sjön åker även turistbåtar byggda som sjörövarskepp. Har man tur kan man även se en glimt av Mt fuji på avstånd. Från sjön tänkte jag passa på att få in lite vandring i bena vilket visade sig vara dumt. Väl 2 km in tyckte jag att vägen gick alldeles för mycket nerför och jag tittade på kartan. Visade sig att jag följde fel väg åt ett annat håll. Läskigaste av allt var att solen hade börjat gå ner och jag var inte sugen på att fastna mitt i skogen i mörker. Fick ett riktigt löp-pass tillbaka till sjön där jag senare kunde hoppa på bussen tillbaka till hostellet. I Odawara hände inte alls mycket. Jag passade på att besöka havet vars strand var omgivet av stora betongväggar och betongklumpar tillsammans med skyltar som varnade om tsunamis. Jag passade även på att besöka Odawara Castle som var hur fint som helst. 
`;
const more_text = 
`
<br /> <br />
Nu befinner jag mig i Fujikawaguchiko, en stad som ligger strax under det stora Mt Fuji . Japans högsta berg på 3776 m högt. Detta kan jämföras med Sveriges högsta berg på ca 2200m.  Jag kom hit för 2 dagar sedan. Första dagen tog jag en liten löptur och njöt av utsikten av sjön som omger halva staden tillsammans med bergen som reser sig i oändlighet. På andra hållet om staden ligger Mt Fuji ganska ensamt men väldigt elegant. På kvällen drack jag ett par öl och pratade med ett två killar från Australien och en tysk tjej som skulle bestiga Mt Fuji dagen därpå. Kvällen slutade med att dom inte längre var tre som skulle bestiga Mt fuji längre utan fyra.   
`;

const picture_1 = `/assets/images/dag8/hakone.jpg`;
const desc_pic_1 = `Hakone lake and shrine`

const picture_2 = `/assets/images/dag8/castle.jpg`;
const desc_pic_2 = `castle odawara`

const picture_3 = `/assets/images/dag8/fuji.JPG`;
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

const Blogpost6 = () => {
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

export default Blogpost6;
