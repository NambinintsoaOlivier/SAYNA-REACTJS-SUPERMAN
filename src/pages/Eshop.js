import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import imgHeader from "../styles/Assets/images/img20.png";
import fleche from "../styles/Assets/icones/fleche_down_header.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/Eshop.css";
import ProductsList from "../components/ProductsList";

const Eshop = ({ addToPanier, handleRemoveItem }) => {
  // declaration variable qui contient le valeur du filtrage
  const [selectedFilters, setSelectedFilters] = useState([]);

  // fonction du filtrage
  const handleFilterChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // Mise à jour de la liste des filtres sélectionnés
    setSelectedFilters((prevFilters) => {
      if (isChecked) {
        return [...prevFilters, value];
      } else {
        return prevFilters.filter((filter) => filter !== value);
      }
    });
  };
  const navigate = useNavigate();
  // const { user } = useAuth();
  // prix affiché
  const options = [0, 50, 100];

  // les props dans header
  const [titre, setTitre] = useState(
    <div className="col-md-9 p-3 d-flex align-items-center ">
      <h1 className="s-titreHeader">ENVIE D’UN SLIP JAUNE ?</h1>
    </div>
  );

  return (
    <div>
      <Header titre={titre} imgHeader={imgHeader} />
      <div className="d-flex justify-content-center">
        <img src={fleche} alt="" />
      </div>

      <div className="container ">
        <div className="row ">
          {/* colonne filtres */}
          <div className="col-md-3 p-3">
            <h3>FILTERS</h3>
            <label htmlFor="customRange">Prix :</label>
            <input
              type="range"
              className="form-range mb-3"
              step="10"
              id="customRange"
              list="tickmarks"
            />

            <div className="range-labels d-flex justify-content-between">
              {options.map((option) => (
                <span key={option}>{option} €</span>
              ))}
            </div>

            <datalist id="tickmarks">
              {options.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
            <br />
            {/* 1 */}
            <button
              className="btn-drop"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Catégorie
            </button>
            <hr />

            <div className="collapse" id="collapseExample">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Bestsellers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Goodies
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Vêtements
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Affiches/posters
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Comics
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Multimédia
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Équipement
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Bijoux
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Véhicules
                </label>
              </div>
              <br />
            </div>

            {/* 2 */}
            <button
              className="btn-drop"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Couleur
            </button>
            <hr />

            {/* 3 */}
            <button
              className="btn-drop"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Univers
            </button>
            <hr />
            <div className="collapse" id="collapseExample2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  The Batman
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  The Dark Night Rises
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Batman V Superman
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Batman et Robin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Autres (comics, dessin animés)
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-9 d-flex p-2 flex-column">
            <Link to="/panier" className="align-self-end">
              <img src={ShoppingCartIcon} alt="panier" />
            </Link>

            {/* les produits dans des blocs */}
            <div className="container">
              <div className="row justify-content-around mt-4">
                <ProductsList
                  addToPanier={addToPanier}
                  handleRemoveItem={handleRemoveItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eshop;
