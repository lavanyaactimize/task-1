import { Grid, Card,  CardMedia, Typography, Container,Box,CardContent,styled,Divider } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {FormGroup,FormControlLabel,Checkbox,Button } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { connect } from 'react-redux';
import { GetCardData } from '../redux/api/getData';
import { useParams, Link, useLocation,useNavigate  } from 'react-router-dom';
import { useEffect,useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import mobile1 from '../../src/images/mobile1.png';
import mobile2 from '../../src/images/mobile2.png';
import image from '../../src/images/image.png';
import icons from '../../src/images/icons.png';
import signup from '../../src/images/signup.webp';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { deepPurple } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import pillars from '../../src/images/pillars.png';
import GetData from "../redux/api/getData";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from 'react-toastify';


const controls = {
  toast,
  ToastContainer,
  Paper,
  TextField,
    MenuIcon,
    GetData,    
    pillars,
    FiberManualRecordRoundedIcon,
    Icon,
  SearchIcon,
    deepPurple,
    Avatar,
    MenuItem,
    Tooltip,
    Menu,
    IconButton,
    Toolbar,
    AppBar,
    useNavigate,
    useLocation,
    useState,
    signup,
    Link,
    Button,
    mobile1,
    icons,
    image,
    Grid,
    Card,
    Typography,
    Container,
    CardMedia,
    Box,
    CardContent,
    WorkspacePremiumIcon,
    Divider,
    SignalCellularAltIcon,
    FormGroup,
    FormControlLabel,
    Checkbox,
    connect,
    GetCardData ,
    useParams,
    useEffect,
    styled,
    TwitterIcon,
 FacebookOutlinedIcon, 
 InstagramIcon, 
YouTubeIcon ,
 FavoriteRoundedIcon ,
 mobile2,
    

}

export default controls;
