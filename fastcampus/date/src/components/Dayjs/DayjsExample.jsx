import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko"; // 요일을 한국어로 표시하기 위함

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.clone().add(1, "week");

  const [day, setDay] = useState("");

  const handleBirthDayChange = (event) => {
    const birthDay = event.target.value;
    setDay(dayjs(birthDay).format("dddd"));
  };

  return (
    <div>
      <h1>Moment</h1>
      <div>
        <h3>Immutable Check</h3>
        <div>
          <p>dayjs 객체는 immutable 하기 때문에 원본이 변경되지 않는다.</p>
          {`원본 날짜: ${dayjsDate.format()}`}
          <br />
          {`일주일 뒤: ${newDayjsDate.format()}`}
          <br />
          {`복제 후, 일주일 더 미루기: ${cloneNewDayjsDate.format()}`}
        </div>
      </div>
      <div>
        <h3>Summer Time (New-york)</h3>
        <div>
          2018년 3월 10일 13시에 하루 더하기:{" "}
          {dayjs
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:{" "}
          {dayjs
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(24, "hours")
            .format()}
        </div>
      </div>
      <div>
        <h3>Leap Year (Korea)</h3>
        <div>
          2017년 1월 1일에서 1년 빼기:{" "}
          {dayjs("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017년 1월 1일에서 365일 빼기:{" "}
          {dayjs("2017-01-01").subtract(365, "day").format()}
        </div>
      </div>
      <div>
        <h3>한국어로 표기 (10-28-2022를 2022년 10월 28일로 표기)</h3>
        <div>{dayjs("10-28-2022").format("YYYY년M월D일")}</div>
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
          {`${dayjs("2022-10-28 10:00:00").diff(
            dayjs("2022-10-31 11:00:00"),
            "hours"
          )}시간`}
        </div>
      </div>
    </div>
  );
}
