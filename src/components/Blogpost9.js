import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post 9`;
const posted = `Posted by Gustaf on 2 Okt 2024`;
const text = 
` 
Dag 20–27 
Alla dagar spenderade i Kyoto sedan sist. Staden som sammanfattar Japan! Jag förstår varför man åker till Kyoto som turist. Det är som att hela Japan vore sammanfattat i en enda stad. Fullt av sevärdheter och historia men inte så mycket mer än så egentligen. God mat, mycket barer osv men det finns det bevisligen vart man än åker. När jag tänker på det är Tokyo tillsammans med Kyoto den ganska ultimata kombinationen om man vill uppleva så mycket av Japan som möjligt på kort tid. Lägger man sedan till Mt Fuji är resan komplett;)

`;
const more_text = 
`
<br /> <br />
I Kyoto finns det bokstavligen så många tempel och andra sevärdheter att man måste välja vad man vill se, för man hinner inte med alla! Allt i från bambuskogar, apor på berg, guldiga tempel och ett berg täckt i tusentals ”torii gates”. Tar man pendeln än bit utanför staden hittar man även Nara. En väldigt mysig stad som har växt ihop med naturen och lever i symbios med rådjuren. Inte riktigt kanske… Men nog finns det tillräckligt många turister som vill mata dem för att djuren ska stanna. I Nara såg jag så många rådjur att man undrade om det var här ifrån det föds och sedan springer vidare ut i världen. Ett underhållande turistmål vill jag påstå. Men i ärlighetens namn har jag nu rest runt Japan i en månad och sett så många tempel och slott att det känns som att man har sett dom alla. Dom är väldigt lika varandra och vissa återuppbyggda efter amerikanarnas krigsföring under kriget. Med det sagt inleder jag nu fas 2 av min resa SEMESTER FRÅN SEMESTERN. Oförskämt att säga så men imorgon flyger jag vidare söderut mot Okinawa som är japans alldeles egna Hawaii fast för halva priset! Lite oroad är jag dock då det råder tyfon-varnignar över ön pga. att Taiwan (grannlandet) är drabbade just nu av årets 18 tyfon för säsongen med vindar mätta upp emot 60 m/s. ”Typhoon Krathon”. Vi får se om flyget kanske blir inställt. I övrigt är mitt välmående högt och många nya kontakter är knutna. Jag har ätit koreansk BBQ med en tjeck och en California man, fried rise med 2 walesare, suttit vaken och andrahandsrökt till kl 4 med en spanjor, en portugis och sjungit en karaoke med en äkta japan! Vill tillägga att jag har varit på en riktig onsen också, en riktig primitiv aktivitet som känns lite som en pånyttfödelse när man kommer ut på andra sidan. Bambu-skogen i Kyoto var lite överskattad dessutom, men bra på bild. Nu sitter jag på en pall runt ett alldeles för lågt bord i Fukuoka och det är dags att hitta lite kvällsmat! Vi hörs. 
`;

const picture_1 = `/assets/images/dag20/bambu.jpg`;
const desc_pic_1 = `The Bambuforest in Kyoto`

const picture_2 = `/assets/images/dag20/gates.jpg`;
const desc_pic_2 = `Thusands gates in Kyoto`

const picture_3 = `/assets/images/dag20/deer.jpg`;
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

const Blogpost9 = () => {
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

export default Blogpost9;
