import Paragraph from "./Paragraph";
import CodeBlock from "./CodeBlock";
import Divider from "./Divider";
import Code from "./Code";
import ListItem from "./ListItem";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Heading4 from "./Heading4";

const mdxShortcodes = {
  p: Paragraph,
  code: Code,
  pre: CodeBlock,
  inlineCode: Code,
  li: ListItem,
  ul: UnorderedList,
  ol: OrderedList,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  Divider,
};

export default mdxShortcodes;
