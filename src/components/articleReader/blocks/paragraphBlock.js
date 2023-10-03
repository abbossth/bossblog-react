const ParagraphBlock = ({ data }) => {
  const parse = require("html-react-parser");
  return (
    <div className="es-av-content">
      <p className="es-av-text">{data && parse(data.text)}</p>
    </div>
  );
};

export default ParagraphBlock;
