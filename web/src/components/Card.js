import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

import PostTypeBadge from "./PostTypeBadge";
import styles from "./Card.module.css";

const Card = ({ item, isProject, showProject }) => {
  return (
    <div className={`link-edge rounded ${styles.card}`}>
      <Link to={`/${isProject ? "projects" : "blog"}/${item.slug.current}`}>
        <div className="card-image">
          {item.mainImage ? (
            <div>
              <Image
                className={`w-full bg-gray-300 ${styles.cardImage}`}
                fluid={item.mainImage.asset.fluid}
                style={{ height: isProject ? "300px" : "350px" }}
              />
            </div>
          ) : (
            <div className="text-center bg-gray-200 text-blue-primary p-8">
              <i className="text-200px far fa-file"></i>
            </div>
          )}
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <h3 className="text-md font-light mt-4">
            {isProject ? "Updated" : "Published"} on
            <span className={styles.cardDate}>
              {new Date(item.publishedAt || item.updatedAt).toLocaleDateString(
                {},
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }
              )}
            </span>
          </h3>
          {!isProject ? (
            <PostTypeBadge
              showProject={showProject}
              type={item.type}
              project={item.project}
            />
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default Card;
