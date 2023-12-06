import React, { useState } from "react";
import Header from "../components/Header";
import imgHeader from "../styles/Assets/images/img1.png";
import logodc from "../styles/Assets/logos/logoDC.png";
import img1 from "../styles/Assets/images/img2.png";
import img2 from "../styles/Assets/images/img3.png";
import img3 from "../styles/Assets/images/img4.png";
import img4 from "../styles/Assets/images/img5.png";
import img5 from "../styles/Assets/images/img6.png";
import img6 from "../styles/Assets/images/img7.png";
import img7 from "../styles/Assets/images/img8.png";
import img8 from "../styles/Assets/images/img9.png";
import img9 from "../styles/Assets/images/img10.png";
import img10 from "../styles/Assets/images/img12.png";
import polygon_G from "../styles/Assets/icones/Polygon-1.png";
import polygon_D from "../styles/Assets/icones/Polygon.png";
import guill1 from "../styles/Assets/icones/icon_guillemets_1.png";
import guill2 from "../styles/Assets/icones/icon_guillemets_2.png";
import "../styles/Home.css";

const Home = () => {
  // les props dans header
  const [titre, setTitre] = useState(
    <div className="col-md-9 d-flex align-items-center justify-content-center ">
      <img src={logodc} className="rs-logodc" alt="" />
      <div>
        <h1 className="titreHeader">SUPERMAN</h1>
        <h2 className="s-titreHeader">L HOMME D ACIER</h2>
      </div>
    </div>
  );

  return (
    <div>
      <Header titre={titre} imgHeader={imgHeader} />
      <section className="container text-white p-3 ">
        <div className="ms-3 ">
          <h2>SUPERMAN AU CINEMA</h2>
          <p className="text-justify mt-2 mb-2">
            Dans la version actuelle de son histoire, Superman est né sur la
            planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé
            dans un vaisseau spatial par son père, le scientifique Jor-El, et sa
            mère, Lara, car la planète était sous la menace d'une destruction
            totale.Le vaisseau quitta Krypton juste avant l'explosion
            fatidique... Au terme d'un très long voyage, il atterrit sur la
            planète Terre. Kal-El est trouvé par un couple de fermiers de
            Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas
            d'enfant, décident alors de l'adopter et de garder le secret sur son
            origine. Kal-El est rebaptisé « Clark Joseph Kent » et grandit
            entouré de ses amis Lana Lang (son premier amour) et Pete Ross
            jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son
            adolescence.Jeune adulte, Clark décide de s'installer à Metropolis
            pour devenir journaliste. Il y est engagé par Perry White, le
            rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui
            sont chers ainsi que les habitants de la Terre, Clark revêt son
            costume et devient Superman, l’homme d’acier aux yeux du monde
          </p>
          <div className="d-flex justify-content-between flex-wrap mt-4">
            <div className="cadreImg mt-3">
              <img src={img1} alt="" />
            </div>
            <div className="cadreImg mt-3">
              <img src={img2} alt="" />
            </div>
            <div className="cadreImg mt-3">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container text-white p-3 mt-4">
        <div className="ms-3 ">
          <h2>NÉMÉSIS</h2>
          <p className="text-justify mt-2 mb-2">
            Superman mène une lutte sans fin contre de nombreux adversaires, son
            adversaire le plus connu étant le milliardaire Lex Luthor, fils de
            Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira
            notamment par devenir président des États-Unis, ce qui participera à
            faire de lui le pire ennemi de Clark. Doomsday, une abomination
            génétique qui souhaite tout détruire sur son passage, sera celui qui
            réussira à tuer Superman. Zod est un kryptonien qui fut condamné à
            l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les
            autorités. Il est libéré et vient sur Terre pour la conquérir mais
            est arrêté par Superman. Étant kryptonien, Zod possède les mêmes
            pouvoirs que Superman, et constitue donc l'un de ses plus dangereux
            adversaires
          </p>
          <div className="d-flex justify-content-between flex-wrap mt-4">
            <div className="cadreImg mt-3">
              <img src={img4} alt="" />
            </div>
            <div className="cadreImg mt-3">
              <img src={img5} alt="" />
            </div>
            <div className="cadreImg mt-3">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container text-white p-3 mt-4">
        <div className="ms-3 ">
          <h2>ALLIÉS</h2>
          <p className="text-justify mt-2 mb-2">
            Jor-El était le père biologique de Kal-El, ainsi que le savant le
            plus célèbre de Krypton et un membre influent du Conseil des
            Sciences. Lorsque Krypton s’effondre il place une version
            impuissante de lui même dans le vaisseau emportant Kal-El vers la
            Terre afin de lui apporter les réponses à ses questions quand il
            grandira. Sur Terre Clark est pris en charge par Jonathan et Martha
            Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort,
            Clark pourra compter sur le soutien indéféctible de sa mère. Une
            fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra
            sa partenaire et son seul “véritable amour”
          </p>
          <div className="d-flex justify-content-between flex-wrap mt-4">
            <div className="cadreImg mt-3">
              <img src={img7} alt="" />
            </div>
            <div className="cadreImg mt-3">
              <img src={img8} alt="" />
            </div>
            <div className="cadreImg mt-3">
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid text-white p-3 mt-4">
        <div className="bgSection">
          <div className="container text-white p-3 mt-4">
            <div className="ms-3 ">
              <h2>BATMAN V SUPERMAN</h2>
              <p className="text-justify mt-2 mb-2">
                Le monde n’est pas assez grand pour deux super héros. Alors que
                Superman se battait contre Zod, l’affrontement fait des dégats
                et détruit partiellement la ville de Métropolis. Bruce Wayne
                alors présent dans la ville assiste, impuissant, à
                l’effondrement de la ville qui fait beaucoup de victimes. Wayne
                est alors persuadé que Superman causera un jour la perte de
                l'Humanité et qu'il est inévitable de se préparer à l'éliminer.
                Devenu méfiant il se demande si l'homme de fer, cet
                extraterrestre de Krypton, qui peut à lui seul détruire le monde
                d'une simple pichenette, décidera un jour de ne plus défendre la
                Terre, voire même de causer sa perte.
              </p>
              <p className="text-justify mt-2 mb-2">
                De son côté Superman d’une part cherche à se défendre mais
                retourne l’offensive contre Batman. Ce dernier n'est plus que
                l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane
                et cruel à la suite du meurtre de son ancien partenaire Robin
                par le Joker, il n'hésite plus à violer son code moral en
                éliminant et marquant au fer les criminels. Superman souhaite
                simplement lui rappeler le code moral des “justicier” en usant
                de la force s’il le faut pour que Batman cesse son comportement
                abusif.
              </p>
              <h2>MULTIMÉDIA</h2>
              <section id="batsup">
                <div className="container ">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner ">
                      <div className="carousel-item active">
                        <div className="box d-flex justify-content-center">
                          <div className="col-6 d-flex">
                            <div className="box-contenu d-flex align-items-center">
                              <div className="col-3">
                                <img
                                  src={img10}
                                  className="img-box"
                                  alt="polygon_G"
                                  srcSet=""
                                />
                              </div>
                              <div className="col-9 box-text">
                                <div className="grotesk">
                                  <h5>A c t i o n , A d v e n t u r e </h5>
                                  <h5>Superman Man of Steel</h5>
                                  <h5 className="text-warning"> IMDB:7.1</h5>
                                  <p>
                                    Clark Kent, malgré son apparence humaine
                                    normale, est l'un des derniers membres d'une
                                    race éteinte. Il se retrouve forcé de
                                    révéler son identité lorsque la Terre est
                                    envahie par une armée de survivants qui
                                    menacent détruire la planète.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="box d-flex justify-content-center">
                          <div className="col-6 d-flex">
                            <div className="box-contenu d-flex align-items-center">
                              <div className="col-3">
                                <img
                                  src={img10}
                                  className="img-box"
                                  alt="polygon_D"
                                  srcSet=""
                                />
                              </div>
                              <div className="col-9 box-text">
                                <div className="grotesk">
                                  <h5>A c t i o n , A d v e n t u r e </h5>
                                  <h5>Superman (1978)</h5>
                                  <h5 className="text-warning"> IMDB: 7,4</h5>
                                  <p>
                                    Un orphelin extra-terrestre est envoyé de sa
                                    planète mourante sur Terre, où il grandit et
                                    devient le premier et le plus grand
                                    super-héros de sa planète d'adoption.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="box d-flex justify-content-center">
                          <div className="col-6 d-flex">
                            <div className="box-contenu d-flex align-items-center">
                              <div className="col-3">
                                <img
                                  src={img10}
                                  className="img-box"
                                  alt="img12"
                                  srcSet=""
                                />
                              </div>
                              <div className="col-9 box-text">
                                <div className="grotesk">
                                  <h5>A c t i o n , A d v e n t u r e </h5>
                                  <h5>Batman V Superman</h5>
                                  <h5 className="text-warning"> IMDB: 6,4</h5>
                                  <p>
                                    Craignant que les actions de Superman ne
                                    soient pas contrôlées, Batman affronte
                                    l'homme d'acier, tandis que le monde débat
                                    du type de héros dont il a vraiment besoin.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span className="" aria-hidden="true">
                        <img src={polygon_G} alt="" srcSet="" />
                      </span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span className="" aria-hidden="true">
                        <img src={polygon_D} alt="" srcSet="" />
                      </span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <section className="container text-white p-3  ">
        <div className="d-flex justify-content-center w-100">
          <iframe
            width="90%"
            height="100%"
            src="https://www.youtube.com/embed/yP7J0rlFkrg?si=4Wdk9fu8AF2tsXkL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <div className="container-fluid d-flex justify-content-center">
        <div id="formulaire">
          <div className="bg-formulaire d-flex justify-content-center">
            <div className="row justify-content-center w-100">
              <form className="text-white" onSubmit={"onSubmitMessage"}>
                <p>PRENOMS CONTACT</p>
                <label htmlFor="LABEL1">ADRESSE EMAIL</label>
                <input
                  className="form-control f-formulaire"
                  placeholder="Adresse email"
                  id="LABEL1"
                  type="text"
                  required
                />
                <label htmlFor="LABEL2">NEWSLETTER</label>{" "}
                <span>
                  En cochant cette case vous acceptez de recevoir l’actualité
                  concernant les aventures de Batman :
                </span>
                <input type="checkbox" id="LABEL2" required />
                <select className="form-control f-formulaire" required>
                  <option value="" disabled selected hidden>
                    Choisissez la fréquence à laquelle vous souhaitez recevoir
                    votre newsletter
                  </option>
                  <option value="">Une fois par semaine</option>
                  <option value="">
                    Une fois toutes les deux semaines (2 fois par mois)
                  </option>
                  <option value="">Une fois par mois</option>
                  <option value="">Une fois toutes les trois mois</option>
                  <option value="">Une fois toutes les six mois</option>
                </select>
                <div className="choice">
                  <input
                    type="radio"
                    name="choix"
                    className="choix choix1"
                    id="Link"
                  />
                  <label htmlFor="Link">Des films</label>

                  <input
                    type="radio"
                    name="choix"
                    className="choix choix2"
                    id="b"
                  />
                  <label htmlFor="b">Des comics</label>

                  <input
                    type="radio"
                    name="choix"
                    className="choix choix3"
                    id="c"
                  />
                  <label htmlFor="c">De tout</label>
                </div>
                <label htmlFor="LABEL4">MESSAGE</label>
                <input
                  className="form-control f-formulaire"
                  placeholder="Souhaitez vous recevoir des news "
                  type="text"
                  id="LABEL4"
                  required
                />
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <button className="btn-confirmer text-center">
                    CONFIRMER
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex h-50 justify-content-center ">
          <div className="col-md-3 d-flex align-items-start justify-content-center">
            <img src={guill1} alt="" />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <p className="text-center">- Que représente le S ?</p>
            <p className="text-center">
              - Ce n’est pas un S. Sur ma planète cela signifie espoir.
            </p>

            <h5>Man Of Steel, Lois Lane et Clark Kent.</h5>
            <div className="center">
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde color"></label>
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde"></label>
              <label htmlFor="" className="ronde"></label>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-end justify-content-center">
            <img src={guill2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
