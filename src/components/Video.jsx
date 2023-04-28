import { useEffect,useState } from "react";
import iframe from '../iframe.json'
import "../css/video.css";

const Video = () => {
const[getUrl,setState]=useState('https://nbamlb.live/canales/hls.php?url=aHR0cHM6Ly9nbWIyLmxpdmVtb2RvLmNsaWNrL3VnMVhGQ3R6ZmVCelZuRUVnbUN6SUEvMTY4MjY2ODMyMS8zMjM4MzAzMDNhNjUzMjNhMzE2MTMwMzAzYTM5MzYzMzYzM2E2NjM2MzAzNTNhNjUzOTYxMzAzYTM0Mzg2NDM2M2E2NjY1MzYzOS9mZjEwMS9wbGF5bGlzdC5tM3U4P2I9MQ==')
  useEffect(()=>{
setState(iframe.url)
  },[])

  return <div className="VideoContainer">
    <h2>Estream </h2>
    <p>Aqui se muestran los partidos en vivo</p>
    <iframe src={getUrl} width="640" height="360" allowFullScreen="true" allowfullscreen="true" allow="autoplay">hola</iframe>
  </div>;
};

export default Video;
