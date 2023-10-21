let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countStr = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countStr = ` [${count}] - `
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function resetAll() {
    saveEl.textContent = `Previous entries:  `;
    countEl.textContent = 0;
    count = 0;
    }
    
function aboutApp() {
    alert(`Tali. built in conjunction as a SCRIMBA project. 
    
    *added clear button
    *modified background with svg and layered multiple transparent containers.
    *brackets on numbers for some reason
    *other visual shenanigans
    github.com/wlangley7870`);
    
    }    
    
