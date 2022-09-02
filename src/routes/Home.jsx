import Shades from "../components/Shades";
import Form from "../components/Form";
import Content from "../components/Content";
import Wrapper from "../components/Wrapper";

import { contentDetails } from "../data";

const Home = () => {
  return (
    <>
      <Wrapper 
        content = {<Content details={contentDetails[0]} />}
        shades = {<Shades />}
        form = {<Form />}
      />
    </>
  )
}

export default Home