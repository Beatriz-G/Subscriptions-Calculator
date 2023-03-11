// Your JS code here
//elements
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subtype = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function(e) {
    subType = e.target.value;
    //console.log(subtype);
});

subDurationElement.addEventListener("change", function(e) {
    subDurationElement = Number(e.target.value);
    console.log(subDuration);
});