import addGlobalEventListner from "./utils/addGlobalEventListner.js";

export default function setup() {
    addGlobalEventListner('mousedown', '[data-draggable]', e => {
        console.log('mouse down')
        const moveMouseFunc = () => {
            console.log('moving mouse')
        }
        document.addEventListener('mousemove', moveMouseFunc)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveMouseFunc)
        })
    })
}