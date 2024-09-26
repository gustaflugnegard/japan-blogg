import Header from "../components/Header"
import Nav from "../components/Nav"
import Collection from "../components/Colllection"
import Bottom from "../components/Bottom"
import Showcase2 from "../components/Showcase2"
import Showcase3 from "../components/Showcase3"

const Gallery = () => {
  return (
    <div>

      <Header />
      <Nav />
      <Showcase3 text={"Följ min instagram @Gustaf_i_japan"} />
      <Showcase2 text={"Se hela kollektionen på Google Photos!"} />
      <Collection />
      <Bottom />
    </div>
  )
}

export default Gallery
