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
          jobs       = $('.jobs'),
          quote      = $('.quote');

    
    const state = {
        jobs: true,
        dylan: false,
        zuck: false
    };

    TweenLite.to(logo, 1, { opacity: 1, x:0, ease: Power4.easeOut });
    TweenLite.to(frstItem, 1.25, { opacity: 1, y:10, ease: Power2.easeOut });
    TweenLite.to(secondItem, 1.50, { opacity: 1, y:20, ease: Power3.easeInOut });
    TweenLite.to(lastItem, 1.75, { opacity: 1, y:30, ease: Power2.easeInOut });

    TweenLite.to(circle, 1.50, {scale: 1, delay: 1, ease: Power4.easeOut});
    TweenLite.to(jobs, 1, {opacity: 1, delay: 2, y: 50, ease: Power2.easeInOut});

    TweenLite.to(quote, 1, { opacity: 1, x:0, ease: Back.easeInOut, delay: 1.25});


    function sideNavReset() {

        TweenLite.to(logo, 0.25, { opacity: 0, x: -50, ease: Power4.easeOut });
        TweenLite.to(frstItem, 0.5, { opacity: 0, y:0, ease: Power2.easeOut });
        TweenLite.to(secondItem, 0.5, { opacity: 0, y:0, ease: Power3.easeInOut });
        TweenLite.to(lastItem, 0.5, { opacity: 0, y:0, ease: Power2.easeInOut, 
            onComplete: () => {
                TweenLite.to(logo, 0.5, { opacity: 1, x:0, ease: Power4.easeOut });
                TweenLite.to(frstItem, 0.75, { opacity: 1, y:10, ease: Power2.easeOut });
                TweenLite.to(secondItem, 0.75, { opacity: 1, y:20, ease: Power3.easeInOut });
                TweenLite.to(lastItem, 0.75, { opacity: 1, y:30, ease: Power2.easeInOut });
            }
        });
    }

    function quotesReset() {
        TweenLite.to(quote, 1, { opacity: 0, x:90, ease: Back.easeInOut, 
            onComplete: () => {
                TweenLite.to(quote, 1, { opacity: 1, x:0, ease: Back.easeInOut});
            }
        });
    }

    $('#item2').click(() => {
        if(!state.dylan) {
            TweenLite.to(jobs, 0.5, {opacity: 0, y: 100, ease: Power2.easeInOut});
            TweenLite.to(circle, 0.5, 
                {   scale: 0, 
                    delay: 0.5, 
                    ease: Power4.easeOut,
                    onComplete: () => {
                        $('.circle-elm').addClass('make-blue');
                        TweenLite.to(circle, 1, {scale: 1, ease: Power4.easeOut});
                        $('#circ-image').attr('src', '../src/img/dylan.png');
                        TweenLite.to(jobs, 0.50, {opacity: 1, y: 50, delay: 1, ease: Power2.easeInOut});

                        sideNavReset();


                        quotesReset();


                        $('#quote-1').text(`
                            When something is important enough, you do it even if the odds are not in your favor.
                        `);
                        $('#quote-2').text(`
                            I think it is possible for ordinary people to choose to be extraordinary.
                        `);


                        state.dylan = true;
                        state.jobs  = false;
                        state.zuck  = false;

                    }
            });
        }
    });


    $('#jobs').click(() => {
        if(!state.jobs) {
            TweenLite.to(jobs, 0.5, {opacity: 0, y: 100, ease: Power2.easeInOut});
            TweenLite.to(circle, 0.5, 
                {   scale: 0, 
                    delay: 0.5, 
                    ease: Power4.easeOut,
                    onComplete: () => {
                        $('.circle-elm').removeClass('make-blue');
                        TweenLite.to(circle, 1, {scale: 1, ease: Power4.easeOut});
                        $('#circ-image').attr('src', '../src/img/jobs.png');
                        TweenLite.to(jobs, 0.50, {opacity: 1, y: 50, delay: 1, ease: Power2.easeInOut});

                        sideNavReset();

                        quotesReset();

                        $('#quote-1').text(`
                            Remembering that you are going to die is the best way I know to avoid the trap of thinking you have 
                            something to lose. You are already naked. There is no reason not to follow your heart.
                        `);
                        $('#quote-2').text(`
                            Your time is limited, so don’t waste it living someone else’s life. 
                            Don’t be trapped by dogma — which is living with the results of other people’s thinking. 
                            Don’t let the noise of others’ opinions drown out your own inner voice. 
                            And most important, have the courage to follow your heart and intuition. 
                            They somehow already know what you truly want to become. Everything else is secondary.
                        `);

                        state.dylan = false;
                        state.zuck  = false;
                        state.jobs  = true;
                    }
            });
        }
    });



    $('#zuck').click(() => {
        if(!state.zuck) {
            TweenLite.to(jobs, 0.5, {opacity: 0, y: 100, ease: Power2.easeInOut});
            TweenLite.to(circle, 0.5, 
                {   scale: 0, 
                    delay: 0.5, 
                    ease: Power4.easeOut,
                    onComplete: () => {
                        $('.circle-elm').addClass('make-blue');
                        TweenLite.to(circle, 1, {scale: 1, ease: Power4.easeOut});
                        $('#circ-image').attr('src', '../src/img/zuck.png');
                        TweenLite.to(jobs, 0.50, {opacity: 1, y: 50, delay: 1, ease: Power2.easeInOut});

                        sideNavReset();

                        quotesReset();

                        $('#quote-1').text(`
                            Founding a company is hard. Most of it isn't smooth.
                            You'll have to make very hard decisions. You have to fire a few people. 
                            Therefore, if you don't believe in your mission, giving up is easy.
                            The majority of founders give up. But the best founders don't give up.
                        `);
                        $('#quote-2').text(`
                            Move fast and break things. 
                            Unless you are breaking stuff, you are not moving fast enough.
                        `);

                        state.dylan = false;
                        state.jobs  = false;
                        state.zuck  = true;
                    }
            });
        }
    });




});
