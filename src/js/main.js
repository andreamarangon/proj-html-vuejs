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
    designImg:[
      {
        title: 'The Basket of Flowers'
      },
    ]

  },
  computed:{

  },
  methods:{
  }

});
