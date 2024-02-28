import React, { useEffect } from 'react';
import { addDays, format } from 'date-fns';
import './App.css';

// Declare all Global Variables and Arrays
let translate = 0;
let index = 0;
let dates = [];
for (let i = 0; i < 14; i++) {
  dates.push(CheckDate(i));
}

// App function and main component
function App() {
  // UseEffect to run the function only once *after* the first render
  useEffect(() => {
    Deactivate();
    prevNextButton();
    addEvent();
  }, []);
  return (
    <>
      <div class="firstArrow arrow" id="firstArrow">
        <h1>&lt;</h1>
      </div>
      <div class="date-list-container">
        <p class="slider-text">Slider</p>
        <div class="date-list">
          {dates.map((date, index) => (
            <div class="date-item" id={"date-item-" + index} key={"date-item-" + index}>
              <a>
                <p class="day-text">{date.slice(0, 3)}</p>
                <p class="date-text">{date.slice(4)}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div class="secondArrow arrow" id="secondArrow">
        <h1>&gt;</h1>
      </div>
      <SelectedData />
    </>
  );
}

// Functions to handle the date slider
function prevNextButton() {
  let firstArrow = document.getElementById("firstArrow");
  let secondArrow = document.getElementById("secondArrow");
  firstArrow.addEventListener("click", prevDate);
  secondArrow.addEventListener("click", nextDate);
}
// Previous Date Function
function prevDate() {
  translate += 106;
  if (translate >= 0) {
    translate = 0;
  }
  for (let i = 0; i < dates.length; i++) {
    let dateContainer = document.getElementById("date-item-" + i);
    dateContainer.style.transform = "translateX(" + translate + "%)";
  }
}
// Next Date Function
function nextDate() {
  translate -= 106;
  if (translate <= -848) {
    translate = -848;
  }
  for (let i = 0; i < dates.length; i++) {
    let dateContainer = document.getElementById("date-item-" + i);
    dateContainer.style.transform = "translateX(" + translate + "%)";
  }
}

// Function to get the date of the day and the next 13 days
function CheckDate(e) {
  return format(addDays(new Date(), e), 'EEE d MMM');
}

// Function to handle the date selection
function selectDate() {
  let dataText = document.getElementById("data-text");
  index = this.id.slice(10);
  this.classList.add("selected");
  for (let i = 0; i < 14; i++) {
    if (i != index) {
      let date = document.getElementById("date-item-" + i);
      date.classList.remove("selected");
    }
  }
  dataText.innerHTML = dates[index];
}

// Function to display the selected date
function SelectedData() {
  return (
    <>
      <div class="data-container" >
        <p class="data-text" id="data-text">
          {dates[index]}
        </p>
      </div >

    </>
  );
}

// Function to add event listener to the dates (because onClick doesn't work in the map function)
function addEvent() {
  let selectedDate;
  for (let i = 0; i < 14; i++) {
    selectedDate = document.getElementById("date-item-" + i);
    if (selectedDate.classList.contains("deactived")) {
      selectedDate.removeEventListener("click", selectDate);
      continue;
    }
    selectedDate.addEventListener("click", selectDate);
  }
}

// Function to deactivate 4 random dates
function Deactivate() {
  for (let i = 0; i < 14; i++) {
    let date = document.getElementById("date-item-" + i);
    date.classList.remove("deactived");
  }
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 14);
    if (document.getElementById("date-item-" + random).classList.contains("deactived")) {
      i--;
      continue;
    }
    let date = document.getElementById("date-item-" + random);
    date.classList.add("deactived");
  }
}

// Export the App function
export default App;
