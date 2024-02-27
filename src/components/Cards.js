import React from 'react';
import controls from './Controls';
const Cards = () => {
  return (
    <controls.Container maxWidth="lg">
      <controls.Grid container spacing={4} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <controls.Grid item xs={12} sm={6} md={12} style={{ textAlign: 'left' }}>
          <controls.Typography variant="h2" component="h2" sx={{
            fontWeight:
              "600", lineHeight: "1.6", paddingTop: "0.5rem", paddingBottom: "o.25rem"
          }}>
            Stories from real people
          </controls.Typography>
        </controls.Grid>
      </controls.Grid>
      <controls.Grid container spacing={4} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <controls.Grid item xs={12} sm={6} md={8} style={{ textAlign: 'left' }}>
          <controls.Typography sx={{
            fontWeight:
              "400", fontSize: "1.125rem", lineHeight: "1.5", paddingTop: "0.1rem", paddingBottom: "o.25rem"
          }}>
            Read inspiring stories from the Codecademy community.
          </controls.Typography>
        </controls.Grid>
        <controls.Grid item xs={12} sm={6} md={3.5}>
          <controls.Typography sx={{
            fontWeight:
              "400", fontSize: "1.175rem", lineHeight: "0.3", paddingTop: "0.1rem", paddingBottom: "o.25rem", color: "blue"
          }}>
            Explore more stories →
          </controls.Typography>
        </controls.Grid>
      </controls.Grid>
      <controls.Grid container spacing={4} style={{ display: 'flex', marginTop: "10px", marginBottom: "40px" }}>
        <controls.Grid item xs={12} sm={6} md={3}>
          < controls.Card style={{ textAlign: 'left' }}>
            < controls.CardMedia
              component="img"
              height="250"
              image="https://images.ctfassets.net/go6kr6r0ykrq/Sk3Knek82fDxSX5eZqdzX/bac59c63ff86d8d52ef9e1559e8eb381/De-Shaun-Broadnax.jpeg"
              alt="Card 1"
              style={{ border: '2px solid black' }}
            />
          </controls.Card>
          <controls.Typography variant="h5" component="h2" sx={{
            fontWeight:
              "700", fontSize: "1.375rem", lineHeight: "1.3", paddingTop: "0.75rem", paddingBottom: "o.25rem", textAlign: 'left'
          }}>
            Freelancer to Developing Apps for NASA
          </controls.Typography>
          <controls.Typography variant="body2" color="textSecondary" component="p"
            sx={{
              fontWeight:
                "400", fontSize: "0.875rem", lineHeight: "1.5", textAlign: 'left', paddingTop: "0.75rem", paddingBottom: "o.25rem",
            }}
          > De'Shaun B., Associate Software Engineer, Winter Park
          </controls.Typography>
        </controls.Grid>
        <controls.Grid item xs={12} sm={6} md={3}>
          <controls.Card>
            < controls.CardMedia
              component="img"
              height="250"
              image="https://images.ctfassets.net/go6kr6r0ykrq/2ao4ZIQinCIgAt4UuGNR3z/b5b0608e9ae47b42ba6aa5e18e97411e/SerenaIsone1.jpeg"
              alt="Card 1"
              style={{ border: '2px solid black' }}
            />
          </controls.Card>
          <controls.Typography variant="h5" component="h2" sx={{
            fontWeight:
              "700", fontSize: "1.375rem", lineHeight: "1.3", paddingTop: "0.75rem", paddingBottom: "o.25rem", textAlign: 'left',
          }}>
            Lessons from a Product Owner turned Engineer
          </controls.Typography>
          <controls.Typography variant="body2" color="textSecondary" component="p"
            sx={{
              fontWeight:
                "400", fontSize: "0.875rem", lineHeight: "1.5", paddingTop: "0.75rem", paddingBottom: "o.25rem", textAlign: 'left',
            }}
          > Serena I., Software Developer @ Adidas, South Holland
          </controls.Typography>
        </controls.Grid>
        <controls.Grid item xs={12} sm={6} md={3}>
          <controls.Card>
            < controls.CardMedia
              component="img"
              height="250"
              image="https://images.ctfassets.net/go6kr6r0ykrq/IEAxMFzasjkSr11XsNGso/ef9c1fcd18c5abf06e8064dc5352060c/Julia-Jubileu.jpeg"
              alt="Card 1"
              style={{ border: '2px solid black' }}
            /> </controls.Card>
          <controls.Typography variant="h5" component="h2" sx={{
            fontWeight:
              "700", fontSize: "1.375rem", lineHeight: "1.3", paddingTop: "0.5rem", paddingBottom: "o.25rem", textAlign: 'left', paddingTop: "0.75rem", paddingBottom: "o.25rem",
          }}>
            From Film to Full-Stack Engineer in 11 Months
          </controls.Typography>
          <controls.Typography variant="body2" color="textSecondary" component="p"
            sx={{
              fontWeight:
                "400", fontSize: "0.875rem", lineHeight: "1.5", textAlign: 'left', paddingTop: "0.75rem", paddingBottom: "o.25rem",
            }}
          >Julia J., Ruby on Rails Developer, São Paulo
          </controls.Typography>
        </controls.Grid>
        <controls.Grid item xs={12} sm={6} md={3}>
          <controls.Card>
            < controls.CardMedia
              component="img"
              height="250"
              width="250"
              image="https://images.ctfassets.net/go6kr6r0ykrq/6zlCvqSouWnN7NGDTvidvT/3d4f8caef82cdaef8017edfd7e57f94f/Cristian-Tera__n.jpeg"
              alt="Card 1"
              style={{ border: '2px solid black' }}
            />
          </controls.Card>
          <controls.Typography variant="h5" component="h2" sx={{
            fontWeight:
              "700", fontSize: "1.375rem", lineHeight: "1.3", paddingTop: "0.5rem", paddingBottom: "o.25rem", textAlign: 'left'
          }}>
            Technical Analyst to Front-End Engineer in 6 Months
          </controls.Typography>
          <controls.Typography variant="body2" color="textSecondary" component="p"
            sx={{
              fontWeight:
                "400", fontSize: "0.875rem", lineHeight: "1.5", textAlign: 'left', paddingTop: "0.5rem", paddingBottom: "o.25rem",
            }}
          >Cristian T., Front-End Engineer @ Grid Dynamics, Guadalajara
          </controls.Typography>
        </controls.Grid>
      </controls.Grid>
    </ controls.Container>
  );
};
export default Cards;
