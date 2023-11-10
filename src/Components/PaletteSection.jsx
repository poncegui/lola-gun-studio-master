import "./paletteSection.css";

import React from "react";

const PaletteSection = () => {
  return (
    <div className="block">
      <div className="heading-section sticky">
        <div className="heading-section__left">
          <h2 className="heading-section__title">Color Palette</h2>
        </div>
      </div>
      <div className="palette">
        <p className="palette__desc">
          This website uses a color palette of <strong>2</strong> colors
        </p>
        <div className="palette__list">
          <ul
            className="list-palette list-palette--h js-palette"
            data-controller="palette"
          >
            <li>
              <div
                className="list-palette__item js-palette-item"
                style="background: #000;  --color-card: white "
              >
                <div className="list-palette__box">
                  <div className="list-palette__header">
                    <div className="list-palette__name">
                      <strong>HEX</strong> #000
                    </div>
                    <div className="list-palette__bts">
                      <a href="/websites/%23000/">
                        <span
                          className="list-palette__bt"
                          style=" color: white "
                        >
                          <svg
                            className="ico-svg"
                            viewBox="0 0 20 20"
                            width="20"
                          >
                            {/* <use xlink:href="https://www.awwwards.com/assets/redesign/images/sprite-icons.svg#lupe"></use> */}
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="list-palette__footer">
                    <span className="list-palette__aa">Aa</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div
                className="list-palette__item js-palette-item"
                style="background: #ffffff; "
              >
                <div className="list-palette__box">
                  <div className="list-palette__header">
                    <div className="list-palette__name">
                      <strong>HEX</strong> #ffffff
                    </div>
                    <div className="list-palette__bts">
                      <a href="/websites/%23ffffff/">
                        <span className="list-palette__bt" style="">
                          <svg
                            className="ico-svg"
                            viewBox="0 0 20 20"
                            width="20"
                          >
                            {/* <use xlink:href="https://www.awwwards.com/assets/redesign/images/sprite-icons.svg#lupe"></use> */}
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="list-palette__footer">
                    <span className="list-palette__aa">Aa</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaletteSection;
