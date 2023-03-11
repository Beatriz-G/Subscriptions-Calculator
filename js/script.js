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

//calculate the cost
var updateSubscriptionDiv = function() {
    var monthlyCost = 5;
    if (subtype === "standard") {
        monthlyCost = 7;
    } else if (subtype === "premium") {
        monthlyCost = 10;
    }

    var total = subduration * monthlyCost;
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};