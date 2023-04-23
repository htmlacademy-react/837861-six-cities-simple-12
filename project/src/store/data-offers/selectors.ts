import { FetchStatus, NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersStatus;
