import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
const TextArea = () => {
  return (
    <>
      <hr />
      <p style={{color:'white'}}>Comment</p>
      <Textarea
  // disabled
  minRows={2}
  size="lg"
  variant="outlined"
  value={"What do you feel about this?"}
  sx={{ width: "100%", height: "130px", backgroundColor: "#121212", color: "#fff" }}
/>

    </>
  );
};

// const Heard = () => {
//   return (
//     <>
//       <Box display="flex" justifyContent="start">
//         <FavoriteBorderIcon style={{ margin: 0 , color: "#FFFFFF"}} />
//         <FavoriteBorderIcon style={{ margin: 0, color: "#FFFFFF" }} />
//         <FavoriteBorderIcon style={{ margin: 0 , color: "#FFFFFF"}} />
//         <FavoriteBorderIcon style={{ margin: 0, color: "#FFFFFF" }} />
//       </Box>
//     </>
//   );
// };

const Heard = () => {
  const iconsArray = Array.from({ length: 4 });

  return (
    <>
      <Box display="flex" justifyContent="start">
        {iconsArray.map((_, index) => (
          <FavoriteBorderIcon key={index} style={{ margin: 0, color: "#FFFFFF" }} />
        ))}
      </Box>
    </>
  );
};

const Row = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" width="100%">
        {/* <Button variant="outlined">SIGN UP</Button> */}
        <Heard />
        <Button variant="contained">SEND</Button>
      </Box>
    </>
  );
};
export default function MyApp() {
  return (
    <>
      <Container sx={{ height: "250px" }}>
        <TextArea />
        <br />
        <Row />
      </Container>
      <br />
    </>
  );
}
