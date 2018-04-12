

var question = document.querySelector("#question");
var options = document.querySelectorAll(".options")
var answer = document.querySelector("#answer");

var questionOne = question.innerHTML="Which is the incorrect phrase to greet someone with?"
var optionsOne = ["Hello","Hi","Hiya","Goodbye"]

var rightAnswer=null


var gameOver = false;


for(i=0;i<options.length;i++){
    options[i].innerHTML=optionsOne[i];
    options[i].addEventListener("click",function(){
        var clicked = this.innerHTML;

        rightAnswer=optionsOne[3];

        // Check if answer is correct
            if(gameOver==false){
                if(clicked!==rightAnswer){
            return  this.classList.add("wrong")
        }else if(clicked==rightAnswer)
        // Get colour of clicked square
            this.classList.add("correct")
            answer.innerHTML="Correct!: blah blah blah";
            gameOver=true;
        }
    gameOver=true
    
        } 
    )}
