import React from "react";
import controls from './Controls';
import { styled } from "@mui/material";
import { Box, } from "@mui/system";
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff0e5' : '#fff0e5',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Footer = () => {
  const CustomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    textAlign: "left",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: 7,
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));
const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "1rem",
    textAlign: "center",
    color: "black",
    fontWeight: "",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  }));
return (
    <>
      <controls.Box sx={{ py: 5 }}>
        <CustomContainer>
          <controls.Box >
            <controls.Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                // textAlign:"left",
                mb: 2,
              }}
            > Company
            </controls.Typography>
            <FooterLink>About</FooterLink>
            <br />
            <FooterLink>Careers</FooterLink>
            <br />
            <FooterLink>Affiliates</FooterLink>
            <br />
            <IconBox >
              <controls.TwitterIcon />
              <controls.FacebookOutlinedIcon />
              <controls.InstagramIcon />
              <controls.YouTubeIcon />
            </IconBox>
          </controls.Box>
          <controls.Box >
            <controls.Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Resources
            </controls.Typography>
            <FooterLink>Articles</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
            <br />
            <FooterLink>Cheatsheets</FooterLink>
            <br />
            <FooterLink>Codechallenges</FooterLink>
            <br />
            <FooterLink>Docs</FooterLink>
            <br />
          </controls.Box>
          <controls.Box >
            <controls.Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >
              Plans
            </controls.Typography>
            <FooterLink>For individuals</FooterLink>
            <br />
            <FooterLink>For students</FooterLink>
            <br />
            <FooterLink>For teams</FooterLink>
            <br />
            <FooterLink>Discounts</FooterLink>
            <br />
          </controls.Box>
          <controls.Divider orientation="vertical" variant="middle" flexItem style={{ borderColor: 'black' }} />
          <controls.Box >
            <controls.Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >Subjects
            </controls.Typography>
            <FooterLink>Web Design</FooterLink>
            <br />
            <FooterLink>Web Development</FooterLink>
            <br />
            <FooterLink>Devops</FooterLink>
            <br />
            <FooterLink>Dtavisualization</FooterLink>
            <br />
          </controls.Box>
          <controls.Box >
            <controls.Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            > Languages
            </controls.Typography>
            <FooterLink>HTML&CSS</FooterLink>
            <br />
            <FooterLink> Java  </FooterLink>
            <br />
            <FooterLink> Javascript </FooterLink>
            <br />
            <FooterLink>React  </FooterLink>
            <br />
            <FooterLink>Ruby  </FooterLink>
            <br />
          </controls.Box>
          <controls.Box >
            <controls.Typography
              sx={{
                fontSize: "1rem",
                color: "black",
                fontWeight: "bold",
                lineHeight: '1.3',
                mb: 2,
              }}
            >Career building
            </controls.Typography>
            <FooterLink>Career paths</FooterLink>
            <br />
            <FooterLink>Career center</FooterLink>
            <br />
            <FooterLink>Interview prep</FooterLink>
            <br />
            <FooterLink>Professional certification</FooterLink>
            <br />
            <controls.Typography sx={{ marginTop: 2, fontSize: '1rem', fontWeight: 'bold' }}>Mobile</controls.Typography>
            <br />
            <FooterLink><img src={controls.mobile1} style={{ height: '50px', width: '120px' }} ></img></FooterLink>
            <br />
            <FooterLink><img src={controls.mobile2} style={{ height: '50px', width: '114px' }} ></img></FooterLink>
            <br />
          </controls.Box>
        </CustomContainer>
      </controls.Box>
      <controls.Box sx={{ backgroundColor: '#fff0e5' }} >
        <controls.Container maxWidth="lg">
          <controls.Grid container spacing={2}>
            <controls.Grid item xs={8}>
              <Item sx={{ textAlign: 'left' }}>
                <img src={controls.image} style={{ height: '50px', width: '108px' }} ></img>
                <controls.Typography sx={{ fontSize: '0.8rem', fontWeight: '100', lineHeight: '0.1' }}>from skillsoft </controls.Typography>
              </Item>
            </controls.Grid>
            <controls.Grid item xs={12}>
              <Item>
                <controls.Divider style={{ borderColor: 'black', marginBottom: 3 }} />
              </Item>
            </controls.Grid>
            <controls.Grid item xs={12} sx={{ marginBottom: 4 }}>
              <controls.Grid container spacing={2}>
                <controls.Grid item xs={12} sm={12} md={5} sx={{ marginTop: "5px" }}>
                  <Item sx={{ textAlign: 'left' }}>
                    <controls.Typography sx={{ fontSize: '0.8rem', fontWeight: '400', lineHeight: '1.2', color: 'black', }}>Privacy Policy | Cookie Policy | Do Not Sell My Personal Information |Terms</controls.Typography>
                  </Item>
                </controls.Grid>
                <controls.Grid item xs={2} md={2}>
                </controls.Grid>
                <controls.Grid item xs={12} sm={12} md={5}>
                  <Item sx={{ textAlign: 'left' }}>
                    <controls.Typography sx={{ fontSize: '0.8rem', fontWeight: '400', lineHeight: '0.1', color: 'black', '&:hover': { color: 'blue', cursor: 'pointer' } }}>Made with
                      <span style={{ verticalAlign: 'middle' }}><controls.FavoriteRoundedIcon sx={{ color: 'red', width: 15 }} /> </span>in NYC © 2024 Codecademy </controls.Typography>
                  </Item>
                </controls.Grid>
              </controls.Grid>
            </controls.Grid>
          </controls.Grid>
        </controls.Container>
      </controls.Box>
    </>
  );
};
export default Footer;

