const input = document.querySelector('input');
input.addEventListener('input', (e) => {
  const endpoint = e.target.value;
  fetch(endpoint);
});

const createTags = (tag) => document.createElement(tag);

const Content = document.querySelector('.content');

const moviesCard = (movies, parent) => {
//   const movies = fetch(title)[0];
  const figureTag = createTags('figure');
  figureTag.setAttribute('class', 'movie');

  const imgDiv = createTags('div');
  imgDiv.setAttribute('class', 'movie__hero');

  const img = createTags('img');
  img.src = movies.image.original;
  img.setAttribute('class', 'movie__img');
  img.setAttribute('alt', `${movies.name}`);
  imgDiv.appendChild(img);
  figureTag.appendChild(imgDiv);

  const contentDiv = createTags('div');
  contentDiv.setAttribute('class', 'movie__content');

  const movieHeadingDiv = createTags('div');
  movieHeadingDiv.setAttribute('class', 'movie__title');
  const heading = createTags('h1');
  heading.setAttribute('class', 'heading__primary');
  heading.textContent = `${movies.name}`;
  const fireIcon = createTags('i');
  fireIcon.setAttribute('class', 'fas fa-fire');
  heading.appendChild(fireIcon);
  movieHeadingDiv.appendChild(heading);
  contentDiv.appendChild(movieHeadingDiv);

  const movieDescription = createTags('p');
  movieDescription.setAttribute('class', 'movie__description');
  movieDescription.innerHTML = movies.summary;
  contentDiv.appendChild(movieDescription);

  const movieDetailsDiv = createTags('div');
  movieDetailsDiv.setAttribute('class', 'movie__details');
  const firstParagraph = createTags('p');
  firstParagraph.setAttribute('class', 'movie__detail');
  const firstSpan = createTags('span');
  firstSpan.setAttribute('class', 'icons icons-red');
  const firstIcon = createTags('i');
  firstIcon.setAttribute('class', 'fas fa-camera-retro');
  firstSpan.appendChild(firstIcon);
  firstParagraph.appendChild(firstSpan);
  const firstText = createTags('p');
  firstText.textContent = movies.type;
  firstParagraph.appendChild(firstText);
  movieDetailsDiv.appendChild(firstParagraph);

  const secondParagraph = createTags('p');
  secondParagraph.setAttribute('class', 'movie__detail');
  const secondSpan = createTags('span');
  secondSpan.setAttribute('class', 'icons icons-grey');
  const secondIcon = createTags('i');
  secondIcon.setAttribute('class', 'fas fa-clock');
  secondSpan.appendChild(secondIcon);
  secondParagraph.appendChild(secondSpan);
  const secondText = createTags('p');
  secondText.textContent = `${movies.runtime} episode`;
  secondParagraph.appendChild(secondText);
  movieDetailsDiv.appendChild(secondParagraph);

  const thirdParagraph = createTags('p');
  thirdParagraph.setAttribute('class', 'movie__detail');
  const thirdSpan = createTags('span');
  thirdSpan.setAttribute('class', 'icons icons-yellow');
  const thirdIcon = createTags('i');
  thirdIcon.setAttribute('class', 'fa-solid fa-star');
  thirdSpan.appendChild(thirdIcon);
  thirdParagraph.appendChild(thirdSpan);
  const thirdText = createTags('p');
  thirdText.textContent = `${movies.rating.average}/10`;
  thirdParagraph.appendChild(thirdText);
  movieDetailsDiv.appendChild(thirdParagraph);

  contentDiv.appendChild(movieDetailsDiv);

  figureTag.appendChild(contentDiv);

  parent.appendChild(figureTag);
};
