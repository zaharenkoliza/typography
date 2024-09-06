const texts = ['Кто вы?', 'Ого, да вы же обладатель гена икс']

const textContainer = document.querySelector('.animated-text');

let textIndex = 0;
let charIndex = 0;

function typeText() {
   const text = texts[textIndex];
   textContainer.textContent = text.slice(0, charIndex++);

   if (charIndex <= text.length){
      setTimeout(typeText, 100);
   }
   else{
      setTimeout(eraseText, 1500);
   }
}

function eraseText(){
   const text = texts[textIndex];
   textContainer.textContent = text.slice(0, charIndex--);

   if (charIndex >= 0){
      setTimeout(eraseText, 10);
   }
   else{
      textIndex = (textIndex + 1);
      if (textIndex == 2){
         
         window.location.href = 'inner.html';
      }
      charIndex = 0;
      setTimeout(typeText, 100);
   }
}

typeText();