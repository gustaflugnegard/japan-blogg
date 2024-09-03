import styled from 'styled-components';

// Styled container for the iframe
const MapContainer = styled.div`
    height: 400px; /* Adjust height as needed */
    border: 2px #ccc solid;
    border-radius: 35px;
    margin-bottom: 35px;
`;

// Styled iframe to have rounded corners
const StyledIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 35px; /* Match the container’s border-radius */
    `;

const GoogleMaps = () => {
  return (
    <MapContainer>
      <StyledIframe 
        src="https://www.google.com/maps/d/u/7/embed?mid=1i452TqbaNBuyJq2mXgS-UWh9uJ2vsSo&ehbc=2E312F&noprof=1" >
      </StyledIframe>
    </MapContainer>
  );
};

export default GoogleMaps;
