/* eslint-disable import/named */
import FavoriteMovieIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    resto.forEach((restoran) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(restoran);
    });
  },
};

export default Like;
