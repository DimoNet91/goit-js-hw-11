const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44049527-352ef67b2949e9cf818cbb88f';

export function searchImages(image = '') {
  const params = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}