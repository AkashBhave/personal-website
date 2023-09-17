import { createClient } from "@sanity/client";
import sanityImg from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03" // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = sanityImg(sanityClient);
export const sanityImage = source => {
  return builder.image(source);
};
