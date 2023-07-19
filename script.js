let sidebar = document.querySelector(".sidebar");
let navText = document.querySelectorAll(".nav-text");
let navIcon = document.querySelectorAll(".sidebar .icon")

sidebar.addEventListener("mouseenter", () => {
	console.log("Hello");
	setTimeout(() => {
		navText.forEach(item => {
			item.hidden = false;
		});
		navIcon.forEach(icon => {
			icon.style.marginRight = "10px"
		})
		
	}, 200);
})

sidebar.addEventListener("mouseleave", ()  => {
	console.log("Goodbye");
	navText.forEach(item => {
		item.hidden = true;
	});
})