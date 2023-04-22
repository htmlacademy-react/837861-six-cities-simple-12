import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offers } from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.Data];
export const getQuestionsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isQuestionsDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
