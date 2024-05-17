
import React, { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Body2() {
    const [counterOn, setCounterOn] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCounterOn(true);
                    } else {
                        setCounterOn(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return (
        <Box style={{ display: 'flex' ,width:"100%"}}>
            <Box
                ref={targetRef}
                sx={{
                    
                    width: '100%',
                    height: { xl: '147px', lg: '145px', md: '130px', sm: '120px', xs: '70px' },
                   
                }}
                
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: { xl: 3, lg: 3, md: 3, sm: 2, xs: 0 },
                        height: '100%',
                        backgroundColor:"#BA9775"
                    }}
                >
                  
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xl: '40px', lg: '40px', md: '34px', sm: '24px', xs: '11px' },
                                fontWeight: 600,
                            }}
                        >
                            {counterOn && <CountUp start={243230} end={243242} duration={2} delay={0} />}
                            
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xl: '18px', lg: '18px', md: '16px', sm: '12px', xs: '8px' },
                                fontWeight: 400,
                                color:"white",
                            }}
                        >
                            WHISKIES
                        </Typography>
                    </Box>



                  

                    
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography
                            sx={{
                                fontSize: { xl: '40px', lg: '40px', md: '34px', sm: '24px', xs: '11px' },
                                fontWeight: 600,
                               
                            }}
                        >
                            {counterOn && <CountUp start={830} end={842} duration={1} delay={0} />}
                            
                        </Typography>
                        <Typography sx={{ fontSize: { xl: "18px", lg: "18px", md: "16px", sm: "12px", xs: "8px" }, fontWeight: 400 , color:"white"}}>DISTILLERIES</Typography>
                    </Box>

                  
                

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography
                            sx={{
                                fontSize: { xl: '40px', lg: '40px', md: '34px', sm: '24px', xs: '11px' },
                                fontWeight: 600,
                                
                            }}
                        >
                            {counterOn && <CountUp start={6430} end={6442} duration={1} delay={0} />}
                            
                        </Typography>
                        <Typography sx={{ fontSize: { xl: "18px", lg: "18px", md: "16px", sm: "12px", xs: "8px" }, fontWeight: 400 , color:"white"}}>BRANDS</Typography>
                    </Box>

                 


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography
                            sx={{
                                fontSize: { xl: '40px', lg: '40px', md: '34px', sm: '24px', xs: '11px' },
                                fontWeight: 600,
                            }}
                        >
                            {counterOn && <CountUp start={3130} end={3140} duration={1} delay={0} />}
                            
                        </Typography>
                        <Typography sx={{ fontSize: { xl: "18px", lg: "18px", md: "16px", sm: "12px", xs: "8px" }, fontWeight: 400 , color:"white"}}>MEMBERS</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography
                            sx={{
                                fontSize: { xl: '40px', lg: '40px', md: '34px', sm: '24px', xs: '11px' },
                                fontWeight: 600,
                            }}
                        >
                            {counterOn && <CountUp start={2430} end={2442} duration={1} delay={0} />}
                            
                        </Typography>
                        <Typography sx={{ fontSize: { xl: "18px", lg: "18px", md: "16px", sm: "12px", xs: "8px" }, fontWeight: 400, color:"white" }}>COLLECTIONS</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    );


}

export default Body2;
