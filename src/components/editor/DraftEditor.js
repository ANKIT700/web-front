import React, {  useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function DraftEditor() {
  const classes = useStyles();
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });

  const handleChange = (editorState) => {
    setState({
      editorState,
    });
  };

  const handleTextAreaChange = (content) => {
    const blocksFromHtml = htmlToDraft(content);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const es = EditorState.createWithContent(contentState);
    setState({
      editorState: es,
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ overflowY: "scroll", height: "400px" }}>
          <Paper className={classes.paper}>
            {" "}
            <Editor
              editorState={state.editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={handleChange}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            Enter Html tags to set editor state.
            <textarea
              value={draftToHtml(
                convertToRaw(state.editorState.getCurrentContent())
              )}
              style={{ width: "644px", height: "175px" }}
              onChange={(e) => handleTextAreaChange(e.target.value)}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
