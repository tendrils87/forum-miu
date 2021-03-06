import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import LoginMenu from './LoginMenu'


function ElevationScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
    toolbarMargin:{
        ...theme.mixins.toolbar 
    },
    tabContainer:{
        flexGrow: 1
    },
    tab:{
        ...theme.typography.tab
    },
    textField:{
        borderColor: 'white',
        margin: "7px"
    },
    input: {
        color: 'white',
        borderColor: 'white'
    },
    button: {
        marginLeft: "20px"
    }

})) 
export default function Header(props){
    const classes=useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4">
                        Course Forum
                    </Typography>
                    <Tabs className={classes.tabContainer} centered onChange={handleChange} value={value}>
                        <Tab className={classes.tab} label="Home" />
                        <Tab className={classes.tab} label="Unused" />
                        <Tab className={classes.tab} label="Unused" />
                    </Tabs>
                <LoginMenu/>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}