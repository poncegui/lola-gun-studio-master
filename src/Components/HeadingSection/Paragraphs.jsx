import "./HeaderSection.css";

import React from "react";
import styled from "styled-components";

export const WebDesignContainer = () => {
  return (
    <>
      <WebDesingText>
        <strong> Webs Creativas </strong> — Ecommerce —
        <strong> Posicionamiento SEO </strong> — Accesibles —
        <strong> Mantenimiento + HOSTING </strong>
      </WebDesingText>
      <WebDesingText>
        <strong> Webs Creativas </strong> — Ecommerce —
        <strong> Posicionamiento SEO </strong> — Accesibles —
        <strong> Mantenimiento + HOSTING </strong>
      </WebDesingText>
      <WebDesingText>
        <strong> Webs Creativas </strong> — Ecommerce —
        <strong> Posicionamiento SEO </strong> — Accesibles —
        <strong> Mantenimiento + HOSTING </strong>
      </WebDesingText>
    </>
  );
};

export const GraphicDesign = () => {
  return (
    <WebDesingText>
      <strong> Branding </strong> — Identidad digital —
      <strong> Diseño gráfico </strong>
    </WebDesingText>
  );
};

export const MarketingDigital = () => {
  return (
    <WebDesingText>
      <strong>Asesoramiento en redes sociales</strong> — Publicaciones
      personalizadas —<strong> Interacción con tu audiencia</strong>
    </WebDesingText>
  );
};

const WebDesingText = styled.div`
  margin-top: 0.5%;
`;
WebDesingText.displayName = "Bloques de Textos";
