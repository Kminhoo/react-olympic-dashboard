import { useState, useEffect } from "react";

import Table from "./components/Table";
import MedalForm from "./components/MedalForm";

import Olympic from "./svgs/Olympic";

import "./App.css";

const App = () => {
  // 상태
  const [medalCounties, setMedalCountries] = useState(() => {
    const medalList = localStorage.getItem("medalList");
    return medalList ? JSON.parse(medalList) : [];
  });

  // 삭제
  const deleteCountry = (name) => {
    let newCountries = medalCounties.filter((country) => country.name !== name);
    setMedalCountries(newCountries);
  };

  // medalCounties가 변경될 때마다 로컬 스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("medalList", JSON.stringify(medalCounties));
  }, [medalCounties]);

  return (
    <div className="container">
      <h1 className="title">
        <Olympic className="title-icon" />
        2024 파리 올림픽
      </h1>

      <MedalForm
        medalCounties={medalCounties}
        setMedalCountries={setMedalCountries}
      />

      <div className="table-container">
        {medalCounties.length > 0 ? (
          <Table medalCounties={medalCounties} onClick={deleteCountry} />
        ) : (
          <p className="no-country">
            아직 추가된 국가가 없습니다. 메달을 추척하세요!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
