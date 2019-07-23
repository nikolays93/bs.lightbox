/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lightbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lightbox.js":
/*!*********************!*\
  !*** ./lightbox.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lightbox = function ($) {
  var NAME = 'lightbox';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var __default = {
    doc: document,
    lang: 'ru',
    i18: {
      ru: {
        prev: 'Назад',
        next: 'Вперед',
        close: 'Закрыть',
        failLoad: 'Не удалось загрузить контент.',
        undefinedType: 'Не удалось определить тип контента'
      }
    },
    tpl: {
      title: 'Тестовый заголовок',
      preloader: '<div class="preloader"></div>',
      leftArrow: '<button type="button" title="{{prev}}"><span>&#10094;</span></button>',
      rightArrow: '<button type="button" title="{{next}}"><span>&#10095;</span></button>',
      close: '<button type="button" class="close" data-dismiss="modal" aria-label="{{close}}"><span aria-hidden="true">&times;</span></button>'
    },
    opts: {
      maxWidth: 9999,
      maxHeight: 9999,
      arrows: true,
      infinite: false,
      type: null,
      hideClose: true,
      deepPreload: 1
    },
    onShow: function onShow() {},
    onShown: function onShown() {},
    onHide: function onHide() {},
    onHidden: function onHidden() {},
    onNavigate: function onNavigate(direction) {},
    onContentLoaded: function onContentLoaded() {}
  };

  var Lightbox =
  /*#__PURE__*/
  function () {
    _createClass(Lightbox, null, [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    function Lightbox($target, config) {
      _classCallCheck(this, Lightbox);

      this.config = $.extend({}, __default, config);
      this.$arrows = null;
      this.galleryIndex = 0;
      this.galleryName = null; // this._titleIsShown = false;
      // this._footerIsShown = false;

      this.remindLastWidth = 0;
      this.remindLastHeight = 0;
      this.modalId = 'modal-' + Math.floor(Math.random() * 1000 + 1); // this.config.id ||

      this.header = this.config.tpl.close; // || '<div class="modal-header"><h5 class="mb-0">' + this.config.tpl.title + '</h5>' + this.config.tpl.close + '</div>';

      this.footer = ' ' || false;
      this.tpl = '<div class="modal lightbox fade" id="' + this.modalId + '" tabindex="-1" role="dialog" aria-hidden="true">' + '   <div class="modal-dialog" role="document">' // modal-dialog-centered
      + '       <div class="modal-content">' + '           ' + this.translate(this.header) + '           <div class="modal-body">' + '               <div class="modal-container">' + '                   <div class="modal-item fade in show"></div>' + '                   <div class="modal-item fade"></div>' + '               </div>' + '           </div>' + '           ' + this.translate(this.footer) + '       </div><!-- .modal-content -->' + '   </div>' + '</div>'; // append modal to document

      $(this.config.doc.body).append(this.tpl); // this target element

      this.$element = $target instanceof jQuery ? $target : $($target); // modal group ID

      this.galleryName = this.$element.data('gallery'); // this modal element

      this.$modal = $('#' + this.modalId, this.config.doc); // animated block

      this.$dialog = $('.modal-dialog', this.$modal); // container closest modal

      this.$container = $('.modal-container', this.$modal); // container closest modal

      this.$body = $('.modal-body', this.$modal);
      this.$content = $('.modal-content', this.$modal);
      this._border = this._calculateBorders(); // call after append and element defined

      this._padding = this._calculatePadding(); // call after append and element defined
      // check any nodes with this gallery name

      if (this.galleryName) {
        // get all gallery trigger items
        this.$items = $(document.body).find('[data-gallery="' + this.galleryName + '"]'); // this element current position

        this.galleryIndex = this.$items.index(this.$element); // set hotkeys on lightbox

        $(document).on('keydown.bs.lightbox', this._hotkeys.bind(this)); // add the directional arrows to the modal

        if (this.config.opts.arrows && !this.isSingle()) {
          // insert (if)required arrows
          this._arrows();
        }
      }

      this.$modal.addClass(this.isTouchDevice() ? 'touch' : 'no-touch');

      this._arrowEvents();

      this._modalEvents(); // this._touchEvents();

    }

    _createClass(Lightbox, [{
      key: "_modalEvents",
      value: function _modalEvents() {
        var _this = this;

        /**
         * Set the events
         * and call bootstrap modal
         */
        this.$modal // call onShow on modal open
        .on('show.bs.modal', this.config.onShow.bind(this)) // call onShown after modal opened
        .on('shown.bs.modal', function () {
          _this.toggleLoading(true);

          _this.open();

          return _this.config.onShown.call(_this);
        }) // call onHide on modal close
        .on('hide.bs.modal', this.config.onHide.bind(this)) // Call onHidden after modal closed
        .on('hidden.bs.modal', function () {
          if (_this.galleryName) {
            $(document).off('keydown.bs.lightbox');
            $(window).off('resize.bs.lightbox');
          } // jQuery element delete


          _this.$modal.remove();

          return _this.config.onHidden.call(_this);
        }).modal(this.config);
        $(window).on('resize.bs.lightbox', function () {
          _this._resize(_this.remindLastWidth, _this.remindLastHeight);
        });
      }
    }, {
      key: "getLangString",
      value: function getLangString(stringKey) {
        var langArr = this.config.i18[this.config.lang] || this.config.i18.ru;

        if (langArr[stringKey]) {
          return langArr[stringKey];
        }

        return stringKey // insert a space before all caps
        .replace(/([A-Z])/g, ' $1').toLowerCase() // uppercase the first character
        .replace(/^./, function (str) {
          return str.toUpperCase();
        });
      }
    }, {
      key: "translate",
      value: function translate(str) {
        var _this2 = this;

        return str.replace(/\{\{(\w+)\}\}/g, function (match, n1) {
          return _this2.getLangString(n1);
        });
      }
    }, {
      key: "error",
      value: function error(message, subMessage) {
        message = getLangString(message);

        if (subMessage) {
          message += ': ' + subMessage;
        }

        console.error(message);

        this._containerToUse().html(message);

        this._resize(500, 180);

        return this;
      }
    }, {
      key: "isSingle",
      value: function isSingle() {
        return !this.$items || this.$items.length === 1;
      }
    }, {
      key: "isImage",
      value: function isImage(string) {
        return string && string.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
      }
    }, {
      key: "isMedia",
      value: function isMedia(string) {
        return string && string.match(/(\.(mp3|mp4|ogg|webm|wav)((\?|#).*)?$)/i);
      }
    }, {
      key: "isExternal",
      value: function isExternal(url) {
        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;
        if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(".concat({
          "http:": 80,
          "https:": 443
        }[location.protocol], ")?$")), "") !== location.host) return true;
        return false;
      } // @todo

    }, {
      key: "isSelector",
      value: function isSelector() {}
      /****************************** Guestures *****************************/

    }, {
      key: "isTouchDevice",
      value: function isTouchDevice() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

        var mq = function mq(query) {
          return window.matchMedia(query).matches;
        };

        if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
          return true;
        } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH


        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
      } // _touchEvents() {
      //     let isTouch = this.isTouchDevice();
      //     this.touch = {
      //         data: {},
      //         start: {},
      //         stop: {},
      //         event: {
      //             scroll: "touchmove scroll",
      //             start: isTouch ? "touchstart" : "mousedown",
      //             stop:  isTouch ? "touchend" : "mouseup",
      //             move:  isTouch ? "touchmove" : "mousemove",
      //         }
      //     }
      //     var self = this;
      //     var isVertical = false;
      //     var isHorizontal = false;
      //     /**
      //      * Guestures events
      //      */
      //     this.$dialog
      //         .on(this.touch.event.start, (event) => {
      //             // event data
      //             this.touch.data = event.originalEvent.touches ?
      //                 event.originalEvent.touches[ 0 ] :
      //                 event;
      //             // start data
      //             this.touch.start = [ this.touch.data.pageX, this.touch.data.pageY ];
      //             // origin: $(event.target)
      //         })
      //         // move object in touch
      //         .on(this.touch.event.move, (event) => {
      //             if (!this.touch.start) return;
      //             // update data
      //             this.touch.data = event.originalEvent.touches ? event.originalEvent.touches[ 0 ] : event;
      //             this.touch.stop = [ this.touch.data.pageX, this.touch.data.pageY ];
      //             // prevent scrolling
      //             // @TODO check this clicable elements (as a or button)
      //             event.preventDefault();
      //             if (Math.abs(this.touch.start[0] - this.touch.stop[0]) > 10) {
      //                 if( this.$arrows ) {
      //                     $('button', this.$arrows)
      //                         .addClass('disabled')
      //                         .attr('disabled', 'disabled');
      //                 }
      //                 if( !this.isSingle() ) {
      //                     this.$container
      //                         .addClass('touched')
      //                         .addClass('touched-horizontal');
      //                     return this.horizontalMove();
      //                 }
      //                 else {
      //                     // _touchStop(event);
      //                 }
      //             }
      //             if(Math.abs(this.touch.start[1] - this.touch.stop[1]) > 10) {
      //                 if( this.$arrows ) {
      //                     $('button', this.$arrows)
      //                         .addClass('disabled')
      //                         .attr('disabled', 'disabled');
      //                 }
      //                 this.$container
      //                     .addClass('touched')
      //                     .addClass('touched-vertical');
      //                 return this.verticalMove();
      //             }
      //         })
      //     // call stop on touch end\mouse up
      //     $(document).on(this.touch.event.stop, this.$dialog, (event) => {
      //         // reset move event
      //         // this.$dialog.unbind(this.touch.event.move, this._touch);
      //         // data exists
      //         if (this.touch.start[0] !== undefined && this.touch.stop[0] !== undefined) {
      //             if( isHorizontal ) {
      //                 horizontalMoveEnd();
      //             }
      //             // is vertical move stop
      //             if( isVertical ) {
      //                 verticalMoveEnd();
      //             }
      //             else {
      //                 this.$dialog.css('transform', 'translate(0, 0)');
      //             }
      //         }
      //         var $container = this.$container;
      //         // disable after click event (for arrows disabled)
      //         setTimeout(function() {
      //             $container
      //                 .removeClass('touched')
      //                 .removeClass('touched-vertical')
      //                 .removeClass('touched-horizontal');
      //         }, 100);
      //         self.touch.start = [];
      //         self.touch.stop = [];
      //         // isVertical = false;
      //         // isHorizontal = false;
      //         self._navigateUpdate();
      //     });
      //     // $(document).on('mouseleave', this.$dialog, this._touchStop);
      // }
      // verticalMove() {
      //     // if( !!isHorizontal ) return;
      //     // isVertical = true;
      //     this.$dialog.css({
      //         'transform': 'translateY(' + -(this.touch.start[1] - this.touch.data.pageY) + 'px)',
      //         'transition': 'none'
      //     });
      // }
      // verticalMoveEnd() {
      //     if ( Math.abs(this.touch.start[1] - this.touch.stop[1]) > 30 ) {
      //         this.$dialog.css('transition', '');
      //         this.$modal.modal('hide');
      //     }
      //     else {
      //         this.$dialog.css('transform', 'translate(0, 0)');
      //     }
      // }
      // horizontalMove() {
      //     // if( !!isVertical ) return;
      //     // isHorizontal = true;
      //     this.$dialog.css({
      //         'transform': 'translateX(' + -(this.touch.start[0] - this.touch.data.pageX) + 'px)',
      //         'transition': 'none'
      //     });
      // }
      // horizontalMoveEnd() {
      //     if ( Math.abs(this.touch.start[0] - this.touch.stop[0]) > 30 ) {
      //         if( this.touch.start[0] > this.touch.stop[0] ) {
      //             this.navigateRight();
      //         }
      //         else {
      //             this.navigateLeft();
      //         }
      //     }
      // }

    }, {
      key: "open",
      value: function open() {
        var $toUse = this._containerToUse(); // this._updateTitleAndFooter()


        var remote = this.$element.attr('data-remote') || this.$element.attr('href');
        var type = this.detectRemoteType(remote, this.$element.attr('data-type') || false);
        if (['image', 'youtube', 'vimeo', 'instagram', 'media', 'url'].indexOf(type) < 0) return this.error('undefinedType');

        switch (type) {
          case 'image':
            this._preloadImage(remote, $toUse);

            this._preloadNearImages(this.galleryIndex, this.config.opts.deepPreload);

            break;

          case 'youtube':
            this.showYoutubeVideo(remote, $toUse);
            break;

          case 'vimeo':
            this.showVimeoVideo(this.getVimeoId(remote), $toUse);
            break;

          case 'instagram':
            this.showInstagramVideo(this.getInstagramId(remote), $toUse);
            break;

          case 'media':
            this.showHtml5Media(remote, $toUse);
            break;

          default:
            // url
            this.loadRemoteContent(remote, $toUse);
            break;
        }

        return this;
      }
    }, {
      key: "close",
      value: function close() {
        return this.$modal.modal('hide');
      }
      /****************************** Controlls *****************************/

    }, {
      key: "toggleLoading",
      value: function toggleLoading(show) {
        if (!!show) {
          this.$dialog.css('display', 'none');
          this.$modal.removeClass('in show');
          $('.modal-backdrop').append(this.translate(this.config.tpl.preloader));
        } else {
          this.$dialog.css('display', 'block');
          this.$modal.addClass('in show');
          $('.modal-backdrop').find('.preloader').remove();
        }

        return this;
      }
    }, {
      key: "navigateTo",
      value: function navigateTo(index) {
        if (this.isSingle()) return; // outer offset

        if (index < 0 || index > this.$items.length - 1) return; // change current index

        this.galleryIndex = index; // chenge active element

        this.$element = $(this.$items.get(this.galleryIndex));

        this._navigateUpdate();

        return this.open();
      }
    }, {
      key: "navigateLeft",
      value: function navigateLeft() {
        // not has many items
        if (!this.$items || this.$items.length === 1) return; // rewind index

        if (this.galleryIndex === 0) {
          if (this.config.opts.infinite) this.galleryIndex = this.$items.length - 1;else return;
        } else {
          this.galleryIndex--;
        } // call event


        this.config.onNavigate.call(this, 'left', this.galleryIndex);
        return this.navigateTo(this.galleryIndex);
      }
    }, {
      key: "navigateRight",
      value: function navigateRight() {
        // not has many items
        if (!this.$items || this.$items.length === 1) return;

        if (this.galleryIndex === this.$items.length - 1) {
          if (this.config.opts.infinite) this.galleryIndex = 0;else return;
        } else {
          this.galleryIndex++;
        }

        this.config.onNavigate.call(this, 'right', this.galleryIndex);
        return this.navigateTo(this.galleryIndex);
      }
    }, {
      key: "_hotkeys",
      value: function _hotkeys(event) {
        event = event || window.event;
        var key = event.keyCode || event.which; // right arrow or space

        if (key === 39 || key === 32) {
          return this.navigateRight();
        } // left arrow or backspace


        if (key === 37 || key === 8) {
          return this.navigateLeft();
        } // escape


        if (key === 27) {
          return this.close();
        }
      }
    }, {
      key: "_arrows",
      value: function _arrows() {
        this.$container.append('<div class="navigations">' + this.translate(this.config.tpl.leftArrow) + this.translate(this.config.tpl.rightArrow) + '</div>');
        this.$arrows = $('.navigations', this.$container);
      }
    }, {
      key: "_arrowEvents",
      value: function _arrowEvents() {
        var _this3 = this;

        if (!this.$arrows) return;
        this.$arrows.on('click', 'button:first-child', function (event) {
          if (!_this3.$container.hasClass('touched')) {
            event.preventDefault();
            return _this3.navigateLeft();
          }
        });
        this.$arrows.on('click', 'button:last-child', function (event) {
          if (!_this3.$container.hasClass('touched')) {
            event.preventDefault();
            return _this3.navigateRight();
          }
        });

        this._navigateUpdate();
      }
    }, {
      key: "_navigateUpdate",
      value: function _navigateUpdate() {
        if (!this.config.opts.infinite && this.$arrows) {
          if (this.galleryIndex === 0) {
            $('button:first-child', this.$arrows).addClass('disabled').attr('disabled', 'disabled');
          } else {
            $('button:first-child', this.$arrows).removeClass('disabled').removeAttr('disabled');
          }

          if (this.galleryIndex === this.$items.length - 1) {
            $('button:last-child', this.$arrows).addClass('disabled').attr('disabled', 'disabled');
          } else {
            $('button:last-child', this.$arrows).removeClass('disabled').removeAttr('disabled');
          }
        }
      }
    }, {
      key: "toggleArrows",
      value: function toggleArrows(show) {
        if (this.$arrows) {
          if (!!show) return this.$arrows.css('display', '');else return this.$arrows.css('display', 'none');
        }
      }
      /**************************** Layout tools ****************************/
      // serve container

    }, {
      key: "_containerToUse",
      value: function _containerToUse() {
        var $first = this.$container.children('.modal-item:first');
        var $last = this.$container.children('.modal-item:last'); // if currently showing an image, fade it out and remove

        var $toUse = $last;
        var $current = $first;

        if ($toUse.hasClass('in')) {
          $toUse = $first;
          $current = $last;
        }

        $current.removeClass('in show');
        setTimeout(function () {
          if (!$last.hasClass('in')) $last.empty();
          if (!$first.hasClass('in')) $first.empty();
        }, 500);
        $toUse.addClass('in show');
        return $toUse;
      } // load in container

    }, {
      key: "_preloadImage",
      value: function _preloadImage(src, $containerForImage) {
        var _this4 = this;

        $containerForImage = $containerForImage || false;
        var img = new Image();

        if ($containerForImage) {
          // if loading takes > 200ms show a loader
          var loadingTimeout = setTimeout(function () {
            $containerForImage.append(_this4.translate(_this4.config.tpl.preloader));
          }, 200);

          img.onload = function () {
            if (loadingTimeout) clearTimeout(loadingTimeout);
            var image = $('<img />', {
              src: img.src,
              "class": 'img-fluid'
            });
            $containerForImage.html(image);

            if (_this4.$arrows) {
              _this4.$arrows.css('display', ''); // remove display to default to css property

            }

            _this4._resize(img.width, img.height);

            _this4.toggleLoading(false);

            return _this4.config.onContentLoaded.call(_this4);
          };

          img.onerror = function () {
            _this4.toggleLoading(false);

            return _this4.error('failLoad', +src);
          };
        }

        img.src = src;
        return img;
      } // preload near images
      // @todo repair this

    }, {
      key: "_preloadNearImages",
      value: function _preloadNearImages(index, deep) {
        var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        if (this.isSingle()) return;
        var nextItem = $(this.$items.get(index + depth), false);

        if ('undefined' != typeof nextItem) {
          var src = nextItem.attr('data-remote') || nextItem.attr('href'); // if ('image' === nextItem.attr('data-type') || this.isImage(src));
          // this._preloadImage(src, false);
        }

        var prevItem = $(this.$items.get(index - depth), false);

        if ('undefined' != typeof prevItem) {
          var _src = prevItem.attr('data-remote') || prevItem.attr('href'); // if ('image' === prevItem.attr('data-type') || this.isImage(src));
          // this._preloadImage(src, false);

        }

        if (deep > 1) {
          return this._preloadNearImages(index, --deep, ++depth);
        }
      }
    }, {
      key: "_totalCssByAttribute",
      value: function _totalCssByAttribute(attribute) {
        return parseInt(this.$dialog.css(attribute), 10) + parseInt(this.$content.css(attribute), 10) + parseInt(this.$body.css(attribute), 10);
      }
    }, {
      key: "_calculateBorders",
      value: function _calculateBorders() {
        return {
          top: this._totalCssByAttribute('border-top-width'),
          right: this._totalCssByAttribute('border-right-width'),
          bottom: this._totalCssByAttribute('border-bottom-width'),
          left: this._totalCssByAttribute('border-left-width')
        };
      }
    }, {
      key: "_calculatePadding",
      value: function _calculatePadding() {
        return {
          top: this._totalCssByAttribute('padding-top'),
          right: this._totalCssByAttribute('padding-right'),
          bottom: this._totalCssByAttribute('padding-bottom'),
          left: this._totalCssByAttribute('padding-left')
        };
      }
    }, {
      key: "_resize",
      value: function _resize(width, height) {
        if ("object" == _typeof(width)) {
          height = width.height;
          width = width.width;
        }

        height = height || width;
        this.remindLastWidth = width;
        this.remindLastHeight = height;
        var imageAspecRatio = width / height; // if width > the available space, scale down the expected width and height

        var gutterHorizontal = this._padding.left + this._padding.right + this._border.left + this._border.right;
        var gutterVertical = this._padding.top + this._padding.bottom + this._border.bottom + this._border.top; // force 10px margin if window size > 575px

        var discountMargin = this.config.doc.body.clientWidth > 575 ? 0 : 20; //calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins

        var margins = parseFloat(this.$dialog.css('margin-top')) + parseFloat(this.$dialog.css('margin-bottom'));
        var headerHeight = 0,
            footerHeight = 0; // as the resize is performed the modal is show, the calculate might fail
        // if so, default to the default sizes
        // if (this._footerIsShown)
        // footerHeight = this._$modalFooter.outerHeight(true) || 55
        // if (this._titleIsShown)
        // headerHeight = this._$modalHeader.outerHeight(true) || 67

        var maxWidth = Math.min(width + gutterHorizontal, this.config.doc.body.clientWidth, this.config.opts.maxWidth);

        if (width + gutterHorizontal > maxWidth) {
          height = (maxWidth - gutterHorizontal - discountMargin) / imageAspecRatio;
          width = maxWidth;
        } else {
          width = width + gutterHorizontal;
        }

        var maxHeight = Math.min(height, $(window).height() - gutterVertical - margins - headerHeight - footerHeight, this.config.opts.maxHeight - gutterVertical - headerHeight - footerHeight);

        if (height > maxHeight) {
          // if height > the available height, scale down the width
          width = Math.ceil(maxHeight * imageAspecRatio) + gutterHorizontal;
        }

        this.$container.css('height', maxHeight);
        this.$dialog.css('flex', 1).css('max-width', width);
        var modal = this.$modal.data('bs.modal');
        if (modal) modal.handleUpdate();
        return this;
      }
    }, {
      key: "getElementSize",
      value: function getElementSize() {
        var width = this.$element.data('width') || 560;
        return {
          width: width,
          height: this.$element.data('height') || width / 100 * 56.25
        };
      }
      /************************** Type check tools **************************/

    }, {
      key: "detectRemoteType",
      value: function detectRemoteType(src, type) {
        type = type || false;
        if (!type && this.isImage(src)) type = 'image';
        if (!type && this.getYoutubeId(src)) type = 'youtube';
        if (!type && this.getVimeoId(src)) type = 'vimeo';
        if (!type && this.getInstagramId(src)) type = 'instagram';
        if (type == 'audio' || type == 'video' || !type && this.isMedia(src)) type = 'media';
        if (!type || ['image', 'youtube', 'vimeo', 'instagram', 'media', 'url'].indexOf(type) < 0) type = 'url';
        return type;
      }
    }, {
      key: "getRemoteContentType",
      value: function getRemoteContentType(src) {
        var response = $.ajax({
          type: 'HEAD',
          url: src,
          async: false
        });
        var contentType = response.getResponseHeader('Content-Type');
        return contentType;
      } // should be used for videos only. for remote content use loadRemoteContent (data-type=url)

    }, {
      key: "showHtml5Media",
      value: function showHtml5Media(url, $containerForElement) {
        var contentType = this.getRemoteContentType(url);
        if (!contentType) return this.error(this.getLangString('undefinedType'));
        var mediaType = contentType.indexOf('audio') > 0 ? 'audio' : 'video',
            size = this.getElementSize();
        $containerForElement.html($('<div class="embed-responsive embed-responsive-16by9"></div>').append($('<' + mediaType + '>', {
          "class": 'embed-responsive-item',
          // width: size.width,
          // height: size.height,
          preload: 'auto',
          autoplay: 1,
          controls: 1
        }).append('<source src="' + url + '" type="' + contentType + '">').append(this.getLangString('undefinedType'))));

        this._resize(size.width, size.height);

        this.config.onContentLoaded.call(this); // hide the arrows when showing video

        this.toggleArrows(false);
        this.toggleLoading(false);
        return this;
      } // should be used for videos only. for remote content use loadRemoteContent (data-type=url)

    }, {
      key: "showVideoIframe",
      value: function showVideoIframe(url, $containerForElement, size) {
        var wrapClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'embed-responsive embed-responsive-16by9';
        if (!size) size = this.getElementSize();
        var $iFrame = $('<iframe>', {
          src: url,
          "class": 'embed-responsive-item',
          width: size.width,
          height: size.height,
          frameborder: 0,
          allowfullscreen: 1
        });

        if (!!wrapClass) {
          $containerForElement.html($('<div class="' + wrapClass + '"></div>').append($iFrame));
        } else {
          $containerForElement.html($iFrame);
        }

        this._resize(size.width, size.height);

        this.config.onContentLoaded.call(this); // hide the arrows when showing video

        this.toggleArrows(false);
        this.toggleLoading(false);
        return this;
      }
    }, {
      key: "getYoutubeId",
      value: function getYoutubeId(string) {
        if (!string) return false;
        var matches = string.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        return matches && matches[2].length === 11 ? matches[2] : false;
      }
    }, {
      key: "showYoutubeVideo",
      value: function showYoutubeVideo(remote, $containerForElement) {
        var id = this.getYoutubeId(remote);
        var query = remote.indexOf('&') > 0 ? remote.substr(remote.indexOf('&')) : '';
        return this.showVideoIframe("//www.youtube.com/embed/".concat(id, "?badge=0&autoplay=1&html5=1").concat(query), $containerForElement);
      }
    }, {
      key: "getVimeoId",
      value: function getVimeoId(string) {
        return string && string.indexOf('vimeo') > 0 ? string : false;
      }
    }, {
      key: "showVimeoVideo",
      value: function showVimeoVideo(id, $containerForElement) {
        return this.showVideoIframe(id + '?autoplay=1', $containerForElement);
      }
    }, {
      key: "getInstagramId",
      value: function getInstagramId(string) {
        return string && string.indexOf('instagram') > 0 ? string : false;
      }
    }, {
      key: "showInstagramVideo",
      value: function showInstagramVideo(id, $containerForElement) {
        // instagram load their content into iframe's so this can be put straight into the element
        var width = this.$element.data('width') || 612;
        var height = width + 80;
        id = id.substr(-1) !== '/' ? id + '/' : id; // ensure id has trailing slash

        return this.showVideoIframe(id + 'embed/', $containerForElement, {
          width: width,
          height: height
        }, null);
      }
    }, {
      key: "loadRemoteContent",
      value: function loadRemoteContent(url, $containerForElement) {
        var _this5 = this;

        var disableExternalCheck = this.$element.data('disableExternalCheck') || false;
        this.toggleLoading(false); // external urls are loading into an iframe
        // local ajax can be loaded into the container itself

        if (!disableExternalCheck && !this.isExternal(url)) {
          $containerForElement.load(url, $.proxy(function () {
            return _this5.$element.trigger('loaded.bs.modal');
          }));
        } else {
          $containerForElement.html("<iframe src=\"".concat(url, "\" frameborder=\"0\" allowfullscreen></iframe>"));
          this.config.onContentLoaded.call(this);
        } // hide the arrows when remote content


        this.toggleArrows(false);

        this._resize(this.getElementSize());

        return this;
      }
    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        var _this6 = this;

        config = config || {};
        return this.each(function () {
          var $this = $(_this6);
          var config = $.extend({}, Lightbox.__default, $this.data(), _typeof(config) === 'object' && config);
          new Lightbox(_this6, config);
        });
      }
    }]);

    return Lightbox;
  }();

  $.fn[NAME] = Lightbox._jQueryInterface;
  $.fn[NAME].Constructor = Lightbox;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Lightbox._jQueryInterface;
  };

  return Lightbox;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (Lightbox);

/***/ })

/******/ });
//# sourceMappingURL=lightbox.js.map