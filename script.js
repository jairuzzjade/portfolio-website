const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
let x = e.pageX;
let y = e.pageY;

cursor.style.top = y + "px";
cursor.style.left = x + "px";
});

function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter effect 1
const texts1 = [
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER"
];

const speed1 = 100;
const textElement1 = document.querySelector(".typewriter-text");

let textIndex1 = 0;
let characterIndex1 = 0;

function typeWriter1() {
    if (characterIndex1 < texts1[textIndex1].length) {
        textElement1.innerHTML += texts1[textIndex1].charAt(characterIndex1);
        characterIndex1++;
        setTimeout(typeWriter1, speed1); // Continue typing
    } else {
        setTimeout(eraseText1, 1000); // Start erasing after delay
    }
}

function eraseText1() {
    if (textElement1.innerHTML.length > 0) {
        textElement1.innerHTML = textElement1.innerHTML.slice(0, -1);
        setTimeout(eraseText1, 50); // Continue erasing
    } else {
        textIndex1 = (textIndex1 + 1) % texts1.length; // Move to the next word
        characterIndex1 = 0;
        setTimeout(typeWriter1, 500); // Start typing the next word
    }
}

// Start typewriter effect 1
typeWriter1();

// Typewriter effect 2
const texts2 = [
    "UI/UX DESIGNER",
    "FRONT-END DEVELOPER"
];

const speed2 = 100; // Speed for typing effect
const eraseSpeed2 = 50; // Speed for erasing effect
const delayBeforeErase2 = 1000; // Delay before starting erasing
const textElement2 = document.querySelector(".typewriter-text2");

let textIndex2 = 0;
let characterIndex2 = 0;

function typeWriter2() {
    if (characterIndex2 < texts2[textIndex2].length) {
        textElement2.innerHTML += texts2[textIndex2].charAt(characterIndex2);
        characterIndex2++;
        setTimeout(typeWriter2, speed2); // Continue typing
    } else {
        setTimeout(eraseText2, delayBeforeErase2); // Start erasing after delay
    }
}

function eraseText2() {
    if (characterIndex2 > 0) {
        textElement2.innerHTML = texts2[textIndex2].substring(0, characterIndex2 - 1);
        characterIndex2--;
        setTimeout(eraseText2, eraseSpeed2); // Continue erasing
    } else {
        textIndex2 = (textIndex2 + 1) % texts2.length; // Move to the next word
        setTimeout(typeWriter2, 500); // Start typing the next word
    }
}

// Start typewriter effect 2
typeWriter2();

// Typewriter effect 3
const texts3 = [
    "UI/UX DESIGNER",
    "FRONT-END DEVELOPER"
];

const speed3 = 100; // Speed for typing effect
const eraseSpeed3 = 50; // Speed for erasing effect
const delayBeforeErase3 = 1000; // Delay before starting erasing
const textElement3 = document.querySelector(".typewriter-text3");

let textIndex3 = 0;
let characterIndex3 = 0;

function typeWriter3() {
    if (characterIndex3 < texts3[textIndex3].length) {
        textElement3.innerHTML += texts3[textIndex3].charAt(characterIndex3);
        characterIndex3++;
        setTimeout(typeWriter3, speed3); // Continue typing
    } else {
        setTimeout(eraseText3, delayBeforeErase3); // Start erasing after delay
    }
}

function eraseText3() {
    if (characterIndex3 > 0) {
        textElement3.innerHTML = texts3[textIndex3].substring(0, characterIndex3 - 1);
        characterIndex3--;
        setTimeout(eraseText3, eraseSpeed3); // Continue erasing
    } else {
        textIndex3 = (textIndex3 + 1) % texts3.length; // Move to the next word
        setTimeout(typeWriter3, 500); // Start typing the next word
    }
}

// Start typewriter effect 3
typeWriter3();

// Typewriter effect 4
const texts4 = [
    "UI/UX DESIGNER",
];

const speed4 = 100; // Speed for typing effect
const eraseSpeed4 = 50; // Speed for erasing effect
const delayBeforeErase4 = 1000; // Delay before starting erasing
const textElement4 = document.querySelector(".typewriter-text4");

let textIndex4 = 0;
let characterIndex4 = 0;

function typeWriter4() {
    if (characterIndex4 < texts4[textIndex4].length) {
        textElement4.innerHTML += texts4[textIndex4].charAt(characterIndex4);
        characterIndex4++;
        setTimeout(typeWriter4, speed4); // Continue typing
    } else {
        setTimeout(eraseText4, delayBeforeErase4); // Start erasing after delay
    }
}

function eraseText4() {
    if (characterIndex4 > 0) {
        textElement4.innerHTML = texts4[textIndex4].substring(0, characterIndex4 - 1);
        characterIndex4--;
        setTimeout(eraseText4, eraseSpeed4); // Continue erasing
    } else {
        textIndex4 = (textIndex4 + 1) % texts4.length; // Move to the next word
        setTimeout(typeWriter4, 500); // Start typing the next word
    }
}

// Start typewriter effect 4
typeWriter4();

// Typewriter effect 5
const texts5 = [
    "UI/UX DESIGNER",
    "FRONT-END DEVELOPER"
];

const speed5 = 100; // Speed for typing effect
const eraseSpeed5 = 50; // Speed for erasing effect
const delayBeforeErase5 = 1000; // Delay before starting erasing
const textElement5 = document.querySelector(".typewriter-text5");

let textIndex5 = 0;
let characterIndex5 = 0;

function typeWriter5() {
    if (characterIndex5 < texts5[textIndex5].length) {
        textElement5.innerHTML += texts5[textIndex5].charAt(characterIndex5);
        characterIndex5++;
        setTimeout(typeWriter5, speed5); // Continue typing
    } else {
        setTimeout(eraseText5, delayBeforeErase5); // Start erasing after delay
    }
}

function eraseText5() {
    if (characterIndex5 > 0) {
        textElement5.innerHTML = texts5[textIndex5].substring(0, characterIndex5 - 1);
        characterIndex5--;
        setTimeout(eraseText5, eraseSpeed5); // Continue erasing
    } else {
        textIndex5 = (textIndex5 + 1) % texts5.length; // Move to the next word
        setTimeout(typeWriter5, 500); // Start typing the next word
    }
}

// Start typewriter effect 5
typeWriter5();


document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = carouselItems[0].clientWidth;
    let currentIndex = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        // Add zoom effect to the current item
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('zoomed');
            } else {
                item.classList.remove('zoomed');
            }
        });
    }

    function goToPrevious() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems.length - 1; // Go to last item if at the first
        }
        updateCarousel();
    }

    function goToNext() {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Go to first item if at the last
        }
        updateCarousel();
    }

    leftArrow.addEventListener('click', goToPrevious);
    rightArrow.addEventListener('click', goToNext);

    // Initialize the carousel to show the first item with zoom effect
    updateCarousel();

    // Optional: Update carousel position on window resize
    window.addEventListener('resize', () => {
        // Recalculate itemWidth and update the carousel position if necessary
        const itemWidth = carouselItems[0].clientWidth;
        updateCarousel();
    });
});

//Footer

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  //submit button

  function submitForm() {
    // Get the form element
    const form = document.querySelector('.contact-form');

    // Validate form data before sending
    if (!form.checkValidity()) {
      alert('Please fill out all required fields.');
      return;
    }

    // Send the form data via FormSubmit.co
    const formData = new FormData(form);

    fetch('https://formsubmit.co/aceed1c29d7693b34254df1d18622be9', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          // Show a popup message on successful submission
          alert("Great! Your message has been successfully sent.");

          // Clear the form fields after submission
          form.reset();
        } else {
          alert("There was a problem with your submission. Please try again.");
        }
      })
      .catch(error => {
        alert("Error: " + error.message);
      });
  }

  // EmailJS
  
(function () {
    emailjs.init("U3qni_Z1JtVHVAJS9"); // Replace with your EmailJS user ID
  })();
  
  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent traditional form submission
  
    // Send the form data using EmailJS
    emailjs.sendForm('service_6f7wpto', 'template_ayq4v07', this)
      .then(function () {
        alert("Message Sent Successfully!"); // Alert the user
  
        // Clear the form inputs after successful submission
        document.getElementById("contact-form").reset();
  
        // Redirect back to your portfolio website
        window.location.href = "https://jairuzzjade.github.io/portfolio-website/";
      }, function (error) {
        alert("Failed to Send Message: " + error);
      });
  });
  

  