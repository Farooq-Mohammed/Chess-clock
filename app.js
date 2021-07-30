const clock = document.querySelector(".clock");
const white = document.querySelector(".white");
const black = document.querySelector(".black");

clock.addEventListener("click", (e) => {
	if (e.target.classList.contains("white")) {
		black.classList.remove("pause");
		e.target.classList.add("pause");
		console.log("white");
	}
	if (e.target.classList.contains("black")) {
		white.classList.remove("pause");
		e.target.classList.add("pause");
		console.log("black");
	}
});
