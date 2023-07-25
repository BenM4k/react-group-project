import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { rockets } = useSelector((store) => store.rocket);
  return (
    <div>
      <div className="joined-missions">
        <h2>My missions</h2>
      </div>
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        <ul>
          {rockets.filter((rocket) => rocket?.reserved === true).map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
