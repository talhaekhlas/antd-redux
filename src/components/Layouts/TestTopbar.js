import React from "react";

const TestTopbar = () => {
  return (
    <div>
      <header id="header">
        <div class="inner">
          <a href="index.html" class="logo">
            <strong>Projection</strong> by TEMPLATED
          </a>
          <nav id="nav">
            <a href="index.html">Home</a>
            <a href="generic.html">Generic</a>
            <a href="elements.html">Elements</a>
          </nav>
          <a href="#navPanel" class="navPanelToggle">
            <span class="fa fa-bars"></span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default TestTopbar;
