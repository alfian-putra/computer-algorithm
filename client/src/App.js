import './index.css';
import {marked} from 'marked';
import { useState } from "react";


export default function App() {
  const [markdown, setMarkdown] = useState(`
  #HELLO MARKDOWN !`);
  function change(e){
    setMarkdown(e.target.value);
  }
  return (
    <html>
      <div className="inline-block">
        <div className="app inline-block">
          <textarea className="align-text-top ml-5 mr-15 h-[800px] w-[1150px] rounded-xl shadow border p-8 m-10" onChange={change} value={markdown}/>
        </div>

          <div
            className="align-top h-[800px] w-[1150px] mr-5 inline-block inlinecontainer mx-auto bg-gray rounded-xl shadow border p-8 m-10"
            dangerouslySetInnerHTML={{__html: marked(markdown)}}/>
      </div>
    </html>
  );
}