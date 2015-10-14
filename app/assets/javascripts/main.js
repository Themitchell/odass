
$(function()
{
    $('#Wrapper').defuscate();
});

Cufon.replace('#Introduction p', {
    fontFamily: 'Helvetica' ,
    hover: true
});
Cufon.replace('.Title h2', {
    fontFamily: 'Helvetica' ,
    hover: true
});
Cufon.replace('#About p', {
    fontFamily: 'Helvetica' ,
    hover: true
});
Cufon.replace('#About ul', {
    fontFamily: 'Helvetica' ,
    hover: true
});
Cufon.replace('#Contact p', {
    fontFamily: 'Helvetica' ,
    hover: true
});
Cufon.replace('.ToolBarContact a', {
    fontFamily: 'Helvetica' ,
    hover: true
});

$(function()
{
    $('#Navigation').localScroll();
    $('#FixNav').localScroll();
});

$(function()
{
    //plugin
    jQuery.fn.topLink = function(settings) {
      settings = jQuery.extend({
        min: 1,
        fadeSpeed: 200
      }, settings);
      return this.each(function() {
        //listen for scroll
        var el = $(this);
        el.hide(); //in case the user forgot
        $(window).scroll(function() {
          if($(window).scrollTop() >= settings.min)
          {
            el.fadeIn(settings.fadeSpeed);
          }
          else
          {
            el.fadeOut(settings.fadeSpeed);
          }
        });
      });
    };

    //usage w/ smoothscroll
    $(document).ready(function() {
      //set the link
      $('#FixNav').topLink({
        min: 200,
        fadeSpeed: 500
      });
      //smoothscroll
      $('#top-link').click(function(e) {
        e.preventDefault();
        $.scrollTo(0,300);
      });
    });
});

$(function()
{
    //plugin
    jQuery.fn.topLink = function(settings) {
        settings = jQuery.extend({
          min: 1,
          fadeSpeed: 200,
          ieOffset: 50
        }, settings);
        return this.each(function() {
          //listen for scroll
          var el = $(this);
          el.css('display','none'); //in case the user forgot
          $(window).scroll(function() {
            //stupid IE hack
            if(!jQuery.support.hrefNormalized) {
              el.css({
                'position': 'absolute',
                'top': $(window).scrollTop() + $(window).height() - settings.ieOffset
              });
            }
            if($(window).scrollTop() >= settings.min)
            {
              el.fadeIn(settings.fadeSpeed);
            }
            else
            {
              el.fadeOut(settings.fadeSpeed);
            }
          });
        });
      };
});
