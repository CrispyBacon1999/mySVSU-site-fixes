let scrolled = false;

window.onscroll = function () {
    scrolled = true;
};

setInterval(function () {
    if (scrolled) {
        scrolled = false;
        if (window.scrollY > 10) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    }
}, 150);

function createLinkButton(link, title, icon) {
    const linkEl = document.createElement("a");
    linkEl.href = link;
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("title", title);
    buttonElement.innerHTML = icon;
    buttonElement.className =
        "Button__button__mxEQc Button__button__3_Ozh Login__loginUser__2yNo4 Button__sizeSlim__2Tdvr";
    linkEl.appendChild(buttonElement);
    return linkEl;
}

setTimeout(function () {
    console.log("Onload called");
    const container = document.querySelector('[class*="AppBar__rChild"');

    const canvasButton = createLinkButton(
        "https://canvas.svsu.edu/",
        "Canvas",
        `<span class="Button__content__1Q33a Button__content__3QVZZ"><span class="Button__customIcon__14qM8"><span class="Icon__icon__66GYG"><svg xmlns="http://www.w3.org/2000/svg" viewBox="206.4 259.7 94.3 94.3" class="Icon__svg__3MbLI"><g> <g> <path class="st0" d="M220.1,306.8c0-7-5.2-12.7-12-13.5c-1.1,4.3-1.7,8.8-1.7,13.5c0,4.7,0.6,9.2,1.7,13.5 C214.9,319.5,220.1,313.7,220.1,306.8z"/> <path class="st0" d="M228,302.5c-2.4,0-4.3,1.9-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.9,4.3-4.3 C232.3,304.4,230.4,302.5,228,302.5z"/> <path class="st0" d="M287,306.8c0,7,5.2,12.7,12,13.5c1.1-4.3,1.7-8.8,1.7-13.5c0-4.7-0.6-9.2-1.7-13.5 C292.2,294.1,287,299.8,287,306.8z"/> <path class="st0" d="M279,302.5c-2.4,0-4.3,1.9-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.9,4.3-4.3 C283.3,304.4,281.4,302.5,279,302.5z"/> <path class="st0" d="M253.4,340.3c-7,0-12.7,5.2-13.5,12c4.3,1.1,8.8,1.7,13.5,1.7c4.7,0,9.2-0.6,13.5-1.7 C266.1,345.6,260.4,340.3,253.4,340.3z"/> <path class="st0" d="M253.4,328.1c-2.4,0-4.3,1.9-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.9,4.3-4.3 C257.7,330.1,255.8,328.1,253.4,328.1z"/> <path class="st0" d="M253.4,273.4c7,0,12.7-5.2,13.5-12c-4.3-1.1-8.8-1.7-13.5-1.7c-4.7,0-9.2,0.6-13.5,1.7 C240.7,268.2,246.5,273.4,253.4,273.4z"/> <path class="st0" d="M253.4,277.1c-2.4,0-4.3,1.9-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.9,4.3-4.3 C257.7,279,255.8,277.1,253.4,277.1z"/> <path class="st0" d="M277.1,330.5c-4.9,4.9-5.3,12.6-1.1,18c7.9-4.6,14.5-11.2,19.1-19.1C289.8,325.2,282,325.6,277.1,330.5z"/> <path class="st0" d="M268.5,321.8c-1.7,1.7-1.7,4.4,0,6c1.7,1.7,4.4,1.7,6,0c1.7-1.7,1.7-4.4,0-6 C272.9,320.2,270.2,320.2,268.5,321.8z"/> <path class="st0" d="M229.8,283.2c4.9-4.9,5.3-12.6,1.1-18c-7.9,4.6-14.5,11.2-19.1,19.1C217.2,288.4,224.9,288.1,229.8,283.2z"/> <path class="st0" d="M232.4,285.7c-1.7,1.7-1.7,4.4,0,6c1.7,1.7,4.4,1.7,6,0c1.7-1.7,1.7-4.4,0-6 C236.8,284.1,234.1,284.1,232.4,285.7z"/> <path class="st0" d="M277.1,283.1c4.9,4.9,12.6,5.3,18,1.1c-4.6-7.9-11.2-14.5-19.1-19.1C271.8,270.5,272.2,278.2,277.1,283.1z"/> <path class="st0" d="M274.5,291.7c1.7-1.7,1.7-4.4,0-6c-1.7-1.7-4.4-1.7-6,0c-1.7,1.7-1.7,4.4,0,6 C270.1,293.4,272.8,293.4,274.5,291.7z"/> <path class="st0" d="M229.8,330.4c-4.9-4.9-12.6-5.3-18-1.1c4.6,7.9,11.2,14.5,19.1,19.1C235.1,343.1,234.7,335.3,229.8,330.4z"/> <path class="st0" d="M232.4,321.8c-1.7,1.7-1.7,4.4,0,6c1.7,1.7,4.4,1.7,6,0c1.7-1.7,1.7-4.4,0-6 C236.8,320.1,234,320.1,232.4,321.8z"/> </g> <g/></svg></span></span></span>`
    );
    const selfServiceButton = createLinkButton(
        "https://colss-prod.ec.svsu.edu/Student",
        "Self Service",
        "SS"
    );

    container.prepend(canvasButton);
    container.prepend(selfServiceButton);
}, 250);
