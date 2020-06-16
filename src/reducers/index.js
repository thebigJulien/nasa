const initialState = {
    photoOfTheDay: {}
  };
  
  const nasaReducer = (state = initialState, action) => {
    if(action.type === 'FETCH_DATA') {
        return Object.assign({}, state, { photoOfTheDay: })
    }
    return state;
  };
  
  export default nasaReducer;