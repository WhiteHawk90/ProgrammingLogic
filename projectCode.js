document.querySelector(".grid").addEventListener("click", function(e) {
    var setTransparent = e.target.parentNode;
    setTransparent.style.opacity = "0";
}, false)

document.getElementById("grid1").style.display = "none";

document.getElementById("instructions").innerHTML = "After you insert your name and hit the submit button, 9 boxes appear. Your goal is to click each one in under 4 seconds.";

function isAlpha(data){         
    if(typeof(data) != "string"){            
        data = data.value;
    }         
    // This contains 0 to 9, a to z ,and A to Z        
    alphaRegEx = /^[a-zA-Z]+$/;         
    if( data.match(alphaRegEx) && data.length > 1){            
        return true;
    } else {            
        return false;
    }      
}

var form = document.getElementById("userInput"); function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

function startGame() {
    document.getElementById("instructions").style.display = "none";
    var name = user.userName.value;
    valid = true;
    if (isAlpha(name) == false) {
        valid = false;
        document.getElementById("notifier").innerHTML = "Not a valid name";
	} else {
        valid = true;
    }
	if (valid == true) {
		document.getElementById("grid1").style.display = "block"
			/*var grid = document.getElementById("coverGrid");
			function outOfBounds(event) {
				document.getElementById("notifier").innerHTML = "You are out of bounds!";
			}
			if (grid.addEventListener("mouseout", outOfBounds)) {
			} else {
				grid.addEventListener("mouseover", function(){
					document.getElementById("notifier").innerHTML = " "
				})
			}*/
        setTimeout(function(){
			document.getElementById("notifier").innerHTML = "Time's Up!";
			document.getElementById("grid1").style.display = "none";
        }, 4000)
    }
}