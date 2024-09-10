import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post four`;
const posted = `Posted by Gustaf on 10 Sep 2024`;
const text = 
`
Dag 3. 
Pluggade hela förmiddagen fram till 14 då jag hade en inlämning som skulle in. Efter det begav jag mig till Shinjuku distriktet med siktet inställt på lite shopping. I Shinjuku hamnade jag först på ett köpcentrum där deras food-court var mest spektakulär. Där fanns alla typer av japansk mat med ett stort fokus på bakelser som var så eleganta att man kunde tro att dom var gjorda av plast. Strax därefter hittade jag ut ur centret (vilket kan tyckas enkelt..). Jag hade tyvärr inte så mycket tid i Shinjuku då jag hade en träff inplanerad på kvällen. Därav han jag egentligen bara kika in i lite affärer och äta lunch
`;
const more_text = 
`
<br /> <br />
Vid 19 var jag på plats i Shibuya (samma ställe som jag var i lördags) där jag hade en [vänskaplig] träff inplanerad med en tös från Texas som jobbade som engelska lärare i Tokyo. Vi bar-hoppade mest, drack goda drinkar och spelade biljard. Runt 12 snåret begav jag mig hemåt igen för lite sömn. Det gäller att vara i tid då sista tiden för spårvagnen är 24. Missar man den får man vänta till 05.
`;

const picture_1 = `/assets/images/dag3/gata2.jpg`;
const desc_pic_1 = `Bibblan kvitto`

const picture_2 = `/assets/images/dag3/gata1.jpg`;
const desc_pic_2 = `Park bredvid bibblan`

const picture_3 = `/assets/images/dag3/figur.jpg`;
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
