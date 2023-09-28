const toggleButton = document.getElementById('toggle-btn');
const toggleContent = document.getElementById('toggle-content');


const balls = document.querySelectorAll('.ball');


balls.forEach(ball => {
    ball.addEventListener('mouseenter', () => {

        ball.style.transform = 'translateY(-2em)';
        ball.style.transition = 'transform 0.4s ease-in-out';
    });

    ball.addEventListener('mouseleave', () => {
        ball.style.transform = 'translateY(-5em)';
        ball.style.transform = 'translateY(0em)';
        ball.style.transition = 'transform 0.3s ease-in-out';
    });


});


toggleButton.addEventListener('click', () => {
    toggleContent.classList.toggle('hidden');
    toggleContent.classList.toggle('visible');
    toggleButton.classList.toggle('active');
});
