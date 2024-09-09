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
      <Collection />
      <Bottom />
    </div>
  )
}

export default Gallery
