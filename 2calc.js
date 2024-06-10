// Nodelist:-A NodeList is a collection of nodes, usually returned by methods like document.querySelectorAll.NodeLists are often “live,” meaning that if the DOM changes, the NodeList will automatically update to reflect those changes.
// NodeLists have a limited set of methods available. For example, you can use .forEach() on a NodeList, but other array methods like .map(), .filter(), or .reduce() are not available unless you convert it to an array.


let display = document.querySelector(".display");
let buttons= Array.from(document.querySelectorAll(".btn"));


// console.log(buttons);
// target :-
// This is particularly useful for event delegation, where a single event listener can handle events for multiple elements.

 buttons.map((bt) => {
  bt.addEventListener("click", (e) => {
    //LIST ME SE KISI ELEMENT KO TARGET KARNA HAI 
    const p = e.target.innerText;
    Calculate(p);
  });
});

document.addEventListener("keydown", (e) => {
   const keyButtons=['0','1','2','3','4','5','6','7','8','9','.','*','/','+','-','%','=','Backspace','Enter','Delete','e','E']
  const p = e.key;
  if(keyButtons.includes(p))
     Calculate(p);
  })


function Calculate(p)
{
  if (p == "AC" || p=="Delete") {
      display.innerText = "";
    }
    else if (p == "DEL" || p=="Backspace" ) {
      display.innerText = display.innerText.slice(0, -1);
    }
    else if (p == "EXP" || p=="e" || p=="E") {
      display.innerText += "e";
    }
    else if (p == "=" || p=="Enter") {
      try {
        display.innerText = eval(display.innerText);
      }
      catch {
        display.innerText = "ERROR";
      }
  }
  else if (p != "Shift")
    {
      display.innerText += p;
    }
};