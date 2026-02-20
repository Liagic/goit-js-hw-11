export const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.load-content');
export function createGallery(images) {
  const items = images
    .map(
      ({
        webformatURL = '',
        largeImageURL = '',
        tags = '',
        likes = '0',
        views = '0',
        comments = '0',
        downloads = '0',
      }) => {
        if (webformatURL.trim() != '' || largeImageURL.trim() != '') {
          return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
      width= 360px height=200px;
    />
    <ul class="gallery-additional-info">
    <li class="additional-info-text"><span class="additional-info-label">Likes</span>
    <span class="additional-info-value">${likes}</span></li>
    <li class="additional-info-text"><span class="additional-info-label">Views</span>
    <span class="additional-info-value">${views}</span></li>
    <li class="additional-info-text"><span class="additional-info-label">Comments</span>
    <span class="additional-info-value">${comments}</span></li>
    <li class="additional-info-text"><span class="additional-info-label">Downloads</span>
    <span class="additional-info-value">${downloads}</span></li>
    </ul>
  </a>
</li>`;
        }
      }
    )
    .join('');
  return items;
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  loader.classList.remove('loader');
}
