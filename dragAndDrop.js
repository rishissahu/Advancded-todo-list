import addGlobalEventListner from "./utils/addGlobalEventListner.js";

export default function setup() {
    addGlobalEventListner('mousedown', '[data-draggable]', e => {
        const selectedItem = e.target;
        const cloneSelected = selectedItem.cloneNode(true)
        selectedItem.classList.add('hide')

        // console.log(selected)
        console.log('mouse down')
        const moveMouseFunc = () => {
            console.log('moving mouse')
        }
        document.addEventListener('mousemove', moveMouseFunc)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveMouseFunc)
            selectedItem.classList.remove('hide')
        })
    })
}