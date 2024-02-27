import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth, googleAuthProvider, facebookAuthProvider } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import controls from "../components/Controls";
export default function SignIn() {
  const [formData, setFormData] = controls.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = controls.useState({
    email: '',
    password: '',
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email or username is required';
    } else {
      newErrors.email = '';
    }
    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }
    setErrors(newErrors);
    return valid;
  };
  const navigate = controls.useNavigate();
  const handleSubmit = async (event) => {
  event.preventDefault();
    if (validateForm()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.getIdToken().then((idToken) => {
            if (idToken) {
              localStorage.setItem('idToken', idToken);
            }
          });
          controls.toast.success('Login successfully');
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/user-not-found") {
            controls.toast.error('Invalid user');
          } else {
            controls.toast.error('invaliduser.');
          }
        });
    } else {
      controls.toast.error('Form validation failed');
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const [value, setValue] = controls.useState("");
  const handlegoogleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((data) => {
      localStorage.setItem('idToken', data.user.accessToken);
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email)
        navigate("/home");
      })
  };
  controls.useEffect(() => {
    setValue(localStorage.getItem("email"))
  }, []);
  const facebookClick = () => {
    signInWithPopup(auth, facebookAuthProvider)
      .then((result) => {
        console.log('result user', result.user)
        const user = result.user;
        localStorage.setItem('idToken', result.user.accessToken);
       navigate("/home");
      })
      .catch((error) => {
      });
  }
  return (
    <>
      <Navbar />
      <controls.Box sx={{ py: 15 }}>
        <controls.Container maxWidth="xs">
          <controls.Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <controls.Typography fontFamily="Arial, sans-serif" sx={{ textAlign: "left", fontWeight: '500', fontSize: '1.625rem', lineHeight: "1.5" }} >
              Log in to Codecademy
            </controls.Typography>
            <controls.Box component="form" noValidate sx={{ mt: 1 }}>
              <controls.Typography sx={{ textAlign: "left", fontWeight: '100', fontSize: '.8rem', color: 'black', lineHeight: "1.5" }}>Email or Username</controls.Typography>
              <controls.TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <controls.Typography sx={{ textAlign: "left", fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: "1rem" }}>Password</controls.Typography>
              <controls.TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <controls.Grid item xs>
                <controls.Link href="#" variant="body2">
                  < controls.Typography sx={{ textAlign: 'left', fontWeight: 700, marginBottom: "0.5rem", marginTop: 1 }}> I forgot my password</controls.Typography>
                </controls.Link>
                <controls.Link href="#" variant="body2">
                  < controls.Typography sx={{ textAlign: 'left', fontWeight: 700 }}>
                    <controls.Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2, alignItems: 'left' }}
                      onClick={(e) => handleSubmit(e)}
                    >  Log In
                    </controls.Button>
                  </controls.Typography>
                </controls.Link>
                <controls.Typography sx={{ textAlign: 'left', fontWeight: '700', marginBottom: '1rem', fontSize: '1rem' }}>Or log in using: </controls.Typography>
              </controls.Grid>
              <controls.Box sx={{ flexGrow: 1 }}>
              <controls.Grid container sx={{ justifyContent: 'center' }}>
                  {[
                    { icon: "devicon:google", onClick: handlegoogleClick },
                    { icon: "logos:facebook", onClick: facebookClick },
                    { icon: "devicon:linkedin" },
                    { icon: "devicon:github" },
                    { icon: "logos:apple" },
                  ].map(({ icon, onClick }, index) => (
                    <controls.Grid key={index} item xs={1.9} sm={2} md={2} sx={{ border: '1px solid black', marginRight: '10px', padding: '10px', background: "#ffff", display: 'flex', justifyContent: 'center' }}>
                      <controls.Icon icon={icon} width="25" height="25" onClick={onClick} />
                    </controls.Grid>
                  ))}
                </controls.Grid>
              </controls.Box>
              <controls.Grid container sx={{ marginTop: 3 }}>
                <controls.Grid item>
                  Not a member yet?
                  <controls.Link to='/signup'>
                    {" Sign up for free"}
                  </controls.Link>
                </controls.Grid>
              </controls.Grid>
            </controls.Box>
          </controls.Box>
        </controls.Container>
      </controls.Box>
      <controls.ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Footer />
    </>
  );
}
