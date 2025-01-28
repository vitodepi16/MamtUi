import { useNavigate } from "react-router-dom";

function Card({card}) {
  const navigate = useNavigate();
  return (
    <div className="card card-side bg-base-200 shadow-xl w-96 mt-20 p-3 justify-items-center ">
      <figure className="w-full">
        <img
          src={ `${card.image}/high.jpg`}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
       <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Guarda
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
