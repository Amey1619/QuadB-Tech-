import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ width: "100%" }} color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "20px", flexGrow: 1 }}
          >
            Binge! Watch🎬
            {/* Add a popcron icon */}
          </Typography>
          <Button color="inherit" sx={{ marginRight: "30px" }}>
            Home
          </Button>
          <Button color="inherit">About us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
