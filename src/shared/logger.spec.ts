import { afterEach, describe, expect, it, vi } from 'vitest';
import { error, log, logAPICall, prefix } from './logger';

describe('Logger', () => {
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('log', () => {
    it('should log a message with the correct prefix', () => {
      log('test message');
      expect(consoleLogSpy).toHaveBeenCalledWith(`${prefix} test message`);
    });

    it('should log a message with additional arguments', () => {
      log('test message', 'arg1', 'arg2');
      expect(consoleLogSpy).toHaveBeenCalledWith(`${prefix} test message`, 'arg1', 'arg2');
    });
  });

  describe('error', () => {
    it('should log an error message with the correct prefix', () => {
      error('test error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(`${prefix} test error`);
    });

    it('should log an error message with additional arguments', () => {
      error('test error', 'arg1', 'arg2');
      expect(consoleErrorSpy).toHaveBeenCalledWith(`${prefix} test error`, 'arg1', 'arg2');
    });
  });

  describe('logAPICall', () => {
    it('should log API call details', () => {
      const name = 'testAPI';
      const configuration = { config: 'configValue' };
      const options = { option: 'optionValue' };
      const fixed = { fixedOption: 'fixedValue' };
      const defaults = { defaultOption: 'defaultValue' };
      const queryParams = { param: 'paramValue' };
      const url = new URL('http://example.com');

      logAPICall(name, configuration, options, fixed, defaults, queryParams, url);

      expect(consoleLogSpy).toHaveBeenCalledWith(`[BR] '${name}' called with:`);
      expect(consoleLogSpy).toHaveBeenCalledWith('[BR] Configuration:', configuration);
      expect(consoleLogSpy).toHaveBeenCalledWith('[BR] Options:', options);
      expect(consoleLogSpy).toHaveBeenCalledWith('[BR] Fixed options:', fixed);
      expect(consoleLogSpy).toHaveBeenCalledWith('[BR] Default options:', defaults);
      expect(consoleLogSpy).toHaveBeenCalledWith('[BR] Merged queryParams:', queryParams);
      expect(consoleLogSpy).toHaveBeenCalledWith('[BR] Fetching url:', url.href);
    });
  });
});
