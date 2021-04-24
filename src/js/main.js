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
        link: 'https://demo.phlox.pro/business-2/about/'
      },
      {
        name: 'services',
        link: 'https://demo.phlox.pro/business-2/services/'
      },
      {
        name: 'showcase',
        link: 'https://demo.phlox.pro/business-2/showcase/'
      },
      {
        name: 'blog',
        link: 'https://demo.phlox.pro/business-2/blog/'
      },
      {
        name: 'contact',
        link: 'https://demo.phlox.pro/business-2/contact-page/'
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
    ]
  },
  computed:{

  },
  methods:{
  }

});
