/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/restodb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheMovieDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#movie');
    restoContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
