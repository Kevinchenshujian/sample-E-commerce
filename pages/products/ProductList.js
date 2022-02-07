import React from 'react';
import { styled } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';
import items from './items.js'

const itemList = items;
const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const useStyles = makeStyles({
    itemCardName: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 15
    },
    itemDes: {
        width: 95,
        color: "black",
        margin: "5px auto 10px auto"
    }
});

export default function ProductList() {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={1}>
              {itemList.map((item, index) => {
                  return <Grid item xs={3} key = {index}>
                      <Item>
                        <Image
                            src = {item.pic}
                            alt = "img" 
                            width={144}
                            height={144}
                            />
                        <div className = {classes.itemCardName}>
                            {item.name}
                        </div>
                        <div className = {classes.itemDes}>
                            {item.description}
                        </div>
                        </Item>
                  </Grid>
              })}
            
          </Grid>
        </Box>
      );
  
}
