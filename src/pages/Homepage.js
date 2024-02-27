import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import home from '../../src/images/home.png';
import controls from "../components/Controls";
const Item = controls.styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff0e5' : '#fff0e5',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const categories = [
    { title: 'Web Development', link: '/Course/web' },
    { title: 'Computer Science' },
    { title: 'Mobile Development' },
    { title: 'Data Science', link: '/Course/datascience' },
    { title: 'Web Design' },
    { title: 'Artificial Intelligence'},
];
function Homepage() {
    return (
        <>
    <Navbar />
            <controls.Box sx={{ flexGrow: 1, marginTop: 2,marginBottom:10}}>
                <controls.Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <controls.Grid item xs={2} md={1}></controls.Grid>
                    <controls.Grid item xs={12} sm={12} md={5}>
                        <Item sx={{ marginTop: 10 }}>
                            <controls.Typography variant='h3' sx={{ color: 'black', fontWeight: '600' }}>Welcome To Codecademy!</controls.Typography>
                            <controls.Typography sx={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>What Do You Want To Learn About ?</controls.Typography>
                        </Item>
                        <controls.Grid container spacing={2} sx={{ marginTop: 1 }}>
                            {categories.map((category, index) => (
                                <controls.Grid item xs={6} md={5} key={index}>
                                    <controls.Link to={category.link} style={{ textDecoration: 'none' }}>
                                        <Item sx={{ color: "black", border: '1px solid black', background: '#fff', paddingY: 3 }}>
                                            <controls.Typography variant="h3">{category.title}</controls.Typography>
                                        </Item>
                                    </controls.Link>
                                </controls.Grid>
                            ))}
                        </controls.Grid>
                    </controls.Grid>
                    <controls.Grid item xs={12} sm={12} md={6}>
                        <Item sx={{ marginTop: { xs: 0, sm: 5, md: 25, lg: 10 } }}>
                            <img src={home} style={{ height: '30%', width: '60%' }} alt="Description" />
                        </Item>
                        <controls.Typography sx={{textAlign:"center"}}>We have hundreds of courses that cover just about everything</controls.Typography>
                    </controls.Grid>
                </controls.Grid>
            </controls.Box>
            <Footer />
        </>
         )
        }
export default Homepage;
