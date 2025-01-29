/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navigate = useNavigate();
  return (
    <div className="card card-side bg-base-200 shadow-xl w-96 mt-20 p-3">
      <figure className="w-full">
        <img src={card.images.large} alt="Movie" />
      </figure>
      <div className="card-body">
        <p>{card.name}</p>

        {/* {card.attacks.map((attack, index) => (
              <p key={index}>
                Attacco {attack.name}
              </p>
          ))}*/}
        {Array.isArray(card?.attacks) ? (
          card.attacks.map((attack, index) => (
            <p key={index}>Attacco {index + 1} : {attack.name}</p>
          ))
        ) : (
          <p>Nessun attacco disponibile</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate("")}>
            Compra
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
