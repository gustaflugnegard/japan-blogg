import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post one`;
const posted = `Posted by Gustaf on 7 Sep 2024`;
const text = 
`
Dag 0.
Framme i Beijing. Resan har gått bra! Men jag räknade med att filmskärmen skulle funka vilket den inte gjorde. Som tur var hade jag några gamla podcasts nerladdade som jag kunde lyssna om på. Det var sådär att lyssna på gamla podcasts i 8 timmar faktiskt xd. Positivt var iallafall att vi serverades mat 2 gånger under resan. Det märks dessutom att man reser långt, har haft 4 passkontroller hittills. I Beijing är det blå himmel och sol men väldigt tomt på folk på flygplatsen. Butiker och restauranger ekar tomma och i högtalarna spelas något stråkinstrument i en melodi som påminner om ett tempel. Klockan är egentligen 4:43 svensk tid och vi är alla ganska trötta. På sofforna ligger folk utspritt och sover. Klockan är 10:43 i Beijing.
`;
const more_text = 
`
<br /> <br />
Framme på hostellet ca 13:00 svensk tid, 20:00 japansk tid. Jag har faktiskt inte mycket att säga mer än att jag är postivt överaskad. Fint, rent och precis vad man betalde för. Området känns tryggt och gästerna verkar ordnade. Jag är dock lite förvånad av åldersvariationen. Igår pratade jag med 4 st varav alla översteg 40 års åldern. Det är aldrig försent att backpacka! 
`;

const picture_1 = `/assets/images/dag0/flygplan.JPG`;
const desc_pic_1 = `Flygplan`

const picture_2 = `/assets/images/dag0/flygplats_china.JPG`;
const desc_pic_2 = `Flygplats Peking`

const picture_3 = `/assets/images/dag0/torn.JPG`;
const desc_pic_3 = `Tokyo sky tree`

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

const Blogpost1 = () => {
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

export default Blogpost1;
