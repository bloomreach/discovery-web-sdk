import type { Configuration } from '../initialize/configuration.type';

export const noConfigMessage = 'Configuration has not been set';

let configuration: Configuration | null = null;

export function setConfig(config: Configuration): void {
  configuration = config;
}

export function getConfig(): Configuration {
  if (configuration === null) {
    throw Error(noConfigMessage);
  }

  return configuration;
}

export function clearConfig(): void {
  configuration = null;
}
