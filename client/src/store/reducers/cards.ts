import { CARDS_REQUEST, CARDS_FAILURE, CARDS_SUCCESS } from '../actions/';
import { CardIF } from '../../constants/Data';

interface InitialStateIF {
  cards: CardIF[],
  processing: boolean,
  error: any
}

const INITIAL_STATE: InitialStateIF = {
  cards: [],
  processing: false,
  error: null
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CARDS_REQUEST: {
      return {
        ...state,
        processing: true,
      }
    }
    case CARDS_SUCCESS: {
      return {
        ...state,
        cards: [
          ...state.cards,
          ...action.cards
        ],
        processing: false,
      }
    }
    case CARDS_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return state;
    }
  }
}