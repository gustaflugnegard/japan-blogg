import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post five`;
const posted = `Posted by Gustaf on 13 Sep 2024`;
const text = 
` 
Dag 4,5,6. 
De senaste dagarna har mycket hunnits med. Zoo (Ueno Zoo), Imersive art (Team lab planets), moms-redovisning, plugg osv. Nu har jag begett mig till Kamakura söder om Tokyo (1 20 h). Tåget rullade in på stationen runt 13 i Kamakura, vilket blev perfekt till lunchen. Väl belåten gick jag sedan vidare till hotellet (hostellet) som jag ska bo på här inatt. Jag stannar bara 1 natt här tyvärr. Det har faktiskt visat sig vara väldigt trevligt här. Kamakura ligger längs havet och har en oändlig sandstrand men även väldigt mycket historia så som buddisttempel. 
`;
const more_text = 
`
<br /> <br />
Efter boendet begav jag mig ner mot stranden och tänkte ta mig ett välförtjänt dopp. Väl på stranden visade det sig att vindsurfing och wing foiling var populärt vilket gjorde mig jäkligt taggad. När jag fick syn på det gick jag stranden bort och letade efter ett surfcenter som kunde hyra ut utrustning till mig. Tyvärr fanns det ingen kitesurfing utrustning men däremot kunde jag låna wing-foil utrustning i 3 timmar. En fantastisk upplevelse. Jag såg dessutom en stackars sköldpadda simma förbi bredvid foilen vid ett tillfälle. Efter surfingen begav jag mig till Tsurugaoka Hachimangu, en shintohelgedom. Supervackert allt i hop. Ser fram emot att åka vidare längs kusten nu lite, det verkar vara en lite mer avslappnad stämning här som påminner om Varberg!
`;

const picture_1 = `/assets/images/dag5/fagel.jpg`;
const desc_pic_1 = `Bibblan kvitto`

const picture_2 = `/assets/images/dag5/surf.JPG`;
const desc_pic_2 = `Park bredvid bibblan`

const picture_3 = `/assets/images/dag5/tempel.JPG`;
const desc_pic_3 = `Tempel Asakusa`

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

const Blogpost4 = () => {
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

export default Blogpost4;
