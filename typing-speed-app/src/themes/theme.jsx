import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#151515',
        }
    },

    typography: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
                color: 'primary',
            },
            styleOverrides: {
                root: {
                    '& .MuiInput-root': {
                        '& fieldset': {
                            borderColor: '#151515',
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#151515',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#151515',
                        },
                    },
                },
            }
        },

        MuiInputLabel:{
            styleOverrides:{
                root:{
                    display:'none'
                }
            }
        },

        MuiInputBase:{
            styleOverrides:{
                root:{
                    borderBottom: 'none',
                },
                input:{
                    borderRadius:'15px',
                    padding:'15px',
                    border:'1px solid #151515',
                    marginTop:'0px',
                    fontSize:'16px',
                },
            }
        },

        MuiInput:{
            styleOverrides:{
                root:{
                    '&:after':{
                        borderBottom:'none'
                    },
                    '&:before':{
                        borderBottom:'none'
                    },
                    '&:hover:not(.Mui-disabled):before':{
                        borderBottom:'none'
                    },
                    marginTop: '0px'
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    borderRadius:'15px',
                    padding:'15px',
                    marginTop:'0px',
                    fontSize:'16px',
                    color:'#fff',
                }
            }
        }
        
    }
})