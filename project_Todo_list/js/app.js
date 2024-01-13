const items = document.querySelector('#item')
const todobox = document.querySelector('#to-do-box')

items.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
        addtodo(this.value);
            this.value="";
        }
    }
)
const addtodo=(items)=>{
    const listItems = document.createElement('li');
    listItems.innerHTML=`
        ${items}
        <i class="fas fa-times"></i>
    `;
    listItems.addEventListener(
        "click",function(){
            this.classList.toggle('done')
        }
    )
    listItems.querySelector("i").addEventListener(
        "click",
        function(){
            listItems.remove();
        }
    )
    todobox.appendChild(listItems)
}
