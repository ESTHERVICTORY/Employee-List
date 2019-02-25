// var btnDelete = document.createElement('input');
// btnDelete.type = "button";
// btnDelete.value = "Delete";
// btnDelete.onclick = deleteRow;



// $('#empty-div').append(newDiv);
// return{
//     hide:hide,
//     show:show,
//   };
const prepend = function(content){
    for(let i=0; i<nodeList.length;i++){
        nodeList[i].innerHTML = content +nodeList[i].HTML;
    }
}

const on = function(action,cb){
    for (let i=0; i<nodeList.length;i++){
       nodeList[i].addEventListener(action,cb);
    }
}

const val = function(content){
    if(content === undefined){
       return nodeList[0].value;
    }else{
        nodeList[0].value = content;
    }
}
const show =function(){
    for(let i=0; i< nodeList.length;i++){
        nodeList[i].style.display =' ';
    }
}

const hide =function(){
    for(let i=0; i<nodeList.length;i++){
        nodeList[i].style.display ='none';
    }
}

 return{
     text:text,
     html:html,
     addClass:addClass,
     removeClass: removeClass,
     toggleClass: toggleClass,
     empty:empty,
     append: append, 
     prepend: prepend,
     on:on,
     val:val,
     show:show,
     hide:hide,
    //  showVerify:showVerify
 };
