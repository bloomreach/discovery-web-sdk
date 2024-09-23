class FetchError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public url: string,
    public body: string,
  ) {
    super(`SDK API request failed: ${status} - ${statusText}`);
    this.name = 'FetchError';
  }
}

export async function typedFetch<T>(url: URL): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new FetchError(response.status, response.statusText, url.toString(), errorBody);
  }

  return response.json() as T;
}
