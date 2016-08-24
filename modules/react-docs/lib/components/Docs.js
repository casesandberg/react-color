'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _markdown = require('../helpers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _reactBasicLayout = require('../../../react-basic-layout');

var _MarkdownTitle = require('./MarkdownTitle');

var _MarkdownTitle2 = _interopRequireDefault(_MarkdownTitle);

var _Markdown = require('./Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Docs = function (_React$Component) {
  _inherits(Docs, _React$Component);

  function Docs() {
    _classCallCheck(this, Docs);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Docs).call(this));

    _this.state = {
      sidebarFixed: false,
      visible: false,
      files: {}
    };
    _this.changeSelection = _this.changeSelection.bind(_this);
    _this.attachSidebar = _this.attachSidebar.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Docs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, false);

      var domFiles = this.refs.files && this.refs.files.children;

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
      var sidebarTop = this.refs.sidebar.getBoundingClientRect().top;

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

      var styles = (0, _reactcss2.default)({
        'default': {}
      });

      var markdownFiles = [];

      for (var fileName in this.props.markdown) {
        if (this.props.markdown.hasOwnProperty(fileName)) {
          var file = this.props.markdown[fileName];
          var args = _markdown2.default.getArgs(file);
          var body = _markdown2.default.getBody(file);

          markdownFiles.push(_react2.default.createElement(
            'div',
            { key: fileName, id: args.id, style: styles.file, className: 'markdown' },
            _react2.default.createElement(_MarkdownTitle2.default, {
              isHeadline: _markdown2.default.isSubSection(fileName) ? true : false,
              title: args.title,
              link: args.id,
              primaryColor: this.props.primaryColor }),
            _react2.default.createElement(
              _Markdown2.default,
              null,
              body
            )
          ));
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'style',
          null,
          '\n          .rendered{\n            color: #607D8B; // blue grey 500\n          }\n          .rendered .hljs-comment {\n            color: #B0BEC5; // blue grey 200\n          }\n          .rendered .hljs-keyword{\n            color: #EF9A9A;  // red 200\n          }\n          .rendered .hljs-string{\n            color: #689F38; // light green 700\n          }\n          .rendered .hljs-title{\n          }\n          .text code{\n            background: #ddd;\n            padding: 1px 5px 3px;\n            border-radius: 2px;\n            box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);\n            font-size: 85%;\n            vertical-align: bottom;\n          }\n          .markdown p{\n            margin: 15px 24px 15px 0;\n          }\n          .markdown h1{\n            font-size: 38px;\n            font-weight: 200;\n            color: rgba(0,0,0,.77);\n            margin: 0;\n            padding-top: 54px;\n            padding-bottom: 5px;\n          }\n          .markdown h2{\n            font-size: 26px;\n            line-height: 32px;\n            font-weight: 200;\n            color: rgba(0,0,0,.57);\n            padding-top: 20px;\n            margin-top: 20px;\n            margin-bottom: 10px;\n          }\n          .markdown h3{\n            font-weight: normal;\n            font-size: 20px;\n            padding-top: 20px;\n            margin-top: 20px;\n            color: rgba(0,0,0,.67);\n          }\n        '
        ),
        _react2.default.createElement(
          _reactBasicLayout.Grid,
          null,
          _react2.default.createElement(
            'div',
            { style: styles.sidebar, ref: 'sidebar' },
            _react2.default.createElement(_Sidebar2.default, { files: this.props.markdown, active: this.state.visible, primaryColor: this.props.primaryColor, bottom: this.props.bottom, fixed: this.state.sidebarFixed })
          ),
          _react2.default.createElement(
            'div',
            { ref: 'files', style: styles.files },
            markdownFiles
          )
        )
      );
    }
  }]);

  return Docs;
}(_react2.default.Component);

Docs.defaultProps = {
  primaryColor: '#03A9F4'
};

exports.default = Docs;