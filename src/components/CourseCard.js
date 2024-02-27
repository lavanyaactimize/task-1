import React from 'react';
import SetData2 from '../redux/actions/actionGetData';
import controls from './Controls';
import { connect } from 'react-redux';
const CourseCard = ({ data2, SetData2 }) => {
  controls.useEffect(() => {
    GettingData();
  }, [])
  const GettingData = async () => {
    const gotIt = await (controls.GetCardData());
    console.log("this is api data in card component", gotIt);
    SetData2(gotIt);
  }
  const param = controls.useParams();
  const routeName = param.id;
  const OrignalData = data2;
  const sixCardData = OrignalData.filter((item) => (item.status === routeName))
  return (
    <>
      < controls.Container maxWidth="lg">
        < controls.Grid container spacing={2}
          style={{ display: 'flex', justifyContent: 'space-between' }}>
          < controls.Grid item xs={12} sm={4} md={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <controls.Typography sx={{ fontWeight: "700", fontSize: "1.125rem", lineHeight: "1.5", paddingTop: "0.1rem", paddingBottom: "o.25rem", marginTop: 1 }}>
              Filters  <controls.Typography component="span" sx={{ fontWeight: 400, fontSize: "1rem" }}> clearfilters.</controls.Typography>
            </controls.Typography>
            <controlsTypography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem", textAlign: 'left' }}>Level</controlsTypography>
            <controls.FormGroup >
              {['Beginner', 'Intermediate', 'Advanced'].map(label => (
                <controls.FormControlLabel key={label} control={<controls.Checkbox />} label={label} />
              ))}
            </controls.FormGroup>
            <controls.Divider />
            <controls.Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem", textAlign: 'left' }}>Price <a href="/" style={{ textDecoration: 'none', color: "blue" }}>view plans</a></controls.Typography>
            <controls.FormGroup >
              {['Free', 'Paid'].map(label => (
                <controls.FormControlLabel key={label} control={<controls.Checkbox />} label={label} />
              ))}
            </controls.FormGroup>
            <controls.Divider />
            <controls.Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem", textAlign: 'left' }}>Type</controls.Typography>
            <controls.FormGroup >
              {['Career Path', 'Skillpath', 'Course'].map(label => (
                <controls.FormControlLabel key={label} control={<controls.Checkbox />} label={label} />
              ))}
            </controls.FormGroup>
            <controls.Divider />
            <controls.Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem", textAlign: 'left' }}>Average time to complete</controls.Typography>
            <controls.FormGroup >
              {['< 5hours', '5-10', '10-20', '20-60', '60+'].map(label => (
                <controls.FormControlLabel key={label} control={<controls.Checkbox />} label={label} />
              ))}
            </controls.FormGroup>
            <controls.Divider />
            <controls.Typography sx={{ marginTop: 1, fontWeight: 700, fontSize: "0.875rem", textAlign: 'left' }}>Projects</controls.Typography>
            <controls.FormGroup >
              {['Practice Projects', 'Portfolio Projects'].map(label => (
                <controls.FormControlLabel key={label} control={<controls.Checkbox />} label={label} />
              ))}
            </controls.FormGroup>
          </controls.Grid>
          <controls.Grid item xs={12} sm={12} md={10} sx={{ marginTop: 3 }}>
            <controls.Grid container spacing={2} style={{ display: 'flex' }}>
              {sixCardData.map((data, index) => (
                < controls.Grid item xs={12} sm={6} md={4} key={index}>
                  <controls.Card style={{ height: '100%' }} sx={{ '&:hover': { boxShadow: '-8px 0 0 0 rgba(0,0,0,1), 0 5px 0 0 rgba(0,0,0,1)', } }}>
                    <controls.CardContent style={{ textAlign: 'left', backgroundColor: '#1D2340' }}>
                      <controls.Typography variant="h5" component="h2" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "0.3", color: "#F5FCFF" }}>
                        {data.title}
                      </controls.Typography>
                    </controls.CardContent>
                    < controls.CardContent style={{ textAlign: 'left', height: '150px' }}>
                      < controls.Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "1.25rem", lineHeight: "1.3", paddingBottom: "0.5rem" }}>
                        {data.subTitle}
                      </controls.Typography>
                      < controls.Typography variant="body2" color="textSecondary" component="p" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                        {data.description}
                      </controls.Typography>
                    </controls.CardContent>
                    < controls.CardContent style={{ textAlign: 'left' }}>
                      <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />
                      <span style={{ display: 'inline-block' }}>
                        < controls.Typography variant="h5" component="h2" sx={{ fontWeight: "400", fontSize: "0.875rem", lineHeight: "1.3", paddingBottom: "0.5rem", display: 'inline-block' }}>
                          Includes:
                        </controls.Typography>
                        <controls.Typography variant="h5" component="h2" sx={{ fontWeight: "700", fontSize: "0.875rem", lineHeight: "1.3", paddingBottom: "0.5rem", display: 'inline-block' }}>
                          {data.includes}
                        </controls.Typography>
                      </span>
                      <div style={{ borderBottom: '2px dotted black', marginBottom: '0.5rem' }} />
                      < controls.Grid container spacing={0} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        < controls.Grid item xs={1} sm={1} md={1} style={{ textAlign: 'left' }}>
                          <controls.WorkspacePremiumIcon />
                        </controls.Grid>
                        < controls.Grid item xs={1} sm={1} md={1}>
                          < controls.Typography
                            sx={{
                              fontWeight: "400",
                            }}
                          >with
                          </controls.Typography>
                        </controls.Grid>
                        <controls.Grid item xs={9} sm={9} md={9}>
                          <controls.Typography
                            sx={{
                              fontWeight: "400",
                            }}
                          > Professional Certification
                          </controls.Typography>
                        </controls.Grid>
                      </controls.Grid>
                      <div style={{ borderBottom: '1px dotted black', marginBottom: '0.5rem' }} />
                      < controls.Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        < controls.Grid item xs={8} sm={6} md={8} style={{ textAlign: 'left' }}>
                          < controls.Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 600 }}> < controls.SignalCellularAltIcon />  {data.beginnerFriendly}</controls.Typography>
                        </controls.Grid>
                        < controls.Grid item xs={4} sm={6} md={4}>
                          <controls.Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "0.875rem",
                              color: "black"
                            }}
                          > {data.hours}
                          </controls.Typography>
                        </controls.Grid>
                      </controls.Grid>
                    </controls.CardContent>
                  </controls.Card>
                </controls.Grid>
              ))}
            </controls.Grid>
          </controls.Grid>
        </controls.Grid>
      </controls.Container>
    </>
  );
};
const mapStateToProps = state => {
  return {
    data2: state.Reducer2.data2,
  }
}
const mapDispatchToProps = {
  SetData2,
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);
