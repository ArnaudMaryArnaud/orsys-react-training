import React, { useState } from "react";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G";
import FlexH3G from "./components/layout/FlexH3G/FlexH3G";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import MemeViewer from "./components/ui/MemeViewer/MemeViewer";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import { DummyMeme } from "./interfaces/common";

const App = () => {
  const [current, setcurrent] = useState(DummyMeme);
  const [images, setImages] = useState([
    {
      id: 0,
      url: "https://th.bing.com/th/id/OIF.njJjZq1cjl1dqPBx6lqClA?w=298&h=180&c=7&r=0&o=5&pid=1.7",
      w: 298,
      h: 180,
    },
  ]);
  return (
    <div className="App">
      <FlexH3G>
        <Header></Header>
        <Navbar></Navbar>
        <FlexW1G>
          <MemeViewer
            meme={current}
            image={images.find((img) => img.id === current.imageId)}
            basePath=""
          ></MemeViewer>
          <MemeForm></MemeForm>
        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>
  );
};

export default App;
