import IndexView from './views/index';


var Router = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'a': 'a'
  },

  initialize: function(){
  },

  index: function(){
    $('#container').html(this.index.el);

  }
});


export default new Router();
