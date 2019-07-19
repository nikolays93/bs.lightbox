const Lightbox = (($) => {

    const NAME = 'lightbox'
    const JQUERY_NO_CONFLICT = $.fn[NAME]

    const __default = {
        doc: document,

        lang: 'ru',
        i18: {
            ru: {
                close : 'Закрыть',
                failLoad: 'Не удалось загрузить контент.',
                undefinedType: 'Не удалось определить тип контента',
            }
        },

        tpl: {
            title: 'Тестовый заголовок',
            preloader: '<div class="preloader"></div>',
            leftArrow: '<button type="button"><span>&#10094;</span></button>',
            rightArrow: '<button type="button"><span>&#10095;</span></button>',
            close: '<button type="button" class="close" data-dismiss="modal" aria-label="{{close}}"><span aria-hidden="true">&times;</span></button>',
        },

        opts: {
            maxWidth: 9999,
            maxHeight: 9999,
            arrows: true,
            infinite: false,
            type: null,
            hideClose: true,
            deepPreload: 1,
        },

        onShow: () => {},
        onShown: () => {},
        onHide: () => {},
        onHidden: () => {},
        onNavigate: ( direction ) => {},
        onContentLoaded: () => {}
    }

    class Lightbox
    {
        static get Default() {
            return Default;
        }

        constructor($target, config) {
            this.config = $.extend({}, __default, config);
            this.$arrows = null;
            this.galleryIndex = 0;
            this.galleryName = null;
            // this._titleIsShown = false;
            // this._footerIsShown = false;
            this.remindLastWidth = 0;
            this.remindLastHeight = 0;
            // this._touchstartX = 0;
            // this._touchendX = 0;

            this.modalId = 'modal-' + Math.floor((Math.random() * 1000) + 1); // this.config.id ||

            this.header = this.config.tpl.close || '<div class="modal-header"><h5 class="mb-0">' + this.config.tpl.title + '</h5>' + this.config.tpl.close + '</div>';
            this.footer = ' ' || '<div class="modal-footer"></div>';

            this.tpl =
                '<div class="modal lightbox fade" id="'+ this.modalId +'" tabindex="-1" role="dialog" aria-hidden="true">'
              + '   <div class="modal-dialog" role="document">' // modal-dialog-centered
              + '       <div class="modal-content">'
              + '           ' + this.header
              + '           <div class="modal-body">'
              + '               <div class="modal-container">'
              + '                   <div class="modal-item fade in show"></div>'
              + '                   <div class="modal-item fade"></div>'
              + '               </div>'
              + '           </div>'
              + '           ' + this.footer
              + '       </div><!-- .modal-content -->'
              + '   </div>'
              + '</div>';

            // append modal to document
            $(this.config.doc.body).append( this.tpl );

            // this target element
            this.$element = $target instanceof jQuery ? $target : $($target);
            // modal group ID
            this.galleryName = this.$element.data('gallery');
            // this modal element
            this.$modal = $('#' + this.modalId, this.config.doc);
            // animated block
            this.$dialog = $('.modal-dialog', this.$modal);
            // container closest modal
            this.$container = $('.modal-container', this.$modal);
            // container closest modal
            this.$body = $('.modal-body', this.$modal);
            this.$content = $('.modal-content', this.$modal);

            this._border = this._calculateBorders(); // call after append and element defined
            this._padding = this._calculatePadding(); // call after append and element defined

            // check any nodes with this gallery name
            if (this.galleryName) {
                // get all gallery trigger items
                this.$items = $(document.body).find('[data-gallery="' + this.galleryName + '"]');
                // this element current position
                this.galleryIndex = this.$items.index(this.$element);
                // set hotkeys on lightbox
                $(document).on('keydown.bs.lightbox', this.hotkeys.bind(this))
                // add the directional arrows to the modal
                if (this.config.opts.arrows && this.$items.length > 1) {
                    this.$container.append('<div class="navigations">'
                        + this.config.tpl.leftArrow
                        + this.config.tpl.rightArrow
                        + '</div>');

                    this.$arrows = $('.navigations', this.$container);

                    this.$container.on('click', 'button:first-child', event => {
                        event.preventDefault();
                        return this.navigateLeft();
                    });

                    this.$container.on('click', 'button:last-child', event => {
                        event.preventDefault();
                        return this.navigateRight();
                    });

                    this.navigateUpdate();
                }
            }

            /**
             * Set the events
             * and call bootstrap modal
             */
            this.$modal
                // call onShow on modal open
                .on('show.bs.modal', this.config.onShow.bind(this))
                // call onShown after modal opened
                .on('shown.bs.modal', () => {
                    this.togglePreloader(true);
                    this._handle();
                    return this.config.onShown.call(this);
                })
                // call onHide on modal close
                .on('hide.bs.modal', this.config.onHide.bind(this))
                // Call onHidden after modal closed
                .on('hidden.bs.modal', () => {
                    if (this.galleryName) {
                        $(document).off('keydown.bs.lightbox')
                        $(window).off('resize.bs.lightbox')
                    }
                    // jQuery element delete
                    this.$modal.remove();
                    return this.config.onHidden.call(this);
                })
                .modal(this.config);

                $(window).on('resize.bs.lightbox', () => {
                	this._resize(this.remindLastWidth, this.remindLastHeight)
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
            }

            this.touch.event.scroll = "touchmove scroll";
            this.touch.event.start  = this.touch.support ? "touchstart" : "mousedown";
            this.touch.event.stop   = this.touch.support ? "touchend" : "mouseup";
            this.touch.event.move   = this.touch.support ? "touchmove" : "mousemove";

            let touch = this.touch;

            this.$dialog
                .on(touch.event.start, (event) => {
                    let self = this;
                    // this._touchstartX = event.changedTouches[0].screenX;
                    // event data
                    touch.data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event;
                    // start data
                    touch.start = [ touch.data.pageX, touch.data.pageY ];
                    // origin: $(event.target)

                    self.$dialog
                        // move object in touch
                        .bind(touch.event.move, moveHandler)
                    // call stop on touch end\mouse up
                    $(document).one(touch.event.stop, self.$dialog, moveStop);
                    $(document).on('mouseleave', self.$dialog, moveStop);

                    function moveHandler(event) {
                        if (!touch.start) return;
                        // update data
                        touch.data = event.originalEvent.touches ?
                                event.originalEvent.touches[ 0 ] :
                                event;

                        touch.stop = [ touch.data.pageX, touch.data.pageY ];

                        // prevent scrolling
                        if (Math.abs(touch.start[1] - touch.stop[1]) > 10) {
                            event.preventDefault();

                            // hide arrows on swipe
                            $('button', self.$arrows).addClass('disabled').attr('disabled', 'disabled');
                        }

                        self.$dialog.css({
                            'transform': 'translateY(' + -(touch.start[1] - touch.data.pageY) + 'px)',
                            'transition': 'none'
                        });
                    }

                    function moveStop( event ) {
                        // reset move event
                        self.$dialog.unbind(touch.event.move, moveHandler);
                        // data exists
                        if (touch.start && touch.stop) {
                            // && Math.abs(touch.start[0] - touch.stop[0]) < 75
                            if ( Math.abs(touch.start[1] - touch.stop[1]) > 30 ) {
                                self.$dialog.css('transition', '');
                                self.$modal.modal('hide');

                                // do not toggle navigation
                                self.$container.off('click');
                                touch.start = [];
                                touch.stop = [];
                            }
                            else {
                                self.$dialog.css('transform', 'translateY(0px)');
                            }
                        }

                        self.navigateUpdate();
                    }
                })
                // .on(touchStopEvent, () => {
                //     // this._touchendX = event.changedTouches[0].screenX;
                //     // this._swipeGesure();
                // })
        }

        _handle() {
            let $toUse = this._containerToUse()
            // this._updateTitleAndFooter()

            let remote = this.$element.attr('data-remote') || this.$element.attr('href');
            let type = 'image'; // this._detectRemoteType(remote, this.$element.attr('data-type') || false)

            if(['image', 'youtube', 'vimeo', 'instagram', 'media', 'url'].indexOf(type) < 0)
                return this._error(this.config.i18.ru.undefinedType)

            switch(type) {
                case 'image':
                    this._preloadImage(remote, $toUse)
                    this._preloadNearImages(this.galleryIndex, this.config.opts.deepPreload)
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
                default: // url
                    this._loadRemoteContent(remote, $toUse);
                    break;
            }

            return this;
        }
        // serve container
        _containerToUse() {
            let $first = this.$container.children('.modal-item:first');
            let $last = this.$container.children('.modal-item:last');

            // if currently showing an image, fade it out and remove
            let $toUse = $last;
            let $current = $first;

            if($toUse.hasClass('in')) {
                $toUse = $first;
                $current = $last;
            }

            $current.removeClass('in show');
            setTimeout(() => {
                if(!$last.hasClass('in')) $last.empty()
                if(!$first.hasClass('in')) $first.empty()
            }, 500);

            $toUse.addClass('in show');
            return $toUse;
        }
        // load in container
        _preloadImage(src, $containerForImage) {
            $containerForImage = $containerForImage || false

            let img = new Image();
            if ($containerForImage) {
                // if loading takes > 200ms show a loader
                let loadingTimeout = setTimeout(() => {
                    $containerForImage.append(this.config.tpl.preloader)
                }, 200)

                img.onload = () => {
                    if(loadingTimeout) clearTimeout(loadingTimeout)

                    let image = $('<img />');
                        image.attr('src', img.src);
                        // image.addClass('img-fluid');

                    $containerForImage.html(image);
                    this.$arrows.css('display', '') // remove display to default to css property

                    this._resize(img.width, img.height);
                    this.togglePreloader(false);
                    return this.config.onContentLoaded.call(this);
                };

                img.onerror = () => {
                    this.togglePreloader(false);
                    return this.error(this.config.i18.ru.failLoad + ':' + src);
                };
            }

            img.src = src;
            return img;
        }
        // preload near images
        _preloadNearImages(index, deep, depth = 1) {
            if(!this.$items) return;

            let nextItem = $(this.$items.get(index + depth), false);
            if('undefined' != typeof nextItem) {
                let src = nextItem.attr('data-remote') || nextItem.attr('href');
                // if ('image' === nextItem.attr('data-type') || this._isImage(src));
                // this._preloadImage(src, false);
            }

            let prevItem = $(this.$items.get(index - depth), false);
            if('undefined' != typeof prevItem) {
                let src = prevItem.attr('data-remote') || prevItem.attr('href');
                // if ('image' === prevItem.attr('data-type') || this._isImage(src));
                // this._preloadImage(src, false);
            }

            if(deep > 1) {
                return this._preloadNearImages(index, --deep, ++depth);
            }
        }

        hotkeys(event) {
            event = event || window.event;
            if (event.keyCode === 39 || event.keyCode === 32)
                return this.navigateRight();
            if (event.keyCode === 37 || event.keyCode === 8)
                return this.navigateLeft();
            if (event.keyCode === 27)
                return this.close();
        }

        close() {
            return this.$modal.modal('hide');
        }

        navigateTo(index) {
            // outer offset
            if (index < 0 || index > this.$items.length - 1) return;

            // change current index
            this.galleryIndex = index;
            // chenge active element
            this.$element = $(this.$items.get(this.galleryIndex));

            this.navigateUpdate()
            this._handle();
        }

        navigateLeft() {
            // not has many items
            if( !this.$items || this.$items.length === 1 ) return;

            // rewind index
            if (this.galleryIndex === 0) {
                if (this.config.opts.infinite) this.galleryIndex = this.$items.length - 1;
                else return;
            }
            else {
                this.galleryIndex--;
            }

            // call event
            this.config.onNavigate.call(this, 'left', this.galleryIndex)
            return this.navigateTo(this.galleryIndex)
        }

        navigateRight() {
            // not has many items
            if( !this.$items || this.$items.length === 1 ) return;

            if (this.galleryIndex === this.$items.length - 1) {
                if (this.config.opts.infinite) this.galleryIndex = 0;
                else return;
            }
            else {
                this.galleryIndex++;
            }

            this.config.onNavigate.call(this, 'right', this.galleryIndex)
            return this.navigateTo(this.galleryIndex)
        }
        // prop arrows disabled
        navigateUpdate() {
            if (!this.config.opts.infinite) {
                if (this.galleryIndex === 0) {
                    $('button:first-child', this.$arrows)
                        .addClass('disabled')
                        .attr('disabled', 'disabled');
                }
                else {
                    $('button:first-child', this.$arrows)
                        .removeClass('disabled')
                        .removeAttr('disabled');
                }

                if (this.galleryIndex === this.$items.length - 1) {
                    $('button:last-child', this.$arrows)
                        .addClass('disabled')
                        .attr('disabled', 'disabled');
                }
                else {
                    $('button:last-child', this.$arrows)
                        .removeClass('disabled')
                        .removeAttr('disabled');
                }
            }
        }

        togglePreloader(show) {
            show = !!show

            if(show) {
                this.$dialog.css('display', 'none');
                this.$modal.removeClass('in show');
                $('.modal-backdrop').append(this.config.tpl.preloader);
            }
            else {
                this.$dialog.css('display', 'block');
                this.$modal.addClass('in show');
                $('.modal-backdrop').find('.preloader').remove();
            }
            return this;
        }

        _totalCssByAttribute(attribute) {
            return parseInt(this.$dialog.css(attribute), 10) +
                parseInt(this.$content.css(attribute), 10) +
                parseInt(this.$body.css(attribute), 10)
        }

        // layout private methods
        _calculateBorders() {
            return {
                top: this._totalCssByAttribute('border-top-width'),
                right: this._totalCssByAttribute('border-right-width'),
                bottom: this._totalCssByAttribute('border-bottom-width'),
                left: this._totalCssByAttribute('border-left-width'),
            }
        }

        _calculatePadding() {
            return {
                top: this._totalCssByAttribute('padding-top'),
                right: this._totalCssByAttribute('padding-right'),
                bottom: this._totalCssByAttribute('padding-bottom'),
                left: this._totalCssByAttribute('padding-left'),
            }
        }

        _resize( width, height ) {

            height = height || width
            this.remindLastWidth = width
            this.remindLastHeight = height

            let imageAspecRatio = width / height;

            // if width > the available space, scale down the expected width and height
            let gutterHorizontal = this._padding.left + this._padding.right + this._border.left + this._border.right
            let gutterVertical = this._padding.top + this._padding.bottom + this._border.bottom + this._border.top

            // force 10px margin if window size > 575px
            let discountMargin = this.config.doc.body.clientWidth > 575 ? 0 : 20

            //calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins
            let margins = parseFloat(this.$dialog.css('margin-top')) + parseFloat(this.$dialog.css('margin-bottom'));

            let headerHeight = 0,
                footerHeight = 0

            // as the resize is performed the modal is show, the calculate might fail
            // if so, default to the default sizes
            // if (this._footerIsShown)
            // footerHeight = this._$modalFooter.outerHeight(true) || 55

            // if (this._titleIsShown)
            // headerHeight = this._$modalHeader.outerHeight(true) || 67

            let maxWidth = Math.min(width + gutterHorizontal,
                this.config.doc.body.clientWidth,
                this.config.opts.maxWidth
            );

            if((width + gutterHorizontal) > maxWidth) {
                height = (maxWidth - gutterHorizontal - discountMargin) / imageAspecRatio;
                width = maxWidth
            }
            else {
                width = (width + gutterHorizontal)
            }

            let maxHeight = Math.min(height,
                $(window).height() - gutterVertical - margins - headerHeight - footerHeight,
                this.config.opts.maxHeight - gutterVertical - headerHeight - footerHeight
            );

            if(height > maxHeight) {
                // if height > the available height, scale down the width
                width = Math.ceil(maxHeight * imageAspecRatio) + gutterHorizontal;
            }

            this.$container.css('height', maxHeight)
            this.$dialog.css('flex', 1).css('max-width', width);

            let modal = this.$modal.data('bs.modal');
            if (modal) modal.handleUpdate();

            return this;
        }

        _error( message ) {
            console.error(message);
            this.containerToUse().html(message);
            this.resize(500, 180);
            return this;
        }

        static _jQueryInterface(config) {
            config = config || {}
            return this.each(() => {
                let $this = $(this)
                let _config = $.extend({}, Lightbox.__default, $this.data(), typeof config === 'object' && config )

                new Lightbox(this, _config)
            })
        }
    }

    $.fn[NAME]             = Lightbox._jQueryInterface;
    $.fn[NAME].Constructor = Lightbox;
    $.fn[NAME].noConflict  = () => {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Lightbox._jQueryInterface;
    }

    return Lightbox

})(jQuery)

export default Lightbox
