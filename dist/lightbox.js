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
        close: 'Закрыть',
        failLoad: 'Не удалось загрузить контент.',
        undefinedType: 'Не удалось определить тип контента'
      }
    },
    tpl: {
      title: 'Тестовый заголовок',
      preloader: '<div class="preloader"></div>',
      leftArrow: '<button type="button"><span>&#10094;</span></button>',
      rightArrow: '<button type="button"><span>&#10095;</span></button>',
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
      var _this = this;

      _classCallCheck(this, Lightbox);

      this.config = $.extend({}, __default, config);
      this.$arrows = null;
      this.galleryIndex = 0;
      this.galleryName = null; // this._titleIsShown = false;
      // this._footerIsShown = false;

      this.remindLastWidth = 0;
      this.remindLastHeight = 0; // this._touchstartX = 0;
      // this._touchendX = 0;

      this.modalId = 'modal-' + Math.floor(Math.random() * 1000 + 1); // this.config.id ||

      this.header = this.config.tpl.close || '<div class="modal-header"><h5 class="mb-0">' + this.config.tpl.title + '</h5>' + this.config.tpl.close + '</div>';
      this.footer = ' ' || false;
      this.tpl = '<div class="modal lightbox fade" id="' + this.modalId + '" tabindex="-1" role="dialog" aria-hidden="true">' + '   <div class="modal-dialog" role="document">' // modal-dialog-centered
      + '       <div class="modal-content">' + '           ' + this.header + '           <div class="modal-body">' + '               <div class="modal-container">' + '                   <div class="modal-item fade in show"></div>' + '                   <div class="modal-item fade"></div>' + '               </div>' + '           </div>' + '           ' + this.footer + '       </div><!-- .modal-content -->' + '   </div>' + '</div>'; // append modal to document

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

        $(document).on('keydown.bs.lightbox', this.hotkeys.bind(this)); // add the directional arrows to the modal

        if (this.config.opts.arrows && this.$items.length > 1) {
          this.$container.append('<div class="navigations">' + this.config.tpl.leftArrow + this.config.tpl.rightArrow + '</div>');
          this.$arrows = $('.navigations', this.$container);
          this.$container.on('click', 'button:first-child', function (event) {
            event.preventDefault();
            return _this.navigateLeft();
          });
          this.$container.on('click', 'button:last-child', function (event) {
            event.preventDefault();
            return _this.navigateRight();
          });
          this.navigateUpdate();
        }
      }
      /**
       * Set the events
       * and call bootstrap modal
       */


      this.$modal // call onShow on modal open
      .on('show.bs.modal', this.config.onShow.bind(this)) // call onShown after modal opened
      .on('shown.bs.modal', function () {
        _this.togglePreloader(true);

        _this._handle();

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
      /**
       * Touch/Swipe events
       */

      this.touch = {
        data: {},
        start: {},
        stop: {},
        support: $.support.touch,
        event: {}
      };
      this.touch.event.scroll = "touchmove scroll";
      this.touch.event.start = this.touch.support ? "touchstart" : "mousedown";
      this.touch.event.stop = this.touch.support ? "touchend" : "mouseup";
      this.touch.event.move = this.touch.support ? "touchmove" : "mousemove";
      var touch = this.touch;
      this.$dialog.on(touch.event.start, function (event) {
        var self = _this; // this._touchstartX = event.changedTouches[0].screenX;
        // event data

        touch.data = event.originalEvent.touches ? event.originalEvent.touches[0] : event; // start data

        touch.start = [touch.data.pageX, touch.data.pageY]; // origin: $(event.target)

        self.$dialog // move object in touch
        .bind(touch.event.move, moveHandler); // call stop on touch end\mouse up

        $(document).one(touch.event.stop, self.$dialog, moveStop);
        $(document).on('mouseleave', self.$dialog, moveStop);

        function moveHandler(event) {
          if (!touch.start) return; // update data

          touch.data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
          touch.stop = [touch.data.pageX, touch.data.pageY]; // prevent scrolling

          if (Math.abs(touch.start[1] - touch.stop[1]) > 10) {
            event.preventDefault(); // hide arrows on swipe

            $('button', self.$arrows).addClass('disabled').attr('disabled', 'disabled');
          }

          self.$dialog.css({
            'transform': 'translateY(' + -(touch.start[1] - touch.data.pageY) + 'px)',
            'transition': 'none'
          });
        }

        function moveStop(event) {
          // reset move event
          self.$dialog.unbind(touch.event.move, moveHandler); // data exists

          if (touch.start && touch.stop) {
            // && Math.abs(touch.start[0] - touch.stop[0]) < 75
            if (Math.abs(touch.start[1] - touch.stop[1]) > 30) {
              self.$dialog.css('transition', '');
              self.$modal.modal('hide'); // do not toggle navigation

              self.$container.off('click');
              touch.start = [];
              touch.stop = [];
            } else {
              self.$dialog.css('transform', 'translateY(0px)');
            }
          }

          self.navigateUpdate();
        }
      }); // .on(touchStopEvent, () => {
      //     // this._touchendX = event.changedTouches[0].screenX;
      //     // this._swipeGesure();
      // })
    }

    _createClass(Lightbox, [{
      key: "_handle",
      value: function _handle() {
        var $toUse = this._containerToUse(); // this._updateTitleAndFooter()


        var remote = this.$element.attr('data-remote') || this.$element.attr('href');
        var type = 'image'; // this._detectRemoteType(remote, this.$element.attr('data-type') || false)

        if (['image', 'youtube', 'vimeo', 'instagram', 'media', 'url'].indexOf(type) < 0) return this._error(this.config.i18.ru.undefinedType);

        switch (type) {
          case 'image':
            this._preloadImage(remote, $toUse);

            this._preloadNearImages(this.galleryIndex, this.config.opts.deepPreload);

            break;

          case 'youtube':
            this._showYoutubeVideo(remote, $toUse);

            break;

          case 'vimeo':
            this._showVimeoVideo(this._getVimeoId(remote), $toUse);

            break;

          case 'instagram':
            this._showInstagramVideo(this._getInstagramId(remote), $toUse);

            break;

          case 'media':
            this._showHtml5Media(remote, $toUse);

            break;

          default:
            // url
            this._loadRemoteContent(remote, $toUse);

            break;
        }

        return this;
      } // serve container

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
        var _this2 = this;

        $containerForImage = $containerForImage || false;
        var img = new Image();

        if ($containerForImage) {
          // if loading takes > 200ms show a loader
          var loadingTimeout = setTimeout(function () {
            $containerForImage.append(_this2.config.tpl.preloader);
          }, 200);

          img.onload = function () {
            if (loadingTimeout) clearTimeout(loadingTimeout);
            var image = $('<img />');
            image.attr('src', img.src); // image.addClass('img-fluid');

            $containerForImage.html(image);

            _this2.$arrows.css('display', ''); // remove display to default to css property


            _this2._resize(img.width, img.height);

            _this2.togglePreloader(false);

            return _this2.config.onContentLoaded.call(_this2);
          };

          img.onerror = function () {
            _this2.togglePreloader(false);

            return _this2.error(_this2.config.i18.ru.failLoad + ':' + src);
          };
        }

        img.src = src;
        return img;
      } // preload near images

    }, {
      key: "_preloadNearImages",
      value: function _preloadNearImages(index, deep) {
        var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        if (!this.$items) return;
        var nextItem = $(this.$items.get(index + depth), false);

        if ('undefined' != typeof nextItem) {
          var src = nextItem.attr('data-remote') || nextItem.attr('href'); // if ('image' === nextItem.attr('data-type') || this._isImage(src));
          // this._preloadImage(src, false);
        }

        var prevItem = $(this.$items.get(index - depth), false);

        if ('undefined' != typeof prevItem) {
          var _src = prevItem.attr('data-remote') || prevItem.attr('href'); // if ('image' === prevItem.attr('data-type') || this._isImage(src));
          // this._preloadImage(src, false);

        }

        if (deep > 1) {
          return this._preloadNearImages(index, --deep, ++depth);
        }
      }
    }, {
      key: "hotkeys",
      value: function hotkeys(event) {
        event = event || window.event;
        if (event.keyCode === 39 || event.keyCode === 32) return this.navigateRight();
        if (event.keyCode === 37 || event.keyCode === 8) return this.navigateLeft();
        if (event.keyCode === 27) return this.close();
      }
    }, {
      key: "close",
      value: function close() {
        return this.$modal.modal('hide');
      }
    }, {
      key: "navigateTo",
      value: function navigateTo(index) {
        // outer offset
        if (index < 0 || index > this.$items.length - 1) return; // change current index

        this.galleryIndex = index; // chenge active element

        this.$element = $(this.$items.get(this.galleryIndex));
        this.navigateUpdate();

        this._handle();
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
      } // prop arrows disabled

    }, {
      key: "navigateUpdate",
      value: function navigateUpdate() {
        if (!this.config.opts.infinite) {
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
      key: "togglePreloader",
      value: function togglePreloader(show) {
        show = !!show;

        if (show) {
          this.$dialog.css('display', 'none');
          this.$modal.removeClass('in show');
          $('.modal-backdrop').append(this.config.tpl.preloader);
        } else {
          this.$dialog.css('display', 'block');
          this.$modal.addClass('in show');
          $('.modal-backdrop').find('.preloader').remove();
        }

        return this;
      }
    }, {
      key: "_totalCssByAttribute",
      value: function _totalCssByAttribute(attribute) {
        return parseInt(this.$dialog.css(attribute), 10) + parseInt(this.$content.css(attribute), 10) + parseInt(this.$body.css(attribute), 10);
      } // layout private methods

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
      key: "_error",
      value: function _error(message) {
        console.error(message);
        this.containerToUse().html(message);
        this.resize(500, 180);
        return this;
      }
    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        var _this3 = this;

        config = config || {};
        return this.each(function () {
          var $this = $(_this3);

          var _config = $.extend({}, Lightbox.__default, $this.data(), _typeof(config) === 'object' && config);

          new Lightbox(_this3, _config);
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