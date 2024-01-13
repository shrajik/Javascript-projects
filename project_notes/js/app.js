const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


addBtn.addEventListener(
    "click",
        function(){
            addnote()
        }

)
const saveNotes= ()=>{
    const notes = document.querySelectorAll(".note textarea");
    data=[];
    console.log(notes);
    notes.forEach(
        (datapush)=>{
            data.push(datapush.value)
        }
    )
    console.log(data)
    localStorage.setItem("notes",JSON.stringify(data))
}

const addnote=(text="")=>{
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`
    
            <div class="tool">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )

    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }

    )
 
    main.appendChild(note)
    saveNotes()
}
(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addnote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addnote(lsNote)
                }
            )
        }

    }
)()