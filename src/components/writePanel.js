import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../plugins/editor";

const WritePanel = () => {
  const [isEditorInitted, setIsEditorInitted] = useState(false);
  // const [articleData, setArticleData] = useState(null);
  const ejInstance = useRef(null);
  let [editorForSaving] = useState(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs-write",
      onReady: () => {
        ejInstance.current = editor;
      },
      tools: EDITOR_JS_TOOLS,
      placeholder: "Shu yerga yozing",
    });
    editorForSaving = editor;
  };

  useEffect(() => {
    if (!ejInstance.current) initEditor();
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const getData = () => {
    if (editorForSaving !== null)
      editorForSaving
        .save()
        .then((outputData) => {
          console.log("Sending data: ", outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
  };

  return (
    <div className="w-100">
      <div id="editorjs-write" onMouseOver={() => {}}></div>
      <div>
        <button className="btn btn-success" type="button" onClick={getData}>
          Chop etish
        </button>
      </div>
    </div>
  );
};

export default WritePanel;
