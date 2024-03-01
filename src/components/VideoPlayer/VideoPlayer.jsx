/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useRef} from 'react'
import './VideoPlayer.css'
import video from '../../pexels-venya-pak-7971025 (Original).mp4'

const VideoPlayer = ({playState,setPlayState}) => {

    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target ===player.current){
            setPlayState(false);
        }
    }


  return (
    <div className={`video-player ${playState?'':'hide'}`}  ref={player}onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer