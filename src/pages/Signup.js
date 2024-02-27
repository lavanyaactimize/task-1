import * as React from 'react';
import Navbar from '../components/Navbar';
import { auth, googleAuthProvider, facebookAuthProvider } from '../firebase';
import { signInWithPopup,  createUserWithEmailAndPassword } from "firebase/auth";
import controls from "../components/Controls";
import Footer from "../components/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignIn() {
  const [formData, setFormData] = controls.useState({
    email: '',
    password: '',
    conformPassword: '',
  });
  const [errors, setErrors] = controls.useState({
    email: '',
    password: '',
    conformPassword: '',
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email is required';
    } else {
      newErrors.email = '';
    }
    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }
    if (!formData.conformPassword) {
      valid = false;
      newErrors.conformPassword = 'Conform Password is required';
    } else if (formData.password !== formData.conformPassword) {
      valid = false;
      newErrors.conformPassword = 'Passwords do not match';
    } else {
      newErrors.conformPassword = '';
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error);
      });
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      toast.success('User sign up successfully');
    } else {
      console.log('Form validation failed');
      toast.error('Form validation failed');
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = controls.useNavigate();
  const [value, setValue] = controls.useState("");
  const handlegoogleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((data) => {
        console.log("User signin succesfully", data.user.email)
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
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <controls.Typography fontFamily="Arial, sans-serif" sx={{ textAlign: 'left', fontWeight: '700', fontSize: '1.625rem', lineHeight: '1.5' }}>
              Get started for free
            </controls.Typography>
            <controls.Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <controls.Typography sx={{ textAlign: 'left', fontWeight: '100', fontSize: '.8rem', color: 'black', lineHeight: '1.5' }}>Email </controls.Typography>
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
              <controls.Typography sx={{ textAlign: 'left', fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: '1rem' }}>Password</controls.Typography>
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
              <controls.Typography sx={{ textAlign: 'left', fontWeight: '100', fontSize: '.8rem', color: 'black', marginTop: '1rem' }}>Conform Password</controls.Typography>
              <controls.TextField
                sx={{ marginTop: 0.8 }}
                margin="normal"
                required
                fullWidth
                name="conformPassword"
                type="password"
                id="conformPassword"
                autoComplete="current-password"
                value={formData.conformPassword}
                onChange={handleChange}
                error={!!errors.conformPassword}
                helperText={errors.conformPassword}
              />
              <controls.Grid item xs>
                <controls.Link href="#" variant="body2">
                  <controls.Typography sx={{ textAlign: 'left', fontWeight: 700 }}>
                    <controls.Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, alignItems: 'left' }}
                      onClick={handleSubmit}
                    >
                      Sign up
                    </controls.Button>
                  </controls.Typography>
                </controls.Link>
                <controls.Typography sx={{ fontWeight: 400, fontSize: '0.87rem' }}>
                  By signing up for Codecademy, you agree to Codecademy's
                  <controls.Link> Terms of Service</controls.Link> &
                  <controls.Link>Privacy Policy.</controls.Link>
                </controls.Typography>
                <controls.Typography sx={{ textAlign: 'left', fontWeight: '700', marginBottom: '1rem', fontSize: '1rem', marginTop: 2 }}>Or Sign Up using: </controls.Typography>
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
                  Already have an account?
                  <controls.Link to="/login">{" Log in "}</controls.Link>
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



