practice1();

function practice1() {
    let counter = document.querySelector(".counter");
    let increment = document.querySelector(".increment");
    increment.addEventListener("click", function () {
        counter.textContent = +counter.textContent + 1;
    });
}

practice2();

function practice2() {
    let colors = [
        "red", "green", "blue"
    ];
    let index = 0;
    let changeColor = document.querySelector(".changeColor");
    changeColor.addEventListener("click", function () {
        document.body.style.backgroundColor = colors[index];
        index = index + 1;
        if (index >= colors.length) {
            index = 0;
        }
    });
}

practice3();

function practice3() {
    let text = document.querySelector(".text");
    let p = document.querySelector(".p");

    text.addEventListener("input", function () {
        p.textContent = text.value;
    });
}

practice4();

function practice4() {
    let checkbox = document.querySelector(".practice4 input");
    let p = document.querySelector(".practice4 p");
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
}

practice5();

function practice5() {
    let text = document.querySelector(".practice5 textarea");
    let span = document.querySelector(".practice5 span");
    text.addEventListener("input", function (event) {
        span.textContent = event.currentTarget.value.length;
    });
}

practice6();

function practice6() {
    let block = document.querySelector(".block");
    let blockWidth = document.querySelector("[name='width']");
    let blockHeight = document.querySelector("[name='height']");

    blockWidth.addEventListener("change", function () {
        block.style.width = blockWidth.value + "px";
    });

    blockHeight.addEventListener("change", function () {
        block.style.height = blockHeight.value + "px";
    });
}

practice7();

function practice7() {
    let number1 = document.querySelector("[name='number1']");
    let number2 = document.querySelector("[name='number2']");
    let result = document.querySelector("[name='result']");
    let button1 = document.querySelector(".plus");
    let button2 = document.querySelector(".minus");
    let button3 = document.querySelector(".multy");
    let button4 = document.querySelector(".dev");

    button1.addEventListener("click", function () {
        result.value = +number1.value + +number2.value;
    });

    button2.addEventListener("click", function () {
        result.value = +number1.value - +number2.value;
    });

    button3.addEventListener("click", function () {
        result.value = +number1.value * +number2.value;
    });

    button4.addEventListener("click", function () {
        result.value = +number1.value / +number2.value;
    });
}

practice8();

function practice8() {
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let images = document.querySelectorAll(".slider img");
    let index = 0;

    prev.addEventListener("click", function () {
        images[index].style.display = "none";
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        images[index].style.display = "block";
    });

    next.addEventListener("click", function () {
        images[index].style.display = "none";
        index++;
        if (index >= images.length) {
            index = 0;
        }
        images[index].style.display = "block";
    });
}