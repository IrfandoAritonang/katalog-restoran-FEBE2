/* eslint-disable no-underscore-dangle */
import imghero from '../../../public/images/heros/hero-image_4.jpg';

class HeroPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .hero{
                background:linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url(${imghero});
                background-size: cover;
                height: 480px;
                color: white;
                text-shadow: 0px 3px 6px black;
            }
            .hero h1 span{
                font-weight: 700;
                font-size:3rem;                
            }
            .hero h1 {
                margin-top: 100px;
                text-align: center;
            }
        </style>
        <div class="hero text-center">
            <div class=""><br>
                <h1 id="tagline"><span>Come visit the best restaurants <br>In Indonesia</span></h1>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-page', HeroPage);
