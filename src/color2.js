import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './color.css';

const choices = [{label:'White',value:'white' },
                 {label:'Lime',value:'lime' },
                 { label:'Lavender', value:'lavender' },
                 { label:'Crimson',value:'crimson' },
                 { label:'Darkblue',value:'darkblue' },
                 { label:'Teal',value:'teal'  },
                 { label:'Rebecca Purple', value:'rebeccapurple'},
                 { label:'Ghost White', value:'ghostwhite' },
                 { label:'Aqua Marine', value:'aquamarine' },
                 { label:'aliceblue', value:'aliceblue'},
                ];
export default function Deep() {
  const [choice, setChoice] = React.useState('White');

  const colorChange = (cc) => {
    setChoice(cc.target.value);
  };

  return (
    <div className='bg'>
        <center><b><u><h1 className='heading'>COLOR CHANGER</h1></u></b></center>
        <h3>CHOOSE A COLOR FOR CHANGING:</h3>
    <Box component="form" >
        <TextField
          id="Dee"
          select value={choice}
          onChange={colorChange}
          style={{color:choice,backgroundColor:choice }} >
        {choices.map((choice) => (
          <MenuItem key={choice.value} value={choice.value}>
              {choice.label}
          </MenuItem>
          ))}
        </TextField>
        
    </Box ><br/><br/><br/>
    <center><h3>OUTPUT:</h3></center>
    <div className='body' onChange={colorChange}
      style={{color:choice,backgroundColor:choice }} >
    </div>
    </div>
  );
}