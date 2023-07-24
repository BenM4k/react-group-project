import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchmission } from '../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmission());
  }, [dispatch]);

  return (
    <>
      <div>Missions</div>
    </>
  );
};

export default Missions;
