import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { AppRoute } from '../const';

export const changeCity = createAction<{ city: string }>('changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction(<AuthorizationStatus>('user/requireAuthorization'));

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');


export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const setError = createAction<string | null>('setError');
