/**
 * 首页轮播图
 */
import { define, loadImage } from '@hotishop/global';

export class WsCarousel extends HTMLElement {
  firstImage;
  ratio;
  swiper;

  initialize() {
    const {
      autoplay,
      interval = '5',
      loop,
      pageSize = '1',
      mdPageSize,
      lgPageSize,
      slidesPerGroup = pageSize,
      mdSlidesPerGroup,
      lgSlidesPerGroup,
      spaceBetween = '10',
      mdSpaceBetween,
      lgSpaceBetween,
      autoHeight = 'false',
      adaptiveHeight = 'false',
      useSlideColor
    } = this.dataset;

    const mdSpace = mdSpaceBetween || spaceBetween;
    const lgSpace = lgSpaceBetween || mdSpace;
    const mdSize = mdPageSize || pageSize;
    const lgSize = lgPageSize || mdSize;
    const mdPre = mdSlidesPerGroup || slidesPerGroup;
    const lgPre = lgSlidesPerGroup || mdPre;

    if (adaptiveHeight === 'true') {
      // 先写死 500
      this.style.height = '500px';

      this.firstImage = this.querySelector('.ws-image');

      if (this.firstImage) {
        loadImage(
          // 取第一个，不能取 currentSrc，因为可能是 1px
          this.firstImage.dataset.srcset.replace(/\s+\d+w.+$/, '')
        ).then((image) => {
          this.ratio = image.height / image.width;
          this.onResize();

          window.addEventListener('resize', this.onResize);
        });
      }
    }

    this.swiper = new window.Swiper(this, {
      modules: [
        window.Swiper.Autoplay,
        window.Swiper.Navigation,
        window.Swiper.Pagination
      ],
      autoplay:
        autoplay === 'true' && +interval !== 0
          ? { delay: +interval * 1000, stopOnLastSlide: loop !== 'true' }
          : false,
      autoHeight: adaptiveHeight === 'false' && autoHeight === 'true',
      loop: loop === 'true',
      navigation: {
        nextEl: this.querySelector('.swiper-button-next'),
        prevEl: this.querySelector('.swiper-button-prev')
      },
      pagination: {
        el: this.querySelector('.swiper-pagination'),
        clickable: true
      },
      spaceBetween: +spaceBetween,
      slidesPerView: +pageSize,
      slidesPerGroup: +slidesPerGroup,
      breakpoints: {
        768: {
          spaceBetween: +mdSpace,
          slidesPerView: +mdSize,
          slidesPerGroup: +mdPre
        },
        1024: {
          spaceBetween: +lgSpace,
          slidesPerView: +lgSize,
          slidesPerGroup: +lgPre
        }
      }
    });

    if (useSlideColor === 'true') {
      const [root] = this.swiper.$el;
      const setColor = () => {
        const slide = this.swiper.slides[this.swiper.activeIndex];

        if (slide) {
          const { color } = slide.dataset;

          root.style.setProperty('--ws-carousel-color', color);
        }
      };

      root.style.color = 'var(--ws-carousel-color)';

      setColor();
      this.swiper.on('slideChangeTransitionStart', setColor);
    }
  }

  onResize = () => {
    if (this.ratio) {
      this.style.height = `${this.ratio * this.getBoundingClientRect().width
      }px`;
    }
  };

  destroy() {
    window.removeEventListener('resize', this.onResize);
  }

  disableSwiper() {
    this.swiper.destroy();
    this.swiper = null;
  }
}

define('ws-carousel', WsCarousel);
