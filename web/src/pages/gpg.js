import React from "react";
import { graphql } from "gatsby";

import Layout from "~layouts/default";
import SEO from "~utils/seo";
import PageTitle from "~components/PageTitle";
import BlockContentCode from "~components/BlockContentCode";

const GPGPage = ({ data }) => (
  <Layout>
    <SEO title="GPG" keywords={[`about`, `gpg`, `gpg info`, `public key`]} />

    <PageTitle title="GPG" subtitle="My online identification." />

    <section class="container md:w-2/3 w-full mx-auto px-8 py-12">
      <div class="mb-8">
        <h2 class="text-4xl">Key ID</h2>
        <BlockContentCode
          node={{
            code: { code: data.page.gpgId },
            language: "plaintext",
          }}
        />
      </div>
      <div class="mb-8">
        <h2 class="text-4xl">Fingerprint</h2>
        <BlockContentCode
          node={{
            code: { code: data.page.gpgFingerprint },
            language: "plaintext",
          }}
        />
      </div>
      <div class="mb-8">
        <h2 class="text-4xl">Public Key</h2>
        <BlockContentCode
          node={{
            code: { code: data.page.gpgPublicKey },
            language: "plaintext",
          }}
        />
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query GPGPageQuery {
    page: sanityAbout {
      gpgId
      gpgFingerprint
      gpgPublicKey
    }
  }
`;

export default GPGPage;
