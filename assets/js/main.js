window.addEventListener("load", e=>{
	document.querySelectorAll(".no-drag-start")
		.forEach(x=>x.addEventListener("dragstart", e=>e.preventDefault()))
	document.querySelectorAll(".no-select-start")
		.forEach(x=>x.addEventListener("selectstart", e=>e.preventDefault()))
})