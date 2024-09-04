import Header from "../components/Header"
import Nav from "../components/Nav"
import Blogpost1 from "../components/Blogpost1"
import Showcase from "../components/Showcase"
import Bottom from "../components/Bottom"
import Blogpost2 from "../components/Blogpost2"

const Posts = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Showcase text={"Här nedan postas blider och lite tankar"} />
      <Blogpost2 />
      <Blogpost1 />
      <Bottom />
    </div>
  )
}

export default Posts
