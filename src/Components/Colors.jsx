import React from "react";
import styled from "styled-components";

const ColorsSection = ({ colors, typ }) => {
  return (
    <ColorsContainer>
      <ColorsTitle>
        <h2>/.Trabajamos para ayudarte a darle personalidad a tu negocio.</h2>
      </ColorsTitle>
      <ColorsText>
        <div className="rgba">
          <p className="rgba-text" aria-label="color blanco">
            #ffffff
          </p>
          <p className="colorA">{colors}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">#C0C0C0</p>
          <p className="colorB">{colors}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">#808080</p>
          <p className="colorC">{colors}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">#404040</p>
          <p className="colorD">{colors}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">#000000</p>
          <p className="colorE">{colors}</p>
        </div>
        <div class="ActoContainerBlue">Acto I.</div>
      </ColorsText>
      {/* 
      <ColorsText>
        <div className="rgba">
          <p className="rgba-text">font-family: 'Dancing Script';</p>
          <p className="typA">{typ}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">font-family: 'Roboto';</p>
          <p className="typB">{typ}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">font-family: "APERCU";</p>
          <p className="typC">{typ}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">font-family: 'Montserrat';</p>
          <p className="typD">{typ}</p>
        </div>
        <div className="rgba">
          <p className="rgba-text">font-family: 'Quicksand';</p>
          <p className="typE">{typ}</p>
        </div>
      </ColorsText> */}
    </ColorsContainer>
  );
};
export default ColorsSection;

const ColorsContainer = styled.section`
  margin: 5% auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #333;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 7rem;

  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

const ColorsTitle = styled.div`
  text-align: right;
  width: 70%;
  /* display: flex;
  flex-direction:column-gap; */

  h2 {
    font-size: 80px;
    font-family: "APERCU";
    color: #f9efe4;
    padding: 3% 5%;
  }

  @media (max-width: 440px) {
    h2 {
      font-size: 40px;
      white-space: wrap;
    }
  }
`;

const ColorsText = styled.div`
  display: flex;
  width: 30%;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  background-color: #f9efe4;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: left;
  }

  p {
    font-family: "APERCU";
    font-size: 60px;
  }
  @media (max-width: 860px) {
    p {
      font-size: 70px;
    }
  }

  @media (max-width: 440px) {
    flex-direction: column;
    p {
      font-size: 50px;
    }
  }
  .colorA {
    color: RGBA(255, 255, 255, 1);
    font-family: "APERCU";
  }
  .rgba-text {
    color: RGBA(0, 0, 0, 1);
    font-size: 1rem;
  }
  .rgba {
    text-align: start;
    margin-bottom: 1rem;
  }
  .colorB {
    color: RGBA(192, 192, 192, 1);
    font-family: "APERCU";
  }
  .colorC {
    color: RGBA(128, 128, 128, 1);
    font-family: "APERCU";
  }
  .colorD {
    color: RGBA(64, 64, 64, 1);
    font-family: "APERCU";
  }
  .colorE {
    color: RGBA(0, 0, 0, 1);
    font-family: "APERCU";
  }
  .typA {
    font-family: "Dancing Script", cursive;
  }
  .typB {
    font-family: "Roboto", sans-serif;
  }
  .typC {
    font-family: "APERCU";
  }
  .typD {
    font-family: "Montserrat Alternates", sans-serif;
  }
  .typE {
    font-family: "Quicksand", sans-serif;
  }
`;
