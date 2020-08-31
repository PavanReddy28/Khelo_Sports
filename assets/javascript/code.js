function checkFirstName()
{
	var fname = document.getElementById("fname").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,20}$/
	if(re1.test(fname))
	{
		document.getElementById("fnameprompt").style.color = "Green";
		document.getElementById("fnameprompt").innerHTML = "Valid";
	}
	else
	{
		document.getElementById("fnameprompt").style.color = "Red";
		document.getElementById("fnameprompt").innerHTML = "Enter 2-20 Characters";
	}
}
function checkLastName()
{
	var lname = document.getElementById("lname").value;
	var re1 = /^[a-zA-Z\s\'\-]{1,15}$/;
	if(re1.test(lname))
	{
		document.getElementById("lnameprompt").style.color = "Green";
		document.getElementById("lnameprompt").innerHTML = "Valid";
	}
	else
	{
		document.getElementById("lnameprompt").style.color = "Red";
		document.getElementById("lnameprompt").innerHTML = "Enter 2-15 Characters";
	}
}
function checkPNo()
{
	var pno = document.getElementById("pno").value;
	var re2 = /^\d{3}-\d{3}-\d{4}$/;
	if(re2.test(pno))
	{
		document.getElementById("pno1").style.color = "Green";
		document.getElementById("pno1").innerHTML = "Valid";
	}
	else
	{
		document.getElementById("pno1").style.color = "Red";
		document.getElementById("pno1").innerHTML = "Enter in the format : xxx-xxx-xxxx";
	}
}
function checkMessage()
{
	var address = document.getElementById("address").value;
	var re3 = /^[a-zA-Z\s\d\-\']{2,50}$/;
	if(!re3.test(address))
	{
		document.getElementById("promptAddress").style.color = "Red";
		document.getElementById("promptAddress").innerHTML = "Enter text and numbers only";
	}	
}
function checkMessage()
{
	var message = document.getElementById("message").value;
	var re3 = /^[a-zA-Z\s\d]{2,50}$/;
	if(!re3.test(message))
	{
		document.getElementById("promptMessage").style.color = "Red";
		document.getElementById("promptMessage").innerHTML = "Enter text and numbers only";
	}	
}
function displayReply()
{
	var fname1 = document.getElementById("fname").value;
	var lname1 = document.getElementById("lname").value;
	var userName = fname1 + " " + lname1;
	var pno1 = document.getElementById("pno").value;
	document.getElementById("reply").innerHTML = "<h2>" + userName.toUpperCase() + "</h2>";
	document.getElementById("reply").innerHTML += "<h3>Phone No.: " + pno1 + "</h3>";
	document.getElementById("reply").innerHTML += "<p>\nThank You for your response! We will get back to you as soon as we can!</p>";
}
