const list = document.createElement('ul');
let arr = [['1', '2', '3'], '4', ['5', '6', '7']];

for (let i = 0; i < arr.length; i++){
    const el = document.createElement('li');
    if (Array.isArray(arr[i])){
        const secondList = document.createElement('ul');
        for (let k = 0; k < arr[i].length; k++){
            const secondEl = document.createElement('li');
            secondEl.textContent = arr[i][k];
            secondList.appendChild(secondEl);
        }
        el.appendChild(secondList);
    }
    else{
        el.textContent = arr[i];
    }



    list.appendChild(el);
}

console.log(list);