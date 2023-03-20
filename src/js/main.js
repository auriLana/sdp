const btns = document.getElementsByTagName('button');
let listBtns = Array.from(btns)
listBtns.forEach(btn => {
btn.setAttribute("buttonrole", "button");
});


