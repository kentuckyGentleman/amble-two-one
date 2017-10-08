var controller = new ScrollMagic.Controller();

// Animation - Background to White ////////////////////////////////////////
// function backgroundWhite_tl(){
// 	return new TimelineLite()
// 		.fromTo("body", 1, {backgroundColor: "#41463D"}, {backgroundColor: "#fff"});
// }

// Animation - Guide Header ////////////////////////////////////////
function guideHeader_tl(){
	return new TimelineLite()
		.fromTo(".guide-header__logo", .35, {opacity: 0, y:'+=10'}, {opacity: 1, y:0}, '-=.5')
		.fromTo([".guide-header__title",".guide-header__title--dark"], 1, {opacity: 0}, {opacity: 1});
}


// Animation - About - Intro  ////////////////////////////////////////
var aboutIntro_tl = new TimelineLite();
aboutIntro_tl
	.add(guideHeader_tl)
	.from(".about__intro__copy .about__header", .4, {opacity:0, y:'+=25'}, '+=1')
	.from(".about__intro__copy__intro-about", .5, {opacity:0})
	.from(".about__intro__image", 1.75, {ease: Power4.easeOut, opacity: 0, y:'+=75'}, '-=.3')
	.from(".about .divider--green", 1.75, {ease: Power4.easeOut, scaleX:0}, 1)
	.from(".about__explain", 1, {opacity:0});


// Animation - About Motivation  ////////////////////////////////////////
var motivationArray = $(".about__motivated__item").toArray().reduce(function(tl, number){
	return tl.fromTo(number, .4, {opacity:0, y:'+=75'}, {opacity:1, y:0})
	.staggerFromTo(number.querySelectorAll(".about__motivated__item__copy"), .4, {opacity:0}, {opacity:1}, .4);
}, new TimelineLite());

var motivation_tl = new TimelineLite();
	motivation_tl
		.fromTo(".about__motivated .about__header", .4, {opacity:0, y:'+=25'}, {opacity:1, y:0})
		.add(motivationArray);

var scene = new ScrollMagic.Scene({
		triggerElement: ".about__motivated"
	})
	.setTween(motivation_tl) // trigger a TweenMax.to tween
	.addTo(controller);


// Animation - About Time is Money  ////////////////////////////////////////
var aboutMoney_tl = new TimelineLite();
aboutMoney_tl
	.from(".about__time-money", 1, {scaleX:0, opacity: 0})
	.addLabel("expandEnd", '-=.25')
	.from(".about__time-money__icon", .5, {opacity:0, y: '+=25'})
	.addLabel("dollarEnd", "-=.25")
	.from(".about__time-money__info__header", 1, {opacity:0}, "dollarEnd")
	.from(".about__time-money__info__copy", 1, {opacity:0}, '-=.6');


var scene = new ScrollMagic.Scene({
		triggerElement: ".about__time-money"
	})
	.setTween(aboutMoney_tl) // trigger a TweenMax.to tween
	.addTo(controller);


// Animation - About One Man Show  ////////////////////////////////////////
var aboutShow_tl = new TimelineLite();
aboutShow_tl
	.from(".about__one-man .about__header", .4, {opacity:0, y: '+=25'})
	.addLabel("aboutShow__label")
	.staggerFrom(".about__one-man__item", 1.25, {opacity:0}, .35, "aboutShow__label+=.25");

var scene = new ScrollMagic.Scene({
	triggerElement: ".about__one-man"
})
.setTween(aboutShow_tl) // trigger a TweenMax.to tween
.addTo(controller);

// Animation - Contents ///////////////////////////////////////////
function contentsAnimation(){
	return new TimelineLite()
		.fromTo([".contents__label", ".contents__label--green"], .4, {opacity:0, y:'+=25'}, {opacity:1, y:0})
		.staggerFromTo("li.contents__chapter", 0.5, {opacity:0, x: '-=15'}, {opacity:1, x: 0}, 0.15, '-=.5');
}

var contentsHome_tl = new TimelineLite();
contentsHome_tl
	.add(contentsAnimation());

var contentsChapter_tl = new TimelineLite();
contentsChapter_tl
	.add(contentsAnimation());

var contentsBottom_tl = new TimelineLite();
contentsBottom_tl
	.add(contentsAnimation());



// Animation Index Title ///////////////////////////////////////////////
var homeIntroTitle_tl = new TimelineLite();
homeIntroTitle_tl
	.from(".home-intro__eye", 1.75, {ease: Power4.easeOut, opacity: 0, y:'+=75'})
	.from(".home-intro__title__triangle", 1.75, {ease: Power4.easeOut, opacity: 0, y:'+=75'}, '-=1.5')
	.from(".home-intro__dollar", 1.75, {ease: Power4.easeOut, opacity: 0, y:'+=75'}, '-=1.5')
	.from(".home-intro__title__copy", 1.95, {opacity: 0}, '-=1.5')
	.from(".home-intro__title__copy__increasing", .35, {opacity: 0}, '-=1.55')
	.from(".home-intro__title__copy__with", .35, {opacity: 0}, '-=.35')
	.from(".home-intro__title__copy__design", .35, {opacity: 0}, '-=.15')
	.from(".home-intro .divider--green", 1.75, {ease: Power4.easeOut, scaleX:0}, 0);

// Animation Index Intro ///////////////////////////////////////////////
var homeIntro_tl = new TimelineLite();
homeIntro_tl
	.fromTo("body.home", 1, {backgroundColor:"#ffffff"}, {backgroundColor:"#41463D"})
	.from(".home-intro__logo", .35, {opacity: 0, y:'+=10'}, '-=.5')
	.from(".home-intro__top", 1, {opacity: 0,})
	.add(homeIntroTitle_tl);


// Animation Index Intro Information ///////////////////////////////////////////////
var homeIntroInfo_tl = new TimelineLite();
homeIntroInfo_tl
	.from(".home-intro__bottom-line__subhead", .4, {opacity:0, y:'+=25'})
	.from(".home-intro__bottom-line__explained", .4, {opacity:0})
	.add(contentsHome_tl, '-=1');

var scene = new ScrollMagic.Scene({
		triggerElement: ".home-intro__bottom-line"
	})
	.setTween(homeIntroInfo_tl) // trigger a TweenMax.to tween
	.addIndicators()
	.addTo(controller);


var scene = new ScrollMagic.Scene({
		triggerElement: ".home .case-study__subhead"
	})
	.setTween(TweenMax.fromTo("body.home", 1, {backgroundColor: "#41463D"}, {backgroundColor: "#fff"})) // trigger a TweenMax.to tween
	.addIndicators()
	.addTo(controller);


// Animation Index Values - Blog ///////////////////////////////////////////////
var homeValuesBlog_tl = new TimelineLite();
homeValuesBlog_tl
.from(".values-blog__subhead", .4, {opacity:0, y:'+=25'})
.from(".values-blog__img-container", .4, {opacity:0, y:'+=25'})
.from(".values-blog__header", .4, {opacity:0})
.from(".values-blog .cta-main", .4, {opacity:0, x:'-=25'});

var scene = new ScrollMagic.Scene({
		triggerElement: ".values-blog"
	})
	.setTween(homeValuesBlog_tl) // trigger a TweenMax.to tween
	.addTo(controller);




// Animation - Chapter Intro ///////////////////////////////////////////
var chapterIntro_tl = new TimelineLite();
chapterIntro_tl
	.from(".chapter-intro", 1, {ease: Expo.easeOut, scaleY:0, opacity: 0})
	.from(".chapter-intro__header", .4, {opacity:0})
	.from(".chapter-intro__img", .4, {opacity:0})
	.from(".chapter-intro__info", .4, {opacity:0}, '-=.2')




// Animation - Chapter Header ////////////////////////////////////
var chapterHeader_tl = new TimelineLite();
chapterHeader_tl
	.from(".chapter-guide-header", .4, {opacity:0})
	.from(".chapter-header__subhead", .4, {opacity:0, y:'+=25'})
	.from(".chapter-header__title", 1.25, {opacity:0}, 0.7)
	.add(contentsChapter_tl, '-=1.75')
	.from(".chapter-header .divider", 1.75, {ease: Power4.easeOut, scaleX:0}, 1);

var scene = new ScrollMagic.Scene({
		triggerElement: ".chapter-guide-header"
	})
	.setTween(chapterHeader_tl) // trigger a TweenMax.to tween
	.addIndicators()
	.addTo(controller);




// Animation - Chapter Explanation ////////////////////////////////////
var chapterExp_tl = new TimelineLite();
chapterExp_tl
	.from(".chapter-explanation__subhead", .5, {opacity:0, y:'+=25'})
	.from(".chapter-explanation__explanation__title", .5, {opacity:0})
	.from(".chapter-explanation__explanation", .5, {opacity:0},);

var scene = new ScrollMagic.Scene({
		triggerElement: ".chapter-explanation__subhead"
	})
	.setTween(chapterExp_tl) // trigger a TweenMax.to tween
	.addTo(controller);


// Animation - Chapter Facts ////////////////////////////////////
$(".chapter-facts__fact").each(function(){

	var chapterFact_tl = new TimelineLite();
	chapterFact_tl
		.from(this, .4, {opacity:0, x:'-=45'});
		// .from(".chapter-facts__fact h2", 1, {opacity:0})


	var scene = new ScrollMagic.Scene({
			triggerElement: this
		})
		.setTween(chapterFact_tl) // trigger a TweenMax.to tween
		.addTo(controller);
});

// Animation - Case Study //////////////////////////////////////
var caseStudy_tl = new TimelineLite();
caseStudy_tl
	.from(".case-study__subhead", .5, {opacity:0, y:'+=25'})
	.from(".case-study__img", 1, {ease: Power4.easeOut, opacity:0, x:'-=90'}, '+=.45')
	.from(".case-study .cta-main", .5, {opacity:0, x:'-=25'});
	// .fromTo("body",2,{backgroundColor: "#fff"}, {backgroundColor: "#41463D"},0 );

var scene = new ScrollMagic.Scene({
		triggerElement: ".case-study__subhead"
	})
	.setTween(caseStudy_tl) // trigger a TweenMax.to tween
	.addTo(controller);


// Animation - Contact //////////////////////////////////////
var contact_tl = new TimelineLite();
contact_tl
	.from(".contact-module h2", .5, {opacity:0})
	.from(".contact-module .cta-main", .5, {opacity:0, x:'-=25'});

var scene = new ScrollMagic.Scene({
		triggerElement: ".contact-module"
	})
	.setTween(contact_tl) // trigger a TweenMax.to tween
	.addTo(controller);

// Animation - Footer Nav //////////////////////////////////////
var footerNav_tl = new TimelineLite();
footerNav_tl
	.from(".footer__sections__section__image__container", .5, {opacity:0})
	.from(".footer__sections__section__copy__container", .5, {opacity:0})
	.from(".footer__sections__section .cta-main", .5, {opacity:0, x:'-=25'}, '-=.3');

// Animation - Footer Nav Stagger //////////////////////////////////////
var footerNavStagger_tl = new TimelineLite();
footerNavStagger_tl
	.staggerFrom(".footer__sections__section", .75, {opacity:0, x: '-=45'}, .2);

// Animation - Footer Contact //////////////////////////////////////
var footerContact_tl = new TimelineLite();
footerContact_tl
	.from(".footer__contact__image", .75, {opacity:0})
	.from(".footer__contact .link", .5, {opacity:0, x:'-=25'}, '-=.6')
	.from(".footer__contact p", .5, {opacity:0, x:'-=25'}, '-=.3');

// Animation - Footer Contact //////////////////////////////////////
var footer_tl = new TimelineLite();
footer_tl
	.from(".footer .divider", 2, {ease: Expo.easeOut, scaleX:0, opacity: 0})
	.add(contentsBottom_tl,'-=.75')
	.add(footerNavStagger_tl, '-=.75')
	.add(footerContact_tl, '-=.5');

var scene = new ScrollMagic.Scene({
		triggerElement: ".footer"
	})
	.setTween(footer_tl) // trigger a TweenMax.to tween
	.addIndicators()
	.addTo(controller);


// Animation - Our Values Intro //////////////////////////////////////
var ourValuesIntro_tl = new TimelineLite();
ourValuesIntro_tl
	// .fromTo("body.our-values", 1, {backgroundColor:"#fff"}, {backgroundColor:"#03FCBA"})
	.add(guideHeader_tl)
	.from(".our-values__headline", .4, {opacity:0, y:'+=25'}, '+=1')
	.from(".our-values__intro__copy", 1, {opacity:0})
	.from(".our-values .divider", 1.75, {ease: Power4.easeOut, scaleX:0}, 1);
	


// Animation - Our Values Values  ////////////////////////////////////////

$(".our-values__values__list-item").each(function(){

	
	var Tween = TweenMax.fromTo(this, .5, {autoAlpha:0, y:'+=50'},{autoAlpha:1, y:0})
	// .fromTo(".our-values__values__list-item__copy", 1, {autoAlpha:0},{autoAlpha:1});

	var scene = new ScrollMagic.Scene({
		triggerElement: this
	})
	.setTween(Tween) // trigger a TweenMax.to tween
	.addTo(controller);

});
 
