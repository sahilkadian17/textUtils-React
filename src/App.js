import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import { useState } from 'react';
import Alert from './Alert';

function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1500);
}
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#002448';
        showAlert("Dark Mode Enabled","success");
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Enabled","success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;
