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
      _br_uid_2: '12345:67890',
      fq: 'category:books',
      sort: 'price asc'
    };

    const url = buildApiUrl(base, params);
    expect(url.toString()).toBe('https://example.com/api?_br_uid_2=12345:67890&fq=category%3Abooks&sort=price%20asc');
  });

  it('should support array values', () => {
    const base = 'https://example.com/api';
    const params = {
      _br_uid_2: '12345',
      fq: ['category:books', 'brand:acme'],
      sort: 'price asc'
    };

    const url = buildApiUrl(base, params);
    expect(url.toString()).toBe('https://example.com/api?_br_uid_2=12345&fq=category%3Abooks&fq=brand%3Aacme&sort=price%20asc');
  });

  it('should support complex fq values', () => {
    const base = 'https://example.com/api';
    const params = {
      _br_uid_2: '12345',
      fq: ['sizes:"10\\" square" OR "medium (50\\"-100\\"l)"', 'colors:"yellow" OR "green"'],
      sort: 'price asc',
    };

    const url = buildApiUrl(base, params);
    expect(url.toString()).toBe('https://example.com/api?_br_uid_2=12345&fq=sizes%3A%2210%5C%22%20square%22%20OR%20%22medium%20(50%5C%22-100%5C%22l)%22&fq=colors%3A%22yellow%22%20OR%20%22green%22&sort=price%20asc');
  });

  it('should support complex efq values', () => {
    const base = 'https://example.com/api';
    const params = {
      _br_uid_2: '12345',
      efq: ['colors:("red" AND "blue")', '-fabric:("cotton")'],
      sort: 'price asc',
    };

    const url = buildApiUrl(base, params);
    expect(url.toString()).toBe('https://example.com/api?_br_uid_2=12345&efq=colors%3A(%22red%22%20AND%20%22blue%22)&efq=-fabric%3A(%22cotton%22)&sort=price%20asc');
  });
});
