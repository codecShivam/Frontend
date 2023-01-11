import {Box,Typography,Stack,CardMedia} from "@mui/material";
import Button from "../../../../components/buttons/CustomButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';

export default function HMOCompanyList (){
    const navigate = useNavigate();
    return(
      <>
      <Box p="1.4rem">
      <Button onClick={() => navigate("/app/patient-portal/view")}>
              <ArrowBackIcon />
              Go Back
            </Button>
      </Box>
      <Stack py="1.4rem">
           <Typography
           textalign="center"
                    variant="h2"
                    fontSize="20px"
                    fontWeight="bold"
                    color="text.secondary"
          >
                    Providers
          </Typography>
           </Stack>
      <Stack display="flex" flexDirection="row" justifyContent="center" gap="1.5rem">
        {HMOData.map((data,i) => (
          <Box key={i} onClick={() => navigate(`/app/patient-portal/view/hmo/${data.id}`)}>
            <Box sx={{width:"80px", height:"80px",backgroundColor:"#dee2e6",borderRadius:"50%", alignItems:"center"}}>
            <CardMedia
            component="img"
            width="100%"
            height="192"
            image={data?.img}
            alt={data?.name}
          />
            </Box>
           <Stack pt="1rem">
           <Typography
                    textAlign="center"
                    variant="h2"
                    fontSize="16px"
                    fontWeight="bold"
                    color="text.secondary"
                  >
                    {data?.name}
                  </Typography>
           </Stack>
                  </Box>
        ))}
           
      </Stack>
      </>
    )
  }
  