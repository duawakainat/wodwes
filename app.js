
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    dots:false, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) 


  const items = document.querySelectorAll(".accordion button");
  
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
     class Counter {
        constructor(startDelay, endDelay) {
            this.startDelay = startDelay || 60;
            this.endDelay = endDelay || this.startDelay;
        }




        runCounter(objID, start, finish) {
            if (isNaN(start) || isNaN(finish)) {
                console.error("One of the count parameters was not a number. Please check the method call.");
                return;
            }
            if (finish - start === 0) {
                console.error("Finish count is the same as start count. Please use different numbers.");
                return;
            }
            const obj = document.getElementById(objID);
            let num = start;
            let delay = this.startDelay;
            let delayOffset = Math.floor((this.endDelay - this.startDelay) / (finish - start));
            let timerStep = function() {
                if (num <= finish) {
                    obj.innerHTML = num;
                    delay += delayOffset;
                    num += 1;
                    setTimeout(timerStep, delay);
                }
            }
            timerStep();
        }
    }

    let MyCounter1 = new Counter(5,250);
    MyCounter1.runCounter("myObj1", 0, 60);

    let MyCounter2 = new Counter(50,250);
    MyCounter2.runCounter("myObj2", 0, 90);

    let MyCounter3 = new Counter(1000);
    MyCounter3.runCounter("myObj3", 0, 6);
    let MyCounter4 = new Counter(5,250);
    MyCounter1.runCounter("myObj4", 0, 3);

document.getElementById("rerun").addEventListener("click", function() {
    MyCounter1.runCounter("myObj1", 0, 50);
    MyCounter2.runCounter("myObj2", 0, 12);
    MyCounter3.runCounter("myObj3", 0, 6);
    MyCounter4.runCounter("myObj4", 0, 6);
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


