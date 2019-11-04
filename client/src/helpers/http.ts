export async function getJson(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, options);

    if (response.status > 400)
      throw response;

    return response.json();
  } catch (err) {
    throw err;
  }
}