import React from "react";
import "./SassExample.scss";

export default function SassExample() {
  return (
    <div>
      <p>Example</p>
      <p className="font">Sass Example</p>
      <p className="big-font">Sass Example</p>
      <nav>
        <ul>
          <li>hello</li>
          <a href="https://sass-lang.com">link</a>
        </ul>
      </nav>
      <p className="base">Modules</p>
      <p className="inverse">Modules</p>
      <p className="info">Mixin Info</p>
      <p className="alert">Mixin Alert</p>
      <p className="success">Mixin Success</p>
      <p className="message">Extend Message</p>
      <p className="success2">Extend Success</p>
      <p className="error">Extend Error</p>
      <p className="warning">Extend Warning</p>
      <div className="container">
        <article role="main">Operator Article</article>
        <aside role="complementary">Operator Aside</aside>
      </div>
    </div>
  );
}
