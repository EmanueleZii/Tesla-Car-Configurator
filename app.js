const topBar = document.querySelector('#top-bar');

//Handle Top Bar On Scrolls
const handleScrolls = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
};

// Event Listeners
window.addEventListener("scroll", ()=> {
    requestAnimationFrame(handleScrolls);
});

