

  anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
  }).add({
    targets: '.ml5 .line',
    duration: 800,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000000000000
  });





 // Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 7000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay:3000000
  });
















  window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2 ;
    
    let frames = document.querySelectorAll('.scrollAnim');
    frames.forEach( frame => {
      let frameTop = frame.offsetTop;
      let frameHeight = frame.offsetHeight;
      
      if ( pageTop  >= frameTop - pageHeight &&
          pageTop  < frameTop + frameHeight/2 ){
        frame.classList.add('anim');
      }else{
        frame.classList.remove('anim');
      }
    });
  });




  
  AOS.init({
    duration: 1200,
  })





  $(document).ready(function(){
 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
});
  