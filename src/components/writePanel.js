import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "../plugins/editor";
import { isNull } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getWrittenDraft } from "../store/actions/writtenDraftAction";

const WritePanel = () => {
  const dispatch = useDispatch();
  const { body } = useSelector((state) => state.writtenDraftReducer);
  const ejInstance = useRef(null);
  let [editorForSaving] = useState(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs-write",
      tools: EDITOR_JS_TOOLS,
      autofocus: true,
      data: body,
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

  return (
    <div className="w-100">
      <div id="editorjs-write" onMouseOver={() => {}}></div>
    </div>
  );
};

export default WritePanel;
