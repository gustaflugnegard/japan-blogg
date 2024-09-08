import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post three`;
const posted = `Posted by Gustaf on 8 Sep 2024`;
const text = 
`
 Dag 2. 
Jag vaknade ganska sent, runt 10:30. Sedan gick jag förbi 7/11 som finns i stort sett överallt i japan. Där köpte jag frukost. Vatten, smoothie, kaffe och en sandwhich. Kalaset gick på ca 60 kr. Efter det begav jag mig mot staden för att hitta ett offentligt bibliotek då jag hade bestämt mig för att studera idag. Jag hade kollat upp ett innan på Google maps som hette Hibiya Library & Museum. Detta bibliotek ligger ganska nära centrum bredvid en park full med växlighet, restrunger och en scen. Det visade sig att man var tvungen att boka en plats på bibblan och då fick man sitta 2 timmar. Detta kändes väldigt opraktiskt och det fanns en avdelning för ”locals” som hade sin egen avdelning, denna avdelning var inte full. Jag gick och satte mig där när ingen såg. Såg jag ut som en local, nej. Var det någon som ifrågasatte mig? Nej. Jag vet inte om dom lät mig sitta kvar pga medlidande eller av artighet men det funkade alldeles utmärkt. Någonstans i mitten av mina plugg-timmar begav jag mig för att äta lunch vilket jag hittade inuti ett köpcentrum i centrala Tokyo precis utanför ”Toho Cinema”. Väl belåten begav jag mig tillbaka till biblioteket för en andra runda och denna gång tänkte jag vara duktig. Jag fick en tid på 40 minuter varav väntetiden var också 40 minuter. Väldigt opraktiskt om du frågar mig. Jag är hellre en oäkta local. 
`;
const more_text = 
`
<br /> <br />
Senare runt 17 stängde bibblan och då jag kände jag att det kanske inte riktigt var dags för att åka hem begav jag mig till Sensoji tempel/shrine i Asakusa gångavstånd från mig. Väldigt trevligt och go stämning, men uppenbart vart turisterna gömmer sig nämligen vid turistfällorna. Detta var ett av dom, kändes det som iallafall. Nu är jag hemma och funderar på vad kvällen har att ge, igen. Möjligtvis blir det en tidig läggdags.
`;

const picture_1 = `/assets/images/dag2/bibblan.JPG`;
const desc_pic_1 = `Bibblan kvitto`

const picture_2 = `/assets/images/dag2/park.JPG`;
const desc_pic_2 = `Park bredvid bibblan`

const picture_3 = `/assets/images/dag2/tempel1.JPG`;
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
