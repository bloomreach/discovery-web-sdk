import { describe, expect, test } from 'vitest';
import { message } from './index';

describe('my test suite', () => {
  test('say hello world', () => {
    expect(message).toEqual('Hello world');
  });
});
