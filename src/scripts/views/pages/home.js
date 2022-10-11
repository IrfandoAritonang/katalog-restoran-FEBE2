/* eslint-disable no-undef */
/* eslint-disable no-console */
import RestaurantSource from '../../data/restodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <style>
      h2{
        justify-content : center;
      }
    </style>
    <hero-page></hero-page>
    <div class="content">
      <h2 class="content__heading">Explore Restaurant</h2>
      <div id="movies" class="movies">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const movies = await RestaurantSource.home();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((resto) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Home;
