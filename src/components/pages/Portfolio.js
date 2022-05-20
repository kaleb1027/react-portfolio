import React from 'react';
import "./Portfolio.css"

export default function Portfolio() {
  return (
    
    <div>
      <section class="section-area" id="projects">
        <div class="div-container">
          <a
            href="https://github.com/kaleb1027/nostalgia-tunes"
            class="box-item refactor"
            id="project-1"
          >
            <div className="project-name-text">
              <h3>Nostalgia Tunes</h3>
              <span>HTML/CSS/JS</span>
              
            </div>
          </a>

          <a
            href="https://github.com/kaleb1027/note-taker"
            class="box-item led"
            id="project-2"
          >
            <div className="project-name-text">
              <h2>Note Taker</h2>
              
              <span>HTML/CSS/JS</span>
            </div>
          </a>

          <a
            href="https://github.com/kaleb1027/work-day-scheduler"
            class="box-item calc"
            id="project-3"
          >
            <div className="project-name-text">
              <h3>Work Day scheduler</h3>
              <span>HTML/CSS/JS</span>
            </div>
          </a>

          <a
            href="https://github.com/kaleb1027/password-generator"
            class="box-item puzzles"
            id="project-4"
          >
            <div className="project-name-text">
              <h3>Password Generator</h3>
              <span>HTLM/CSS/JS</span>
            </div>
          </a>

          <a
            href="https://github.com/kaleb1027/code-quiz"
            class="box-item buddy"
            id="project-5"
          >
            <div className="project-name-text">
              <h3>Code Quiz</h3>
              <span>HTML/CSS</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
