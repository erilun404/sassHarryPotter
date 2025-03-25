"use client";
import React from "react";
export default function Home() {
  console.log("Hello");
  return (
    <>
      <div className="home-page">
        <h1 className="home-page__h1">My Harry Potter api/sass</h1>
        <div className="home-page__content">
          <p>
            Welcome to my first sass project, here you can navigate through all
            Harry Potter characters, enjoy!
          </p>
        </div>
      </div>
    </>
  );
}
