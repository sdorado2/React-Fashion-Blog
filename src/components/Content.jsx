import React from "react";

function Content(props) {
  return (
    <div>
      <section>
        <article className="content">
          {/* date */}
          <time>{props.display.date}</time>
          {/* title */}
          <h2>{props.display.title}</h2>
          {/* img */}
          <img src={props.display.img} alt="img" />
          {/* text */}
          <p>{props.display.text}</p>
          <div className="continue">
            <a href="...">continue...</a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Content;
