let textField = document.getElementById("textField");
let save = document.getElementById("add");
let ul = document.getElementById("ul");
let list = document.getElementById("list");


function addText() {
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.innerHTML = '<i class="bi bi-check2-square"></i>';
    let textValue = textField.value;
    let text = document.createTextNode(textValue);
    let textLength = text.length;

    const breakString = (str, limit) => {
        let br = '';
        p.appendChild(text);
        p.appendChild(btn);
        list.appendChild(p);

        for (let i = 0, count = 0; i < textLength; i++) {
            if (count >= limit && str[i] === ' ') {
                count = 0;
                br += '\n';
                console.log("if");
            } else {
                count++;
                br += str[i];
                console.log("else");
            }
        }
        return br;
    }

    console.log(breakString(textValue, 4));
    console.log(p + " node");

    /*if(textLength > 10){
       console.log("São " + textLength + " elementos.");
       console.log("Input é: " + textValue);
   }*/

    textField.value = "";

    btn.addEventListener("click", function () {
        p.remove();
    })
};

save.addEventListener("click", addText);

textField.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        console.log('teste');
        addText();
    }
});

