import Header from "../components/Header"
import Nav from "../components/Nav"
import Blogpost1 from "../components/Blogpost1"
import Showcase from "../components/Showcase"
import Bottom from "../components/Bottom"
import Blogpost2 from "../components/Blogpost2"
import Blogpost3 from "../components/Blogpost3"
import Blogpost4 from "../components/Blogpost4"
import Blogpost5 from "../components/Blogpost5"
import Blogpost6 from "../components/Blogpost6"
import Blogpost7 from "../components/Blogpost7"
import Blogpost8 from "../components/Blogpost8"

const Posts = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Showcase text={"Här nedan postas blider och lite tankar"} />
      <Blogpost8 />
      <Blogpost7 />
      <Blogpost6 />
      <Blogpost5 />
      <Blogpost4 />
      <Blogpost3 />
      <Blogpost2 />
      <Blogpost1 />
      <Bottom />
    </div>
  )
}

export default Posts
