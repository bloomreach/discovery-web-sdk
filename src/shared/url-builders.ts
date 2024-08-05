const shouldNotBeEncoded = ['_br_uid_2'];

function getValue(key: string, value: string | number | boolean | Array<string | number | boolean>): string {
  if (Array.isArray(value)) {
    return value.map((v: string | number | boolean) => getValue(key, v)).join('&');
  }

  return `${key}=${shouldNotBeEncoded.includes(key) ? value : encodeURIComponent(value)}`;
}

export function buildApiUrl<T extends object>(base: string, params: T): URL {
  const url = new URL(base);

  url.search = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      return getValue(key, value as string | number | boolean | Array<string | number | boolean>);
    })
    .join('&');

  return url;
}
