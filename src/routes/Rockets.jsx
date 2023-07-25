import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/slices/rocketSlice/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loadRockets, loadRocketsTimeout } = useSelector((store) => store.rocket);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <>
      {loadRockets && <h1>Loading Rockets...</h1>}
      {loadRocketsTimeout && <h1>Failed to load Rockets</h1>}
      <ul className="rocket-list">
        {rockets?.map((rocket) => (
          <li key={rocket?.id} className="rocket">
            <img src={rocket?.image} alt={rocket?.name} />
            <div className="details">
              <h2>{rocket?.name}</h2>
              <p>
                <span className={rocket.reserved ? 'active' : ''}>{rocket.reserved ? 'reserved' : null}</span>
                {rocket?.desc}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  if (!rocket.reserved) {
                    handleReserve(rocket.id);
                    e.target.classList.add('rocket-reserved');
                  }
                  if (rocket.reserved) {
                    handleCancel(rocket.id);
                    e.target.classList.remove('rocket-reserved');
                  }
                }}
              >
                {rocket.reserved ? 'Cancel Reservasion' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Rockets;
