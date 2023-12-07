import CssBaseline from "@mui/material/CssBaseline";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';


// const darkTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* <ThemeProvider theme={darkTheme}> */}
      <CssBaseline />

      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
