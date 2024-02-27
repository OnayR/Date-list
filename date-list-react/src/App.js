import './App.css';

function App() {
  const dates = [["date", "date"], ["date", "date"], ["date", "date"], ["date", "date"], ["date", "date"], ["date", "date"], ["date", "date"]];
  return (
    <>
      <div class="date-list-container">
        <p class="slider-text">Slider</p>
        <div class="date-list">
          {dates.map((date, index) => (
            <div class="date-item" key={index}>
              <a>
                <p class="date-text">{date}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Data />
    </>
  );
}

function Data() {
  const date = Date.now();
  return (
    <div class="data-container" >
      <p class="data-text">${date}</p>
    </div >
  );
}

export default App;
