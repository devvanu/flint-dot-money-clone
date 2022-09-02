import Shades from "../components/Shades";
import Form from "../components/Form";
import Content from "../components/Content";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <>
      <Wrapper 
        content = {<Content />}
        shades = {<Shades />}
        form = {<Form />}
      />
    </>
  )
}

export default Home