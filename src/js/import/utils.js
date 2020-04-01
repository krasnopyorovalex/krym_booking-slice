export function slideUp (target, duration=500) {
    return $(target).slideUp(duration);
}

export function slideDown (target, duration=500) {
    return $(target).slideDown(duration);
}

export function slideToggle (target, duration = 500) {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    }
    return slideUp(target, duration);
}

export function fadeIn (target, duration=500) {
    return $(target).fadeIn(duration);
}

export function fadeOut (target, duration=500) {
    return $(target).fadeOut(duration);
}
