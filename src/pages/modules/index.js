import * as React from "react";

import Layout from "../../components/Layout";
import ModuleExpRollAll from "../../components/ModuleExpRollAll";

export default class ModuleIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #FFCB18, -0.5rem 0 0 #FFCB18",
              backgroundColor: "#FFCB18",
              color: "#1F1B15",
              padding: "1rem",
            }}
          >
            Modules
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    モジュール一覧
                  </h3>
                </div>
              </div>
              <ModuleExpRollAll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
