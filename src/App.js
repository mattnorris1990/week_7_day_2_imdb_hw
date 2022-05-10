import './App.css';
import FilmsContainer from "./containers/FilmsContainer.js"

function App() {
  return (
    <>
      <div className="films-container">
        <FilmsContainer></FilmsContainer>
        <hr/>
        <div className="more-films-link">
          <h2><a href="https://www.imdb.com/calendar/?region=gb">{'View more upcoming releases >>'}</a></h2>
        </div>
      </div>
    </>
  );
}

export default App;
