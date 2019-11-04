import { getJson } from '../helpers/http';

export const getCards = () => {
    return getJson('/cards')
        .then((result) => result);
}
