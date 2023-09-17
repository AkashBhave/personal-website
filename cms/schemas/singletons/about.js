import { FiUser } from "@react-icons/all-files/fi/FiUser";

export default {
  name: "about",
  title: "About",
  type: "document",
  icon: FiUser,
  fieldsets: [
    {
      name: "gpg",
      title: "GPG",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "gpgId",
      title: "ID",
      type: "string",
      fieldset: "gpg",
    },
    {
      name: "gpgFingerprint",
      title: "Fingerprint",
      type: "string",
      fieldset: "gpg",
    },
    {
      name: "gpgPublicKey",
      title: "Public key",
      type: "text",
      fieldset: "gpg",
    },
  ],
};
