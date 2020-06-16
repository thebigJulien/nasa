export const fetchData = (payload) => {
    return async (dispatch) => {
      const url = 'https://api.nasa.gov/planetary/apod?api_key=XmgqG4QyXSqjMiUGVsHZuBrMu4YqRxa4lRGZqrIi';
      const data = await (await fetch(url)).json();
  
      dispatch({
        type: 'FETCH_DATA',
        payload: data,
      });
    };
  };