import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.selectedmissions);

  const data = missions.map((mission) => (
    <>
      <div className="rows">
        <div><h2>{mission.mission_name}</h2></div>
        <div><p>{mission.description}</p></div>
        <div><p>Not a member</p></div>
        <div><button type="button">Join mission</button></div>
      </div>
    </>
  ));

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchmission());
    }
  }, [dispatch, missions]);

  return (
    <>
      <div className="wrapmissions">
        {data}
      </div>
    </>
  );
};

export default Missions;
