import { Configuration } from './configuration.type';

export const prefix = '[BR]';

export function log<T>(message: string, ...args: T[]) {
  console.log(`${prefix} ${message}`, ...args);
}

export function error<T>(message: string, ...args: T[]) {
  console.error(`${prefix} ${message}`, ...args);
}

export function logAPICall(
  name: string,
  configuration: Configuration,
  options: any,
  fixed: any,
  defaults: any,
  queryParams: any,
  url: URL,
) {
  if (configuration.debug) {
    log(`'${name}' called with:`);
    log('Configuration:', configuration);
    log('Options:', options);
    log('Fixed options:', fixed);
    log('Default options:', defaults);
    log('Merged queryParams:', queryParams);
    log('Fetching url:', url.href);
  }
}
