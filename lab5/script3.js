// ЭТО ОЧЕНЬ ПЛОХОЙ КОД, НЕ СМОТРИТЕ НА НЕГО!!! был написан по принципу РАБОТАЕТ - НЕ ТРОГАЙ

document.addEventListener('DOMContentLoaded', function() {
   let blocks = document.querySelectorAll('.block');

   function checkBlocksVisibility() {
       let windowHeight = window.innerHeight;

       blocks.forEach(block => {
           let blockPosition = block.getBoundingClientRect().top;

           if (blockPosition <= windowHeight - 100) {
               block.style.opacity = "1";
               block.style.transform = "translateY(0)";
           }
       });
   }

   checkBlocksVisibility();

   window.addEventListener('scroll', function() {
       checkBlocksVisibility();
   });
});




let elements = document.querySelectorAll('.animated-by-scroll');

        addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.scrollY - 800);
        })

        // addEventListener('scroll', () => {
        // document.body.style.setProperty('--scrollY', window.scrollY - 600);
        // })

        const scrollThreshold = 740;
        const myDiv = document.getElementById('myDiv');

        window.addEventListener('scroll', () => {
        if (window.scrollY >= scrollThreshold) {
            myDiv.classList.add('fixed');
            myDiv.style.display = 'block';
        } else {
            myDiv.classList.remove('fixed');
            myDiv.style.display = 'block';
        }
        if (window.scrollY > 10000){
            myDiv.style.display = 'none';
        }
    })

        const b1 = document.getElementsByClassName('rect1');
        for (let i=0; i<b1.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 1410;
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b1[i].style.position = 'fixed';
                b1[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b1[i].style.position = 'absolute';
                b1[i].style.top = '';
            }
            else {
                b1[i].style.position = 'relative';
            }
        });
        }

        const b2 = document.getElementsByClassName('rect2');
        for (let i=0; i<b2.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            const triggerPosition = 1800; // Значение прокрутки, при котором элемент фиксируется
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b2[i].style.position = 'fixed';
                b2[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b2[i].style.position = 'absolute';
                b2[i].style.top = '';
            }
            else {
                b2[i].style.position = 'relative';
            }
        });
        }

        const b3 = document.getElementsByClassName('rect3');
        for (let i=0; i<b3.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            const triggerPosition = 2850; // Значение прокрутки, при котором элемент фиксируется
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b3[i].style.position = 'fixed';
                b3[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b3[i].style.position = 'absolute';
                b3[i].style.top = '';
                //b[i].style.transform = 'translateY(calc(-1 * var(--scroll) * 1px))';
            }
            else {
                b3[i].style.position = 'relative';
            }
        });
        }

        const b4 = document.getElementsByClassName('rect4')[0];
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            const triggerPosition = 3350; // Значение прокрутки, при котором элемент фиксируется
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b4.style.position = 'fixed';
                b4.style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b4.style.position = 'absolute';
                b4.style.top = '';
                //b[i].style.transform = 'translateY(calc(-1 * var(--scroll) * 1px))';
            }
            else {
                b4.style.position = 'relative';
            }
        });

        const b5 = document.getElementsByClassName('rect5');
        for (let i=0; i<b5.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 3910;
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b5[i].style.position = 'fixed';
                b5[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b5[i].style.position = 'absolute';
                b5[i].style.top = '';
            }
            else {
                b5[i].style.position = 'relative';
            }
        });
        }

        const b6 = document.getElementsByClassName('rect6');
        for (let i=0; i<b6.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 4400;
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b6[i].style.position = 'fixed';
                b6[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b6[i].style.position = 'absolute';
                b6[i].style.top = '';
            }
            else {
                b6[i].style.position = 'relative';
            }
        });
        }

        const pict = document.getElementsByClassName('pict');
        for (let i=0; i<pict.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            const triggerPosition = 5310; // Значение прокрутки, при котором элемент фиксируется
            const triggerPosition2 = 5500;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                pict[i].style.position = 'fixed';
                pict[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                pict[i].style.position = 'absolute';
                pict[i].style.top = '';
                //b[i].style.transform = 'translateY(calc(-1 * var(--scroll) * 1px))';
            }
            else {
                pict[i].style.position = 'relative';
            }
        });
        }

        const b7 = document.getElementsByClassName('rect7');
        for (let i=0; i<b7.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 6000;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b7[i].style.position = 'fixed';
                b7[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b7[i].style.position = 'absolute';
                b7[i].style.top = '';
            }
            else {
                b7[i].style.position = 'relative';
            }
        });
        }

        const b8 = document.getElementsByClassName('rect8');
        for (let i=0; i<b8.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 6500;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b8[i].style.position = 'fixed';
                b8[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b8[i].style.position = 'absolute';
                b8[i].style.top = '';
            }
            else {
                b8[i].style.position = 'relative';
            }
        });
        }

        const b9 = document.getElementsByClassName('rect9');
        for (let i=0; i<b9.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 7500;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b9[i].style.position = 'fixed';
                b9[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b9[i].style.position = 'absolute';
                b9[i].style.top = '';
            }
            else {
                b9[i].style.position = 'relative';
            }
        });
        }

        const b10 = document.getElementsByClassName('rect10');
        for (let i=0; i<b10.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 8000;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b10[i].style.position = 'fixed';
                b10[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b10[i].style.position = 'absolute';
                b10[i].style.top = '';
            }
            else {
                b10[i].style.position = 'relative';
            }
        });
        }

        const b11 = document.getElementsByClassName('rect11');
        for (let i=0; i<b11.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 8500;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b11[i].style.position = 'fixed';
                b11[i].style.top = '40px';
            } else if (scrollPosition >= triggerPosition2) {
                b11[i].style.position = 'absolute';
                b11[i].style.top = '';
            }
            else {
                b11[i].style.position = 'relative';
            }
        });
        }
        const b12 = document.getElementsByClassName('rect12');
        for (let i=0; i<b12.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 9000;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b12[i].style.position = 'fixed';
                b12[i].style.top = '40px';
                b12[i].style.display = 'block';
            } else if (scrollPosition >= triggerPosition2) {
                b12[i].style.position = 'absolute';
                b12[i].style.top = '';
                b12[i].style.display = 'block';
            }
            else {
                b12[i].style.position = 'relative';
                b12[i].style.display = 'block';
            }
            if (scrollPosition > 10000){
                b12[i].style.display = 'none';
            }
        });
        }
        const b13 = document.getElementsByClassName('rect13');
        for (let i=0; i<b13.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 9500;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b13[i].style.position = 'fixed';
                b13[i].style.top = '40px';
                b13[i].style.display = 'block';
            } else if (scrollPosition >= triggerPosition2) {
                b13[i].style.position = 'absolute';
                b13[i].style.top = '';
                b13[i].style.display = 'block';
            }
            else {
                b13[i].style.position = 'relative';
                b14[i].style.display = 'block';
            }
            if (scrollPosition > 10000){
                b13[i].style.display = 'none';
            }
        });
        }

        const b14 = document.getElementsByClassName('rect14');
        for (let i=0; i<b13.length; i++){
            window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const triggerPosition = 9700;
            const triggerPosition2 = 10000;

            if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition2) {
                b14[i].style.position = 'fixed';
                b14[i].style.top = '40px';
                b14[i].style.display = 'block';
            } else if (scrollPosition >= triggerPosition2) {
                b14[i].style.position = 'absolute';
                b14[i].style.top = '';
                b14[i].style.display = 'block';
            }
            else {
                b14[i].style.position = 'relative';
                b14[i].style.display = 'block';
            }
            if (scrollPosition > 10000){
                b14[i].style.display = 'none';
            }
        });
        }