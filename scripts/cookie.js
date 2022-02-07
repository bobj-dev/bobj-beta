'use strict';

const setCookie = function(cname, cvalue) {
    var date = Date.now();
    date.setTime(date.getTime() + 31536000000);

    document.cookie = `${cname}=${cvalue};expires=${date.toUTCString()};path=/;`;
}

const getCookie = function(cname) {
    let name = `${cname}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

const clearCookie = function(cname) {
    document.cookie = `${cname}=${getCookie(cname)};expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}
