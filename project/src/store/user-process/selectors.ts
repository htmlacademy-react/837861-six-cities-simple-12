import { State } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authStatus;
export const getIsAuth = (state: State): boolean => state[NameSpace.User].authStatus === AuthorizationStatus.Auth;
