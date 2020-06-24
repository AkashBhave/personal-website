import React from "react";
import { Link } from "gatsby";

import Layout from "~layouts/default";
import SEO from "~utils/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 (Not Found)" />
      <div className="flex flex-col items-center justify-center text-center py-12 px-8">
        <div className="my-4">
          <div className="text-highlight text-5xl">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className="text-blue-tertiary">
            <h1 className="text-4xl font-bold">Whoops</h1>
            <h2 className="text-2xl">
              The page you were looking for was not found.
            </h2>
          </div>
        </div>
        <div className="my-4">
          <Link
            className="transition-standard text-xl text-blue-secondary hover:text-highlight"
            to="/"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            <span>Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
