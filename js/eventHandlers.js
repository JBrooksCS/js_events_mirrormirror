


let fieldEl = document.getElementById("keypress-input")
let copycat1 = document.getElementById("copycat1")
let copycat2 = document.getElementById("copycat2")



fieldEl.addEventListener("keyup", function (event) {
    let txt = event.target.value;
    //console.log(event.target.value)
    //console.log(event)
    console.log(txt);
    copycat1.value = event.target.value;
    copycat2.value = event.target.value;
})


/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.

let guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}
 */



/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 
document.querySelector("body").addEventListener("click", function(event) {
    console.log("You clicked on the body of the DOM")
})
*/