import Shades from "../components/Shades";
import Form from "../components/Form";
import Content from "../components/Content";
import Intro from "../components/Intro";

import { contentDetails } from "../data";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <Intro 
        content = {<Content details={contentDetails[0]} />}
        shades = {<Shades />}
        form = {<Form />}
      />
      <Features />
    </>
  )
}

export default Home