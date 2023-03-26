export enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '/*',
}

export function convertRating(value: number): number {
  return Math.round(value) * 20;
}
