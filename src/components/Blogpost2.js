import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post two`;
const posted = `Posted by Gustaf on 7 Sep 2024`;
const text = 
`
Dag 1 
Imorse tog jag tunnelbanan till Tokyo city (Ginza) där möttes jag av ett lugnare men väldigt varmt Tokyo. Jag vandrade mest runt och svettades. På vägen gick jag även förbi Kejsarpalatset beläget Mitt i Tokyo. Tyvärr fick man bara stå på utsidan och titta. När jag kände mig färdig med det tog jag tunnelbanan vidare till Shibuya och möttes av betydligt mer folk. 
`;
const more_text = 
`I Shibuya gick jag tittade jag in i butiker som Nintentdo, UNIQLO och Adidas. Betydlgit mer affärer fanns men då allt är på japanska blir det svårt att berätta namnet. Det var supertrevligt där, mycket folk, elektrisk atmosfär och god mat. Lunchen kostade hela 60 riksdaler. I övrigt köpte jag en svart T-shirt då min linneskjorta gjorde att jag lös som en neonlampa i folkvimlet. Japaner är väldigt välklädda men älskar mörka färger. 
<br /> <br />
Nu vankas det kväll, möjligtvis kan det bli ett äventyr.. Vem vet. Jag träffade precis en britt som kom precis, de brukar ju inte vara speciellt fega för en pint och jag har igår fått reda på var man ska för att festa.
`;

const picture_1 = `/assets/images/dag1/gata.JPG`;
const desc_pic_1 = `gata`

const picture_2 = `/assets/images/dag1/ramen.JPG`;
const desc_pic_2 = `Ramen noodels`

const picture_3 = `/assets/images/dag1/tempel.JPG`;
const desc_pic_3 = `Tempel Tokyo city`

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

const Blogpost2 = () => {
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

export default Blogpost2;
