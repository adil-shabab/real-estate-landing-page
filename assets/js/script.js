
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

// create a sequence that moves 3 of the panels in from different directions 
const tl = gsap.timeline();
tl.from(".second-box", {xPercent: -100})
  .from(".third-box", {xPercent: 100})
  .from(".fourth-box", {yPercent: -100})
  .from(".fifth-box", {yPercent: 100})
  .from(".sixth-box", {xPercent: -100})
  .from(".seventh-box", {xPercent: 100})

// pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
ScrollTrigger.create({
  animation: tl,
  trigger: ".gallery",
  start: "top top",
  end: "+=4000", 
  scrub: true,
  pin: true,
  anticipatePin: 1
});


(function() {
    $(function() {
      var toggle;
      return toggle = new Toggle('.toggle');
    });
  
    this.Toggle = (function() {
      Toggle.prototype.el = null;
  
      Toggle.prototype.tabs = null;
  
      Toggle.prototype.panels = null;
  
      function Toggle(toggleClass) {
        this.el = $(toggleClass);
        this.tabs = this.el.find(".tab");
        this.panels = this.el.find(".panel");
        this.bind();
      }
  
      Toggle.prototype.show = function(index) {
        var activePanel, activeTab;
        this.tabs.removeClass('active');
        activeTab = this.tabs.get(index);
        $(activeTab).addClass('active');
        this.panels.hide();
        activePanel = this.panels.get(index);
        return $(activePanel).show();
      };
  
      Toggle.prototype.bind = function() {
        var _this = this;
        return this.tabs.unbind('click').bind('click', function(e) {
          return _this.show($(e.currentTarget).index());
        });
      };
  
      return Toggle;
  
    })();
  
  }).call(this);



