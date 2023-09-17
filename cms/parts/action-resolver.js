import defaultResolve, {
  PublishAction,
} from "part:@sanity/base/document-actions";

export default function resolveDocumentActions(props) {
  if (
    props.type == "home" ||
    props.type == "about" ||
    props.type == "project"
  ) {
    return [PublishAction];
  } else {
    return [...defaultResolve(props)];
  }
}
