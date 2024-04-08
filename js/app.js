/* Theme Name: Zoovara - Personal Template
   Author: Mannat-themes
   Version: 1.0.0
   File Description:App JS file of the template
*/

!function ($) {
    "use strict";
    var MainApp = function () {};
   
        //===== ripples =====

        MainApp.prototype.initprofileRipple = function () {
            var self = this; // Store reference to `this` for later use
        
            $('#profile_ripple').ripples({
                resolution: 512,
                dropRadius: 20, //px
                perturbance: 0.04,
            }); 
            
            // Initialize custom cursor
            this.initCustomCursor();
        
            // Attach mousemove event listener to #profile_ripple
            $('#profile_ripple').on('mousemove', function(e) {
                self.updateCustomCursor(e.pageX, e.pageY); // Use `self` to reference the MainApp instance
            });
        
            // Show custom cursor when mouse enters the #profile_ripple div
            $('#profile_ripple').on('mouseenter', function() {
                self.showCustomCursor();
            });
        
            // Hide custom cursor when mouse leaves the #profile_ripple div
            $('#profile_ripple').on('mouseleave', function() {
                self.hideCustomCursor();
            });
        };
        
        // surfer
        
        MainApp.prototype.initCustomCursor = function () {
            var $customCursor = $('<div id="custom-cursor"></div>');
            $('#profile_ripple').append($customCursor); // Append to #profile_ripple
        
            // Hide the default cursor when hovering over #profile_ripple
            $('#profile_ripple').on('mouseenter', function() {
                $('body').css('cursor', 'none');
            });
        };
        
        MainApp.prototype.updateCustomCursor = function (x, y) {
            var $customCursor = $('#custom-cursor');
            var $profileRipple = $('#profile_ripple');
        
            // Calculate the relative position of the mouse cursor within the #profile_ripple div
            var offsetX = x - $profileRipple.offset().left;
            var offsetY = y - $profileRipple.offset().top;
        
            // Set the position of the custom cursor within the bounds of the #profile_ripple div
            $customCursor.css({
                top: offsetY + 'px',
                left: offsetX + 'px',
            });
        };
        
        MainApp.prototype.hideCustomCursor = function () {
            $('#custom-cursor').hide();
        };
        
        MainApp.prototype.showCustomCursor = function () {
            $('#custom-cursor').show();
        };
        
        

        //=====counter =====
       
        MainApp.prototype.initCounter = function () {
            var a = 0;
            $(window).scroll(function() {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                                countNum: countTo
                            },

                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                    //alert('finished');
                                }

                            });
                    });
                    a = 1;
                }
            });
        },

        //=====Filter=====

        MainApp.prototype.initFilter = function () {
            $(window).on('load', function() {
            //PORTFOLIO FILTER 
            var $container = $('.projects-wrapper');
            var $filter = $('#filter');
            // Initialize isotope 
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
            // Filter items when filter link is clicked
            $filter.find('a').click(function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
            /*END*/
          });
        },

        //===== magnific Popup =====

        MainApp.prototype.initmagnificPopup = function () {
            $('.mfp-image').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                        // Will preload 0 - before current, and 1 after the current image 
                }
            });
        },

         //===== magnific Popup =====
        MainApp.prototype.initPrint = function () {
            $('#lnkPrint').click(function(){
                
                 window.print();
            });
        },

        //===== contact =====
        MainApp.prototype.initContact = function () {
            $('#contact-form').submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .before('')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            comments: $('#comments').val(),
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('#cform img.contact-loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                            if (data.match('success') != null) $('#cform').slideUp('slow');
                        }
                    );
                });
                return false;
            });
        },
        
        MainApp.prototype.init = function () {
            this.initprofileRipple();
            this.initCounter();
            this.initFilter();
            this.initmagnificPopup();
            this.initPrint();
            this.initContact();
        },
        //init
        $.MainApp = new MainApp, $.MainApp.Constructor = MainApp
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.MainApp.init();
    }(window.jQuery);

