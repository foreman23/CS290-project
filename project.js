


// Class for Clock Element

class Clock {
    constructor(element) {
        this.element = element
    }

    // Function to update time
    update() {
        const parts = this.getTimeParts()
        const minutesFormatted = parts.minute.toString().padStart(2, "0")
        const timeFormatted = `${parts.hour}:${minutesFormatted}`
        if (parts.isAm) {
            var amPm = "AM"
        } else {
            var amPm = "PM"
        }

        this.element.querySelector(".clock-time").textContent = timeFormatted
        this.element.querySelector(".clock-ampm").textContent = amPm
    }

    // Get current time in PST
    getTimeParts() {
        const now = new Date()

        return {
            hour: (now.getUTCHours() + 5) % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        }
    }
}

const clockElement = document.querySelector(".clock")
const clockObject = new Clock(clockElement)

// Clock auto update
setInterval(function() {
    clockObject.update()
}, 1000)

clockObject.update()


// Carousel Picture Slider

const carouselSlide = document.querySelector(".carousel-slide")
const carouselImages = document.querySelectorAll(".carousel-slide img")

const previous = document.querySelector("#previousButton")
const next = document.querySelector("#nextButton")

// Current picture
let current = 1
const size = 800

carouselSlide.style.transform = "translateX(" + (-size * current) + "px)"

// Buttons
next.addEventListener("click", function() {
    if (current >= carouselImages.length - 1) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    current += 1
    carouselSlide.style.transform = "translateX(" + (-size * current) + "px)"
})

previous.addEventListener("click", function() {
    if (current <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    current -= 1
    carouselSlide.style.transform = "translateX(" + (-size * current) + "px)"
})

// If reached end of carousel
carouselSlide.addEventListener("transitionend", function() {
    if (carouselImages[current].id === "lastClone") {
        carouselSlide.style.transition = "none"
        current = carouselImages.length - 2
        carouselSlide.style.transform = "translateX(" + (-size * current) + "px)"
    } else if (carouselImages[current].id === "firstClone") {
        carouselSlide.style.transition = "none"
        current = carouselImages.length - current
        carouselSlide.style.transform = "translateX(" + (-size * current) + "px)"
    }
})

// Auto Scroll Carousel

let autoScroll = function() {
    if (current >= carouselImages.length - 1) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    current += 1
    carouselSlide.style.transform = "translateX(" + (-size * current) + "px)"
}

setInterval(function() {
    autoScroll()
}, 7000)
