const ScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });

    return null;
}

export default ScrollToTop;