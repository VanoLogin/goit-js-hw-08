!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in t){var l=t[e];delete t[e];var o={id:e,exports:{}};return a[e]=o,l.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){t[e]=a},e.parcelRequired7c6=l);var o,n,r,i=l("1WSnx"),s=document.querySelector(".feedback-form"),m=document.getElementById("email"),d=document.getElementById("message"),u=(0,i.throttle)((function(){var e={email:m.value,message:d.value},a=e.email,t=e.message;localStorage.setItem("feedback-form-state",JSON.stringify({email:a,message:t}))}),500);s.addEventListener("input",u),s.addEventListener("submit",(function(e){e.preventDefault();var a={email:m.value,message:d.value},t=a.email,l=a.message;console.log({email:t,message:l}),localStorage.removeItem("feedback-form-state"),m.value="",d.value=""})),o=JSON.parse(localStorage.getItem("feedback-form-state")),n=o.email,r=o.message,n&&r&&(m.value=n,d.value=r)}();
//# sourceMappingURL=03-feedback.c4d68045.js.map
