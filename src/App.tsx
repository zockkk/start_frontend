import { useState } from "react";
import "./styles/App.css"

function App() {
  let name = "Тест Тестович Тестенко"

  const [value, setValue] = useState("Поиск")


  return (
    <div className="App">
      <button className="search">
        <input 
          type="text" 
          value={value} 
          onChange={event => setValue(event.target.value)}
        />
      </button>
      <button disabled>{name}</button>
      <button onClick={() => {
        console.log("Нажата кнопка Главная");
      }}>Главная</button>
      <button>Мастер отчетов</button>
      <button>Расписание</button>
      <button>Движение</button>
      <button>Поддержка</button>
      <div>
        <h1>Основная информация</h1>
      </div>
      <div>
        <h2>Вспомогательная информация</h2>
      </div>
    </div>
  );
}

export default App;
