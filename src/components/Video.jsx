import { useEffect, useState, useRef } from "react";
import iframe from "../iframe.json";
import "../css/video.css";

const Video = () => {
  const refiframe = useRef(null);
  const [getUrl, setState] = useState(
    "https://clarovideo.auronplaylive.repl.co/?get=aHR0cHM6Ly9sYXRhbXZvc2xpdmVjbGFyb3ZpZGVvLmFrYW1haXplZC5uZXQvQ29udGVudC9EQVNIX0RBU0hfRksvTGl2ZS9DaGFubmVsKEZPWFNQT1JUU19QUkVNSVVNX0hEKS9tYW5pZmVzdC5tcGQ=&key=OTFhMjFmN2ZmYzAzYjNlNDZmZTM0OGRkMDc1NTc1OGU=&key2=NWZlNjBmZDc3ZGZhNjFkYmY0MWQxYTBhYzk1OTYyMWQ=&aut=true&lang=0"
  );
const FullScrean = ()=>{
  refiframe.current.requestFullscreen();
}
  useEffect(() => {
    setState(iframe.url);
  }, []);

  return (
    <div className="VideoContainer">
      <h1>juego de pelota en vivo hoy</h1>
      <p>Aqui se muestran los partidos en vivo</p>
      <button id="Fullscreen" onClick={FullScrean}>Pantalla Completa</button>
      <iframe
      ref={refiframe}
     
        allow="encrypted-media"
        src="https://www.youtube.com/embed/9ZUXZcyrewk?si=SCPE_fbcq8_BEns3"
        width="670"
        height="400"
        allowFullScreen="true"
        allowfullscreen="true"
      >
        hola
      </iframe>
    </div>
  );
};

export default Video;
