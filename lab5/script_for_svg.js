let len = 0;
let speed = 5;
let delay = 0;

const paths = document.querySelectorAll('.path_line');

paths.forEach(element => {
   let elementLen = element.getTotalLength();
   len += elementLen;
})

paths.forEach(element => {
   let elementLen = element.getTotalLength();
   let duration = elementLen / len * speed;
   
   element.style.animationDuration = `${duration}s`;
   element.style.animationDelay = `${delay}s`;

   element.setAttribute('stroke-dasharray', elementLen);
   element.setAttribute('stroke-dashoffset', elementLen);
   delay += duration + 0.2;
})