import defaultResolve, {
  PublishAction,
} from "part:@sanity/base/document-actions";

export default function resolveDocumentActions(props) {
  if (props.type == "home" || props.type == "about") {
    return [PublishAction];
  } else {
    return [...defaultResolve(props)];
  }
}
