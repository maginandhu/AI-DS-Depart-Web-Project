document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = "0 0 25px rgba(0,0,0,0.4)";
    });
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });
});
