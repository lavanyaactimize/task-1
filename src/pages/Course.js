import React from "react";
import Navbar from '../components/Navbar';
import SetData from "../redux/actions/actionss";
import GetData from "../redux/api/getData";
import { connect } from "react-redux";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import controls from "../components/Controls";
const relatedTopics = ["HTML&CSS", "JavaScript", "PHP", "Ruby"];
const topLanguages = ["Python", "AI", "Web Development", "SQL", "Java", "C++", "Web Design", "Cubersecurity", "Data Science"];
const Item = controls.styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff0e5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Course({
    data,
    SetData,
}) {
    controls.useEffect(() => {
        GettingData();
    }, [])
    const GettingData = async () => {
        const gotIt = await (GetData());
         SetData(gotIt);
    }
    const param = controls.useParams();
    const routeName = param.id;
    const OrignalData = data;
    const compair = OrignalData.filter((item) => (item.status === routeName))
    return (
        <>
        <Navbar />
            {compair.length > 0 && (
                < controls.Box sx={{ flexGrow: 1, marginTop: 15 }}>
                    < controls.Grid container spacing={3}>
                        < controls.Grid item xs={1}>
                            <Item></Item>
                        </ controls.Grid>
                        <controls.Grid item xs={12} sm={2} md={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <Item variant="h3" sx={{ textAlign: 'left', color: 'black' }}>
                                <controls.Typography variant="h3" sx={{ fontWeight: 600, marginTop: 2 }}>Related topics</controls.Typography>
                                {relatedTopics.map(topic => (
                                    <controls.Typography variant="h3" sx={{ marginTop: 1 }} key={topic}>{topic}</controls.Typography>
                                ))}
                                <controls.Divider />
                                <controls.Typography variant="h3" sx={{ fontWeight: 600, color: 'black', marginTop: 1 }}>Top languages&subjects</controls.Typography>
                                {topLanguages.map(language => (
                                    <controls.Typography variant="h3" sx={{ marginTop: 1 }} key={language}>{language}</controls.Typography>
                                ))}
                                <controls.Divider />
                                <controls.Button sx={{ border: '1px solid blue', borderRadius: '5px', marginTop: 2 }}>
                                    <controls.Typography sx={{ color: 'blue' }}>View full catalog</controls.Typography>
                                </controls.Button>
                                <controls.Typography sx={{ marginTop: 3 }}>Where do i begin ?</controls.Typography>
                            </Item>
                        </controls.Grid>
                        < controls.Grid item xs={12} sm={9} md={8}>
                            < controls.Grid container spacing={3}  >
                                < controls.Grid item xs={12} md={7} sm={6} sx={{ padding: 1 }}>
                                    <Item sx={{ textAlign: 'left' }}>
                                        < controls.Typography sx={{ fontSize: '1rem', fontWeight: '400', lineHeight: '0.1', color: 'blue', }}>Catalog
                                            <span style={{ verticalAlign: 'middle', color: 'black' }}>/{compair[0].title1}
                                            </span> </ controls.Typography>
                                        < controls.Typography sx={{ fontSize: '2.125rem', fontWeight: '700', marginTop: 2, color: 'black' }}>{compair[0].title1}</ controls.Typography>
                                        <div>
                                            < controls.Typography sx={{ fontSize: '0.8rem', marginTop: 2, color: 'black' }}>
                                                {compair[0].discrption}
                                            </ controls.Typography>
                                        </div>
                                    </Item>
                                </ controls.Grid>
                                < controls.Grid item xs={12} md={4} sm={6} sx={{ padding: 1, marginTop: 4, }}>
                                    <Item sx={{ color: "black", border: '1px solid black', textAlign: 'left', paddingX: 2 }}>< controls.Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>Related resources </ controls.Typography>
                                        < controls.Typography variant="h3">
                                            < controls.FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem', marginTop: 1 }} /> Docs:
                                            <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}> {compair[0].resources
                                            }
                                            </a>
                                        </ controls.Typography>
                                        < controls.Typography variant="h3">
                                            < controls.FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem', marginTop: 1 }} />
                                            <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>Cheatsheets </a>
                                        </ controls.Typography>
                                        < controls.Typography variant="h3">
                                            < controls.FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem', marginTop: 1 }} />
                                            <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>
                                                Articles</a>
                                        </ controls.Typography>
                                        < controls.Typography >
                                            < controls.FiberManualRecordRoundedIcon sx={{ fontSize: '0.5rem', marginTop: 1 }} />
                                            <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'blue' }}>Projects
                                            </a>
                                        </ controls.Typography>
                                    </Item>
                                </ controls.Grid>
                                < controls.Grid item xs={12} md={7} sm={12} sx={{ marginTop: 6, marginRight: 2 }}>
                                    <Item sx={{ textAlign: 'left' }}> < controls.Typography sx={{ fontSize: '1.2rem', color: 'black', fontWeight: 700 }}>{compair[0].card} </ controls.Typography></Item>
                                    < controls.Card sx={{ maxWidth: 500, border: '1px solid black', '&:hover': { boxShadow: '-8px 0 0 0 rgba(0,0,0,1), 0 5px 0 0 rgba(0,0,0,1)', } }}>
                                        < controls.Grid item xs={12} sx={{ backgroundColor: '#EAFDC6', height: '40px' }}>
                                            < controls.Typography sx={{ textAlign: 'left', fontSize: "1rem", fontWeight: 400 }}>Free Course</ controls.Typography>                        </ controls.Grid>
                                        < controls.Grid container spacing={2}>
                                            < controls.Grid item xs={12} sm={12} md={8}>
                                                < controls.CardContent sx={{ textAlign: 'left' }}>
                                                    < controls.Typography sx={{ fontSize: "1.25rem", fontWeight: 600 }}>
                                                        {compair[0].heading}
                                                    </ controls.Typography>
                                                    < controls.Typography variant="h3" component="div">
                                                        Start at the beginning by learning HTML basics - an important foundation for building and editing web pages.
                                                    </ controls.Typography>
                                                </ controls.CardContent>
                                                <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} /> </ controls.Grid>
                                            <controls.Grid item md={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, marginTop: 2 }}>
                                                <img src={controls.pillars} style={{ height: '80%', width: '50%' }} alt="Description" />
                                            </controls.Grid>
                                        </ controls.Grid>
                                        <controls.Grid container spacing={2} sx={{ textAlign: 'left' }}>
                                            <controls.Grid item xs={6}>
                                                <controls.Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 200 }}> < controls.SignalCellularAltIcon /> Beginner Friendly</controls.Typography>
                                            </controls.Grid>
                                            <controls.Grid item xs={6}>
                                                <controls.Typography sx={{ fontSize: '0.875rem', fontWeight: 200 }} >7hours</controls.Typography>
                                            </controls.Grid>
                                        </controls.Grid>
                                    </ controls.Card>
                                </ controls.Grid>
                                < controls.Grid item xs={12} md={4} sm={6} sx={{ marginTop: 12, padding: 1 }}>
                                    < controls.Card sx={{ maxWidth: 450, border: '1px solid black', paddingY: 3.8, backgroundColor: '#fff0e5', '&:hover': { boxShadow: '-8px 0 0 0 rgba(0,0,0,1), 0 5px 0 0 rgba(0,0,0,1)', } }}>
                                        < controls.Grid container spacing={0}>
                                            < controls.Grid item xs={12}>
                                                < controls.Typography sx={{ textAlign: 'left', marginLeft: 1, fontSize: "0.875rem", fontWeight: 400, }}  >
                                                    Blog Post
                                                </ controls.Typography>
                                                < controls.CardContent >
                                                    < controls.Typography sx={{ fontWeight: 700, fontSize: '1.25rem', textAlign: "left" }}>
                                                        {compair[0].discrption1}
                                                    </ controls.Typography>
                                                    < controls.Typography sx={{ fontWeight: 400, fontSize: '0.875rem', textAlign: 'left' }}> 1 March 2022</ controls.Typography>
                                                </ controls.CardContent>
                                            </ controls.Grid>
                                        </ controls.Grid>
                                    </ controls.Card>
                                </ controls.Grid>
                            </ controls.Grid>
                        </ controls.Grid>
                    </ controls.Grid>
                </ controls.Box>
            )}
            < controls.Box sx={{ flexGrow: 1, marginTop: 9 }}>
                < controls.Grid container spacing={2} >
                    < controls.Grid item xs={12} sm={12} md={12} sx={{ textAlign: "left" }} >
                        < controls.Typography sx={{
                            fontWeight: 600, fontSize: "1.5rem",
                            marginLeft: { xs: 0, md: "8%" }
                        }}>Web Development courses< controls.Typography component="span" sx={{ fontWeight: 200, marginLeft: 0.5 }}>
                                163 results
                            </ controls.Typography></ controls.Typography>
                        < controls.Grid container justifyContent="center">
                            < controls.Grid item xs={11}>
                                < controls.Divider sx={{ border: '1px solid black' }} />
                            </ controls.Grid>
                        </ controls.Grid>
                    </ controls.Grid>
                </ controls.Grid>
            </ controls.Box>
            <CourseCard />
            <Footer />
        </>
    )
}
const mapStateToProps = state => {
    return {
        data: state.Reducer.data,
    }
}
const mapDispatchToProps = {
    SetData,
}
export default connect(mapStateToProps, mapDispatchToProps)(Course);