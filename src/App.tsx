import { Container } from "@mui/system";
import "./App.css";
import Appbar from "./conponents/Appbar/appbar";
import Textarea from "./conponents/TextArea/Textarea";
import Body_one from "./conponents/body1/body1";
function App() {
  return (
    <>
      <style>
        {`
      body {
        background-color: #121212;
      }
    `}
      </style>

      <Container fixed={true} sx={{ backgroundColor: "#121212" }}>
        <Appbar />
        <Body_one />
        <Textarea />
      </Container>
    </>
  );
}

export default App;
