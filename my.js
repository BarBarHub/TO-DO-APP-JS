if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeItemButtons = document.getElementsByClassName('btn-delete')
    for (var i = 0 ; i<removeItemButtons.length ; i++){
        var button = removeItemButtons[i]
        button.addEventListener('click',removeItem)
    }
    var changeLine = document.getElementsByClassName('btn-complete')
    for (var i = 0 ; i<changeLine.length ; i++) {
    var button = changeLine[i]
    button.addEventListener('click',changeItem)
    }
    var addItem = document.getElementsByClassName('btn-add')
    for (var i = 0 ;i< addItem.length ;i++) {
        var button=addItem[i]
        button.addEventListener('click',addItems)
    }
}

function removeItem(event) {
    var buttonClicked =event.target
    buttonClicked.parentElement.remove()
}
function changeItem(event) {
    var buttonClicked =event.target
    
    buttonClicked.parentElement.getElementsByClassName('btn-complete')[0].style.width="50px";
    buttonClicked.parentElement.getElementsByClassName('btn-complete')[0].innerText="undo";
    buttonClicked.parentElement.getElementsByClassName('item-text')[0].style.textDecoration="line-through";

}
function addItems(event){
    var button =event.target
    var textItem = button.parentElement
    var textElement=textItem.getElementsByClassName('input-text')[0]
    var text=textElement.value
    
    addItemsToItem(text)
}

function addItemsToItem(text) {
    var textRow =document.createElement(`div`)
    textRow.classList.add('items')
    var itemText = document.getElementsByClassName('container2')[0]
    var textRoxContents = `  <button class="btn-complete"> complete</button>
    <button class="btn-delete"> Delete</button>
    <span class="item-text"> ${text}</span>`

    textRow.innerHTML =textRoxContents 
    itemText.append(textRow)
    textRow.getElementsByClassName('btn-delete')[0].addEventListener('click',removeItem)
    textRow.getElementsByClassName('btn-complete')[0].addEventListener('click',changeItem)
}

