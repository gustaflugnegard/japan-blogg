import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post 8`;
const posted = `Posted by Gustaf on 26 Sep 2024`;
const text = 
` 
Dag 11-19
Jag gör mitt bästa med bloggandet men det är också tidskrävande. Just nu sitter jag i ett hostell i Kyoto som ligger väldigt nära centralen och bredvid ett stort tempel. Precis som många andra ställen är detta hostellet litet, man känner sig lite instängd när man spenderar för mycket tid i köket. Å andra sidan håller man sig utomhus så mycket man kan. Jag vill också nämna att de flesta hostellen ligger väldigt bra och priserna är extremt bra. Uppskattningsvis betalar jag ca 250 kr per natt i genomsnitt, detta kan jämföras med 233 kr per natt för att hyra en studentlägenhet i lund. Med andra ord kan varken jag eller någon annan klaga. Hursomhelst har jag rest mycket sedan senast. Jag har besökt en tropisk idyll fyllt med palmer, vita stränder och kristallblått vatten [1]. Ett mindre Tokyo med enorma marknader och med få turister [2]. Och nu ett kulturrikt men framför allt turistigt Kyoto [3]. 

`;
const more_text = 
`
<br /> <br />
5 timmar kollektivtrafik söder ut från Mt Fuji ligger Shimoda [1]. Här hyrde jag en egen lägenhet för en billig peng på airbnb. Det var ganska skönt att slippa snarkandet från grannarna ett tag. I staden finns det inte jättemycket att hitta på men i hamnen kan man strosa runt och titta på gamla fiskebåtar. Rör man sig lite längre når man det vackra stränderna jag nämnde. Vågsurfing är stort här. Runt staden och stränderna ligger berg väl bevuxna med träd av alla sorter. Ett mycket fint ställe att spendera några dagar på enligt mig! Förutom utsikterna stötte jag även på ett gäng främmande djur och insekter. En död orm, ett gäng spindlar och en riktigt skum tusenfoting som var alldeles för stor för sitt utseende. Vidare till Nagoya [2]. I Nagoya gjorde jag faktiskt väldigt lite, man kan tro att jag har drabbats av lite semester-slöhet men helt ärligt spenderar jag mycket tid framför datorn då jag just nu håller på med ett stort programmeringsprojekt. Dessutom har jag lite kurser som jag läser på distans och än så länge har de inte varit blyga med antal inlämningsuppgifter som dom lämnar ut. Jag var åtminstone ute och shoppade ett par nya sneakers, ett par löparskor och en löparjacka. Tre mycket bra köp. Igår fortsatte resan vidare mot Kyoto [3] där jag befinner mig nu som sagt. Jag har inte riktigt haft tiden att utforska allt ännu men själva staden är omgiven av berg och en stor sjö på ena sidan. Kyoto är ett av de ställena som är ett måste när man åker till Japan. Detta beror som sagt på den bevarade kulturen och alla sevärdheter som finns här. I går tog jag en löptur längs en ”flod” och sedan besökte jag templet som ligger i närheten. Senare på kvällen tog jag bussen längre upp i staden för att se in på bargatorna och alla omkringliggande butiker och marknader. Runt 22 begav jag hemåt för lite sömn i min rymliga men hårda och gnälliga våningssäng.
`;

const picture_1 = `/assets/images/dag19/strand.jpg`;
const desc_pic_1 = `Strand i Shimoda`

const picture_2 = `/assets/images/dag19/boll.jpg`;
const desc_pic_2 = `Museum Nagoya`

const picture_3 = `/assets/images/dag19/tempel.jpg`;
const desc_pic_3 = `Tempel Kyoto`

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

const Blogpost8 = () => {
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

export default Blogpost8;
