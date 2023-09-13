import React, { useState, useEffect } from "react";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G";
import FlexH3G from "./components/layout/FlexH3G/FlexH3G";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import MemeViewer from "./components/ui/MemeViewer/MemeViewer";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import { DummyMeme } from "./interfaces/common";
import {store} from "./store/store"
import {REST_ADR} from "./constantes/constantes";

const App = () => {
  const [current, setcurrent] = useState(DummyMeme);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(REST_ADR + "/images").then((response) => response.json()).then((a) => setImages(a));
  }, [])
  
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
          <MemeForm
          images={images}
            meme={current}
            onMemeChange={(newMeme) => {
              setcurrent(newMeme);
            }}
          ></MemeForm>
        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>
  );
};

export default App;
