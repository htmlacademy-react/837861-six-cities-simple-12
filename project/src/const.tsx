export enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '/*',
}

export function convertRating(value: number): number {
  return Math.round(value) * 20;
}


export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
