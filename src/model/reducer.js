import {
  SET_RATING,
  FETCH_RATING_LOADING,
  FETCH_RATING_SUCCESS,
  FETCH_RATING_ERROR,
  SET_TOTAL_AMOUNT,
  SET_AVERAGE_AMOUNT,
} from './actions';

const defaultState = {
  selectedRating: null,
  loansState: 'unset',
  total: null,
  averageAmount: null,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RATING: {
      return {
        ...state,
        selectedRating: action.payload
      };
    }
    case FETCH_RATING_LOADING: {
      return {
        ...state,
        loansState: 'loading',
      }
    }
    case FETCH_RATING_SUCCESS: {
      return {
        ...state,
        loansState: 'success',
        loans: action.payload,
      }
    }
    case FETCH_RATING_ERROR: {
      return {
        ...state,
        loansState: 'error',
      }
    }
    case SET_TOTAL_AMOUNT: {
      return {
        ...state,
        total: action.payload,
      }
    }
    case SET_AVERAGE_AMOUNT: {
      return {
        ...state,
        averageAmount: action.payload,
      }
    }
    default:
      return state;
  }
};

export default app;
