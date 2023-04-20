import addGlobalEventListner from "./utils/addGlobalEventListner.js";

export default function setup() {
    addGlobalEventListner('mousedown', '[data-draggable]', e => {
        const selectedItem = e.target;
        const cloneSelected = selectedItem.cloneNode(true)
        positionColne(cloneSelected, e)
        document.body.appendChild(cloneSelected)
        cloneSelected.classList.add('dragging')
        selectedItem.classList.add('hide')

        console.log(selectedItem.innerText)
        console.log('mouse down')
        const moveMouseFunc = e => {
            console.log('moving mouse')
            positionColne(cloneSelected, e)
            document.body.appendChild(cloneSelected)

        }
        document.addEventListener('mousemove', moveMouseFunc)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveMouseFunc)
            selectedItem.classList.remove('hide')
            cloneSelected.remove()

        })
    })
}

function positionColne(itemClone, mouseEvent) {
    itemClone.style.top = `${mouseEvent.clientY}px`
    itemClone.style.left = `${mouseEvent.clientX}px`
}