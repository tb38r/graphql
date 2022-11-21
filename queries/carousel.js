const gradesXPDiv = document.getElementById('gradesXPDiv');
const gradesXPScrollWidth = gradesXPDiv.scrollWidth;


window.addEventListener('load', () => {
  self.setInterval(() => {
    const first = document.querySelector('#gradesXPDiv p');

   if(!isElementInViewport(first)){
      gradesXPDiv.appendChild(first);
      gradesXPDiv.scrollTo(gradesXPDiv.scrollLeft - first.offsetWidth, 0);
    }
    if (gradesXPDiv.scrollLeft !== gradesXPScrollWidth) {
      gradesXPDiv.scrollTo(gradesXPDiv.scrollLeft + 1, 0);
    }
  }, 15);
});

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
   // console.log(rect.right);
    return rect.right >0;
}
     