/* eslint-disable react/prop-types */

function Card({ card }) {
  return (
    <div className="card card-side bg-base-200 shadow-xl w-96 mt-20 p-3">
      <figure className="w-full">
        <img src={card.images.large} alt="Movie" />
      </figure>
      <div className="card-body">
        <p className="text-2xl font-semibold">{card.name}</p>
        <p> HP {card.hp}</p>
        {Array.isArray(card?.attacks) ? (
          card.attacks.map((attack, index) => (
            <p key={index}>
              Attacco {index + 1} : {attack.name}
            </p>
          ))
        ) : (
          <p>Nessun attacco disponibile</p>
        )}
        <div className="card-actions justify-end">
          {card?.cardmarket?.url ? (
            <button
              className="btn btn-primary w-full"
              onClick={() => (window.location.href = card.cardmarket.url)}
            >
              Acquista ora
            </button>
          ) : (
            <p>Nessun URL disponibile</p>
          )}
          <p>{card.index}</p>
        </div>
        
      </div>
    </div>
  );
}
export default Card;
