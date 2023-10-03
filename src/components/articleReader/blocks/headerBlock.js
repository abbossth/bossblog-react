const HeaderBlock = ({ data }) => {
  const parse = require("html-react-parser");
  return (
    <div className="es-av-content">
      <h2 className="es-av-heading">{data && parse(data.text)}</h2>
    </div>
  );
};

export default HeaderBlock;
