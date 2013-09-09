var is_mobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|webOS)/);
var retina = window.devicePixelRatio > 1 ? true : false;

// Magnific Popup v0.8.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=iframe
(function(a){var b="Close",c="AfterClose",d="BeforeAppend",e="MarkupParse",f="Open",g="Change",h="mfp",i="."+h,j="mfp-ready",k="mfp-removing",l="mfp-prevent-close",m,n=function(){},o=!!window.jQuery,p,q=a(window),r,s,t,u,v,w=function(a,b){m.ev.on(h+a+i,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){m.ev.triggerHandler(h+b,c),m.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),m.st.callbacks[b]&&m.st.callbacks[b].apply(m,a.isArray(c)?c:[c]))},z=function(){(m.st.focus?m.content.find(m.st.focus).eq(0):m.wrap).focus()},A=function(b){if(b!==v||!m.currTemplate.closeBtn)m.currTemplate.closeBtn=a(m.st.closeMarkup.replace("%title%",m.st.tClose)),v=b;return m.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(m=new n,m.init(),a.magnificPopup.instance=m)},C=function(b){if(a(b).hasClass(l))return;var c=m.st.closeOnContentClick,d=m.st.closeOnBgClick;if(c&&d)return!0;if(!m.content||a(b).hasClass("mfp-close")||m.preloader&&b===m.preloader[0])return!0;if(b!==m.content[0]&&!a.contains(m.content[0],b)){if(d)return!0}else if(c)return!0;return!1};n.prototype={constructor:n,init:function(){var b=navigator.appVersion;m.isIE7=b.indexOf("MSIE 7.")!==-1,m.isIE8=b.indexOf("MSIE 8.")!==-1,m.isLowIE=m.isIE7||m.isIE8,m.isAndroid=/android/gi.test(b),m.isIOS=/iphone|ipad|ipod/gi.test(b),m.probablyMobile=m.isAndroid||m.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),r=a(document.body),s=a(document),m.popupsCache={}},open:function(b){var c;if(b.isObj===!1){m.items=b.items.toArray(),m.index=0;var d=b.items,g;for(c=0;c<d.length;c++){g=d[c],g.parsed&&(g=g.el[0]);if(g===b.el[0]){m.index=c;break}}}else m.items=a.isArray(b.items)?b.items:[b.items],m.index=b.index||0;if(m.isOpen){m.updateItemHTML();return}m.types=[],u="",m.ev=b.mainEl||s,b.key?(m.popupsCache[b.key]||(m.popupsCache[b.key]={}),m.currTemplate=m.popupsCache[b.key]):m.currTemplate={},m.st=a.extend(!0,{},a.magnificPopup.defaults,b),m.fixedContentPos=m.st.fixedContentPos==="auto"?!m.probablyMobile:m.st.fixedContentPos,m.bgOverlay||(m.bgOverlay=x("bg").on("click"+i,function(){m.close()}),m.wrap=x("wrap").attr("tabindex",-1).on("click"+i,function(a){C(a.target)&&m.close()}),m.container=x("container",m.wrap)),m.contentContainer=x("content"),m.st.preloader&&(m.preloader=x("preloader",m.container,m.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var k=h[c];k=k.charAt(0).toUpperCase()+k.slice(1),m["init"+k].call(m)}y("BeforeOpen"),m.st.closeBtnInside?(w(e,function(a,b,c,d){c.close_replaceWith=A(d.type)}),u+=" mfp-close-btn-in"):m.wrap.append(A()),m.st.alignTop&&(u+=" mfp-align-top"),m.fixedContentPos?m.wrap.css({overflow:m.st.overflowY,overflowX:"hidden",overflowY:m.st.overflowY}):m.wrap.css({top:q.scrollTop(),position:"absolute"}),(m.st.fixedBgPos===!1||m.st.fixedBgPos==="auto"&&!m.fixedContentPos)&&m.bgOverlay.css({height:s.height(),position:"absolute"}),s.on("keyup"+i,function(a){a.keyCode===27&&m.close()}),q.on("resize"+i,function(){m.updateSize()}),m.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&m.wrap.addClass(u);var l=m.wH=q.height(),n={};if(m.fixedContentPos&&m._hasScrollBar(l)){var o=m._getScrollbarSize();o&&(n.paddingRight=o)}m.fixedContentPos&&(m.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var p=m.st.mainClass;m.isIE7&&(p+=" mfp-ie7"),p&&m._addClassToMFP(p),m.updateItemHTML(),y("BuildControls"),r.css(n),m.bgOverlay.add(m.wrap).prependTo(document.body),m._lastFocusedEl=document.activeElement,setTimeout(function(){m.content?(m._addClassToMFP(j),z()):m.bgOverlay.addClass(j),s.on("focusin"+i,function(b){if(b.target!==m.wrap[0]&&!a.contains(m.wrap[0],b.target))return z(),!1})},16),m.isOpen=!0,m.updateSize(l),y(f)},close:function(){if(!m.isOpen)return;m.isOpen=!1,m.st.removalDelay&&!m.isLowIE?(m._addClassToMFP(k),setTimeout(function(){m._close()},m.st.removalDelay)):m._close()},_close:function(){y(b);var d=k+" "+j+" ";m.bgOverlay.detach(),m.wrap.detach(),m.container.empty(),m.st.mainClass&&(d+=m.st.mainClass+" "),m._removeClassFromMFP(d);if(m.fixedContentPos){var e={paddingRight:""};m.isIE7?a("body, html").css("overflow",""):e.overflow="",r.css(e)}s.off("keyup"+i+" focusin"+i),m.ev.off(i),m.wrap.attr("class","mfp-wrap").removeAttr("style"),m.bgOverlay.attr("class","mfp-bg"),m.container.attr("class","mfp-container"),(!m.st.closeBtnInside||m.currTemplate[m.currItem.type]===!0)&&m.currTemplate.closeBtn&&m.currTemplate.closeBtn.detach(),m._lastFocusedEl&&a(m._lastFocusedEl).focus(),m.currItem=null,m.content=null,m.currTemplate=null,m.prevHeight=0,y(c)},updateSize:function(a){if(m.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;m.wrap.css("height",c),m.wH=c}else m.wH=a||q.height();m.fixedContentPos||m.wrap.css("height",m.wH),y("Resize")},updateItemHTML:function(){var b=m.items[m.index];m.contentContainer.detach(),m.content&&m.content.detach(),b.parsed||(b=m.parseEl(m.index));var c=b.type;y("BeforeChange",[m.currItem?m.currItem.type:"",c]),m.currItem=b;if(!m.currTemplate[c]){var d=m.st[c]?m.st[c].markup:!1;y("FirstMarkupParse",d),d?m.currTemplate[c]=a(d):m.currTemplate[c]=!0}t&&t!==b.type&&m.container.removeClass("mfp-"+t+"-holder");var e=m["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,m.currTemplate[c]);m.appendContent(e,c),b.preloaded=!0,y(g,b),t=b.type,m.container.prepend(m.contentContainer),y("AfterChange")},appendContent:function(a,b){m.content=a,a?m.st.closeBtnInside&&m.currTemplate[b]===!0?m.content.find(".mfp-close").length||m.content.append(A()):m.content=a:m.content="",y(d),m.container.addClass("mfp-"+b+"-holder"),m.contentContainer.append(m.content)},parseEl:function(b){var c=m.items[b],d=c.type;c.tagName?c={el:a(c)}:c={data:c,src:c.src};if(c.el){var e=m.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||m.st.type||"inline",c.index=b,c.parsed=!0,m.items[b]=c,y("ElementParse",c),m.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,m._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(e||b.which!==2){var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(m))return!0}else if(q.width()<f)return!0;b.type&&(b.preventDefault(),m.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),m.open(d)}},updateStatus:function(a,b){if(m.preloader){p!==a&&m.container.removeClass("mfp-s-"+p),!b&&a==="loading"&&(b=m.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,m.preloader.html(b),m.preloader.find("a").click(function(a){a.stopImmediatePropagation()}),m.container.addClass("mfp-s-"+a),p=a}},_addClassToMFP:function(a){m.bgOverlay.addClass(a),m.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),m.wrap.removeClass(a)},_hasScrollBar:function(a){return(m.isIE7?s.height():document.body.scrollHeight)>(a||q.height())},_parseMarkup:function(b,c,d){var f;d.data&&(c=a.extend(d.data,c)),y(e,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;f=a.split("_");if(f.length>1){var d=b.find(i+"-"+f[0]);if(d.length>0){var e=f[1];e==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):e==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(f[1],c)}}else b.find(i+"-"+a).html(c)})},_getScrollbarSize:function(){if(m.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),m.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return m.scrollbarSize}},a.magnificPopup={instance:null,proto:n.prototype,modules:[],open:function(a,b){return B(),a||(a={}),a.isObj=!0,a.index=b||0,this.instance.open(a)},close:function(){return a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">Close</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){B();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=o?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),m._openClick({mfpEl:d},c,e)}else m.isOpen&&m[b].apply(m,Array.prototype.slice.call(arguments,1));else o?c.data("magnificPopup",b):c[0].magnificPopup=b,m.addGroup(c,b);return c};var D="iframe",E="//about:blank",F=function(a){if(m.currTemplate[D]){var b=m.currTemplate[D].find("iframe");b.length&&(a||(b[0].src=E),m.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(D,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){m.types.push(D),w("BeforeChange",function(a,b,c){b!==c&&(b===D?F():c===D&&F(!0))}),w(b+"."+D,function(){F()})},getIframe:function(b,c){var d=b.src,e=m.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),m._parseMarkup(c,f,b),m.updateStatus("ready"),c}}})})(window.jQuery||window.Zepto)

// Site Specific
$(document).ready(function(){

  $(this).scrollTop(0);

  $header = $('.header');
  $header_in = $('.header-image');
  $logo = $('.logo a');
  $logo_alt = $('.logo_alt a');
  
  header_in_margin_top = $('.content').css('margin-top').replace('px', '');
  
  if ($(".header-image").length)
    $(".header-image").backstretch($('.header-image').data('url'));
  
  // Delay Loading of Images
  $('img').each(function () {
    var src = $(this).attr('data-src');
    var retina_src = $(this).attr('data-src-retina');
    if (retina_src != undefined && retina) {
      $(this).attr('src', retina_src).show();
    }
    else if (src != null) {
      $(this).attr('src', src).show();
    }
  }); 
  
  if ($('#carousel').length > 0) {
    $("#carousel").carouFredSel({
      items: 6,
      width:"100%",
      direction: "left",
      align: "center",
      padding: null,
      circular: true,
      infinite: true,
      responsive: false,
      items: {
        visible: 6
      },
      scroll: {
        items: 1
      },
      auto: {
        timeoutDuration: 15000, // 15 seconds
        delay: 15000 // 15 seconds
      }
    }, 
    {
      debug   : false,
      transition  : false,
      events    : {
        prefix      : "",
        namespace   : "cfs"
      },
      wrapper   : {
        element     : "div",
        classname   : "slides"
      },
      classnames  : {
        selected    : "selected",
        hidden      : "hidden",
        disabled    : "disabled",
        paused      : "paused",
        stopped     : "stopped"
      }
    });
    
    $(window).resize(function() {
      $('#carousel-wrapper').width($(window).width());
    }); 
    
    $(window).resize();
    
    // Calculate the tallest carousel item
    
    heights = [];
    
    $('#carousel').children('div').each(function() {
      h = $(this).height(); 
      heights.push(h);
    });
    
    tallest_carousel_item = Math.max.apply( Math, heights );
    
    $('.footer-wrapper').css('margin-top',tallest_carousel_item + 50);
  }
  
  // Header Fade
  if(!is_mobile && !$('body').hasClass('speakers')) {
    $(window).scroll(function() { perform_wizardry(); });
  } else if (!is_mobile) {
    $(window).scroll(function() { perform_wizardry_speakers(); });
  }
  
  var $desc_div;
  var $current_desc_div_has_been_columnized = false;
  var $this_click_row;
  var $last_click_row;
  var $last_click_div;
  var $same_click = false;
  
  $('.speaker').live('click', function(){     
    
    // Check if a description div exists
    $desc_div = $('.speaker-description-container:visible').first();
    
    // What row is the current click in?
    $this_click_row = Math.floor($(this).index()/6);
    
    // Add classes for CSS
    $('.speaker').not(this).removeClass('selected');
    
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
      $desc_div.slideUp();
      resetPositions($this_click_row);
      $same_click = true;
    } else {
      $(this).addClass("selected"); 
    }
    
    // What is the description we will be using?
    $desc = $(this).children('.speaker-description').first().html();
    console.log($desc);
    
    // What is the speaker's id?
    $speaker_id = $(this).data('speaker-id');
    
    // We'll need the last item in the row
    if ($(this).hasClass('last')) {
      $last_item_in_row = this;
    } else {
      $last_item_in_row = $(this).nextAll('.last').first();   
    }
    
    // If it does, check if the new click is in the same row, if not, remove it and create a new one.
    
    // If it doesn't exist, create a new one.
    
    if ($($desc_div).length) {
      // Is it in the same row as the current click?
      if ($this_click_row == $last_click_row) {
        if ($same_click == false) {
          // Replace Content in existing div
          $desc_div.children('.speaker-description-inner').html($desc);
          calculatePositions($this_click_row);  
          $desc_div.find('.speaker-description-inner').columnize({doneFunc:function(){
            enlargeFirstLetter();
            calculatePositions($this_click_row);  
            console.log("CONTENT REPLACED");
          }});
          
        }       
      } else {
        // Remove this desc div, and create a new one.
        $desc_div.slideUp(function(){     
          $desc_div.find('.speaker-description-inner').css('opacity', 0);
          //calculatePositions($this_click_row);  
          resetPositions($this_click_row, function(){
            console.log("DONE RESETTING POSITIONS");
            $desc_div.find('.speaker-description-inner').html($desc); //($('<div class="speaker-description-container" id="speaker-description" style="display:none;"><div class="speaker-description-inner" id="speaker-description-inner-' + $speaker_id + '">' + $desc + '</div></div>'));
            
            $desc_div.insertAfter($last_item_in_row); 
            calculatePositions($this_click_row);            
            $desc_div.slideDown(function(){
              $desc_div.find('.speaker-description-inner').columnize({doneFunc:function(){
                calculatePositions($this_click_row);
              }});
              enlargeFirstLetter();
              $desc_div.find('.speaker-description-inner').css('opacity', 1);
            });
          });
          
          console.log("DIV IS IN A DIFFERENT ROW, REMOVING AND CREATING A NEW ONE");
        });
      }
    } else {
      // Create a new one
      $desc_div = $('<div class="speaker-description-container" id="speaker-description" style="display:none"><div class="speaker-description-inner" style="opacity:0" id="speaker-description-inner-' + $speaker_id + '">' + $desc + '</div></div>');
      $desc_div.insertAfter($last_item_in_row); 
      
      calculatePositions($this_click_row);
      $desc_div.slideDown(function(){       
        $desc_div.find('.speaker-description-inner').columnize({doneFunc:function(){
          calculatePositions($this_click_row);  
        }});
        enlargeFirstLetter();
        $desc_div.find('.speaker-description-inner').css('opacity', 1);
      });
      console.log("A DIV DOESN'T EXIST YET, CREATING ONE");
    }
    
    $last_click_row = $this_click_row;    
    $last_click_div = $desc_div;
  });  
 
  
  // Schedule Nav Links
  $('.schedule-nav-item-link').click(function(e){
    e.preventDefault();
    // Get Item   
    scroll_to_id = $($(this).attr('href'));
    
    $('html, body').animate({
         scrollTop: scroll_to_id.offset().top-375
     }, 1000);
    
    return false;
  })
  
  enlargeFirstLetterInContent();
  
  // PANEL SUBTITLES
  $('.panel-headline').each(function(){
    var originalText = $.trim($(this).html());
    if (originalText.indexOf(': ') >= 0) {
      $(this).html(originalText.replace(': ', ': <span class="subtitle">')).append('</span>');
    }
  });
  
  // SLIDESHOW
  if ($('.slideshow').length > 0) {
  
    // SET UP
    $('.slideshow').each(function(){
      var slideshow = $(this);
      $(this).find('.slide:first').css('display', 'block').addClass('current');
      $(this).find('.dot:first').addClass('current');
      autoSlide = setInterval(function(){
        var currentSlide = slideshow.find('.slide.current');
        var nextSlide = currentSlide.next();
        var nextIndex = currentSlide.next().index();
        
        slideshow.find('.dot.current').removeClass('current');
        currentSlide.fadeOut().removeClass('current');
          
        if (nextSlide.length > 0) {
          nextSlide.fadeIn(600).addClass('current');
          slideshow.find('.dot:eq('+nextIndex+')').addClass('current');
        } else {
          slideshow.find('.slide:first').fadeIn(600).addClass('current');
          slideshow.find('.dot:first').addClass('current');
        }

      }, 2500);
    });
    
    // DOT PICKERS
    $('.dot').click(function(e){
      e.preventDefault();
      clearInterval(autoSlide);
      var dotIndex = $(this).index();
      console.log(dotIndex);
      $(this).siblings('.dot.current').removeClass('current');
      $(this).closest('.slideshow').find('.slide.current').fadeOut().removeClass('current');
      $(this).addClass('current');
      $(this).closest('.slideshow').find('.slide:eq('+dotIndex+')').fadeIn().addClass('current');
    });
    
    // ARROWS
    $('.arrow').click(function(e){
      e.preventDefault();
      clearInterval(autoSlide);
      var slideshow = $(this).closest('.slideshow');
      var currentSlide = slideshow.find('.slide.current');
      slideshow.find('.dot.current').removeClass('current');
      currentSlide.fadeOut().removeClass('current');
      
      if ($(this).hasClass('next')) {
        var nextSlide = currentSlide.next();
        var nextIndex = currentSlide.next().index();
        if (nextSlide.length > 0) {
          nextSlide.fadeIn(600).addClass('current');
          slideshow.find('.dot:eq('+nextIndex+')').addClass('current');
        } else {
          slideshow.find('.slide:first').fadeIn(600).addClass('current');
          slideshow.find('.dot:first').addClass('current');
        }
      } else {
        var prevSlide = currentSlide.prev();
        var prevIndex = currentSlide.prev().index();
        if (prevSlide.length > 0) {
          prevSlide.fadeIn(600).addClass('current');
          slideshow.find('.dot:eq('+prevIndex+')').addClass('current');
        } else {
          slideshow.find('.slide:last').fadeIn(600).addClass('current');
          slideshow.find('.dot:last').addClass('current');
        }
      }
    });
    
  }
  
  // VIDEO LIGHTBOXES
  $('.video-link').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
    
});

function enlargeFirstLetter(){
  $('.speaker-description-inner').each(function(){      
    html = $(this).html().replace($(this).text().substr(0,1), '<span class="firstcharacter dontsplit">' + $(this).text().substr(0,1) + '</span>');
    $(this).html(html);
  }); 
}

function enlargeFirstLetterInContent(){
  $('.content').find('.double-border').each(function(){     
    
    first_p = $(this).nextAll('p').first();   
    
    if (first_p.length) {
      html = first_p.html().replace(first_p.text().substr(0,1), '<span class="firstcharacter dontsplit">' + first_p.text().substr(0,1) + '</span>');
      first_p.html(html);
    }
  }); 
}

function resetPositions($currentrow, callback) {
  var numDivs = $('.speaker').not('#speaker-description').length;
  $('.speaker').not('#speaker-description').animate({ marginTop: 0, paddingTop: 0, borderTopWidth: 0 }, 'fast', function(){   
    if( --numDivs > 0 ) return;
    console.log("callback called once");
    $('.footer-wrapper').animate({ marginTop: 0 });
    if (callback && typeof(callback) === "function") {
      callback();
    }
  });
  
  
}

function calculatePositions($currentrow) {
  //resetPositions($currentrow);
  // Get bottom position of tallest element
  $currentrowdivs = [];
  $nextrowdivs = [];
  $heights = [];
  
  $start = 0 + ($currentrow * 6);
  
  $end = 5 + ($currentrow * 6);
  
  for (i = $start; i <= $end; i++) {
    $currentrowdivs.push($($('.speaker').not('#speaker-description').get(i)));
  }
  
  $currentrowdivs.filter(function(e){return e});
  
  for (i = 0; i < $currentrowdivs.length; i++){
    $heights.push($($currentrowdivs[i]).height());
  }
  
  $heights = $heights.filter(function(e){return e});
  
  $tallest_item_height = Math.max.apply( Math, $heights );
  
  $tallest_item_div = $currentrowdivs[$heights.indexOf(Math.max.apply( Math, $heights ))];
  
  $oh = $tallest_item_div.offset();
  
  $('.speaker-description-container').css('top', $oh.top + $tallest_item_height + 50);
  
  $start_next = 0 + (($currentrow+1) * 6);
  
  $end_next = 5 + (($currentrow+1) * 6);
  
  for (i = $start_next; i <= $end_next; i++) {
    $nextrowdivs.push($($('.speaker').not('#speaker-description').get(i)));
  }
  
  var theDiv = $('#speaker-description');
  var totalHeight = theDiv.height();
  totalHeight += parseInt(theDiv.css("padding-top"), 10) + parseInt(theDiv.css("padding-bottom"), 10); //Total Padding Width
  totalHeight += parseInt(theDiv.css("margin-top"), 10) + parseInt(theDiv.css("margin-bottom"), 10); //Total Margin Width
  totalHeight += parseInt(theDiv.css("borderTopWidth"), 10) + parseInt(theDiv.css("borderBottomWidth"), 10); //Total Border Width
  
  for (i = 0; i < $nextrowdivs.length; i++){    
    $($nextrowdivs[i]).animate({ marginTop: totalHeight +50 }, 'fast');
  }
  
  $nextrowdivs = cleanArray($nextrowdivs);
  
  if ($nextrowdivs.length == 0) {
    // Last row, we need to adjust the footer
    console.log("RESIZED FOOTER");
    $('.footer-wrapper').animate({marginTop: totalHeight}); 
  }
  
}

function cleanArray(actual){
  var newArray = new Array();
  for(var i = 0; i<actual.length; i++){
      if ($(actual[i]).length){
        newArray.push(actual[i]);
    }
  }
  return newArray;
}

function getCurrentRow(div) {
  $currentrow = Math.ceil($(this).index()/6);
  if ($currentrow == 0) {
    $currentrow = 1;
  }
  
  return $currentrow;
}

function perform_wizardry() {

    window_scroll = $(this).scrollTop();

    var margin_top = parseInt((window_scroll/6)) + parseInt(header_in_margin_top);
    
    $header_in.css({
      'opacity' : 1-(window_scroll/300),
      'margin-top' : -window_scroll
    });
    
    $logo.css({
      'opacity' : 1-(window_scroll/300)
    });
    
    $logo_alt.css({
      'opacity' : 0+(window_scroll/300)
    });
    
    if (window_scroll > 40)
    {
      $('.navigation-wrapper').css('position','fixed');
      $('.navigation-wrapper').css('top',0);
    } else {
      $('.navigation-wrapper').css('position','absolute');
      $('.navigation-wrapper').css('top',40);
    }
    
    if (window_scroll > 300)
    {
      $('.navigation-wrapper').css('background-color','#F7F5E2');
      $('.navigation-wrapper').css('box-shadow', '0 4px 2px -2px #999');
      
      if($.browser.msie){
        if(parseFloat($.browser.version) < 9){
          //Versions of IE less than 8
          $('.navigation-wrapper').css('border-bottom', '1px solid black');
        }
      }
      
      if (!$logo_alt.hasClass('nudged')) {
        $logo_alt.animate({'margin-top': '40px'}, 'slow').addClass('nudged');
      }
            
    } else {
      $('.navigation-wrapper').css('border-top', '0');
      $('.navigation-wrapper').css('background-color','transparent');
      $('.navigation-wrapper').css('box-shadow', 'none');
      $('.navigation-wrapper').css('border', 'none');
      
      if ($logo_alt.hasClass('nudged')) {
      $logo_alt.animate({'margin-top': '20px'}, 'fast').removeClass('nudged');
      }
    }
}

function perform_wizardry_speakers() {

    window_scroll = $(this).scrollTop();

    var margin_top = parseInt((window_scroll/6)) + parseInt(header_in_margin_top);
    
    if (window_scroll > 40)
    {
      $('.navigation-wrapper').css('position','fixed');
      $('.navigation-wrapper').css('top',0);
    } else {
      $('.navigation-wrapper').css('position','absolute');
      $('.navigation-wrapper').css('top',40);
    }
    
    if (window_scroll > 150)
    {
      $('.navigation-wrapper').css('background-color','#F7F5E2');
      $('.navigation-wrapper').css('box-shadow', '0 4px 2px -2px #999');
      
      if($.browser.msie){
        if(parseFloat($.browser.version) < 9){
          //Versions of IE less than 8
          $('.navigation-wrapper').css('border-bottom', '1px solid black');
        }
      }
      
    } else {
      $('.navigation-wrapper').css('border-top', '0');
      $('.navigation-wrapper').css('background-color','transparent');
      $('.navigation-wrapper').css('box-shadow', 'none');
      $('.navigation-wrapper').css('border', 'none');
    }
}