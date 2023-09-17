import S from "@sanity/desk-tool/structure-builder";

import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { FiHome } from "@react-icons/all-files/fi/FiHome";
import { HiOutlineDocument } from "@react-icons/all-files/hi/HiOutlineDocument";
import { FiTool } from "@react-icons/all-files/fi/FiTool";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .child(S.editor().title("Home").schemaType("home").documentId("home"))
        .icon(FiHome),
      S.listItem()
        .title("About")
        .child(
          S.editor().title("About").schemaType("about").documentId("about"),
        )
        .icon(FiUser),
      S.divider(),
      S.listItem()
        .title("Post")
        .child(
          S.documentTypeList("post").defaultOrdering([
            { field: "_createdAt", direction: "desc" },
          ]),
        )
        .icon(HiOutlineDocument),
      S.listItem()
        .title("Project")
        .child(
          S.documentTypeList("project").defaultOrdering([
            { field: "_createdAt", direction: "desc" },
          ]),
        )
        .icon(FiTool),
    ]);
