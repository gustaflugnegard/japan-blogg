import styled from 'styled-components'

const CollectionDesign = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;

    a {
    flex: 1 1 200px;
    max-width: 400px;
    }

    img{
	width: 100%;
    height: auto;
	object-fit: cover;
	border: 2px #ccc solid;
	border-radius: 2px;
    object-fit: cover
    }
`;

const Collection = () => {
  return (
    <CollectionDesign>
      <a href="/assets/images/background_japan.jpg">
        <img src="/assets/images/background_japan.jpg" alt="Background Japan" />
      </a>
      <a href="/assets/images/mtfuji.webp">
        <img src="/assets/images/mtfuji.webp" alt="Mt Fuji" />
      </a>
      <a href="/assets/images/designer.jpeg">
        <img src="/assets/images/designer.jpeg" alt="Designer" />
      </a>
      <a href="/assets/images/IMG_0400.jpg">
        <img src="/assets/images/IMG_0400.jpg" alt="Background Japan" />
      </a>
      <a href="/assets/images/IMG_0415.jpg">
        <img src="/assets/images/IMG_0415.jpg" alt="Mt Fuji" />
      </a>
      <a href="/assets/images/IMG_0413.jpgg">
        <img src="/assets/images/IMG_0413.jpg" alt="Designer" />
      </a>
    </CollectionDesign>
  )
}

export default Collection
