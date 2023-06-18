const API_KEY =
  'live_zye1AMzv4hsDsUWg4M8XM8zHwoeIrPgF03ywgFlzk9dTFjBWuRzoGBbFXYAcSzyH';
const API_URL = 'https://api.thecatapi.com/v1/';
const loaderEl = document.querySelector('.loader');

export const fetchBreeds = () => {
  loaderEl.style.display = 'block';
  return fetch(`${API_URL}breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};

export const fetchCatByBreed = breedId => {
  loaderEl.style.display = 'block';
  return fetch(
    `${API_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
};
