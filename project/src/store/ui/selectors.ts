import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): string => state[NameSpace.Ui].city;
export const getCurrentSort = (state: State): string => state[NameSpace.Ui].sorting;
