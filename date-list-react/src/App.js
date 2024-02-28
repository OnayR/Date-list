import { addDays, format } from 'date-fns';
import './App.css';

let dateContainer = document.getElementById("date-list");
let selectedDate = 0;
let index = 0;
let dates = [];
for (let i = 0; i < 14; i++) {
  dates.push(DateTest(i));
}

function App() {
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
      {addEvent()}
      <Data />
    </>
  );
}

function prevDate() {
  dateContainer.style.transform = "translateX(100% - calc(100% / 6 - 1%))";
}

function nextDate() {
  dateContainer.style.transform = "translateX(100% + calc(100% / 6 - 1%))";
}

function prevNextButton() {
  let firstArrow = document.getElementById("firstArrow");
  let secondArrow = document.getElementById("secondArrow");
  firstArrow.addEventListener("click", prevDate);
  secondArrow.addEventListener("click", nextDate);
}

function DateTest(e) {
  return format(addDays(new Date(), e), 'EEE d MMM');
}

function selectDate() {
  let dataText = document.getElementById("data-text");
  index = this.id.slice(10);
  console.log(index);
  this.classList.add("selected");
  for (let i = 0; i < 14; i++) {
    if (i != index) {
      let date = document.getElementById("date-item-" + i);
      date.classList.remove("selected");
    }
  }
  dataText.innerHTML = dates[index];
}

function Data() {
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

function addEvent() {
  for (let i = 0; i < 14; i++) {
    selectedDate = document.getElementById("date-item-" + i);
    selectedDate.addEventListener("click", selectDate);
  }
}


export default App;
