let arr = [];

document.querySelectorAll(".as-imagegrid-item-title").forEach(item => arr.push(item.firstChild.textContent));

console.log(arr);