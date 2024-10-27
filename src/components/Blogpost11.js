import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post 11`;
const posted = `Posted by Gustaf on 27 Okt 2024`;
const text = 
` 
Dag 35-54.
I skrivande stund sitter jag i Osaka på hostelet. Klockan är 11:15 och jag är ganska trött. Jag hade svårt att somna inat pga. hosta och irritation i halsen. Efter tre glas varmt vatten lugnande sig dock besvären och John blund kastade sitt sömnpulver över mig. Idag är tanken att ta det lite lugnt, dricka kaffe och hitta en bokaffär med engelska böcker! Såklart lite sightseeing också, men jag är som sagt ganska förkyld. 

Nog om det! Jag har varit på Okinawa nu i tre veckor och mycket spännande har hänt hittills. Senast jag skrev var jag på väg in till storstaden Naha. En mycket trevlig stad men en väldigt stor matmarknad fylld med restauranger och barer. Även lite omkringliggande stränder men huvudsaken är shopping skulle jag säga. Det märks att dom är influerade av Hawaii då deras egna souvenirer egentligen är delvis importerade därifrån! Jag köpte bland annat ett par kalsonger med SPAM burkar runt om låren. På gatorna stod palmerna höga och solen som gassade i en otrolig värme, nästan alla tre veckor. Till skillnad från fastlandet (som också är en ö) är stilen mer avslappnad på Okinawa och folk är bruna och lite mer sociala skulle jag säga. Ett glatt folk helt enkelt med en hemsk historia! Det var ungefär lika många som dog på Okinawa under andra världskriget som summan av dödsfallen efter atombomberna som släpptes över Hiroshima och Nagasaki. Hur som helst har dom återhämtat sig och har en American Village på ön som man kan besöka. Det råder nog delade åsikter om amerikanarna runt ön men dom bidrar nog helt klart till turismen så vad har dom för val! Jag försökte fråga runt lite på ön i denna fråga men fick inga entydiga svar, och dom flesta var på japanska. 

`;
const more_text = 
`
<br /> <br />
På fredagen när jag tog bussen mot Naha testade jag genast deras mest kända strand i stan och därefter hittade ett trevligt ställe för middag. Väl på restaurangen beställde jag öl (700ml) tills den började smaka utgång! Senare lönade jag stället för nästa ställe och nästa. En bit in på kvällen sprang jag på en supervänlig japansk familj från Tokyo som tog mig under sina vingar och bjöd på lokal Okinawa delikatess tillsammans med drinkar och öl. En stund senare begav sig föräldrarna hemåt och kvar var jag och deras två söner som var 20 respektive 23 år gamla. Vi gick vidare till ett dartställe där resten av kvällen spenderades och ännu fler drinkar blandades. Jag fick även blanda mina egna drinkar i baren vilket alltid är lika kul! Morgonen därpå landade min amerikanske vän på ön och tillsammans spenderade vi helgen och tillsammans utforskade ön. Strand häng, drinkar, snorkling sammanfattar de dagarna ganska bra. Hursomhelst hade vi jättekul och det kändes dagarna efteråt. Det var dags för återhämtning vilket jag hade planerat för. 2 timmar utanför Naha hade jag bokat ett B&B i 3 nätter vilket blev min retreat för oktober. Jag spenderade nog 80% av tiden på rummet. Senare åkte jag vidare norrut till Motubu där det stora akvariet ligger. Norrut var det lite lugnare mer av en resort vibe, stora vita hotel med enorma pooler. Ständerna runt Motubu var dessutom helt otroliga. Det absolut finaste jag sett i havs-väg. Korallreven sträckte sig oändliga här. På hostelet träffade jag underbara människor från hela värden och framför allt andra dagen sticker ut som ett evigt minne. Jag, en tysk, en britt och Bellman (Japanare) åkte 06:30 mot ett av öns gömde vattenfall. På plats hyrde dom andra skor till fötterna för stigen var att gå uppströms i floden ca 1 km till man var framme vid vattenfallet. Jag insisterade på att mina fötter var hårda och gjorda för denna typ av äventyr. Det står jag kvar vid även efter detta äventyr. Hursomhelst när vi kom fram till vattenfallet möttes vi av en oändlig ström av vatten som föll från kanske 20 meters höjd och runtomkring var liga höga sluttningar av tät skog vilket gjorde att man kände sig helt isolerad och ärad att få vara just där. Vi passade på att bada skratta och filma lite. Ett underbart äventyr. Efter det åkte vi till akvariet, och sedan vidare till en strand för lite snorkling. På kvällen åt vi god mat och drack drinkar. En 10/10 dag helt enkelt. Resten av dagarna var lite lugnare och spenderades mest på det lokala stränderna och vissa dagar med plugg på hostelet. För 4 dagar sedan lämnade jag Okinawa och flög vidare mot Hiroshima där jag spenderade 3 nätter. I Hiroshima besökte jag museet, ruinerna av en sparad byggnad och även deras tempel. En unik upplevelse med stora lärdomar om hemskheterna som krig för med sig. Med dessa nya insikter åkte jag vidare mot Osaka japans matstad kända för sitt stora utbud av mat men även nattliv. Tyvärr är som sagt sjuk så vi får se hur mycket av detta jag orkar utforska. Nästa vecka flyger jag norrut mot Sapporo!
`;

const picture_1 = `/assets/images/dag54/fall.jpg`;
const desc_pic_1 = `The Bambuforest in Kyoto`

const picture_2 = `/assets/images/dag54/dumpling.jpg`;
const desc_pic_2 = `Thusands gates in Kyoto`

const picture_3 = `/assets/images/dag54/vatten.jpg`;
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

const Blogpost11 = () => {
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

export default Blogpost11;
