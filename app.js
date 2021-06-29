const container = document.getElementById('container');
const clearBtn = document.querySelector('.clear')
const buttons = document.querySelector('.buttons')
const rainbowButton = document.querySelector(".rainbow")
let n = 16;

function makeGrid() {
    for (let i = 1; i <= n * n; i++) {
        const cells = document.createElement('div'); 
        cells.classList.add('cells')
        container.appendChild(cells)
        cellSize = 450 / n
        cells.style.cssText = `width: ${cellSize}px; height: ${cellSize}px`
    
    }
}

function clearGrid() {
    const cells = document.querySelectorAll(".cells")   
    cells.forEach(function(cell) {
        cell.style.background = `rgb(255, 255, 255)`
        
    })

}

function changeGrid() {
    const cells = document.querySelectorAll(".cells")
    n = prompt("Enter grid size. (Max 64)")
    if (n > 64) {
        alert("Max number is 64.")
    }
    else if (n > 0 && n <= 64 && Number.isInteger(Number(n))) {
        cells.forEach(function(cell) {
            cell.parentNode.removeChild(cell);
          })
          makeGrid()  
    }

    else if (!Number.isInteger(Number(n))) {
        alert("Please enter a number.")
    }
}

function grayColor() {
    const cells = document.querySelectorAll(".cells")  
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        let Rnum = Math.floor(Math.random() * 255)
        cell.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`
        
    }))
}
function rgbColor() {
    const cells = document.querySelectorAll(".cells")  
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        let R = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)
        cell.style.background = `rgb(${R}, ${G}, ${B})`
        
    }))
}

function blackColor() {
    const cells = document.querySelectorAll(".cells")  
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.background = `rgb(0, 0, 0)`
        
    }))
}

makeGrid()