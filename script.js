document.addEventListener('DOMContentLoaded', function() {
    const shadowCursor = document.querySelector('.shadow-cursor');

    // Add event listeners to track mouse movements
    document.addEventListener('mousemove', function(e) {
        // Update the position of the shadow cursor
        shadowCursor.style.left = e.clientX + 'px';
        shadowCursor.style.top = e.clientY + 'px';
    });

    // Add event listener to toggle active class
    document.addEventListener('mouseover', function(e) {
        shadowCursor.classList.add('active');
    });

    document.addEventListener('mouseout', function(e) {
        shadowCursor.classList.remove('active');
    });
});
