import { useEffect,useState } from "react";
import iframe from '../iframe.json'
import "../css/video.css";

const Video = () => {
const[getUrl,setState]=useState('https://clarovideo.auronplaylive.repl.co/?get=aHR0cHM6Ly9sYXRhbXZvc2xpdmVjbGFyb3ZpZGVvLmFrYW1haXplZC5uZXQvQ29udGVudC9EQVNIX0RBU0hfRksvTGl2ZS9DaGFubmVsKEZPWFNQT1JUU19QUkVNSVVNX0hEKS9tYW5pZmVzdC5tcGQ=&key=OTFhMjFmN2ZmYzAzYjNlNDZmZTM0OGRkMDc1NTc1OGU=&key2=NWZlNjBmZDc3ZGZhNjFkYmY0MWQxYTBhYzk1OTYyMWQ=&aut=true&lang=0')
  useEffect(()=>{
setState(iframe.url)
  },[])

  return <div className="VideoContainer">
    <h1>juego de pelota en vivo hoy</h1>
    <p>Aqui se muestran los partidos en vivo</p>
    <iframe src={getUrl} width="670" height="400" allowFullScreen="true" allowfullscreen="true" allow="autoplay">hola</iframe>
  </div>;
};

export default Video;
