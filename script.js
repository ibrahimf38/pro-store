document.addEventListener('DOMContentLoaded', function() {
    const pubs = document.querySelectorAll('.pub');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showPub(index) {
        pubs.forEach((pub, i) => {
            if (i === index) {
                pub.classList.add('active');
            } else {
                pub.classList.remove('active');
            }
        });
    }

    function nextPub() {
        currentIndex = (currentIndex + 1) % pubs.length;
        showPub(currentIndex);
    }

    function prevPub() {
        currentIndex = (currentIndex - 1 + pubs.length) % pubs.length;
        showPub(currentIndex);
    }

    showPub(currentIndex);
    setInterval(nextPub, 2000);
    prevBtn.addEventListener('click', prevPub);
    nextBtn.addEventListener('click', nextPub);
});