/* eslint-disable no-loop-func */
window.onload = function() {
    const numberOfBubbles = $('#numberOfBubbles');
    const growthRate = $('#growthRate');
    const growthAmount = $('#growthAmount');
    const initialWidth = $('#width');
    const start = $('#start');
    const stop = $('#stop');
    let timer;
    const removeBubbles = function() {
        $(this).remove();
    };
    const createBubbles = function() {
        const safeColors = ['aa', '00', 'cc', '33', 'ee', '11', 'ff', '55', 'dd', '77'];
        const rand = function() {
            return Math.floor(Math.random() * 10);
        };
        const randPostions = function() {
            return `${Math.floor(Math.random() * 50)}%`;
        };
        const randomColor = function() {
            const r = safeColors[rand()];
            const g = safeColors[rand()];
            const b = safeColors[rand()];
            return `#${r}${g}${b}`;
        };
        for (let i = 1; i <= numberOfBubbles.val(); i++) {
            $('#canvas').append(
                $('<div>', {
                    class: 'bubble',
                    css: {
                        width: initialWidth.val(),
                        height: initialWidth.val(),
                        'background-color': randomColor(),
                        top: randPostions(),
                        left: randPostions(),
                        'z-index': 1,
                    },
                    mouseenter() {
                        $(this).css('opacity', '50%');
                    },
                    mouseleave() {
                        $(this).css('opacity', '100%');
                    },
                    click: removeBubbles,
                }),
            );
        }
    };
    const increaseSize = function() {
        $('.bubble').each(function(idx, e) {
            let width = parseInt($(e).css('width'));
            let height = parseInt($(e).css('height'));
            width += parseInt(growthAmount.val());
            const newWidth = `${width}px`;
            height += parseInt(growthAmount.val());
            const newHeight = `${height}px`;

            $(e).css('width', newWidth).css('height', newHeight);
        });
    };
    const startEverything = function() {
        createBubbles();
        timer = setInterval(increaseSize, parseInt(growthRate.val()));
    };

    const stopEverything = function() {
        clearInterval(timer);
        $('.bubble').each(function(idx, e) {
            $(e).remove();
        });
    };
    stop.click(stopEverything);
    start.click(startEverything);
};