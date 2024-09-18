import Header from "../components/Header"
import Nav from "../components/Nav"
import Showcase from "../components/Showcase"
import Collection from "../components/Colllection"
import Bottom from "../components/Bottom"

const Gallery = () => {
  return (
    <div>

      <Header />
      <Nav />
      <Showcase text={"Följ min instagram @gustaf_i_japan"} />
      <Showcase text={"Från och med nu postas hela kollektionen på https://photos.app.goo.gl/hqf3RextY5ovxGSS7"} />

      <Collection />
      <Bottom />
    </div>
  )
}

export default Gallery
