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
      <a href="/assets/images/dag0/flygplan.jpg">
        <img src="/assets/images/dag0/flygplan.jpg" alt="Flygplan" />
      </a>
      <a href="/assets/images/dag0/flygplats_china.jpg">
        <img src="/assets/images/dag0/flygplats_china.jpg" alt="Flygplats Peking" />
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
      <a href="/assets/images/gallery_img/gokart.jpg">
        <img src="/assets/images/gallery_img/gokart.jpg" alt="Tempel tokyo" />
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

      <a href="/assets/images/gallery_img/dag2/park1.JPG">
        <img src="/assets/images/gallery_img/dag2/park1.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag2/hus.JPG">
        <img src="/assets/images/gallery_img/dag2/hus.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag2/park.JPG">
        <img src="/assets/images/gallery_img/dag2/park.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag2/tree.JPG">
        <img src="/assets/images/gallery_img/dag2/tree.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag2/tempel3.JPG">
        <img src="/assets/images/gallery_img/dag2/tempel3.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag2/budda.JPG">
        <img src="/assets/images/gallery_img/dag2/budda.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag2/gata_asakusa.JPG">
        <img src="/assets/images/gallery_img/dag2/gata_asakusa.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/dag3/gata1.jpg">
        <img src="/assets/images/dag3/gata1.jpg" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/dag3/gata2.jpg">
        <img src="/assets/images/dag3/gata2.jpg" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/dag3/figur.jpg">
        <img src="/assets/images/dag3/figur.jpg" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/jag.JPG">
        <img src="/assets/images/jag.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag5/fagel.jpg">
        <img src="/assets/images/gallery_img/dag5/fagel.jpg" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag5/cool.JPG">
        <img src="/assets/images/gallery_img/dag5/cool.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag5/lampa.JPG">
        <img src="/assets/images/gallery_img/dag5/lampa.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag5/samuraj.JPG">
        <img src="/assets/images/gallery_img/dag5/samuraj.JPG" alt="Tempel tokyo" />
      </a>
      <a href="/assets/images/gallery_img/dag5/utsikt.JPG">
        <img src="/assets/images/gallery_img/dag5/utsikt.JPG" alt="Tempel tokyo" />
      </a>

    </CollectionDesign>
  )
}

export default Collection
