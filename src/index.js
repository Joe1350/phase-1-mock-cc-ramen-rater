// write your code here
const url = `http://localhost:3000`
const arrUrl = `${url}/ramens`
const objUrl = `${arrUrl}/:id`
const ramenMenu = document.getElementById('ramen-menu')
const ramenDetail = document.getElementById('ramen-detail')
const makeEl = el => document.createElement(el)

// console.log(url);
// console.log(arrUrl);
// console.log(objUrl);
// all working


function renderRamen(ramen) {
    
    const img = makeEl('img')

    // do we need to set attributes since they're already named?

    // event listener submit?

    submitForm.addEventListener("submit", () => func(ramen, formInfo)) //what???

    // eventlistener click?
    showInfo.addEventListener('click', anotherFunc(____)) // idk


}


// event listener
// _____.addEventListener("click", function())

// createElement inside the <div id='ramen-menu'>
// const img = document.createElement('img')

// createElement inside the <div id="ramen-detail">
// do I?

// pretty sure I need a preventDefault
e.preventDefault()

// gonna have to append something
img.append(______)
___.append(______)

//fetch
function getRamen() {
    fetch(url)
    .then(response => response.json()) //not sure what this actually does
    .then(arbPaOne => arbPaOne.forEach(ramen => func(ramen)))//idk.. is one pair of these paramaters suposed to be the array?
}

// this is terrible, but I got further than I expected to