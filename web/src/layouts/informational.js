import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";

import DefaultLayout from "./default";

const Layout = (props) => (
  <DefaultLayout>
    <div>{props.seo}</div>
    <div className="md:shadow-none shadow flex flex-wrap mb-4">
      <div className="lg:w-2/5 w-full flex flex-col text-center">
        {props.info}
      </div>
      <div
        className={`lg:w-3/5 w-full bg-gray-200 border ${
          props.mainImage ? "" : "flex"
        }`}
        style={{ maxHeight: "600px" }}
      >
        <div className="mx-auto flex items-center h-full">
          {props.mainImage ? (
            <div className="w-full h-full">
              <Image
                className="w-auto h-full bg-gray-300 block"
                fluid={props.mainImage.asset.fluid}
                objectFit="contain"
                imgStyle={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <div className="h-full flex items-center text-blue-secondary p-8">
              <i className="text-250px far fa-file"></i>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="style-normal md:w-2/3 w-full mx-auto p-8">
      {props.children}
    </div>
  </DefaultLayout>
);

Layout.propTypes = {
  seo: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  mainImage: PropTypes.object,
};

export default Layout;
