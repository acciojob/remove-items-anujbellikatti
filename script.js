// const dropDown = document.querySelector("#colorSelect");
// const btn = document.getElementsByTagName("input")[0];
// btn.addEventListener("click",() => {
// let option = document.getElementsByTagName("option");
// 	for(let i=0;i<option.length;i++)
// 		if(option[i].innerText === dropDown.value)
// 			return dropDown.removeChild(option[i]);
// });

// const dropDown = document.querySelector("#colorSelect");
// function removeElement(){
// 	let cv = dropDown.value;
// 	dropDown.remove(cv)	
// }
function remove(){
	let ele = document.getElementById("colorSelect");
	ele.remove(ele.selectedindex);
}