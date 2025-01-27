
import { useNavigate } from 'react-router-dom';function Card() {
    const navigate = useNavigate();
    return (
    
        <div className="card card-side bg-base-200 shadow-xl w-96">
          <figure className="w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary"
            onClick={() => navigate('/home')}>Watch</button>
            </div>
          </div>
        </div>
           
    )
};
export default Card;