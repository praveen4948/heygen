import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { InstantAvatar } from "./InstantAvatar";
import { PhotoAvatar } from "./PhotoAvatar";
import Template from "./Template";

export const Home = () => {
  const [instatnt, setInstatnt] = useState(true);
  const [photo, setPhoto] = useState(false);
  const [template, setTemplate] = useState(false);
  const handleinstant = () => {
    setInstatnt(true);
    setPhoto(false);
    setTemplate(false)
  }
  const handlePhoto = () => {
    setInstatnt(false);
    setPhoto(true);
    setTemplate(false)
  }
  const handleTemplate = () => {
    setInstatnt(false);
    setPhoto(false);
    setTemplate(true)
  }
  return (
    <div>
      <div className="top">
        <div className="left">
            <div className="heading"><i class="fa-solid fa-user-plus"></i> Create Avatar</div>
            <div className="button_card">
              <div onClick={handleinstant} className={`card ${instatnt ? 'active_button' : ''}`}>
                <img src="https://static.heygen.ai/heygen/home/home-ia-icon.png"/>
                <div className="title">Instant Avatar</div>
                <p>Get your digital twin in minutes!</p>
              </div>
              <div onClick={handlePhoto} className={`card ${photo ? 'active_button' : ''}`}>
                <img src="https://static.heygen.ai/heygen/home/home-tp-icon.png"/>
                <div className="title">Photo Avatar</div>
                <p>Animate your photo with text</p>
              </div>
            </div>
        </div>
        <div className='ver_line'></div>
        <div className="right">
          <div className="heading"><i class="fa-solid fa-video"></i> Create Video</div>
          <div className="button_card">
              <div onClick={handleTemplate} className={`card ${template ? 'active_button' : ''}`}>
                <img src="https://static.heygen.ai/heygen/home/home-template-icon.png"/>
                <div className="title">Template</div>
                <p>Start from a template</p>
              </div>
              <div className={`card`}>
                <img src="https://static.heygen.ai/heygen/home/home-aiscript-icon.png"/>
                <div className="title">AI Script</div>
                <p>Start from AI script Generation</p>
              </div>
          </div>
        </div>
      </div>
      <div className="bottom">
          {instatnt && <InstantAvatar/>}
          {photo && <PhotoAvatar/>}
          {template && <Template/>}
      </div>  
    </div>
  );
};
