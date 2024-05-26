import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixibay-api.js';
import { createGalleryMarkup } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('#image');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Створюємо екземпляр SimpleLightbox один раз у глобальній області
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  loader.style.display = 'inline-block';

  if (input.value.trim() === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Search field cannot be empty!',
      messageColor: '#fff',
      backgroundColor: '#ffa000',
      position: 'topRight',
    });
    loader.style.display = 'none';
    return;
  }

  const { image } = event.currentTarget.elements;

  searchImages(image.value)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          position: 'topRight',
        });
        gallery.innerHTML = ''; // Очищаємо розмітку галереї
      } else {
        gallery.innerHTML = createGalleryMarkup(data.hits);
        lightbox.refresh(); // Оновлюємо екземпляр lightbox
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      console.error(error);
      gallery.innerHTML = ''; // Очищаємо розмітку галереї у разі помилки
    })
    .finally(() => {
      loader.style.display = 'none';
    });

  input.value = '';
  form.reset();
}
