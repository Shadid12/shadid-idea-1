// sass
import '../styles/index.sass';

// libs
import $ from 'jquery';
import {TweenLite, Power4, Power2, Power3} from "gsap/TweenMax";


$( document ).ready(function() {
    const logo       = $('.logo'),
          frstItem   = $('li:first-child'),
          secondItem = $('li:nth-child(2)'),
          lastItem   = $('li:last-child'),
          circle     = $('.circle-elm'),
          jobs       = $('.jobs');

    TweenLite.to(logo, 1, { opacity: 1, x:0, ease: Power4.easeOut });
    TweenLite.to(frstItem, 1.25, { opacity: 1, y:10, ease: Power2.easeOut });
    TweenLite.to(secondItem, 1.50, { opacity: 1, y:20, ease: Power3.easeInOut });
    TweenLite.to(lastItem, 1.75, { opacity: 1, y:30, ease: Power2.easeInOut });

    TweenLite.to(circle, 1.50, {scale: 1, delay: 1, ease: Power4.easeOut})
    TweenLite.to(jobs, 1, {opacity: 1, delay: 2, y: 50, ease: Power2.easeInOut})

    $('#item2').click(() => {
        TweenLite.to(jobs, 0.5, {opacity: 0, y: 100, ease: Power2.easeInOut})
        TweenLite.to(circle, 0.5, 
            {   scale: 0, 
                delay: 0.5, 
                ease: Power4.easeOut,
                onComplete: () => {
                    TweenLite.to(circle, 1, {scale: 1, ease: Power4.easeOut});
                }
            })
    })
});
