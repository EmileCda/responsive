/**
 * this function do ...
 */

import {
  Card,
  Div30,
  Div70,
  ImgContainer,
  Section6,
} from "../styles/Page30.style";
import chamTower from "../images/cham-tower.jpg";
import nhatrangBeach from "../images/nhatrang-beach.jpg";
import bahoFall from "../images/ba-ho-waterfalls-nhatrang.jpg";
import stoneChurch from "../images/cathedrale-pierre-nhatrang.jpg";
import lonsonPagode from "../images/chua-long-son-nhatrang.jpg";
import yersinMusuem from "../images/bao-tang-yersin-nha-trang.jpg";
export default function Page30() {
  return (
    <>
      <h1>Page30</h1>

      <Section6>
        <Div70>
          <Div30>
            <Card>
              <a href="#">
                <ImgContainer>
                  <img src={chamTower} alt="" />
                </ImgContainer>

                <h1>Cham Towers</h1>

                <p>
                  Les tours Nagar Cham sont des tours cham, des monuments
                  religieux bouddhistes construits à Nha Trang, au Vietnam.
                  Elles sont situées sur un petit îlot à environ 500 mètres de
                  la côte de Nha Trang. Les tours sont également connues sous le
                  nom de Thap Ba (Tours de l'Ancien Baigneur), et sont l'un des
                  sites les plus visités de Nha Trang. Elles sont composées de
                  quatre tours principales, qui sont construites à partir du
                  VIIe siècle et qui sont décorées avec des sculptures et des
                  inscriptions. Les tours sont dédiées à la déesse de la mer, Po
                  Nagar, qui était adorée par les habitants de la région.{" "}
                </p>
              </a>
            </Card>
          </Div30>
          <Div30>
            <Card>
              <a href="#">
                <ImgContainer>
                  <img src={nhatrangBeach} alt="" />
                </ImgContainer>

                <h1>Nha Trang Beach</h1>

                <p>
                  Plage de Nha Trang est une des plus célèbres plages de la côte
                  centrale du Vietnam. Avec ses eaux cristallines et ses sables
                  blancs, la plage de Nha Trang est un lieu de vacances
                  populaire pour les touristes et les habitants du Vietnam. La
                  plage est bordée de nombreux hôtels, restaurants et bars,
                  offrant une variété de divertissements. La plage est également
                  célèbre pour ses activités de snorkeling et de plongée, ainsi
                  que pour son marché nocturne. La plage de Nha Trang est un
                  endroit idéal pour profiter du soleil, de la mer et des
                  paysages spectaculaires.
                </p>
              </a>
            </Card>
          </Div30>
          <Div30>
            <Card>
              <a href="#">
                <ImgContainer>
                <img src={bahoFall} alt="" />
                </ImgContainer>

                <h1>cascade Ba Ho</h1>

                <p>
                  La Cascades de Ba Ho est une cascade située dans la province
                  de Ninh Thuận, au Vietnam. La cascade se jette dans la rivière
                  Ba Ho et est entourée par une forêt luxuriante. La cascade est
                  une attraction touristique populaire, avec de nombreuses
                  activités de loisirs et de camping disponibles. Il y a une
                  plage de sable blanc et des baignoires naturelles pour nager.
                  La cascade est également connue pour sa beauté naturelle et
                  ses sources d'eau claire et fraîche.
                </p>
              </a>
            </Card>
          </Div30>
          <Div30>
            <Card>
              <a href="#">
                <ImgContainer>
                <img src={stoneChurch} alt="" />
                </ImgContainer>

                <h1>Notre-Dame de Nha Trang</h1>

                <p>
                  La cathédrale Notre-Dame de Nha Trang est une cathédrale
                  catholique romaine située à Nha Trang, au Vietnam. Elle est
                  l'une des plus grandes et des plus anciennes cathédrales du
                  Vietnam. La cathédrale Notre-Dame de Nha Trang est située au
                  centre de la ville, dans le quartier des affaires. Elle a été
                  construite par des missionnaires français en 1902 et a été
                  consacrée en 1911. La cathédrale est construite dans un style
                  gothique français. Elle est ornée d'un grand vitrail
                  représentant la Vierge Marie et a une hauteur de près de 40
                  mètres. La cathédrale est ouverte à tous et offre des services
                  religieux en langue française le dimanche.
                </p>
              </a>
            </Card>
          </Div30>
          <Div30>
            <Card>
              <a href="#">
                <ImgContainer>
                <img src={lonsonPagode} alt="" />
                </ImgContainer>

                <h1>Chùa Long Sơn</h1>

                <p>
                Le temple Long Son est un temple bouddhiste situé à Nha Trang, au Vietnam. C'est un lieu sacré pour les habitants de la ville, et il est très populaire auprès des visiteurs. Construit en 1886, le temple est dédié à l'enlightenened buddha et il est entouré de fleurs et de plantes tropicales. Il est également entouré de statues de dragons qui sont censés protéger le temple et les gens qui le visitent. La visite du temple offre une variété d'activités, y compris les visites des salles d'exposition, la méditation et le pèlerinage à travers les différentes pièces. Le temple est également un lieu de célébration pour les événements religieux et les festivals. Une fois par an, le temple organise un festival de fleurs et des feux d'artifice pendant lequel les visiteurs peuvent admirer l'architecture du temple et profiter des spectacles et des célébrations.
                </p>
              </a>
            </Card>
          </Div30>
          <Div30>
            <Card>
              <a href="#">
                <ImgContainer>
                <img src={yersinMusuem} alt="" />
                </ImgContainer>

                <h1>Le Musée Yersin</h1>

                <p>Le Musée Yersin à Nha Trang est un musée situé dans la ville de Nha Trang, au Vietnam, sur la côte centrale du pays. Il est consacré à la vie et aux travaux du médecin suisse-français Alexandre Yersin, qui a découvert le bacille de la peste et contribué au développement de la ville. Le musée expose des documents et des photos sur la vie et les travaux de Yersin ainsi que des artefacts et des objets lui ayant appartenu. Le musée abrite également une salle consacrée à l'histoire médicale et à la médecine traditionnelle vietnamienne.</p>
              </a>
            </Card>
          </Div30>
        </Div70>
      </Section6>
    </>
  );
}
