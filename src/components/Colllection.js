import styled from 'styled-components'

const CollectionDesign = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;

    a {
    flex: 1 1 400px;
    max-width: 1000px;
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
      <a href="/assets/images/dag0/flygplan.JPG">
        <img src="/assets/images/dag0/flygplan.JPG" alt="Flygplan" />
      </a>
      <a href="/assets/images/dag0/flygplats_china.JPG">
        <img src="/assets/images/dag0/flygplats_china.JPG" alt="Flygplats Peking" />
      </a>
      <a href="/assets/images/dag0/torn.JPG">
        <img src="/assets/images/dag0/torn.JPG" alt="Sky tree" />
      </a>
      <a href="/assets/images/dag1/gata.JPG">
        <img src="/assets/images/dag1/gata.JPG" alt="Gata" />
      </a>
      <a href="/assets/images/dag1/ramen.JPG">
        <img src="/assets/images/dag1/ramen.JPG" alt="Ramen noodles" />
      </a>
      <a href="/assets/images/dag1/tempel.JPG">
        <img src="/assets/images/dag1/tempel.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/city.JPG">
        <img src="/assets/images/gallery_img/city.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/gata1.JPG">
        <img src="/assets/images/gallery_img/gata1.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/gokart.JPG">
        <img src="/assets/images/gallery_img/gokart.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/hotel.JPG">
        <img src="/assets/images/gallery_img/hotel.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/ramen1.JPG">
        <img src="/assets/images/gallery_img/ramen1.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/temel2.JPG">
        <img src="/assets/images/gallery_img/temel2.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/tempel1.JPG">
        <img src="/assets/images/gallery_img/tempel1.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/trees.JPG">
        <img src="/assets/images/gallery_img/trees.JPG" alt="Tempel tokyo" />
      </a>


    </CollectionDesign>
  )
}

export default Collection
