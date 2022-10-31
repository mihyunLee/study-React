// create-react-app 환경에서 css prop으로 스타일링을 하려면
// 아래의 jsx pragma가 필요하다.
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const color = "white";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

// P 컴포넌트 스타일링
const P = (props) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);

// Style Precedence, 스타일 우선순위
// 기존 P의 스타일링에 중복되는 부분은 덮어씌워진다.
const ArticleText = (props) => (
  <P
    css={{
      fontSize: 18,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

// 재사용 가능한 미디어 쿼리
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default function EmotionExmaple() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color with css prop
      </div>
      <br />
      <Button>Hover to change color with style API</Button>
      <P>PPP</P>
      <ArticleText>Article</ArticleText>
      <div
        css={{
          color: "darkorchid",
          "@media(min-width: 420px)": {
            color: "orange",
          },
        }}
      >
        This is orange on a big screen and darkorchid on a small screen.
      </div>
      <div
        css={{
          color: "green",
          [mq[0]]: {
            color: "gray",
          },
          [mq[1]]: {
            color: "hotpink",
          },
          [mq[2]]: {
            color: "red",
          },
          [mq[3]]: {
            color: "blue",
          },
        }}
      >
        Some text!
      </div>
      <p
        css={css`
          color: green;
          ${mq[0]} {
            color: gray;
          }
          ${mq[1]} {
            color: hotpink;
          }
        `}
      >
        Some other text!
      </p>
    </>
  );
}
