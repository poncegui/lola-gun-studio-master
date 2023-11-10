import "./Cover.css";

import Burger from "../Components/Burger";
import React from "react";
import TitleSection from "./TitleSection";
import coverVideo from "../Assets/images-cover/image-cover-keyboard.jpg";
import styled from "styled-components";

const Cover = () => {
  return (
    <>
      <CoverContainer>
        <Burger />
        <img className="background" src={coverVideo} alt="views" />
        <SurfingWombatsTitleContainer>
          <h1>Lola Gun</h1>
        </SurfingWombatsTitleContainer>
        <p>Web ∼ Design </p>
      </CoverContainer>
      <TitleSection
        title="WEB ECONÓMICAS ∼ DISEÑOS CREATIVOS"
        inverse
        margintTop
      />
    </>
  );
};

export default Cover;

const CoverContainer = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;
  /* box-shadow: inset 0 0 0 1000px rgba(246, 247, 245, 0.3); */
  display: flex;
  flex-direction: column;
  align-items: center;

  .background {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    opacity: 0.7;
  }

  p {
    margin-top: 1rem;
    color: #3e3e3d;
    font-size: 2.5rem;
  }

  @media (max-width: 960px) {
    text-align: center;
    p {
      text-align: center;
      font-size: 1.5;
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
      font-size: 22px;
      width: 70%;
    }
  }
`;

const SurfingWombatsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 12rem;

  @media (max-width: 440px) {
    margin-top: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    color: #b95d5b;
    max-width: 800px;
    letter-spacing: 5px;
    font-weight: 300;
  }
`;
