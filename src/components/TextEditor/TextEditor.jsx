import { Editor } from '@toast-ui/react-editor';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/i18n/ko-kr';
import PropTypes from 'prop-types';
import { useRef } from 'react';

import styles from 'components/TextEditor/TextEditor.module.scss';

function TextEditor({ onContentChange }) {
  const editorRef = useRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    onContentChange(data);
  };
  return (
    <div className={styles.textEditorContainer}>
      <Editor
        initialValue=" "
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        language="ko-KR"
        ref={editorRef}
        onChange={onChange}
      />
    </div>
  );
}

TextEditor.propTypes = {
  onContentChange: PropTypes.func.isRequired,
};

export default TextEditor;
