// Services
import { getCards } from "../../backend/services";

// Constants
import { CardIF } from "../../constants/Data";
export const CARDS_REQUEST = 'CARDS_REQUEST';
export const CARDS_SUCCESS = 'CARDS_SUCCESS';
export const CARDS_FAILURE = 'CARDS_FAILURE';

const requestCards = () => {
  return {
    type: CARDS_REQUEST,
  }
}

const fetchCards = (cards: CardIF[]) => {
  return {
    cards,
    type: CARDS_SUCCESS,
  }
}
const requestCardsFail = (error: any) => {
  return {
    error,
    type: CARDS_FAILURE,
  }
}

export const getCardsAction = () => {
  return async (dispatch: any) => {
    dispatch(requestCards());

    try {
      const cards = await getCards();
      dispatch(fetchCards(cards));

    } catch (e) {
      dispatch(requestCardsFail(e));
    }
  }
}