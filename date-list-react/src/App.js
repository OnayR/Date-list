import { addDays, format } from 'date-fns';
import './App.css';

let index = 0;
let dates = [];
for (let i = 0; i < 14; i++) {
  dates.push(DateTest(i));
}

function App() {
  return (
    <>
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
      </div >
      {addEvent()}
      <Data />
    </>
  );
}

function DateTest(e) {
  return format(addDays(new Date(), e), 'EEE d MMM');
}

function selectDate() {
  this.index = this.id.slice(10);
  console.log(this.index);
  Data();
}

function Data() {
  return (
    <div class="data-container" >
      <p class="data-text">
        {dates[index]}
      </p>
    </div >
  );
}

function addEvent() {
  for (let i = 0; i < 14; i++) {
    let date = document.getElementById("date-item-" + i);
    date.addEventListener("click", selectDate);
  }
}


export default App;
