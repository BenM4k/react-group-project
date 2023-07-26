import missionReducer, { joinmission, leavemission } from '../redux/missions/missionSlice';

describe('test missions ', () => {
  it('Type of join a mission', () => {
    const action = joinmission();
    const ecpectedAction = {
      type: 'mission/joinmission',
    };

    expect(action).toEqual(ecpectedAction);
  });

  it('Type of leave a mission', () => {
    const action = leavemission();
    const ecpectedAction = {
      type: 'mission/leavemission',
    };

    expect(action).toEqual(ecpectedAction);
  });

  it('Join a mission', () => {
    const state = {
      selectedmissions: [{
        mission_name: 'Mars',
        mission_id: '1',
        description: 'Good Luck',
        reserved: false,
      }],
      isLoading: true,
    };

    const action = joinmission('1');

    const result = missionReducer(state, action);

    const newState = {
      selectedmissions: [{
        mission_name: 'Mars',
        mission_id: '1',
        description: 'Good Luck',
        reserved: true,
      }],
      isLoading: true,
    };
    expect(result).toEqual(newState);
  });

  it('Leave a mission', () => {
    const state = {
      selectedmissions: [{
        mission_name: 'Mars',
        mission_id: '1',
        description: 'Good Luck',
        reserved: true,
      }],
      isLoading: true,
    };

    const action = leavemission('1');

    const result = missionReducer(state, action);

    const newState = {
      selectedmissions: [{
        mission_name: 'Mars',
        mission_id: '1',
        description: 'Good Luck',
        reserved: false,
      }],
      isLoading: true,
    };
    expect(result).toEqual(newState);
  });
});
