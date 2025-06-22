import AllTopics from './AllTopics';
import './App.css'
import EmailModal from './components/EmailPrompt';
import  Topic  from './components/topic/Topic';
import HtmlCss from './sections/HtmlCss';

function App() {
  console.log("import.meta.env.REACT_APP_SUPABASE_KEY", import.meta.env.VITE_REACT_APP_SUPABASE_KEY);
  

  return (
    <>
    <EmailModal/>
<AllTopics/>    
    </>
  )
}

export default App
