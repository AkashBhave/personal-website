// Base
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Block schemas
import blockContent from "./schemas/blockContent";
import captionedImage from "./schemas/captionedImage";
import codeBlock from "./schemas/codeBlock";
// Collection schemas
import post from "./schemas/collections/post";
import postType from "./schemas/collections/post-type";
import project from "./schemas/collections/project";
import projectLink from "./schemas/collections/project-link";
// Page schemas
import pageHome from "./schemas/pages/home";
import pageHomeSkill from "./schemas/pages/home-skill";
import pageHomeSkillSet from "./schemas/pages/home-skill-set";
import pageAbout from "./schemas/pages/about";
import pageAboutGPG from "./schemas/pages/about-gpg";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Collection schemas
    post,
    postType,
    project,
    projectLink,
    // Poge schemas
    pageHome,
    pageHomeSkill,
    pageHomeSkillSet,
    pageAbout,
    pageAboutGPG,
    // Block schemas
    blockContent,
    captionedImage,
    codeBlock,
  ]),
});
