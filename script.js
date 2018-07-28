function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");
	function showSkills() {
		let skills = ["html", "css", "sharepoint2013", "MSword", "MSexcel"];
		
		for (let i = 0; i < skills.length; i++) {
			skills [i] = document.write("Я владею " + skills[i] + "<br>");
	}
}	

	showSkills();

	function checkAge() {
		let age = prompt("Сколько вам лет?")
		if (age > 18) {
		alert("Добро пожаловать!")
		}
		else {
		alert("Доступ запрещен!")
		}
	}

	checkAge();

	function calcPow() {
		let number = prompt("Введи число и узнай его квадрат!");
		let numberCheck = number * number;
		alert(numberCheck);
	}
	calcPow();
}

myFirstApp("Mariya", 29)