// JavaScript TypeWriter Effect
const text = ["am a coder", "love programming", "am Boom and Welcome to my website!"]; // ข้อความที่ต้องการให้แสดง
const codeText = ["console.log('Hello, world!'); var name = 'Pantamit'; function greet(name) { console.log('Hello, ' + name); }",]; // ข้อความโค้ด
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

let codecount = 0;
let codeindex = 0;
let codecurrentText = "";
let codeletter = "";

(function type() {
    if (count === text.length) {
        count = 0; // เริ่มต้นใหม่เมื่อถึงข้อความสุดท้าย
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    if (codecount === codeText.length) {
        codecount = 0;
    }
    codecurrentText = codeText[codecount];
    codeletter = codecurrentText.slice(0, ++codeindex);
    

    document.querySelector(".TypeWriter-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    
    document.querySelector(".CodeWriter-text").textContent = codeletter;
    if (codeletter.length === codecurrentText.length) {
        codecount++;
        codeindex = 0;
    }

    setTimeout(type, 200); // ความเร็วในการพิมพ์ข้อความ
})();



