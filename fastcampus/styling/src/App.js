import "./App.css";
import StyledComponentsExample from "./components/StyledComponents/StyledComponentsExample";
import { createGlobalStyle } from "styled-components";

// 전역적으로 스타일을 설정
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NotoSans";
    src: url("https://cdn.jsdelivr.net/npm/noto-sans-kr@0.1.1/fonts/NotoSans-Regular.woff2")
    format("woff")
  }
  
  * {
    font-family: 'NotoSans';
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledComponentsExample />
    </div>
  );
}

export default App;
