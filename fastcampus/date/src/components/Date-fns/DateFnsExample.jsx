import React, { useState } from "react";
import { add, format, sub, differenceInHours } from "date-fns";
import { ko } from "date-fns/locale";
import { format as timezoneFormat, toDate } from "date-fns-tz";

export default function DateFnsExample() {
  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const cloneNewDateFnsDate = add(newDateFnsDate, { weeks: 1 });

  const [day, setDay] = useState("");

  const handleBirthDayChange = (event) => {
    const birthDay = event.target.value;
    setDay(format(new Date(birthDay), "EEEE", { locale: ko }));
  };

  return (
    <div>
      <h1>Moment</h1>
      <div>
        <h3>Immutable Check</h3>
        <div>
          <p>
            date-fns는 new Date()로 날짜를 생성하기 때문에
            <br />
            문자열이 아닌 객체이다. 따라서 toString()이나 format()을 이용해서
            표현해주어야한다.
          </p>
          {`원본 날짜: ${format(dateFnsDate, "yyyy-MM-dd")}`}
          <br />
          {`일주일 뒤: ${newDateFnsDate}`}
          <br />
          {`복제 후, 일주일 더 미루기: ${cloneNewDateFnsDate}`}
        </div>
      </div>
      <div>
        <h3>Summer Time (New-york)</h3>
        <div>
          2018년 3월 10일 13시에 하루 더하기:{" "}
          {timezoneFormat(
            add(
              toDate(new Date("2018-03-10 13:00:00"), {
                timeZone: "merica/New_York",
              }),
              { days: 1 }
            ),
            "yyyy-MM-dd HH:mm:ssXXX",
            { timeZone: "America/New_York" }
          )}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:{" "}
          {timezoneFormat(
            add(
              toDate(new Date("2018-03-10 13:00:00"), {
                timeZone: "merica/New_York",
              }),
              { hours: 24 }
            ),
            "yyyy-MM-dd HH:mm:ssXXX",
            { timeZone: "America/New_York" }
          )}
        </div>
      </div>
      <div>
        <h3>Leap Year (Korea)</h3>
        <div>
          2017년 1월 1일에서 1년 빼기:{" "}
          {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
        </div>
        <div>
          2017년 1월 1일에서 365일 빼기:{" "}
          {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        </div>
      </div>
      <div>
        <h3>한국어로 표기 (10-28-2022를 2022년 10월 28일로 표기)</h3>
        <div>{format(new Date("10-28-2022"), "yyyy년M월d일")}</div>
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
          {`${differenceInHours(
            new Date("2022-10-28 10:00:00"),
            new Date("2022-10-31 11:00:00")
          )}시간`}
        </div>
      </div>
    </div>
  );
}
