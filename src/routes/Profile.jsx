import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { rockets } = useSelector((store) => store.rocket);
  return (
    <div>
      <div className="joined-missions" />
      <div className="reserved-rockets">
        <ul>
          {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
