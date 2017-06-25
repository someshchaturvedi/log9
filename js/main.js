        // loader
      $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
      })

        // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_header').addClass('sticky');
            } else {
                $('.main_header').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });



        // wow js

    new WOW().init();

        // nice scroll

      $(document).ready(

        function() {

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      );

      // portfolio filter

      $(function () {

        var filterList = {

          init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });

          },

          hoverEffect: function () {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -100}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
              }
            );

          }

        };


        // Run the show!
        filterList.init();


      });

      $(function () {

        var filterList = {

          init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist2').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });

          },

          hoverEffect: function () {

            // Simple parallax effect
            $('#portfoliolist2 .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -100}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
              }
            );

          }

        };


        // Run the show!
        filterList.init();


      });
      // Skillset js

      var object = [

        {

          'headline':'HTML & CSS',
          'value':8,
          'length':9,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'JavaScript & jQuery',
          'value':6,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Ruby & Python',
          'value':3,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }

      ];

      $(document).ready(function(){

        $("#skillset").skillset({

          object:object,
          duration:40

        });

      });


        // Owl carousel

      $(document).ready(function() {

      $("#testimonial_carosule").owlCarousel({

                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay : true,
                    transitionStyle : "backSlide",
                    // "singleItem:true" is a shortcut for:
                    // items : 1,
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false

                });

      });

      // Up to top js

      $(document).ready(function() {

        $().UItoTop({ easingType: 'easeOutQuart' });

      });



/* ==========================================================================
   CONTACT FORM JS
   ========================================================================== */

  $(document).ready(function() {
      $("#submit_btn").click(function() {
          //get input field values
          var user_name       = $('input[name=name]').val();
          var user_email      = $('input[name=email]').val();
          var user_phone      = $('input[name=phone]').val();
          var user_message    = $('textarea[name=message]').val();

          //simple validation at client's end
          //we simply change border color to red if empty field using .css()
          var proceed = true;
          if(user_name==""){
              $('input[name=name]').css('border-color','red');
              proceed = false;
          }
          if(user_email==""){
              $('input[name=email]').css('border-color','red');
              proceed = false;
          }
          if(user_phone=="") {
              $('input[name=phone]').css('border-color','red');
              proceed = false;
          }
          if(user_message=="") {
              $('textarea[name=message]').css('border-color','red');
              proceed = false;
          }

          //everything looks good! proceed...
          if(proceed)
          {
              //data to be sent to server
              post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};

              //Ajax post data to server
              $.post('contact_me.php', post_data, function(response){

                  //load json data from server and output message
                  if(response.type == 'error')
                  {
                      output = '<div class="error">'+response.text+'</div>';
                  }else{

                      output = '<div class="success">'+response.text+'</div>';

                      //reset values in all input fields
                      $('#contact_form input').val('');
                      $('#contact_form textarea').val('');
                  }

                  $("#result").hide().html(output).slideDown();
              }, 'json');

          }
      });

      //reset previously set border colors and hide all message on .keyup()
      $("#contact_form input, #contact_form textarea").keyup(function() {
          $("#contact_form input, #contact_form textarea").css('border-color','');
          $("#result").slideUp();
      });

  });


  function tag11Clicked() {
      document.getElementById('tag11').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%; color:white; background: #E95A44'
      document.getElementById('tag12').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50%'
      document.getElementById("tagdesc").innerHTML = "<b>Graphene has the potential to tap into the future of optoelectronics by making the concept of thin transparent LED displays feasible.This technology has numerous applications from being an integrationin daily consumer lives to being an industrial asset for various sectors.</b>"
  }

  function tag12Clicked() {
      document.getElementById('tag11').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%'
      document.getElementById('tag12').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50% ;color:white; background: #E95A44'
      document.getElementById("tagdesc").innerHTML = "<b>i) Turning car window shields into display.<br/> ii) Window Shopping becoming real for customers.<br/> iii) Enhancement in current VR technology.</b>"

  }

  function tag11Hover() {
      document.getElementById('tag11').style.cursor = 'pointer'
  }

  function tag12Hover() {
      document.getElementById('tag12').style.cursor = 'pointer'
  }

  function tag21Clicked() {
      document.getElementById('tag21').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%; color:white; background: #E95A44'
      document.getElementById('tag22').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50%'
      document.getElementById("tagdesc2").innerHTML = "<b>Water is one of the basic amenities for human kind. It is also one of the major causes for illness and widespread diseases.RO and UV technologies have revolutionized the market in terms of efficiency of filtration but have their own drawbacks ranging from large wastage of water to high operating and maintenance costs.We are working on a technology which could remove toxins without the use of electricity, with low maintenance costs and also work in a way such that it is easily customizable based on geography and local conditions of water.</b>";
  }

  function tag22Clicked() {
      document.getElementById('tag21').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%'
      document.getElementById('tag22').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50% ;color:white; background: #E95A44'
      document.getElementById("tagdesc2").innerHTML = "<b> i) The filtration system will be suitable for rural deployment with lower investment as well as running costs.<br/> ii) Geography specific flexibility in terms of toxins being removed.</b>";
  }

  function tag21Hover() {
      document.getElementById('tag21').style.cursor = 'pointer'
  }

  function tag22Hover() {
      document.getElementById('tag22').style.cursor = 'pointer'
  }

  function tag31Clicked() {
      document.getElementById('tag31').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%; color:white; background: #E95A44'
      document.getElementById('tag32').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50%'
      document.getElementById("tagdesc3").innerHTML = "<b>Graphene is lead-acid batteries has always been seen as a potential material to increase the efficiency and reduce weir resistance.But taking the lab scale research to market commercialization has been something that has lacked in this field.Thus we aim to jump in bridging the gap present.</b>";
  }

  function tag32Clicked() {
      debugger;
      document.getElementById('tag31').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%'
      document.getElementById('tag32').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50% ;color:white; background: #E95A44'
      document.getElementById("tagdesc3").innerHTML = "<b> i) Life increase of current Lead Acid Batteries<br/> ii) Lower Weir Resistance</b>";

  }


  function tag31Hover() {
      document.getElementById('tag31').style.cursor = 'pointer'
  }

  function tag32Hover() {
      document.getElementById('tag32').style.cursor = 'pointer'
  }


  function tag11Clicked() {
      document.getElementById('tag11').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%; color:white; background: #E95A44'
      document.getElementById('tag12').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50%'
      document.getElementById("tagdesc").innerHTML = "<b>Graphene has the potential to tap into the future of optoelectronics by making the concept of thin transparent LED displays feasible.This technology has numerous applications from being an integrationin daily consumer lives to being an industrial asset for various sectors.</b>"
  }

  function tag12Clicked() {
      document.getElementById('tag11').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%'
      document.getElementById('tag12').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50% ;color:white; background: #E95A44'
      document.getElementById("tagdesc").innerHTML = "<b>i) Turning car window shields into display.<br/> ii) Window Shopping becoming real for customers.<br/> iii) Enhancement in current VR technology.</b>"

  }

  function tag11Hover() {
      document.getElementById('tag11').style.cursor = 'pointer'
  }

  function tag12Hover() {
      document.getElementById('tag12').style.cursor = 'pointer'
  }

  function tag21Clicked() {
      document.getElementById('tag21').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%; color:white; background: #E95A44'
      document.getElementById('tag22').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50%'
      document.getElementById("tagdesc2").innerHTML = "<b>Water is one of the basic amenities for human kind. It is also one of the major causes for illness and widespread diseases.RO and UV technologies have revolutionized the market in terms of efficiency of filtration but have their own drawbacks ranging from large wastage of water to high operating and maintenance costs.We are working on a technology which could remove toxins without the use of electricity, with low maintenance costs and also work in a way such that it is easily customizable based on geography and local conditions of water.</b>";
  }

  function tag22Clicked() {
      document.getElementById('tag21').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%'
      document.getElementById('tag22').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50% ;color:white; background: #E95A44'
      document.getElementById("tagdesc2").innerHTML = "<b> i) The filtration system will be suitable for rural deployment with lower investment as well as running costs.<br/> ii) Geography specific flexibility in terms of toxins being removed.</b>";
  }

  function tag21Hover() {
      document.getElementById('tag21').style.cursor = 'pointer'
  }

  function tag22Hover() {
      document.getElementById('tag22').style.cursor = 'pointer'
  }

  function tag31Clicked() {
      document.getElementById('tag31').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%; color:white; background: #E95A44'
      document.getElementById('tag32').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50%'
      document.getElementById("tagdesc3").innerHTML = "<b>Graphene is lead-acid batteries has always been seen as a potential material to increase the efficiency and reduce weir resistance.But taking the lab scale research to market commercialization has been something that has lacked in this field.Thus we aim to jump in bridging the gap present.</b>";
  }

  function tag32Clicked() {
      debugger;
      document.getElementById('tag31').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 0%'
      document.getElementById('tag32').style = 'position:absolute; width: 50%; height:30px; position: absolute; left: 50% ;color:white; background: #E95A44'
      document.getElementById("tagdesc3").innerHTML = "<b> i) Life increase of current Lead Acid Batteries<br/> ii) Lower Weir Resistance</b>";

  }


  function tag31Hover() {
      document.getElementById('tag31').style.cursor = 'pointer'
  }

  function tag32Hover() {
      document.getElementById('tag32').style.cursor = 'pointer'
  }
