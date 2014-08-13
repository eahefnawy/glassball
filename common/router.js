Router.map(function () {
  this.route('home', {
    path: '/',
    layoutTemplate: 'layout'
  });

  this.route('dashboard', {
    path: '/dashboard',
    layoutTemplate: 'layout'
  });

});