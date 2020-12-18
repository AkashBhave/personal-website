import S from "@sanity/base/structure-builder";

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (listItem) => !["home", "about"].includes(listItem.getId())
  ),
];
