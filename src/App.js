import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './App.css';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import Logo from './logo.png'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PowerSettingsNew,ArrowDropDown } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Chart from './components/Chart';
import Table from './components/Table';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


class App extends Component{
  constructor(){
    super();
    this.state={
      value:0
    }
  }

  componentDidMount=()=>{

  }
   handleChange = (event,newValue) => {
     console.log(event);
     console.log(newValue);
    this.setState({value:newValue},()=>console.log(this.state.value));
  };
  render(){
    const navbarItem={
      marginLeft:"40%"
    }
    const icon={
      color:"#ff0000"
    }
    const style = {
      minWidth: 300,
      minHeight:75
   }
   const button2={
    marginTop:"10%"
    
  }
  const notification={
    marginRight:"3%"
  }
  const verticalTab={

    marginTop:"10%"
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
          <img src={Logo} width={100} height={100} mode='fit'/>
          {/* </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <div style={navbarItem}>
            <Tabs value={this.state.value} onChange={this.handleChange}>
           <Tab label="Dashboard" {...a11yProps(0)} />
           <Tab label="Profile" {...a11yProps(1)} />
           <Tab label="Membership" {...a11yProps(2)} />
           <Tab label="Setting" {...a11yProps(3)} />
           <Tab label="Support" {...a11yProps(4)} />
        </Tabs>
          </div>
          <IconButton>
          <Badge style={notification}  badgeContent={1} color="primary">
         
          <Icon className="fa fa-bell" color="secondary" />
          
      </Badge>
      </IconButton>
      <IconButton>
          <PowerSettingsNew color="action"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
      <TabPanel value={this.state.value} index={0}>
      <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                <div >
                <Fab  style={style} variant="extended" color="primary">Scan OCT</Fab>
                </div>
                <div style={button2}>
                <Fab style={style} variant="extended" color="primary">OCT Layer Segmentation</Fab>
                </div>
                </Grid>
                <Grid item xs={2} sm={1}>
                <Divider orientation="vertical" /> 
                </Grid>
                <Grid item xs={12} sm={4}>
               
                <Grid container spacing={1}>
              
                <Grid item xs={12} sm={4}>
                <Paper elevation={3}>
                          <Card  variant="outlined">
                          <CardContent  >
                            <Typography  color="textSecondary" gutterBottom>
                              Total OCT Scans:
                            </Typography>
                            <Typography  variant="h2" component="h2" color="secondary">
                            8
                            </Typography>
                  
                          </CardContent>
                          <CardActions>
                          <Fab color="primary"  variant="extended" >
                                    <Icon  className="fa fa-download"  style={{ paddingRight: "3%" }}/>
                                    View Downloads
                                  </Fab>
                          </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                           <Card  variant="outlined">
                          <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                              Total Layers Scans:
                            </Typography>
                            <Typography  variant="h2" component="h2" color="secondary">
                            8
                            </Typography>
                      
                          </CardContent>
                          <CardActions>
                          <Fab color="primary"  variant="extended" >
                                    <Icon  className="fa fa-download"  style={{ paddingRight: "3%" }}/>
                                    View Downloads
                                  </Fab>
                          </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                         <Card  variant="outlined">
                          <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                              Remaining Scans:
                            </Typography>
                            <Typography variant="h2" component="h2" color="secondary">
                            8
                            </Typography>
                 
                          </CardContent>
                          <CardActions>
                          <Fab color="primary"  variant="extended" >
                                    <Icon  className="fa fa-list" style={{ paddingRight: "3%" }}/>
                                    View Your Plans
                                  </Fab>
                          </CardActions>
                        </Card>
                        </Paper>
                        </Grid>
                </Grid>
                </Grid>
                {/* <Divider orientation="vertical" /> */}
                <Grid item xs={12} sm={1}>
                <Divider orientation="vertical" /> 
                
                </Grid>
           </Grid>
           <Grid style={verticalTab} container spacing={1}>
                <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                <Container maxWidth="sm" maxHeight="sm">
                  <Chart/>
                  
           </Container>
           </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
          <Container maxWidth="sm" maxHeight="sm">
          <Table/>
          </Container>
          </Paper>
          </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={this.state.value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={this.state.value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={this.state.value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={this.state.value} index={4}>
        Item Five
      </TabPanel>
      </div>
  </div>
  );
        }
}

export default App;
