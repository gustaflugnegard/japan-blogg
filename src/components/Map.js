import styled from 'styled-components';
import pic from '../assets/images/japanoff5.png';

// Styled component for the container
const MapContainer = styled.section`
  border: 2px #ccc solid;
  padding: 10px;
  border-radius: 35px;
  margin-bottom: 35px;
`;

// Styled component for the heading
const Heading = styled.h1`
  color: #BC002D;
  text-align: center;
`;

// Styled component for the image
const MapImage = styled.img`
  width: 100%; /* Make the image width responsive */
  height: auto; /* Maintain the aspect ratio */
  display: block; /* Remove any extra space under the image */
  border-radius: inherit; /* Ensures the image border matches the container */
`;

const Map = () => {
  return (
    <MapContainer>
      <Heading>Se kartan nedan var jag befinner mig!</Heading>
      <MapImage src={pic} alt="Map of Japan" />
    </MapContainer>
  );
};

export default Map;
