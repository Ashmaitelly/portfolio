import React from "react";
import bookFinder from "../assets/images/bookfinder.png";
import studyApp from "../assets/images/studyapp.png";
import "../assets/styles/Project.scss";

// TODO: replace the placeholder projects below with your own real projects and links.
function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://ashmaitelly.github.io/book_search/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={bookFinder}
              className="zoom"
              alt="Book Finder screenshot"
              width="100%"
            />
          </a>
          <a
            href="https://ashmaitelly.github.io/book_search/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Book Finder</h2>
          </a>
          <p>
            Web app for discovering free ebooks. Sign in with Google, search the
            Google Books API for freely available books which are then displayed
            on a page with an embedded reader preview and PDF/EPUB download
            links. Built with React
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Ashmaitelly/StudyApp"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={studyApp}
              className="zoom"
              alt="Study App screenshot"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Ashmaitelly/StudyApp"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Study App</h2>
          </a>
          <p>
            Android app for staying on top of your studying: a notes section, an
            editable weekly schedule, and a timer/stopwatch for studying.
          </p>
          <p>
            <a
              href="https://github.com/Ashmaitelly/StudyApp/releases/download/release/release.apk"
              target="_blank"
              rel="noreferrer"
            >
              Download APK
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
