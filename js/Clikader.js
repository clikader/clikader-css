// CLiKader JS comes with CLiKader CSS
// ----------------------------------------------
// JS VERSION: BETA 1
// Date started for current version: May 12, 2019
// CLiKader.com / CLiKaderApp.com
// ----------------------------------------------

$(document).ready(function() {
    // initialize things
    equalizeNavWidth();
    calculateEasyClass();
});

$(window).on("resize", function() {
    // change things on resize
    equalizeNavWidth();
});

function equalizeNavWidth() {
    // find all nav sections
    var navSections = $(document).find(".nav-section");
    maxWidth = 0;
    
    navSections.each(function() {
        let currentWidth = parseFloat($(this).width());
        if(currentWidth >= maxWidth) (
            maxWidth = currentWidth
        )
    });

    // console.log("MAX: " + maxWidth);
    // set the width finally
    navSections.each(function() {
        $(this).width(maxWidth);
        $(this).css("text-align", "center");
    });
}

function calculateEasyClass() {
    // height-px- classes
    var heightPx  = $("*[class*='height-px-']");
    buildDynamicClass(heightPx, "height-px-");

    // height-pc- classes
    var heightPc = $("*[class*='height-pc-']");
    buildDynamicClass(heightPc, "height-pc-");

    // height-pc- classes
    var widthPx = $("*[class*='width-px-']");
    buildDynamicClass(widthPx, "width-px-");

    // height-pc- classes
    var widthPc = $("*[class*='width-pc-']");
    buildDynamicClass(widthPc, "width-pc-");
}

function buildDynamicClass(classArray, dynamicPattern) {
    classArray.each(function() {
        var classList = $(this)[0].classList;

        for(let i = 0; i < classList.length; i++) {
            if(classList[i].includes(dynamicPattern)) {
                let value = classList[i].split(dynamicPattern)[1];
                let attr = classList[i].split("-")[0];

                var classSets = $(document).find(classList[i]);
                classSets.each(function() {
                    $(this).css(attr, value);
                })
            }
        }
    });
}
