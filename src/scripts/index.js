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
          social     = $('.social-icons'),
          summary    = $('.summary'),
          companies  = $('.companies');

    
    const state = {
        jobs: true,
        dylan: false,
        zuck: false,
        summaryVal: `I am a Software craftsman with a passion for web applications, 
        AI and automation. continuously learning and seeking 
        new opportunities where I can apply my technical skills to solve 
        interesting problems and transform complication into simplicity.`
    };

    companies.hide();

    TweenLite.to(logo, 1, { opacity: 1, x:0, ease: Power4.easeOut });
    TweenLite.to(frstItem, 1.25, { opacity: 1, y:10, ease: Power2.easeOut });
    TweenLite.to(secondItem, 1.50, { opacity: 1, y:20, ease: Power3.easeInOut });
    TweenLite.to(lastItem, 1.75, { opacity: 1, y:30, ease: Power2.easeInOut });

    TweenLite.to(circle, 1.50, {scale: 1, delay: 1, ease: Power4.easeOut});
    TweenLite.to(jobs, 1, {opacity: 1, delay: 2, y: 50, ease: Power2.easeInOut});

    TweenLite.to(social, 
            1, 
            { width: "100%", opacity: 1,  ease: Back.easeInOut, delay: 1.75}
        );
    TweenLite.to(summary, 1, { opacity: 1, x: 0,  ease: Power4.easeInOut })

    function companiesChain() {
        TweenLite.to($('.av'), 0.5, 
        { scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut,
            onComplete: () => {
                TweenLite.to($('.ib'), 0.25, { scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut,
                    onComplete: () => {
                        TweenLite.to($('.it'), 0.25, { scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut,
                            onComplete: () => {
                                TweenLite.to($('.ez'), 0.25, { scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut,
                                    onComplete: () => {
                                        TweenLite.to($('.pc'), 0.25, { scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut,
                                            onComplete: () => {
                                                TweenLite.to($('.sy'), 0.25, { scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut
                                                });
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    function resetChain() {
        $('.av').css('transform', 'scale(' + 0 + ')');
        $('.ib').css('transform', 'scale(' + 0 + ')');
        $('.it').css('transform', 'scale(' + 0 + ')');
        $('.ez').css('transform', 'scale(' + 0 + ')');
        $('.pc').css('transform', 'scale(' + 0 + ')');
        $('.sy').css('transform', 'scale(' + 0 + ')');
        
    }

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
        TweenLite.to(social, 1, { width: "0%", opacity: 0,  ease: Back.easeInOut, delay: 1});
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
                        $('#circ-image').attr('src', 'https://i.imgur.com/MHD2N1K.png');
                        TweenLite.to(jobs, 0.50, {opacity: 1, y: 50, delay: 1, ease: Power2.easeInOut});

                        sideNavReset();
                        TweenLite.to(summary, 0.50, { opacity: 0, x: 0,  ease: Power4.easeInOut, 
                            onComplete: () => {
                                companies.show();
                                TweenLite.to(companies, 1, 
                                    { opacity: 1, y: 0, ease: Power2.easeInOut,
                                        onComplete: companiesChain()
                                    });
                            }
                        });

                        state.dylan = true;
                        state.jobs  = false;
                        state.zuck  = false;

                    }
            });
        }
    });


    $('#jobs').click(() => {
        if(!state.jobs) {
            TweenLite.to(companies, 1, {opacity: 0, y: 30, ease: Power2.easeInOut});
            sideNavReset();
            companies.hide();
            TweenLite.to(jobs, 0.5, {opacity: 0, y: 100, ease: Power2.easeInOut});
            TweenLite.to(circle, 0.5, 
                {   scale: 0, 
                    delay: 0.5, 
                    ease: Power4.easeOut,
                    onComplete: () => {
                        $('.circle-elm').removeClass('make-blue');
                        TweenLite.to(circle, 1, {scale: 1, ease: Power4.easeOut});
                        $('#circ-image').attr('src', 'https://i.imgur.com/JqwyWlG.png');
                        TweenLite.to(jobs, 0.50, {opacity: 1, y: 50, delay: 1, ease: Power2.easeInOut});

                        sideNavReset();

                        TweenLite.to(social, 1, { width: "100%", opacity: 1,  ease: Back.easeInOut, delay: 1.75});
                        TweenLite.to(summary, 1, { opacity: 1, x: 0,  ease: Power4.easeInOut })
                        summary.val = state.summaryVal;

                        state.dylan = false;
                        state.zuck  = false;
                        state.jobs  = true;
                    }
            });
        }
    });



    $('#zuck').click(() => {
        if(!state.zuck) {
            TweenLite.to(companies, 1, {opacity: 0, y: 30, ease: Power2.easeInOut});
            sideNavReset();
            companies.hide();
            TweenLite.to(jobs, 0.5, {opacity: 0, y: 100, ease: Power2.easeInOut});
            TweenLite.to(circle, 0.5, 
                {   scale: 0, 
                    delay: 0.5, 
                    ease: Power4.easeOut,
                    onComplete: () => {
                        $('.circle-elm').addClass('make-blue');
                        TweenLite.to(circle, 1, {scale: 1, ease: Power4.easeOut});
                        $('#circ-image').attr('src', 'https://images.unsplash.com/photo-1523307910327-1623cf6957a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80');
                        TweenLite.to(jobs, 0.50, {opacity: 1, y: 50, delay: 1, ease: Power2.easeInOut});

                        sideNavReset();
                        summary.val = "";
                        TweenLite.to(summary, 0.50, { opacity: 0, x: 0,  ease: Power4.easeInOut, 
                            onComplete: () => {
                                // TODO
                                // companies.show();
                                // TweenLite.to(companies, 1, {opacity: 1, y: 0, ease: Power2.easeInOut});
                            }
                        });

                        state.dylan = false;
                        state.jobs  = false;
                        state.zuck  = true;
                    }
            });
        }
    });




});
