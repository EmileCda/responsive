/**
 * this function do ...
 */

import { Div50L, Div50R, ImgShadow, Section50 } from "../styles/Home.style";
import img1 from "../images/street-food-nhatrang.jpg";


export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <Section50>
        <Div50L>
          <ImgShadow src={img1} alt="" />
          {/* <ImgShadow src="/src/images/1.png" alt=""/> */}
        </Div50L>

        <Div50R>
          <h1>Nhatrang Food street </h1>
          <p>
          Il est possible de manger dans la rue à Nha Trang, bien qu'il s'agisse d'une pratique pas très commune. Vous trouverez une variété de stands de street food locaux proposant des plats tels que des nouilles, du porc grillé, des soupes, des fruits de mer frais et des collations. Ces stands proposent souvent des prix très abordables et sont parfaits pour un dîner rapide et délicieux. Vous pouvez également trouver des restaurants locaux et des restaurants de chaînes proposant des repas à emporter.
          </p>

          <a href="#">En savoir plus</a>
        </Div50R>
      </Section50>
    </>
  );
}
