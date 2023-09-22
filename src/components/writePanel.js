import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../plugins/editor";
import { isNull } from "lodash";
import { initialBlocks } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getWrittenDraft } from "../store/actions/writtenDraftAction";

const WritePanel = () => {
  const dispatch = useDispatch();
  const { draft } = useSelector((state) => state.writtenDraftReducer);
  document.getElementsByClassName("ce-header").dataPlaceholder =
    "Type name here..";
  const ejInstance = useRef(null);
  let [editorForSaving] = useState(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs-write",
      tools: EDITOR_JS_TOOLS,
      autofocus: true,
      data: {
        blocks: initialBlocks,
      },
      placeholder: "Shu yerga yozing...",
      onReady: () => {
        console.log("Editor.js is ready...");
        ejInstance.current = editor;
      },
      onChange: () => {
        getData();
      },
    });
    // ejInstance.current = editor;
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
    if (!isNull(editorForSaving)) {
      editorForSaving
        .save()
        .then((outputData) => {
          dispatch(getWrittenDraft(outputData));
          console.log("Sending data: ", outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  useEffect(() => {
    console.log("Draft", draft);
  }, [draft]);

  return (
    <div className="w-100">
      <div id="editorjs-write" onMouseOver={() => {}}></div>
      {/* <div>
        <button className="btn btn-success" type="button" onClick={getData}>
          Chop etish
        </button>
      </div> */}
    </div>
  );
};

export default WritePanel;
