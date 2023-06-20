import { 
    Box, 
    Button, 
    TextField, 
    Typography, 
    Stack, 
    Card, 
    CardContent
} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import React, { useState,useRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import UserModal from './modal';

function Form() {
    const generateCaptcha=()=> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@&$?=';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          captcha += characters.charAt(randomIndex);
        }
        return captcha;
    }  
    const [captcha,setCaptcha]=useState(generateCaptcha());
    const [userCap,setUserCap]=useState("");
    const [capRes,setCapRes]=useState("Please enter the above captcha.");
    const [val,setVal]=useState(true);
    const [val1,setVal1]=useState(true);
    const validate=()=>{
        if(userCap===captcha){
            setCapRes("Validated");
            setVal(false);
        }
        else {
            setCapRes("Wrong Captcha, Try Again!");
        }
    }
    const refreshCaptcha=()=>{
        let cap=generateCaptcha();
        setCaptcha(cap);
        setVal(true);
    }
    const verify=()=>{
        if(val===false){
            setVal1(false);
        }
        else{
            alert("Enter captcha first, then verify.");
            resetRecaptcha();
        }
    }

    const initVal={
        name:"",
        mail:"",
        number:"",
        add:"",
    }
    const [data,setData]=useState(initVal);
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
          })
    }
    const recaptchaRef = useRef(null);
    const resetRecaptcha = () => {
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false); 
    const [lastData,setLastData]=useState(initVal);
    const submit=()=>{
        console.log(val);
        console.log(val1);
        console.log(data);
        setLastData(data);
        handleOpen();
        setData(initVal);
        refreshCaptcha();
        setUserCap("");
        setCapRes("Please enter the above captcha.");
        resetRecaptcha();
        setVal(true);
        setVal1(true);
    }
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
        >
            <Card 
                sx={{ 
                    display: 'flex',
                    alignContent:'center',
                    alignContent:'center' ,
                    justifyContent:'center',
                    maxWidth: 550, 
                    background:'#faf7fa', 
                    color:'#023961',
                    padding:'20',
                }}
            >
                <CardContent>
                    <Stack direction="column">
                        <Typography 
                            variant='h5'
                            sx={{ 
                                display: 'flex',
                                alignContent:'center',
                                alignContent:'center' ,
                                justifyContent:'center',
                                color:'#3bccf5',
                            }}
                        >
                        CONTACT FORM
                        </Typography>
                        <Stack direction="row" spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography>Name:</Typography> 
                            <TextField 
                                variant="standard" 
                                name="name" 
                                onChange={(e)=>handleChange(e)}
                                value={data.name}
                            />
                        </Stack>

                        <Stack direction="row" spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography>Mail Id:</Typography> 
                            <TextField 
                                variant="standard" 
                                name="mail" 
                                onChange={(e)=>handleChange(e)}
                                value={data.mail}
                            />
                        </Stack>

                        <Stack direction="row" spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography>Number:</Typography> 
                            <TextField 
                                variant="standard" 
                                name="number" 
                                onChange={(e)=>handleChange(e)}
                                value={data.number}
                            />
                        </Stack>

                        <Stack direction="row" spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography>Address:</Typography> 
                            <TextField 
                                variant="standard" 
                                name="add"
                                onChange={(e)=>handleChange(e)}
                                value={data.add}
                            />
                        </Stack>
                        <Stack 
                            direction='row'
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '15px',
                                padding: '5px',
                            }}
                                
                        
                        >
                            <Box 
                                sx={{
                                    flex: '1',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#f2f2f2',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    padding: '5px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    letterSpacing: '2px',
                                    color: '#037bfc',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {captcha}
                            </Box>
                            <Box >
                                <IconButton 
                                    onClick={()=>refreshCaptcha()} 
                                >
                                    <RefreshIcon />
                                </IconButton>
                            </Box>
                            
                        </Stack>
                        
                        <Stack direction="row" spacing={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TextField 
                                    variant="standard" 
                                    onChange={(e)=>setUserCap(e.target.value)} 
                                    helperText={capRes}
                                    value={userCap}
                            />
                            <Button onClick={()=>validate()}>Validate</Button>
                        </Stack>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LfqVbAmAAAAAHYBBUur-A66OqvjhfKvmIotcivB"
                            onChange={()=>verify()}
                        />
                        <Button 
                            sx={{marginTop:'20'}} 
                            variant="contained" 
                            disabled={val1}
                            onClick={()=>submit()}
                        >
                        Submit
                        </Button>
                    </Stack>
                </CardContent> 
            </Card>
            <UserModal open={open} onClose={()=>handleClose()} data={lastData}/>
        </Box>
    )
}

export default Form