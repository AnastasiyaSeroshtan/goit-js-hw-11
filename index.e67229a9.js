!function(){var n=document.querySelector(".search-form"),e=document.querySelector('input[name="searchQuery"]'),t=document.querySelector(".gallery"),o=(document.querySelector(".submit"),document.querySelector(".load-more")),c="",a=1;function i(n){return fetch("".concat("https://pixabay.com/api/","?key=").concat("29230862-8ed88c62e82238b6e063c75d0","&q=").concat(n,"&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=").concat(a)).then((function(n){return n.json()}))}function r(n){var e=function(n){return n.reduce((function(n,e){return n+function(n){return'<div class="photo-card">\n    <img src="'.concat(n.webformatURL,'" alt="').concat(n.tags,'" loading="lazy" />\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b>\n        <span>').concat(n.likes,'</span>\n      </p>\n      <p class="info-item">\n        <b>Views</b>\n        <span>').concat(n.views,'</span>\n      </p>\n      <p class="info-item">\n        <b>Comments</b>\n        <span>').concat(n.comments,'</span>\n      </p>\n      <p class="info-item">\n        <b>Downloads</b>\n        <span>').concat(n.downloads,"</span>\n      </p>\n    </div>\n  </div>")}(e)}),"")}(n);t.insertAdjacentHTML("beforeend",e)}n.addEventListener("submit",(function(n){n.preventDefault(),t.innerHTML="",c=e.value,a=1,i(c).then((function(n){console.log(n),r(n.hits),a+=1})).catch((function(n){return console.log(n)}))})),o.addEventListener("click",(function(n){n.preventDefault(),i(c).then((function(n){console.log(n),r(n.hits),a+=1})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.e67229a9.js.map
