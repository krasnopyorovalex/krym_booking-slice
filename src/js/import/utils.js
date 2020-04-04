export function slideUp (target, duration=350) {
    return $(target).slideUp(duration);
}

export function slideDown (target, duration=350) {
    return $(target).slideDown(duration);
}

export function slideToggle (target, duration = 350) {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    }
    return slideUp(target, duration);
}

export function fadeIn (target, duration=350) {
    return $(target).fadeIn(duration);
}

export function fadeOut (target) {
    return $(target).fadeOut();
}

export function fadeOutAndRemove (target) {
    return $(target).fadeOut(true);
}
