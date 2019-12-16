$(function() {
    $('.backgroundTransition').backgroundTransition({
        backgrounds:[
            { src: 'images/1.jpg', alt: 'skyzone community activity' },
            { src: 'images/2.jpg', alt: 'halloween group picture' },
            { src: 'images/3.jpg', alt: 'visit with state legislators' },
            { src: 'images/4.jpg', alt: 'CVS externship' },
            { src: 'images/5.jpg', alt: 'BARCS volunteering' },
            { src: 'images/6.jpg', alt: 'Auntie Anne pretzel class' },
            { src: 'images/7.jpg', alt: 'christmas decorations prep' },
            { src: 'images/8.jpg', alt: 'fire department vist' },
            { src: 'images/9.jpg', alt: 'group activity' },
            { src: 'images/10.jpg', alt: 'Baltimore museum of Art visit' },
        ],
        transitionDelay: 5,
        animationSpeed: 500
    });
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };