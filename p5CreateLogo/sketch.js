var fontsize = 24;
var fontColor = 155;
var logoText = 'S D C M S';



function setup() {
    createCanvas(200, 50);
    loadImage("img/DHS_4R_Logo_trans_32x32.png", function (img) {
        image(img, 9, 9, 32, 32);
    });
    loadFont('fonts/FRABK.TTF', function (font) {
        fill(fontColor);
        stroke(fontColor);

        smooth();
        textFont(font, fontsize);
        text(logoText, 50, 32);
    });    
}   