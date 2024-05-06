import type { SetupConfiguration } from './types/configuration.type';

export const noConfigMessage = 'Configuration has not been set';

let configuration: SetupConfiguration | null = null;

export function setConfig(config: SetupConfiguration): void {
  configuration = config;
}

export function getConfig(): SetupConfiguration {
  if (configuration === null) {
    throw Error(noConfigMessage);
  }

  return configuration;
}

export function clearConfig(): void {
  configuration = null;
}
