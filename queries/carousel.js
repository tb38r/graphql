const gradesXPDiv = document.getElementById('gradesXPDiv');
const gradesXPScrollWidth = gradesXPDiv.scrollWidth;
let dataLoaded = false



window.addEventListener('load', () => {
  self.setInterval(() => {
    const first = document.querySelector('#gradesXPDiv p');

    if(first !== null ){


      if(!isElementInViewport(first)){
         gradesXPDiv.appendChild(first);
         gradesXPDiv.scrollTo(gradesXPDiv.scrollLeft - first.offsetWidth, 0);
       }
       if (gradesXPDiv.scrollLeft !== gradesXPScrollWidth) {
         gradesXPDiv.scrollTo(gradesXPDiv.scrollLeft + 1, 0);
       }


    }
  }, 15);

});


function isElementInViewport (el) {
  if (el!==null){
  
    let rect = el.getBoundingClientRect();
    // console.log(rect.right);
    return rect.right >0;

    
  }
}
     


// <div class="container" id="gradesXPDiv">
// <div class="scroll-disabler"></div>
// <div><p>hello</p></div>
// <p>This is the first News: big news</p>
// <p>This is the second News: big news</p>
// <p>This is the third News: big news</p>
// <p>This is the fourth News: big news</p>
// <p>This is the fifth News: big news</p>
// <p>This is the last News: big news</p>
// </div>
