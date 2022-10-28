import React, { useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko"; // 요일을 한국어로 표시하기 위함

export default function MomentExample() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  const [day, setDay] = useState("");
  //   const birthDayRef = useRef(null);

  const handleBirthDayChange = (event) => {
    const birthDay = event.target.value;
    setDay(moment(birthDay).format("dddd"));
  };

  return (
    <div>
      <h1>Moment</h1>
      <div>
        <h3>Immutable Check</h3>
        <div>
          <p>
            clone하지 않고 사용하면 원본 date인 momentDate가 변경됨 <br />
            moment 객체는 mutable이다.
          </p>
          {`원본 날짜: ${momentDate.format()}`}
          <br />
          {`일주일 뒤: ${newMomentDate.format()}`}
          <br />
          {`원본 clone 후, 일주일 미루기: ${cloneNewMomentDate.format()}`}
        </div>
      </div>
      <div>
        <h3>Summer Time (New-york)</h3>
        <div>
          2018년 3월 10일 13시에 하루 더하기:{" "}
          {moment
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:{" "}
          {moment
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(24, "hours")
            .format()}
        </div>
      </div>
      <div>
        <h3>Leap Year (Korea)</h3>
        <div>
          2017년 1월 1일에서 1년 빼기:{" "}
          {moment("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017년 1월 1일에서 365일 빼기:{" "}
          {moment("2017-01-01").subtract(365, "day").format()}
        </div>
      </div>
      <div>
        <h3>한국어로 표기 (10-28-2022를 2022년 10월 28일로 표기)</h3>
        <div>{moment("10-28-2022").format("YYYY년M월D일")}</div>
      </div>
      <div>
        <h3>내 생일은 무슨 요일?</h3>
        <input type="date" onChange={handleBirthDayChange} />
        <div>{day}</div>
      </div>
      <div>
        <h3>두 날짜 비교</h3>
        <div>2022-10-28 10:00와 2022-10-31 11:00와 몇 시간 차이일까?</div>
        <div>
          {`${moment("2022-10-28 10:00:00").diff(
            moment("2022-10-31 11:00:00"),
            "hours"
          )}시간`}
        </div>
      </div>
    </div>
  );
}
