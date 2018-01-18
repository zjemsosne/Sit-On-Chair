document.addEventListener("DOMContentLoaded", function() {
  start();
});

function start() {
  console.log("DOM Loaded!");

  addMouseInOut();
  slider();

}

// mouse in and mouse out, zeby podpis znikal
function addMouseInOut() {
  var whiteInfo = document.getElementsByClassName("white")
  var chairbox = document.getElementsByClassName("chairbox")

  //  left box
  chairbox[0].addEventListener("mouseover", function() {
    whiteInfo[0].classList.add("hidden");
  });

  chairbox[0].addEventListener("mouseout", function() {
    whiteInfo[0].classList.remove("hidden");
  });

  //  right box
  chairbox[1].addEventListener("mouseover", function() {
    whiteInfo[1].classList.add("hidden");
  });

  chairbox[1].addEventListener("mouseout", function() {
    whiteInfo[1].classList.remove("hidden");
  });
}

// slider

function slider() {
  var next = document.getElementById("next");
  var prev = document.getElementById("prev");
  var sliderList = document.querySelectorAll(".slider li");
  var sliderCount = 0;

  // console.log(sliderList);

  sliderList[sliderCount].classList.toggle("visible");

  next.addEventListener("click", function() {

    sliderList[sliderCount].classList.toggle("visible");

    if (sliderCount >= sliderList.length-1) {
      sliderCount = 0;
    } else {
      sliderCount += 1;
    };

    sliderList[sliderCount].classList.toggle("visible");

  });

  prev.addEventListener("click", function() {

    sliderList[sliderCount].classList.toggle("visible");

    if (sliderCount <= 0) {
      sliderCount = sliderList.length-1;
    } else {
      sliderCount -= 1;
    };

    sliderList[sliderCount].classList.toggle("visible");

  });

  // calculator
  var priceChair = $('#select-main');
  var colorChair = $('#chair-color');
  var materialChair = $('#chair-material');
  var checkBoxTransport = $("#transport-price");
  var totalSum = document.getElementById("total-total");

  var total = 0;

  priceChair.change(function() {
    var summaryType = document.getElementById("right-title");
    var nameTypePrice = $(this).find(':selected').text();
    var amountType0 = $(this).find(':selected').data('price');

    summaryType.innerHTML = nameTypePrice;
    total += amountType0;
    totalSum.innerHTML = total;
  });

  colorChair.change(function() {
    var summaryType = document.getElementById("right-color");
    var amountType1 = $(this).find(':selected').data('price');

    summaryType.innerHTML = amountType1;
    total += amountType1;
    totalSum.innerHTML = total;
  });

  materialChair.change(function() {
    var summaryType = document.getElementById("right-pattern");
    var amountType2 = $(this).find(':selected').data('price');

    summaryType.innerHTML = amountType2;
    total += amountType2;
    totalSum.innerHTML = total;
  });

  checkBoxTransport.change(function() {
    var summaryType = document.getElementById("right-transport");

    if(this.checked) {
      total += 80;
      summaryType.innerHTML = "&#x2714";
      totalSum.innerHTML = total;
    } else {
      total -= 80;
      summaryType.innerHTML = "&#x2716";
      totalSum.innerHTML = total;
    }
});
}
