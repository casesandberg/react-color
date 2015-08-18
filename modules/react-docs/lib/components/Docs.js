'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var markdown = require('../helpers/markdown');

var _require = require('../../../react-basic-layout');

var Grid = _require.Grid;

var MarkdownTitle = require('./MarkdownTitle');
var Markdown = require('./Markdown');
var Code = require('./Code');
var Sidebar = require('./Sidebar');

var Docs = (function (_ReactCSS$Component) {
  _inherits(Docs, _ReactCSS$Component);

  function Docs() {
    _classCallCheck(this, Docs);

    _get(Object.getPrototypeOf(Docs.prototype), 'constructor', this).call(this);
    this.state = {
      sidebarFixed: false,
      visible: false,
      files: {}
    };
    this.changeSelection = this.changeSelection.bind(this);
    this.attachSidebar = this.attachSidebar.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  _createClass(Docs, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {}
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, false);

      var domFiles = React.findDOMNode(this.refs.files) && React.findDOMNode(this.refs.files).children;

      if (domFiles) {
        var files = {};
        for (var i = 0; i < domFiles.length; i++) {
          var file = domFiles[i];
          files[file.offsetTop] = file.id;
        }

        this.setState({ files: files });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll, false);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(e) {
      this.changeSelection();
      this.attachSidebar();
    }
  }, {
    key: 'attachSidebar',
    value: function attachSidebar() {
      var sidebarTop = React.findDOMNode(this.refs.sidebar).getBoundingClientRect().top;

      if (sidebarTop <= 0 && this.state.sidebarFixed === false) {
        this.setState({ sidebarFixed: true });
      }

      if (sidebarTop > 0 && this.state.sidebarFixed === true) {
        this.setState({ sidebarFixed: false });
      }
    }
  }, {
    key: 'changeSelection',
    value: function changeSelection() {
      var top = document.body.scrollTop - 300;
      var mostVisible = '';

      for (var offset in this.state.files) {
        if (this.state.files.hasOwnProperty(offset)) {
          var id = this.state.files[offset];
          if (offset < top) {
            mostVisible = id;
          }
        }
      }

      if (mostVisible !== this.state.visible) {
        this.setState({ visible: mostVisible });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var markdownFiles = [];

      for (var fileName in this.props.markdown) {
        if (this.props.markdown.hasOwnProperty(fileName)) {
          var file = this.props.markdown[fileName];
          var args = markdown.getArgs(file);
          var body = markdown.getBody(file);

          markdownFiles.push(React.createElement(
            'div',
            { key: fileName, id: args.id, style: this.styles().file, className: 'markdown' },
            React.createElement(MarkdownTitle, {
              isHeadline: markdown.isSubSection(fileName) ? true : false,
              title: args.title,
              link: args.id,
              primaryColor: this.props.primaryColor }),
            React.createElement(
              Markdown,
              null,
              body
            )
          ));
        }
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'style',
          null,
          '\n          .rendered{\n            color: #607D8B; // blue grey 500\n          }\n          .rendered .hljs-comment {\n            color: #B0BEC5; // blue grey 200\n          }\n          .rendered .hljs-keyword{\n            color: #EF9A9A;  // red 200\n          }\n          .rendered .hljs-string{\n            color: #689F38; // light green 700\n          }\n          .rendered .hljs-title{\n          }\n          .text code{\n            background: #ddd;\n            padding: 1px 5px 3px;\n            border-radius: 2px;\n            box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);\n            font-size: 85%;\n            vertical-align: bottom;\n          }\n          .markdown p{\n            margin: 15px 24px 15px 0;\n          }\n          .markdown h1{\n            font-size: 38px;\n            font-weight: 200;\n            color: rgba(0,0,0,.77);\n            margin: 0;\n            padding-top: 54px;\n            padding-bottom: 5px;\n          }\n          .markdown h2{\n            font-size: 26px;\n            line-height: 32px;\n            font-weight: 200;\n            color: rgba(0,0,0,.57);\n            padding-top: 20px;\n            margin-top: 20px;\n            margin-bottom: 10px;\n          }\n          .markdown h3{\n            font-weight: normal;\n            font-size: 20px;\n            padding-top: 20px;\n            margin-top: 20px;\n            color: rgba(0,0,0,.67);\n          }\n        '
        ),
        React.createElement(
          Grid,
          null,
          React.createElement(
            'div',
            { style: this.styles().sidebar, ref: 'sidebar' },
            React.createElement(Sidebar, { files: this.props.markdown, active: this.state.visible, primaryColor: this.props.primaryColor, bottom: this.props.bottom, fixed: this.state.sidebarFixed })
          ),
          React.createElement(
            'div',
            { ref: 'files', style: this.styles().files },
            markdownFiles
          )
        )
      );
    }
  }]);

  return Docs;
})(ReactCSS.Component);

Docs.defaultProps = {
  primaryColor: '#03A9F4'
};

module.exports = Docs;