import React from "react";
import coverVideo from "../Assets/video/video-madrid.MOV";
import styled from "styled-components";

const VideoMadrid = () => {
  return (
    <>
    <HeaderTitle>
    <h2>/.Video Experience</h2>
    <div class="elemento-con-texto">
        </div>
  </HeaderTitle>
    <VideoMadridContainer>
      <video className="video" src={coverVideo} autoPlay loop muted />
      <TextContainer>
        {/* <h3></h3>
        <p>

        </p> */}
      </TextContainer>
    </VideoMadridContainer>
    </>
  );
};

export default VideoMadrid;

const VideoMadridContainer = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  @media (max-width: 440px) {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(20, 20, 20, 0.4) 50%,
      rgba(83, 100, 141, 0) 100%
    );
  }

  .video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    opacity: 0.6;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(20, 20, 20, 0.4) 50%,
      rgba(83, 100, 141, 0) 100%
    );
  }
`;

const HeaderTitle = styled.div`
margin-left: 5%;
margin-top:15%;
  h2 {
    font-size: 80px;
    font-family: "APERCU";
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 60px;
      white-space: wrap;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 50%;
  margin-right: 50px;
  text-align: right;

  h3 {
    color: #f9efe4;
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 200;
  }
  p {
    margin-top: 1rem;
    color: black;
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 100;
  }

  @media (max-width: 960px) {
    h3 {
      font-size: 70px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 26px;
      width: 85%;
    }
  }
  @media (max-width: 440px) {
    align-items: start;
    justify-content: end;
    margin-right: 0px;
    text-align: center;
    width: 90%;
    writing-mode: vertical-lr;
    transform: rotate(180deg);

    h3 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      display: none;
    }
  }
`;
