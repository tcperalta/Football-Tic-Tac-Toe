username = "tcperalta";
password = "IndianTechSupport";

form = document.getElementById("login-form");
form.addEventListener("submit", (event) =>
{
	writtenUsername = document.getElementById("username-input").value;
	writtenPassword = document.getElementById("password-input").value;
	if(writtenUsername == username && writtenPassword == password)
	{
		event.preventDefault();
		window.location.href = "./Loggedin.html"
	}
	else
	{
		event.preventDefault();
		alertCredentials = document.getElementById("wrong-credentials");
		alertCredentials.style.display = "block";
		setInterval(() => {
			alertCredentials.style.display = "none";
		},5000);
	}
});