import Shades from "./Shades";
import Form from "./Form";
import Content from "./Content";
import Wrapper from "./Wrapper";

const Banner = () => {
  return (
    <>
      <Wrapper 
        content = {<Content />}
        shades = {<Shades />}
        form = {<Form />}
      />
    </>
  );
};

export default Banner;