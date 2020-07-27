window.onload = function() {
        "use strict";
        let selectedAnimation = document.getElementById("animation");
        let strbtn = document.getElementById("start");
        let stpbtn = document.getElementById("stop");
        let speedsel = document.getElementById("chkbox");
        let fonSize = document.getElementById("fntSize");
        let animation;
        let timer = null;

        selectedAnimation.onchange = showAnimationFrame;
        strbtn.onclick = startAnimation;
        speedsel.onchange = turbocheck;
        stpbtn.onclick = stopAnimation;
        fonSize.onchange = fntChange;

        function showAnimationFrame() {
            let textArea = document.getElementById("txtarea");
            textArea.value = ANIMATIONS[selectedAnimation.value];
        }

        //start playing the animation
        function startAnimation() {

            animation = document.getElementById("txtarea").value;
            let splitedFrame = animation.split('=====\n');

            let index = 0;
            strbtn.disabled = true;

            selectedAnimation.disabled = true;
            stpbtn.disabled = false;

            // function that changes the frames 
            function animator() {

                if (index === 0) {
                    let thetxtarea = document.getElementById("txtarea");
                    thetxtarea.value = splitedFrame[index];
                    index++;
                } else if (index === splitedFrame.length - 1) {
                    let thetxtarea = document.getElementById("txtarea");
                    thetxtarea.value = splitedFrame[index];
                    index = 0;
                } else {
                    let thetxtarea = document.getElementById("txtarea");
                    thetxtarea.value = splitedFrame[index];
                    index++;
                }
            }

            if (timer === null) {
                timer = setInterval(animator, 250);
            }
        }

        // change animation speed
        function turbocheck() {
            let trbcheked = chkbox.checked;
            let txtareaValue = document.getElementById("txtarea").value;
            let index = 0;

            let splitedFrame = animation.split('=====\n');
            //get current index of animation
            for (let i = 0; i < splitedFrame.length; i++) {
                if (splitedFrame[i] === txtareaValue) {
                    index = i;
                    break;
                }
            }

            if (trbcheked) {
                clearInterval(timer);
                timer = setInterval(animator, 50);
            } else {
                clearInterval(timer);
                timer = setInterval(animator, 250);
            }

            //chane animation frame
            function animator() {
                if (index === 0) {
                    let thetxtarea = document.getElementById("txtarea");
                    thetxtarea.value = splitedFrame[index];
                    index++;
                } else if (index === splitedFrame.length - 1) {
                    let thetxtarea = document.getElementById("txtarea");
                    thetxtarea.value = splitedFrame[index];
                    index = 0;
                } else {
                    let thetxtarea = document.getElementById("txtarea");
                    thetxtarea.value = splitedFrame[index];
                    index++;
                }
            }

        }

        //Stop playing animation
        function stopAnimation() {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
            }

            selectedAnimation = document.getElementById("animation");
            let textArea = document.getElementById("txtarea");
            textArea.value = ANIMATIONS[selectedAnimation.value];
            stpbtn.disabled = true;
            strbtn.disabled = false;
            selectedAnimation.disabled = false;
            if (chkbox.checked === true) {
                chkbox.checked = false;
            }

        }

        //change font size of animation frame
        function fntChange() {
            if (fonSize.value === 'tny') {
                let textArea = document.getElementById('txtarea');
                textArea.style.fontSize = '7pt';
            }

            if (fonSize.value === 'sml') {
                let textArea = document.getElementById('txtarea');
                textArea.style.fontSize = '10pt';
            }

            if (fonSize.value === 'mdm') {
                let textArea = document.getElementById('txtarea');
                textArea.style.fontSize = '12pt';
            }

            if (fonSize.value === 'lrg') {
                let textArea = document.getElementById('txtarea');
                textArea.style.fontSize = '16pt';
            }

            if (fonSize.value === 'extralrg') {
                let textArea = document.getElementById('txtarea');
                textArea.style.fontSize = '24pt';
            }

            if (fonSize.value === 'xxlrg') {
                let textArea = document.getElementById('txtarea');
                textArea.style.fontSize = '32pt';
            }
        }
    } //window load