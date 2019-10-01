// config : remove hashes# from js and css build files names (with react-app-rewired => permet d'accéder et d'ajouter une config webpack)

module.exports = {
    webpack: function(config, env) {
      if (env === "production") {
        //JS Overrides: build main js file without hashes&number
        config.output.filename = 'static/js/[name].js';
        config.output.chunkFilename = 'static/js/[name].chunk.js';
  
        //CSS Overrides: build main css file without hashes&number
        config.plugins[5].options.filename = 'static/css/[name].css';
        config.plugins[5].options.chunkFilename = 'static/css/[name].chunk.css';
      }
      return config;
    }
};