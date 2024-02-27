import { addDays, format } from 'date-fns';
import './App.css';


function App() {
  let dates = [];
  for (let i = 0; i < 14; i++) {
    dates.push(DateTest(i));
  }
  return (
    <>
      <div class="date-list-container">
        <p class="slider-text">Slider</p>
        <div class="date-list">
          {dates.map((date, index) => (
            <div class="date-item" key={index}>
              <a>
                <p class="day-text">{date.slice(0, 3)}</p>
                <p class="date-text">{date.slice(4)}</p>
              </a>
            </div>
          ))}
        </div>
      </div >
      <Data />
    </>
  );
}

function DateTest(e) {
  return format(addDays(new Date(), e), 'EEE d MMM');
}

function Data() {
  return (
    <div class="data-container" >
      <p class="data-text">a</p>
    </div >
  );
}

export default App;
