import React from "react";

import { Link } from "gatsby";
import Image from "gatsby-image";

import styles from "./Card.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={`link-edge rounded ${styles.card}`}>
      <Link to={`/projects/${project.slug.current}`}>
        <div className="post-image">
          {project.mainImage ? (
            <div>
              <Image
                className={`w-full bg-gray-300 ${styles.cardImage}`}
                fluid={project.mainImage.asset.fluid}
              />
            </div>
          ) : (
            <div
              className={`flex justify-center items-center bg-gray-200 text-blue-primary p-8 ${styles.cardImage}`}
            >
              <i className="text-200px far fa-file"></i>
            </div>
          )}
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <h3 className="text-md font-light mt-4">
            Updated on
            <span className={styles.cardDate}>
              {new Date(project.updatedAt).toLocaleDateString(
                {},
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
