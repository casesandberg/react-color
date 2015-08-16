var React = require('react');
var evaluate = require('eval');
var _ = require('lodash');

// src can be either a filename or a chunk name
function ReactToHtmlWebpackPlugin(destPath, src, options) {
  this.src = src;
  this.destPath = destPath;
  this.options = typeof options === 'object' ? options : {};
}

ReactToHtmlWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compiler, done) {

    var webpackStatsJson = compiler.getStats().toJson();

    try {
      var asset = findAsset(this.src, compiler, webpackStatsJson);
      // if (!asset) {
      //   throw new Error('Output file not found: "' + this.src + '"');
      // }

      // console.log(compiler);

      // var data = require('/Users/case/Github/react-color/docs/index.js');
      // console.log(compiler.getStats().toJson());

      var index = compiler.getStats().toJson().modules[1];
      console.log(evaluate(index.source, undefined, index.identifier, true));

      // console.log('compiler.compiler.inputFileSystem', compiler.compiler.inputFileSystem);
      // console.log('compiler.fileDependencies[0]', compiler.fileDependencies[0])
      // var source = asset.source();
      // console.log(source);
      // var Component = evaluate(source, /* filename: */ undefined, /* scope: */ undefined, /* includeGlobals: */ true);

      // var renderMethod = this.options.static ? 'renderToStaticMarkup' : 'renderToString';
      // var html = React[renderMethod](React.createElement(Component));
      //
      // var template = this.options.template;
      //
      // if (template != null && typeof template !== 'function') {
      //   throw new Error('Template must be a function');
      // }

      // var output = typeof template === 'function' ?
      //   template({
      //     html: html,
      //     assets: getAssetsFromCompiler(compiler, webpackStatsJson),
      //   }) :
      //   html;

      // var output = React.renderToString(React.createElement(asset.source()));

      compiler.assets[this.destPath] = createAssetFromContents(asset.source());
    } catch (err) {
      return done(err);
    }

    done();
  }.bind(this));
};

var findAsset = function(src, compiler, webpackStatsJson) {
  var asset = compiler.assets[src];
  if (asset) {
    return asset;
  }

  var chunkValue = webpackStatsJson.assetsByChunkName[src];
  if (!chunkValue) {
    return null;
  }

  // Webpack outputs an array for each chunk when using sourcemaps
  if (chunkValue instanceof Array) {
    // Is the main bundle always the first element?
    chunkValue = chunkValue[0];
  }

  return compiler.assets[chunkValue];
};

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
var getAssetsFromCompiler = function(compiler, webpackStatsJson) {
  var assets = {};
  for (var chunk in webpackStatsJson.assetsByChunkName) {
    var chunkValue = webpackStatsJson.assetsByChunkName[chunk];

    // Webpack outputs an array for each chunk when using sourcemaps
    if (chunkValue instanceof Array) {
      // Is the main bundle always the first element?
      chunkValue = chunkValue[0];
    }

    if (compiler.options.output.publicPath) {
      chunkValue = compiler.options.output.publicPath + chunkValue;
    }

    assets[chunk] = chunkValue;
  }

  return assets;
};

var createAssetFromContents = function(contents) {
  return {
    source: function() {
      return contents;
    },

    size: function() {
      return contents.length;
    },
  };
};

module.exports = ReactToHtmlWebpackPlugin;
