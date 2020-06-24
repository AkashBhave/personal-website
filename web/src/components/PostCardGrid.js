import React from "react";

import PostCard from "./PostCard";

import styles from "./Card.module.css";

const PostCardGrid = props => (
  <div className={styles.cardGrid}>
    {props.posts.map(post => (
      <div className={`lg:w-1/3 md:w-1/2 w-full ${styles.cardGridCard}`}>
        <PostCard showProject={props.showProject} post={post} />
      </div>
    ))}
  </div>
);

export default PostCardGrid;
