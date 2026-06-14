import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import UploadIcon from '@mui/icons-material/Upload'
import HelpIcon from '@mui/icons-material/Help'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const Header = (props) => {
    return (
        <AppBar
            position='static'
            sx={{
                ...props.sx,
                background: '#0276aa',
            }}
        >
            <Toolbar>
                <UploadIcon />

                <Typography
                    variant='h6'
                    component='h1'
                    noWrap
                    sx={{ 
                        flexGrow: 1,
                        fontFamily: 'Bungee',
                    }}
                >
                    &nbsp;&nbsp;ESPWebTool
                </Typography>

                <IconButton
                    onClick={props.onToggleDarkMode}
                    sx={{ color: '#fff' }}
                    aria-label='toggle dark mode'
                >
                    {props.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                <Button
                    sx={{ color: '#fff' }}
                    href='https://github.com/WatskeBart/espwebtool'
                    target='_blank'
                    endIcon={<HelpIcon />}>
                    Help
                </Button>

                <Button
                    //variant='contained'
                    //color='success'
                    sx={{ color: '#fff' }}
                    href='https://huhn.me/'
                    target='_blank'
                    endIcon={<OpenInNewIcon />}>
                    More Tools
                </Button>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    sx: PropTypes.object,
    darkMode: PropTypes.bool,
    onToggleDarkMode: PropTypes.func,
}

export default Header