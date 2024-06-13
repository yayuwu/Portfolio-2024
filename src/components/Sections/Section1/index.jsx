import { 
    Box,
    Typography 
} from "@mui/material"

export default function Section1 () {
    return (
        <Box sx={{
            margin: { xs: '5em 1em 0 1em', md: '12em 2em 0 2em' }, 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            paddingBottom: '2em'
        }} >
            <Box 
            sx={{
                padding: '0 3em', 
                maxWidth: '600px',
                margin: { xs: '0 0 6em 0'}
            }}>
                <Typography variant="h1" color="#97DFFC" fontFamily= "Andika, sans-serif" fontWeight={700} fontSize="128px"
                sx={{
                    textAlign: {xs: "center", md: "left"},
                    fontSize: {xs: "80px", sm: "128px"}
                }}>
                    Yael <span style={{display: 'block'}}>Correa</span>
                </Typography>
                <Box 
                sx={{ 
                    marginTop: '2em',
                    display: "flex",
                    justifyContent: {xs: "center", md: "start"}
                }}>
                    <a href="https://github.com/yayuwu" target="_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1714664132/yael_portfolio_2024/svg/jdeblz9ocg3x32yfvt7p.svg" alt="github" className="icon_w icon_m"/></a>
                    <a href="https://api.whatsapp.com/send?phone=541170897175" target="_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1714664134/yael_portfolio_2024/svg/javxkmp6vjvavzv4igtx.svg" alt="whatsapp"  className="icon_w icon_m"/></a>
                    <a href="https://www.linkedin.com/in/yael-correa/" target="_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1714664136/yael_portfolio_2024/svg/duvdoysl2juuxiubhquu.svg" alt="linkedin"  className="icon_w icon_m"/></a>
                </Box>
            </Box>
            <Box 
            sx={{ padding: '0 2em', maxWidth: '600px' }}>
                <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif" fontSize="32px">— Introduction</Typography>
                <Typography variant="h3" color="white" fontFamily="Andika, sans-serif"
                sx={{
                    lineHeight: '1.5em',
                    fontSize: {xs: '32px', sm: '48px'}
                }}>
                    Front End Developer 
                    <span style={{display:'block'}}>based in Buenos Aires</span>
                </Typography>
                <Typography variant="p" color="white" fontFamily="Andika, sans-serif" fontSize="28px" 
                sx={{
                    lineHeight: '1.5em',
                    fontSize: {xs: '20px', sm: '28px'},
                }}>
                    I focus on web design and development, guaranteeing responsive web and good styles.
                </Typography>
                <a href="" target="_blank"><Typography variant="p" color="#97DFFC" fontFamily="Andika, sans-serif" fontSize="32px" sx={{display: 'block', marginTop: '.5em'}}>My CV</Typography></a>
            </Box>
        </Box>
    )
}