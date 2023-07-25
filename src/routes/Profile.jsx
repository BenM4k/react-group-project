import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { rockets } = useSelector((store) => store.rocket);
  const missions = useSelector((state) => state.missions.selectedmissions);
  return (
    <div className="profilewrap">
      <div className="joined-missions">
        <h2>My missions</h2>
        <ul>
          {missions.filter((mission) => mission?.reserved === true).map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
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
