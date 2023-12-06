class Blog {
  constructor(title,detail){
    this.title=title;
    this.detail=detail;
  }
  // Progression 1: Add 2 methods - addTitle(), and addDescription()

  addTitle(){
    let title_card = document.createElement("h1");
    title_card.setAttribute("id","blog-title");
    let cardText = document.getElementById("card-text");
    cardText.appendChild(title_card);
    title_card.innerText+=this.title;
  }

  addDescription(){
    let decription_card = document.createElement("p");
    decription_card.setAttribute("id","blog-description");
    let cardText = document.getElementById("card-text");
    cardText.appendChild(decription_card);
    decription_card.innerText+=this.detail;
  }

}



// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
let toggle=false;
function helperAddPost(){
  let popupEle = document.getElementById("popupContact");
  if(toggle==false){
    popupEle.style.display="block";
  }else{
  popupEle.style.display="none";
  }
  toggle=!toggle
}
// 2. `helperPost()`

function helperPost(){

  let title = document.getElementById("title").value;
  let detail = document.getElementById("detail").value;

  let blog = new Blog(title,detail);

  blog.addTitle();
  blog.addDescription();

}
