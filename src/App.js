
import {  useState, React } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';





function App() {
  const [Mode,setMode]=useState('light');//weather dark mode is enable or not
   const [alert,setAlert]=useState(null);
   const [calar,setcalar]=useState('primary');
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert (null);
    }, 2000);
   }
   const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
   
  }
 
  const toggleMode=(cls)=>{
    removeBodyClasses();
     if(cls!=null){
   document.body.classList.add('bg-'+cls)
   
     }
    else if(Mode==='dark' && cls===null)
    {
      document.body.style.backgroundColor='white';
      setMode('light');
      showAlert("light mode has been enable","success");
    
    }
    else if(Mode==='light'&&cls===null){
      document.body.style.backgroundColor='#191f22'
      setMode('dark');
      showAlert("dark mode has been enable","success");
    }
  }
  
  
  const buttonColor=(clr)=>{
    setcalar(clr);
  }
  return (
    <> 
   
    <Navbar defineTitle="Textutils2" mode={Mode} toggleMode={toggleMode} />
    
    <Alert alert={alert}/>
   <div className="container my-3"> 
   
      <TextForm heading="Enter text to analyze"  mode={Mode} showAlert={showAlert} buttonColor={buttonColor} calar={calar} />
            
       
       

   </div>

    </>
  );
}

export default App;
