import React, { useState, useEffect } from "react";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G";
import FlexH3G from "./components/layout/FlexH3G/FlexH3G";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import WelcomePage from "./components/ui/WelcomePage/WelcomePage";
import { MemeThumbnailStoredData } from "./components/ui/MemeThumbnail/MemeThumbnail";
import { CurrentMemeViewer } from "./components/ui/MemeViewer/MemeViewer";
import Header from "./components/ui/Header/Header";
import { MemeFormStoredData } from "./components/MemeForm/MemeForm";
import { DummyMeme } from "./interfaces/common";
import { store } from "./store/store";
import { REST_ADR } from "./constantes/constantes";
import { Routes, Route, useParams } from "react-router-dom";
import { changeCurrent, clear } from "./store/current";
import { useSelector } from "react-redux";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./pdfComponents/PdfDocument/pdfDocument";

const App = () => {
  const [current, setcurrent] = useState(DummyMeme);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(REST_ADR + "/images")
      .then((response) => response.json())
      .then((a) => setImages(a));
  }, []);

  return (
    <div className="App">
      <FlexH3G>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/thumbnail" element={<MemeThumbnailStoredData />} />
          <Route path="/editor" element={<PageEditor />} />
          <Route path="/editor/:id" element={<PageEditor />} />
          <Route path="/pdf" element={<PdfThumbnail />} />
        </Routes>
        <Footer></Footer>
      </FlexH3G>
    </div>
  );
};

/** Should be in a package page not here */
function PageEditor() {
  const params = useParams();

  useEffect(() => {
    const current = store
      .getState()
      .ressources.memes.find((m) => m.id === Number(params.id));
    if (undefined !== current) {
      store.dispatch(changeCurrent(current));
    } else {
      store.dispatch(clear());
    }
  }, [params, store.getState()]);

  return (
    <FlexW1G>
      <CurrentMemeViewer basePath=""></CurrentMemeViewer>
      <MemeFormStoredData />
    </FlexW1G>
  );
}

function PdfThumbnail() {
  const memes = useSelector((s) => s.ressources.memes);
  const images = useSelector((s) => s.ressources.images);

  return (
    <div>
      {memes.map((m) => (
        <div key={"pdf-" + m.id}>
          <PDFViewer height={"500px"} width={"500px"}>
            <PdfDocument meme={m} />
          </PDFViewer>
          <PDFDownloadLink
            fileName={m.titre + ".pdf"}
            document={<PdfDocument meme={m} />}
          >
            dl: {m.titre}
          </PDFDownloadLink>
        </div>
      ))}
    </div>
  );
}

export default App;
