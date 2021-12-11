    // urls
const baseURL = 'http://localhost:3000';
const ramensURL = `${baseURL}/ramens`;

    // helpers
const create = el => document.createElement(el);
const select = el => document.querySelector(el);

    // grab stuff
const ramenMenu = select('#ramen-menu');
// const ramenDetails = select('#ramen-detail')
const detailImage = select('.detail-image');
const detailName = select('.name');
const detailRestaurant = select('.restaurant');
const detailRating = select('#rating-display');
const detailcomment = select('#comment-display');
const newRamenForm = select('#new-ramen');
const newRamenNameInput = select('#new-name');
const newRamenRestaurantInput = select('#new-restaurant');
const newRamenImageInput = select('#new-image');
const newRamenRatingInput = select('#new-rating');
const newRamenCommentTextArea = select('#new-comment');
const editRamenForm = select('#edit-ramen');
const editRamenId = select('#ramen-id');
const editRamenRatingInput = select('#new-rating');
const editRamenCommentTextArea = select('#new-comment');

    // forms event listener
newRamenForm.addEventListener('submit', e => handleForm(e));
editRamenForm.addEventListener('submit', e => {
    e.preventDefault();
    updateRamen(e);

    // when I update it won't reload the menu...

    // ramenMenu.innerText = ''
    // fetch(ramensURL)
    // .then(r => r.json())
    // .then(ramens => ramens.forEach(ramen => renderRamen(ramen)))

    editRamenForm.reset();
})

    // callbacks
function renderRamen(ramen) {
        // make stuff
    const ramenMenuImage = create('img');
        // assign attributes
    ramenMenuImage.src = ramen.image;
        // addEventListener
    ramenMenuImage.addEventListener('click', () => {
            // assign stuff
        detailImage.src = ramen.image;
        detailName.innerText = ramen.name;
        detailRestaurant.innerText = ramen.restaurant;
        detailRating.innerText = ramen.rating;
        detailcomment.innerText = ramen.comment;
        editRamenId.value = ramen.id;
    });
        // append
    ramenMenu.append(ramenMenuImage);
};

function handleForm(e) {
    e.preventDefault();
    let newRamen = {
        name: newRamenNameInput.value,
        restaurant: newRamenRestaurantInput.value,
        image: newRamenImageInput.value,
        rating: newRamenRatingInput.value,
        comment: newRamenCommentTextArea.value
    };
    createNewRamen(newRamen);
    renderRamen(newRamen);
    newRamenForm.reset();
};

// function handleDelete() {
    // haven't set up yet
// }

    // CRUD
    // Create
function createNewRamen(newRamen) {
    fetch(ramensURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRamen)
    })
    .then(r => r.json())
    .then(ramen => ramen)
}

    // Read
function getAllRamens() {
    fetch(ramensURL)
    .then(r => r.json())
    .then(ramens => ramens.forEach(ramen => renderRamen(ramen)));
};

    // Update
function updateRamen(e) {
    // console.log(ramen)
    fetch(`${ramensURL}/${e.target[0].value}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating: e.target[1].value,
            comment: e.target[2].value
        })
    })
    .then(r => r.json())
    .then(ramen => ramen)
};

    // Destroy
function deleteRamenRequest(ramen) {
    fetch(`${ramensURL}/${ramen.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ramen)
    })
    .then(r => r.json())
    .then(ramen => ramen)
}

    // initalize
getAllRamens();

// I'm not sure how to render first ramen on page load






































































// // write your code here
// const url = `http://localhost:3000`
// const arrUrl = `${url}/ramens`
// const objUrl = `${arrUrl}/:id`
// const ramenMenu = document.getElementById('ramen-menu')
// const ramenDetail = document.getElementById('ramen-detail')
// const makeEl = el => document.createElement(el)

// // console.log(url);
// // console.log(arrUrl);
// // console.log(objUrl);
// // all working


// function renderRamen(ramen) {
    
//     const img = makeEl('img')

//     // do we need to set attributes since they're already named?

//     // event listener submit?

//     submitForm.addEventListener("submit", () => func(ramen, formInfo)) //what???

//     // eventlistener click?
//     showInfo.addEventListener('click', anotherFunc(____)) // idk


// }


// // event listener
// // _____.addEventListener("click", function())

// // createElement inside the <div id='ramen-menu'>
// // const img = document.createElement('img')

// // createElement inside the <div id="ramen-detail">
// // do I?

// // pretty sure I need a preventDefault
// e.preventDefault()

// // gonna have to append something
// img.append(______)
// ___.append(______)

// //fetch
// function getRamen() {
//     fetch(url)
//     .then(response => response.json()) //not sure what this actually does
//     .then(arbPaOne => arbPaOne.forEach(ramen => func(ramen)))//idk.. is one pair of these paramaters suposed to be the array?
// }

// // this is terrible, but I got further than I expected to