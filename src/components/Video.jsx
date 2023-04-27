import { useEffect,useState } from "react";
import iframe from '../iframe.json'
import "../css/video.css";

const Video = () => {
const[getUrl,setState]=useState('https://mega.nz/embed/oH1CnDqA#ruAbDoEHDzBFC-O1J7_MFBpY91z-h0xDbzmTbtqjl-M')
  useEffect(()=>{
setState(iframe.url)
  },[])

  return <div className="VideoContainer">
    <h2>Estream </h2>
    <p>Aqui se muestran los partidos en vivo</p>
    <iframe src={getUrl} width="640" height="360">hola</iframe>
  </div>;
};

export default Video;
