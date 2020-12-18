// Base
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Modular schemas
import blockContent from "./schemas/modular/block-content";
import captionedImage from "./schemas/modular/captioned-image";
import codeBlock from "./schemas/modular/code-block";
import iconLink from "./schemas/modular/icon-link";
import skill from "./schemas/modular/skill";
// Collection schemas
import post from "./schemas/collections/post";
import project from "./schemas/collections/project";
// Page schemas
import home from "./schemas/singletons/home";
import about from "./schemas/singletons/about";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Collection schemas
    post,
    project,
    // Poge schemas
    home,
    about,
    // Modular schemas
    blockContent,
    captionedImage,
    codeBlock,
    iconLink,
    skill,
  ]),
});
