import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = makeStyles({
  root: {

    height: 340,
    maxWidth: 350,
    margin: "5%",
  },

});

const AllPosts = (props) => {
  const { id,body } = props.post

  const classes = styles();
  return (

    
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" style={{color:'#581845'}}>
           POST-ID: {id}
          </Typography>
          <Typography variant="body2" color='secondary' component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='link'>

        <Link to={`posts/${id}`}><Button size="small" style={{backgroundColor:'darkblue'}} variant="contained" color="primary">
          View Details
            </Button></Link>
        </div>
        
      </CardActions>
    </Card>

  );
};

export default AllPosts;