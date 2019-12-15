console.log('\'Allo \'Allo!');

$('.backgroundTransition').backgroundTransition({
    backgrounds: [
        // at least 2 images
        { src:'1.jpg' },
        { src:'2.jpg' },
        { src:'3.jpg' }
    ],
    transitionDelay: 5,
    animationSpeed: 800
});