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
    ]
  },
  computed:{

  },
  methods:{
  }

});
