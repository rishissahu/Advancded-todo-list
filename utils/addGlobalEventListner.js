export default function addGlobalEventListner(type, selector, callback){
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
};