import React, { useState } from 'react';
import styled from 'styled-components';

// BGN OF POST -------------
const post_number = `Blog post 12`;
const posted = `Posted by Gustaf on 15 Nov 2024`;
const text = 
` 
Dag 55–70.
Hej igen. Jag vet att uppdateringen blir sämre och sämre men jag har blivit lat och latare. Jag har också varit sjuk ett längre tag, någon form av långvarigt virus som fick fäste redan på Okinawa skulle jag tro. Skulle gissa på covid eller en förkylning på en förkylning. Hursomhelst var jag ju dålig i Osaka redan men blev så småningom bättre, varav jag blev dålig igen, och med lite andra symptom. Sista förloppet fyller alla kriterier för luftrörskatarr. 

`;
const more_text = 
`
<br /> <br />

I skrivande stund har iallafall slembyggandet börjat släppa, men jag har blivit beroende nässpray så 
vaknar upp 5:00 med fyllda rör. En ytterligare bieffekt av detta är att min redan känsliga näsa blivit ännu känsligare. 
Jag har haft näsblod det senaste 7 dagarna. Att vara sjuk ensam är inget roligt men att vara sjuk ensam har också sina fördelar. 
Jag har spenderat mycket tid åt mina sidoprojekt som programmering och jobbsökande. Dessutom har jag hunnit läsa en del, 
gått långa lugna promenader och tagit det lugnt. Att ta det lugnt har varit målet med denna resa, att komma ikapp världen. 
Efter allt plugg, jobb och andra aktiviteter utan paus har man kämpat för att hålla huvudet över ytan, att aldrig kunna se längre 
en till nästa inlämning. Nu har jag äntligen tagit mig tiden att göra saker som intresserar mig och låta tankarna vandra fritt, men framför allt har jag också hunnit ha det tråkigt. Ett för mig värdefullt medel för att kunna sätta perspektiv på det som är
kul och det man värdesätter i livet. Det börjar ju närma sig hemfärd och det känns helt okej. Det ska bli skönt att ha ett liv 
större än en väska och jag är tacksam för allt jag har varit med om och upplevt, en otrolig erfarenhet som jag kommer att bära 
med mig livet ut. Jag befinner mig just nu i en lokal by 2h utanför Sapporo, Hokkaido, Japans nordligaste ö. Ett underbart 
ställe med oändlig natur, klimat likt Sverige och massor av Japanare. En icke så turistfylld ö, som ger dig chansen att uppleva 
japansk kultur på riktigt. Här har jag hunnit besöka en fotbollsmatch, en japansk höstmarknad och en chokladfabrik. 
Mest har jag vandrat runt i diverse parker med en kaffe i handen och filosoferat. Med start i Sapporo tog jag sedan bussen vidare mot Kutchan, Niseko genom Otaru. En av världens bästa skidåkning. Med ca 14 meter snö per säsong slår dom Val Thorens, Frankrike med det mer än det dubbla. Just därför fylls bergen med ofantliga mänger snö som lockar åkare världen runt. Ett ställe jag definitivt kommer att åka tillbaka till då det för närvarande är torrt på backen. Knappt en flinga har landat på mössan sedan jag kom hit för 3 veckor sedan. Vidare har jag sedan bussat genom det imponerande landskapet. Jag vill dra det så långt som att varje bussresa är sightseeing. När man flyttar sig så lokalt som jag ofta gör rör man sig genom smala vägar, lokala byar och natur som sträcker sig på alla håll med berg och gamla vulkaner som reser sig högt mot himlen eller formar runda sjöar. Man vill inte titta ner i telefonen helt enkelt. Avslutningsvis har jag vandrat sparsamt här, mest på grund av min sjukdom men också för att Hokkaido är ett väldigt björntätt område. Brunbjörnar framför allt och jag är varken sugen eller redo för att träffa på en. Ni vet vad dom säger, if its black fight back, if it brown lay down, and if its white goodnight. 
Jag hinner förhoppningsvis med ett sista inlägg på bloggen innan resan tar slut. Allt Gott
`;

const picture_1 = `/assets/images/dag55/träd.jpg`;
const desc_pic_1 = `The Bambuforest in Kyoto`

const picture_2 = `/assets/images/dag55/yotei.JPG`;
const desc_pic_2 = `Thusands gates in Kyoto`

const picture_3 = `/assets/images/dag55/vatten/vulkan.jpg`;
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

const Blogpost12 = () => {
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

export default Blogpost12;
