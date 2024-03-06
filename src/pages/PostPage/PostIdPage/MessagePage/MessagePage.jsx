import { useState } from 'react';

import TextEditor from 'components/TextEditor/TextEditor';

function MessagePage() {
  // eslint-disable-next-line no-unused-vars
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content) => {
    setEditorContent(content);
    // console.log(content);
  };
  console.log(editorContent);
  return <TextEditor onContentChange={handleEditorChange} />;
}

export default MessagePage;
