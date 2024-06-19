import { describe, it, expect } from 'vitest';
import { buildApiUrl } from './url-builders';

describe('buildApiUrl', () => {
  it('should build a URL with encoded parameters', () => {
    const base = 'https://example.com/api';
    const params = {
      query: 'test search',
      page: 1,
      _br_uid_2: '12345'
    };

    const url = buildApiUrl(base, params);
    expect(url.toString()).toBe('https://example.com/api?query=test%20search&page=1&_br_uid_2=12345');
  });

  it('should not encode parameters listed in shouldNotBeEncoded', () => {
    const base = 'https://example.com/api';
    const params = {
      _br_uid_2: '12345',
      fq: 'category:books',
      sort: 'price asc'
    };

    const url = buildApiUrl(base, params);
    expect(url.toString()).toBe('https://example.com/api?_br_uid_2=12345&fq=category:books&sort=price%20asc');
  });
});
