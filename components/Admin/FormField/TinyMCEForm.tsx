import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { TinyMCEFormProps } from "../../../interfaces/PagesProps"


const Key = '5u6d64bpz2vspaimpc2qpyinr43rqb5oh40mdb7ib2ahilsi'
export const TinyMCEForm = ({ label, value, setDesc }: TinyMCEFormProps) => {
  const editorRef = useRef(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{label}</label>
        <Editor
          apiKey={Key}
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={value}
          init={{
            height: 500,
            // menubar: false,
            menubar: 'file edit view insert format tools table tc help',
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',

            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          onEditorChange={(content: any, editor: any) => {
            setDesc(content)
          }}
        />
      </div>
    </div>
  );
}