import { setConfig } from '../shared/config';
import type { SetupConfiguration } from './configuration.type';

export function initialize(config: SetupConfiguration) {
  setConfig(config);
}
