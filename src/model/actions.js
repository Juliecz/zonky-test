import fetchData from '../helpers/fetchData';
import { averageAmount } from '../helpers/averageAmount';
import config from '../config';

export const SET_RATING = 'SELECT_RATING';
export const FETCH_RATING_LOADING = 'FETCH_RATING_LOADING';
export const FETCH_RATING_SUCCESS = 'FETCH_RATING_SUCCESS';
export const FETCH_RATING_ERROR = 'FETCH_RATING_ERROR';
export const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT';
export const SET_AVERAGE_AMOUNT = 'SET_AVERAGE_AMOUNT';

export const selectRating = (value) => (dispatch, getState) => {
  dispatch(setRating(value));
  dispatch(fetchRatingLoading());
  
  const rating = getState().selectedRating;
  const url = config.url + (rating ? `&rating__eq=${rating}` : '');
  
  fetchData(url, 1)
    .then(res => res.headers)
    .then(headers => {
      const total = Number(headers.get('x-total'));
      dispatch(setTotalAmount(Number(headers.get('x-total'))));
      return fetchData(url, total, rating);
    })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchRatingSuccess(res));
      dispatch(setAverageLoan(averageAmount(res)));
    })
    .catch(() => dispatch(fetchRatingError()));
};

export const setRating = (value) => ({
  type: SET_RATING,
  payload: value,
});

export const fetchRatingLoading = () => ({
  type: FETCH_RATING_LOADING,
});

export const fetchRatingSuccess = (value) => ({
  type: FETCH_RATING_SUCCESS,
  payload: value,
});

export const fetchRatingError = () => ({
  type: FETCH_RATING_ERROR,
});

export const setTotalAmount = (value) => ({
  type: SET_TOTAL_AMOUNT,
  payload: value,
});

export const setAverageLoan = (value) => ({
  type: SET_AVERAGE_AMOUNT,
  payload: value,
});
