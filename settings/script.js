'use strict';

var settings = ['bobj']

const changeSetting = function(element) {
    if (element.type == 'checkbox') {
        setCookie(element.id, element.checked);
        return false;
    }

    if (element.type == 'text') {
        setCookie(element.id, element.value);
        return false;
    }

    throw new TypeError(`Setting type ${element.type} not supported.`);
}
