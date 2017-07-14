import axios from 'axios';
import { setFlash } from './flash';

export const getBeers = () => {
  return(dispatch) => {
    axios.get(`/api/all_beers`)
      .then( res => {
        console.log(res.data)
        dispatch({ type: 'SET_BEERS', beers: res.data.entries });
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Beers.', 'error'));
    });
  }
}
