import { useState } from "react";

import InputField from "./InputField";
import Button from "./Button";

import "./MedalForm.css";

const MedalForm = ({ medalCounties, setMedalCountries }) => {
  // 상태
  const [countyName, setCountyName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  // 국가 추가 함수
  const handleClick = (e) => {
    e.preventDefault();

    if (!countyName) {
      alert("국가명을 입력해주세요.");
      return;
    }

    let incloudesCountury = medalCounties.some(
      (country) => country.name === countyName
    );

    if (!incloudesCountury) {
      const updatedCountries = [
        ...medalCounties,
        {
          name: countyName,
          gold: Number(goldMedal),
          silver: Number(silverMedal),
          bronze: Number(bronzeMedal),
        },
      ];

      setMedalCountries(updatedCountries);
      // 새로운 국가가 추가된 후의 전체 배열을 저장
      localStorage.setItem("medalList", JSON.stringify(updatedCountries));

      setCountyName("");
      setGoldMedal(0);
      setSilverMedal(0);
      setBronzeMedal(0);
    } else {
      alert("입력한 국가가 이미 존재합니다.");
    }
  };

  // 국가 업데이트 함수
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!countyName) {
      alert("국가명을 입력해주세요.");
      return;
    }

    let incloudesCountury = medalCounties.some(
      (country) => country.name === countyName
    );

    if (incloudesCountury) {
      const updatedCountries = medalCounties.map((country) =>
        country.name === countyName
          ? {
              ...country,
              gold: Number(goldMedal),
              silver: Number(silverMedal),
              bronze: Number(bronzeMedal),
            }
          : country
      );

      setMedalCountries(updatedCountries);
      // 업데이트된 전체 배열을 저장
      localStorage.setItem("medalList", JSON.stringify(updatedCountries));

      setCountyName("");
      setGoldMedal(0);
      setSilverMedal(0);
      setBronzeMedal(0);
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  // 국가 입력
  const countryNameOnCahnge = (e) => {
    setCountyName(e.target.value);
  };

  // 금메달
  const goldMedalOnChange = (e) => {
    setGoldMedal(e.target.value);
  };

  // 은메달
  const silverMedalOnChange = (e) => {
    setSilverMedal(e.target.value);
  };

  // 동메달
  const bronzeMedalOnChange = (e) => {
    setBronzeMedal(e.target.value);
  };

  // 정렬
  const handleSortMedal = (e) => {
    if (e.target.value === "goldMedal") {
      let sortGoldMedal = medalCounties.sort((a, b) => b.gold - a.gold);
      setMedalCountries([...sortGoldMedal]);
    } else if (e.target.value === "totalMedal") {
      let totalMedal = medalCounties.sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      setMedalCountries([...totalMedal]);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleClick} className="medal-form">
      <InputField
        label="국가명"
        type="text"
        name="name"
        value={countyName}
        onChange={countryNameOnCahnge}
        placeholder="국가 입력"
      />
      <InputField
        label="금메달"
        type="number"
        name="gold"
        value={goldMedal}
        onChange={goldMedalOnChange}
      />
      <InputField
        label="은메달"
        type="number"
        name="silver"
        value={silverMedal}
        onChange={silverMedalOnChange}
      />
      <InputField
        label="동메달"
        type="number"
        name="bronze"
        value={bronzeMedal}
        onChange={bronzeMedalOnChange}
      />
      <div className="btn-group">
        <Button type="submit" name="국가 추가" />
        <Button type="button" name="업데이트" onClick={handleUpdate} />
        <select name="select" onChange={handleSortMedal}>
          <option value="default">정렬</option>
          <option value="goldMedal">금 메달 순</option>
          <option value="totalMedal">총 메달 순</option>
        </select>
      </div>
    </form>
  );
};

export default MedalForm;
