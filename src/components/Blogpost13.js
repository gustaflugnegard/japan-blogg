import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post 13`;
const posted = `Posted by Gustaf on 2 Dec 2024`;
const text = 
` 
Sista dagarna!
Jag är hemma nu och färdig med resan, vilken upplevelse! Senast jag skrev befann jag mig 2 timmar från Sapporo har jag för mig och jag skulle alldeles strax där efter hoppa på flyget till Sendai. Sendai var en fantastisk stad med stort nattliv och rik natur. Beläget längs östkusten ca 5 timmar norr om Tokyo. Jag flög in från Sapporo med en häftig fönster-vy. Det var solklart den dagen vilket gjorde att jag kunde följa bergskedjorna hela vägen ner till Sendai och se hur det tunna snötäcket uppe i norr blev allt tunnare och tunnare och till slut helt försvunnet. Endast längst uppe bland bergstopparna kunde man skymta ett vitt litet täcke. I Sendai stötte jag på en gammal backpacker-vän (tysken) som jag mötte tidigare i Sapporo vilket var lite av en lågoddsare. Han hade precis ätit oxtunga till kvällsmat, en delikatess i Sendai. På hostelet träffade jag även den första och sista svensken jag mötte på denna resa. Vi hade ett gott snack och det var skönt att kunna prata först och tänka sen. Det visade sig att jag hade bokat fel rum, ett tjej-rum. Där var jag tyvärr inte välkommen haha. Snälla som de var löste de detta och fixade ett eget rum till mig som jag inte behövde betala extra för. Detta nya rum blev senare subjekt för ett för krök med en annan tysk som fick dela rummet med mig 2 dagar senare. 

`;
const more_text = 
`
<br /> <br />

Nära Sendai besökte jag Matsushima med tåg. Matsushima är en liten by med tempel men också en liten "skärgård" sträcker sig utanför och gör platsen till en väldigt fin och unik utsiktsplats. Här träffade jag för första gången tysken som senare skulle bli min roomie. Han hängde ihop med en annan tysk och jag passade på att joina dom efter ett kort snack på en av öarna. Ett kort men intensiv vänskap blomstrade och några timmar senare skulle vi stå nakna inför varandra i en av badhallarna som fanns i stan. Att vara naken i en badhall/ onsen är ett krav, inget vi valde självmant bara för att vi kunde ;). Efter spat gick vi vidare för att äta middag och drack oss långsamt in i dimman.  Denna natt fastnade vi i en dart-bar och där köpte vi ett drick-så-mycket-du-kan band i 2 timmar. En rolig kväll som slutade runt klockan 4 på morgonen. Utöver denna långa dag han jag besöka tempel-ruiner, en Buddhastaty och vandra runt på stadens olika gator. Summa summarum tycker jag Sendai var en mycket trevlig stad. Efter 5 dagar åkte jag vidare söderut till min sista destination Tokyo. I Tokyo spenderade jag mina sista 6 dagar med intensiv prokastingering av vad jag skulle köpa med mig hem. Utöver det träffade jag min amerikanska vän från Texas. Samma tjej som jag träffade mina första dagar i Tokyo och som dessutom hälsade på mig i Okinawa. Vi spenderade mina 3 sista dagar med att uppfylla min önskelista på saker jag ville göra innan jag åkte hem. Dag 1 gick vi till en arkadhall och spelade så många spel vi kunde hinna med. De hade även en baseboll-range precis som i golf vilket var en av höjdpunkterna. 
Dag 2 besökte vi ett gäng väl utvalda "secret bars" runt Shibuya, Tokyo. En mycket trevlig kväll. Sista dagen var min sista och en riktig utgång stod på schemat. En speciell kväll minst sagt. Vi möttes inte upp förens 23:00 på stan för att sedan gå till den första baren. Jag var tillbaka på hostelet runt 6 på morgonen och klockan 10 samma morgon åkte jag till flygplatsen. Jag flög först till Peking, China där jag spenderade en natt på en grå bänk inne på flygplatsen och på eftermiddagen dagen där efter flög jag hemåt till Sverige där mamma och pappa mötte upp mig på flygplatsen. Som ett avslut på denna resa vill jag tacka till 
alla som har följt med och läst mina inlägg och tittat på alla bilder jag har tagit. Det har varit en otrolig resa som kommer att finnas med mig för alltid. Jag är väldigt tacksam för denna upplevelse och att jag gjorde det! Ta hand om er så ses vi!

`;

const picture_1 = `/assets/images/sita/city.JPG`;
const desc_pic_1 = `The Bambuforest in Kyoto`

const picture_2 = `/assets/images/sita/island.JPG`;
const desc_pic_2 = `Thusands gates in Kyoto`

const picture_3 = `/assets/images/sita/baseboll.JPG`;
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

const Blogpost13 = () => {
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

export default Blogpost13;
