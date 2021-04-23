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
    ]
  },
  computed:{

  },
  methods:{
  }

});
