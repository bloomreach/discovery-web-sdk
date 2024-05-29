import { setConfig } from '../shared/config';
import type { Configuration } from './configuration.type';

export function initialize(config: Configuration) {
  setConfig(config);
}
