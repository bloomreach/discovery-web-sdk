import { setConfig } from '../shared/config';
import type { SetupConfiguration } from '../shared/types/configuration.type';

export function initialize(config: SetupConfiguration) {
  setConfig(config);
}
