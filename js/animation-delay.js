// (function(undefined) {

//     var wrapper = document.getElementById('wrapper'),
//         elms = wrapper.children,
//         delay = wrapper.getAttribute('data-delay'),
//         prop,
//         styl,
//         cur,
//         i;

//     delay = !delay ? 0 : Number(delay.replace(/[^\d\.]/g, ''));

//     if (!elms.length) {
//         return;
//     }

//     styl = window.getComputedStyle(elms[0]);

//     if (styl.getPropertyValue('animation-delay')) {
//         prop = 'animation-delay';

//     } else if (styl.getPropertyValue('-webkit-animation-delay')) {
//         prop = '-webkit-animation-delay';

//     } else if (styl.getPropertyValue('-moz-animation-delay')) {
//         prop = '-moz-animation-delay';

//     } else {
//         console.log('unable to find prop');
//         return;
//     }
//     // console.log('prop', prop);

//     for (i = 0; i < elms.length; i++) {
//         styl = window.getComputedStyle(elms[i]);
//         cur = styl.getPropertyValue(prop);
//         cur = Number(cur.replace(/[^\d\.]/g, ''));
//         elms[i].style.setProperty(prop, (cur + delay) + 's');

//         console.log('delay: ' + cur + 's -> ' + (cur + delay) + 's')
//     }

// })();