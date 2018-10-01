import React from "react";
import "./index.css";

class Main extends React.Component {
  render() {
    return (
      <main id="main">
        <div className="row">
          <section className="column">
            <h2 className="subtitle">Single-origin</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet cupiditate reiciendis illum repellendus impedit id animi
              nostrum, laborum aperiam sunt sint, nemo rem similique doloribus,
              iure tenetur earum ipsum.
            </p>
            <a href="/batch-size.html">small batches</a>
          </section>
          <section className="column">
            <h2 className="subtitle">Blends</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              exercitationem ipsam perspiciatis maxime. Eligendi, deserunt
              delectus necessitatibus voluptatibus incidunt quam architecto
              quis, perspiciatis aliquid officia facilis minima possimus ea
              dignissimos?
            </p>
            <a href="/#">house blends</a>
          </section>
          <section className="column">
            <h2 className="subtitle">Brewing equipment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              exercitationem ipsam perspiciatis maxime. Eligendi, deserunt
              delectus necessitatibus voluptatibus incidunt quam architecto
              quis, perspiciatis aliquid officia facilis minima possimus ea
              dignissimos?
            </p>
            <a href="/#">Brewing classes</a>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
