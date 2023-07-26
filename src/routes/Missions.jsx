import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmission, joinmission, leavemission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.selectedmissions);

  const handleclick = (id, reserved) => {
    if (reserved === false) {
      dispatch(joinmission(id));
    } else {
      dispatch(leavemission(id));
    }
  };

  const data = missions.map((mission) => (
    <div key={mission.mission_id} data-testid="missions" className="rows">
      <div className="innerdiv"><h2>{mission.mission_name}</h2></div>
      <div className="innerdiv"><p className="description">{mission.description}</p></div>
      {mission.reserved ? <div className="container innerdiv"><p className="member">Active Member</p></div> : <div className="container innerdiv"><p className="notmember">Not a member</p></div>}
      <div className="container innerdiv">
        {mission.reserved ? <button type="button" data-testid="leave" className="Leave-button" onClick={() => handleclick(mission.mission_id, mission.reserved)}>Leave Mission</button>
          : <button type="button" data-testid="join" className="Join-button" onClick={() => handleclick(mission.mission_id, mission.reserved)}>Join Mission</button> }
      </div>
    </div>
  ));

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchmission());
    }
  }, [dispatch, missions]);

  return (
    <>
      <div data-testid="List" className="wrapmissions">
        <div className="rows">
          <div className="innerdiv"><h2>Mission</h2></div>
          <div className="innerdiv"><h2>Desription</h2></div>
          <div className="innerdiv"><h2>Status</h2></div>
          <div className="innerdiv" />
        </div>
        {data}
      </div>
    </>
  );
};

export default Missions;
