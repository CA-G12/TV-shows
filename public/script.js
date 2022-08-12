// eslint-disable-next-line no-unused-vars
const fetch = (endpoint, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        cb(data);
      } else {
        console.log('ERROR', xhr.status);
      }
    }
  };

  xhr.open('GET', `/data?q=${endpoint}`);
  xhr.send();
};

const createTags = (tag) => document.createElement(tag);
const moviesCard = (movies, parent) => {
  parent.textContent='';
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
  window.scrollTo(0, 500);
};
const externalFetch = (title, content) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        moviesCard(data[0].show, content);
      } else {
        console.log('ERROR', xhr.status);
      }
    }
  };
  xhr.open('GET', `https://api.tvmaze.com/search/shows?q=${title}`);
  xhr.send();
};

// eslint-disable-next-line no-unused-vars
function generateAutoCompleteResults(data, container, content) {
  // console.log(data);
  if (data.length > 0) {
    // eslint-disable-next-line no-param-reassign
    container.textContent = '';
    for (let index = 0; index < Math.min(5, data.length); index += 1) {
      const li = document.createElement('li');
      li.textContent = data[index].name;
      li.addEventListener('click', (e) => {
        const requiredMovie = e.target;
        externalFetch(requiredMovie.textContent, content);
        container.classList.remove('active');
      });
      container.appendChild(li);
    }
  } else {
    // eslint-disable-next-line no-param-reassign
    container.textContent = '';
    const li = document.createElement('li');
    li.textContent = 'No result Found 😡💢';
    li.style.backgroundColor = 'red';
    li.style.color = '#fff';
    container.appendChild(li);
  }
}
