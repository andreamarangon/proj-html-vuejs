Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    navLinks:[
      {
        name: 'home',
        link: '#'
      },
      {
        name: 'about',
        link: '#about'
      },
      {
        name: 'services',
        link: '#services'
      },
      {
        name: 'showcase',
        link: '#showcase'
      },
      {
        name: 'blog',
        link: '#blog'
      },
      {
        name: 'contact',
        link: '#contact'
      },
    ],
    partnersLogo:[
      {
        name: 'avantgarde',
        img: './dist/img/logo-avantgarde.png'
      },
      {
        name: 'fastlane',
        img: './dist/img/logo-fastlane.png'
      },
      {
        name: 'rj',
        img: './dist/img/logo-rj.png'
      },
      {
        name: 'chippy',
        img: './dist/img/logo-chippy.png'
      },
      {
        name: 'bullseye',
        img: './dist/img/logo-bullseye.png'
      },
      {
        name: 'mighty',
        img: './dist/img/logo-mighty.png'
      },
    ],
    footerLinks:[
      {
        name: 'Careers',
        link: '#'
      },
      {
        name: 'News',
        link: '#'
      },
      {
        name: 'Terms of Use',
        link: '#'
      },
      {
        name: 'Privacy Projects',
        link: '#'
      },
      {
        name: 'About',
        link: '#'
      },
      {
        name: 'Contact',
        link: '#'
      },
    ],
    footerContacts:[
      {
        info: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051',
      },
      {
        info: 'info@yourdomain.com',
      },
      {
        info: '+99 (0) 101 000 888',
      }
    ],
    socialLogos:[
      {
        logo: 'fab fa-facebook-f',
      },
      {
        logo: 'fab fa-twitter',
      },
      {
        logo: 'fab fa-pinterest-p',
      }
    ],
    designCards:[
      {
        title: 'The Basket of Flowers',
        subtitle: 'branding marketing',
        img: './dist/img/flower.jpg'
      },
      {
        title: 'A Famous Ferris Wheel',
        subtitle: 'marketing',
        img: './dist/img/ferris-wheel.jpg'
      },
      {
        title: 'Complementary Colors',
        subtitle: 'branding marketing',
        img: './dist/img/shoes.jpg'
      },
      {
        title: 'Business Prestige',
        subtitle: 'branding',
        img: './dist/img/desk-pencil.jpg'
      },
      {
        title: 'Colorful Origami Boats',
        subtitle: 'branding marketing',
        img: './dist/img/origami.jpg'
      },
      {
        title: 'Modern Couch',
        subtitle: 'marketing',
        img: './dist/img/sofa.jpg'
      },
      {
        title: 'Hot Air Balloons',
        subtitle: 'branding marketing',
        img: './dist/img/air-balloon.jpg'
      },
      {
        title: 'The Basket of Flowers',
        subtitle: 'branding',
        img: './dist/img/blue-lemon.jpg'
      },
    ],
    blogCards: [
      {
        dateBy: 'May 24, 2018 -by Alex',
        title: 'Marketing Ideas',
        img: './dist/img/businesswoman-telephone.jpg'
      },
      {
        dateBy: 'May 24, 2018 -by Alex',
        title: 'Rest During Working Hours',
        img: './dist/img/businessman.jpg'
      },
      {
        dateBy: 'May 24, 2018 -by Alex',
        title: 'Develop Your Startup Idea',
        img: './dist/img/home-office.jpg'
      },
    ],
    index: 0,
    backgroundImgs:[
      './dist/img/businesswoman-round.png',
      './dist/img/businessman-round.png',
      './dist/img/businesspeople-round.png',

    ]

  },
  computed:{

  },
  methods:{
    numSelection: function (index) {
      this.index = index;
    }
  }

});
