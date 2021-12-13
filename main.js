const result = [];

const generate = function() {

let i = 0;

if (result.length === 0){

while (i < 20) {

    const numbers = Math.floor(Math.random() * 100 + 1);

    if(numbers === result[i]) {

        return generate()
    }
    i++;

    if (numbers % 2){

        console.log(numbers);
        result.push(numbers);

        const li = document.createElement("li");

        li.style.listStyleType = "none";
        li.innerHTML=numbers;
        leftList.appendChild(li);

    }else{
        const li = document.createElement("li");

        li.innerHTML=numbers;
        li.style.listStyleType = "none";
        rightList.appendChild(li);
        result.push(numbers); 
    }
}

}
}

const btn = document.createElement("button");
btn.innerText ="Generate";
document.body.appendChild(btn);
btn.addEventListener("click", generate);
btn.style.backgroundColor = "#4BA2EA";

const div = document.createElement("div");
div.style.display = "flex";
document.body.appendChild(div);

const leftList = document.createElement("ul");
div.appendChild(leftList);

const rightList = document.createElement("ul");
div.appendChild(rightList);




