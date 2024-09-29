let randomNumber = Math.floor(Math.random() * 51);
console.log(randomNumber)
// let randomNumber = 4;
let userValue = document.getElementById("userIn");

let gst = document.getElementsByClassName("gme-status")[0];

let rcount = document.getElementsByClassName("remaining-count")[0];


let guessSubmitBtn =document
.getElementsByClassName("guess-submit")[0];
let tattemp =0;
let count = 10;
  guessSubmitBtn.addEventListener("click", () => {
    if (count > 0) {
      if(document.getElementById("userIn").value < 0){
        gst.innerText = "Guess number is always Greator than or equal to 0";
      }
      else if (randomNumber == document.getElementById("userIn").value) {
        tattemp++;
        count--;
        rcount.innerText = count;
        gst.innerText = "You Win in ! "+ tattemp + " Attempts";
        tattemp++;
        gst.hidden = false;
        gst.style.color = "#11ff11"
        guessSubmitBtn.disabled = true; 
        guessSubmitBtn.style = "cursor: not-allowed";
      } else {
        count--;
        rcount.innerText = count;
        gst.hidden = false
        if (document.getElementById("userIn").value <= randomNumber) {
          gst.innerText = "Try Again";
        } else {
          console.log("Too long");
          gst.innerText = "Too Long";
        }
        userValue.value = "";
        tattemp++
      }
    }
    else{
      gst.innerText = "You have 0 chances ";
      confirm("Do you want to continue?");
    } 
  });

  let hintToggle = document.getElementsByClassName("hint-button")[0];
  let hintCount= 1;
  let hintText = document.getElementsByClassName("hintcount")[0];

  let lessrandom = randomNumber-6;
  if (lessrandom<=0) {
    lessrandom = randomNumber;
  }
  hintToggle.addEventListener("click",()=>{
    hintCount--;
    if(hintCount>=0){
      hintText.innerText = hintCount;
      gst.innerText = `The Number is lies between ${lessrandom} and ${randomNumber+6}`;
    }
    else{
      gst.innerText = `You HAve ${0} Hints left `;

    }
    gst.hidden = false
  })