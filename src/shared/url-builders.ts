const shouldNotBeEncoded = ['_br_uid_2', 'fq'];

export function buildApiUrl<T extends object>(base: string, params: T): URL {
  const url = new URL(base);

  url.search = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      return `${key}=${shouldNotBeEncoded.includes(key) ? value : encodeURIComponent(value as string | number | boolean)}`;
    })
    .join('&');

  return url;
}
