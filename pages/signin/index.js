import React from 'react';
import {TextField, Box, Button, Stack, Typography} from '@mui/material';
import {useRouter} from 'next/router';
import {useState} from 'react';
import axios from 'axios';
import jasonweb from 'jsonwebtoken';
function Index(props) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function SignIn(e) {
        e.preventDefault();

        if (email !== '' && password !== '') {
            await axios({
                method: 'post',
                url: '/api/signin',
                data: {
                    email: email,
                    password: password,
                },
            })
                .then((response) => {
                    if (response.data) {
                        router.push('/');
                        console.log(response.data);
                    }
                })
                .catch((error) => {});
        } else {
            console.log(`error ${email} ${password} ${confirmPassword}`);
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#ADDDD0',
            }}
        >
            <Typography
                sx={{
                    position: 'absolute',
                    top: '80px',
                }}
                variant='h2'
                gutterBottom
            >
                LOGIN
            </Typography>
            <Stack
                spacing={2}
                component='form'
                sx={{
                    borderRadius: '25px',
                    height: '50vh',
                    width: 480,
                    alignSelf: 'center',
                    backgroundColor: '#EEEEEE',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TextField
                    sx={{
                        width: '80%',
                    }}
                    id='outlined-basic'
                    label='email'
                    variant='outlined'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    sx={{
                        width: '80%',
                    }}
                    id='outlined-basic'
                    label='password'
                    variant='outlined'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    sx={{
                        width: '50%',
                    }}
                    variant='contained'
                    onClick={SignIn}
                >
                    LogIn
                </Button>

                <Button
                    sx={{
                        width: '40%',
                        color: '#ABD9FF',
                        '&:hover': {
                            backgroundColor: '#E80F88',
                        },
                    }}
                    variant='outlined'
                    onClick={() => {
                        router.replace('/signup');
                    }}
                >
                    SignUp
                </Button>
            </Stack>
        </Box>
    );
}

export default Index;
export const getServerSideProps = async (context) => {
    const {jwt} = context.req.cookies;

    if (!jwt) {
        console.log('no token');
        return {
            props: {},
        };
    } else {
        try {
            await jasonweb.verify(jwt, process.env.JWT_KEY, (error, doc) => {
                if (!error) {
                    return {
                        redirect: {
                            source: '/signin',
                            destination: '/notes',
                            permanent: true,
                        },
                    };
                } else {
                    return {
                        props: {},
                    };
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    return {
        props: {},
    };
};
