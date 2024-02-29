//your code here!

let list = document.getElementById("infi-list");

let itemNumber = 1;
let addItems = function(){
	for(let i = 0; i < 50; i++){
		let item = document.createElement("li");
		item.innerText = "item" + itemNumber++;
		list.append(item);
	}
}

list.addEventListener('scroll',function() {
	if(list.scrollTop + list.scrollHeight >= list.scrollHeight){
		// addItems();
	}
});

addItems();