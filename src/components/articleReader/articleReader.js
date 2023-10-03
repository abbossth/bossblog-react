import { BLOCK_TYPES } from "../../utils/utils";
import HeaderBlock from "./blocks/headerBlock";
import ImageBlock from "./blocks/imageBlock";
import ParagraphBlock from "./blocks/paragraphBlock";

const ArticleReader = ({ blocks }) => {
  console.log("Blocks:", blocks);
  const readBlock = (block) => {
    switch (block.type) {
      case BLOCK_TYPES.HEADER:
        return <HeaderBlock data={block?.data} />;
      case BLOCK_TYPES.IMAGE:
        return <ImageBlock data={block?.data} />;
      case BLOCK_TYPES.PARAGRAPH:
        return <ParagraphBlock data={block?.data} />;
      default:
        console.log(`${block.type} is not found type`);
    }
  };
  return (
    <div className="mb-3">
      {blocks &&
        blocks.map((b) => {
          return readBlock(b);
        })}
    </div>
  );
};

export default ArticleReader;
