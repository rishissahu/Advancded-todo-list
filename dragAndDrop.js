import addGlobalEventListner from "./utils/addGlobalEventListner.js";


export default function setup() {
    addGlobalEventListner('mousedown', '[data-draggable]', _e => {
        console.log('mosue down')
    })
}