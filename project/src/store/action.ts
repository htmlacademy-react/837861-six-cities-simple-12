import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

