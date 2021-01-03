showNotes();

//if user add a notes add to it localstorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addText = document.getElementById("addText");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    console.log(notesObj);
    showNotes();
})
// Function to show element from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
        <div class="notesCard my-2 mx-2 card" style="width: 18rem;">
              
                <div class="card-body">
                
                  <h5 class="card-title" style="font-family: 'Times New Roman', Times, serif;"><i class="fa fa-sticky-note-o" style="font-size:36px;color:blue"></i> Note  ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deleteNote(this.id)"
                  class="btn btn-primary" style="font-family: 'Times New Roman', Times, serif;">Delete Note</button>
                </div>
              </div>`;

    });
    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = "nothing to show use  Add a Note Section to Above TextArea"
    }
}

// function to delete a note
function deleteNote(index) {
    console.log('I am Deleting ', index)

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}

let search = document.getElementById('searchText');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
   // console.log("input is fired!", inputVal);
    let noteCards = document.getElementsByClassName('notesCard');
    Array.from(noteCards).forEach(function (element) {
        let cardText = element.getElementsByTagName('p')[0].innerText;
        //console.log(cardText)

        if (cardText.includes(inputVal)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
})