import React from 'react'

import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// react icons
import { FaFilter } from 'react-icons/fa';
import { locationsTab } from '../data/mock-data';

// utilizzo dell'hook useState per la gestione dello stato nel banner dei filtri
const OptionsTab = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            px: { xs: 0, md: 2 },
            alignItems: 'center',
            mt: 2,
            mb: 2,
          }}
        >
            
          <Tabs // le tabs prendono il valore "value" dallo useState di prima e per la variant "scrollable" si modificherà lo stato allo scorrimento 
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
          >
            {locationsTab.map((tab) => {
              return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
            })}
          </Tabs>

          
          <Button  // questo è 
            sx={{
              display: { xs: 'none', md: 'block' },
              border: '1px solid #ddd',
              minWidth: 90,
              justifyContent: 'space-between',
              borderRadius: 2,
              textTransform: 'capitalize',
              py: 1,
              color: 'theme.palette.text.primary',
            }}
          >
            <FaFilter /> Filters
          </Button>
        </Box>
      </Container>
    );
  };
  
  export default OptionsTab;















































/*import React from 'react'

import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// react icons
import { FaFilter } from 'react-icons/fa';


// utilizzo dell'hook useState per la gestione dello stato nel banner dei filtri
const OptionsTab = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            px: { xs: 0, md: 2 },
            alignItems: 'center',
            mt: 2,
            mb: 2,
          }}
        >
            
          <Tabs // le tabs prendono il valore "value" dallo useState di prima e per la variant "scrollable" si modificherà lo stato allo scorrimento 
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }  }
          >
            {OptionsTab.map((tab) => {
              return <Tab key={tab.id} icon={tab.icon} label={tab.label} />
            } 

          </Tabs>

          
          <Button  // questo è 
            sx={{
              display: { xs: 'none', md: 'block' },
              border: '1px solid #ddd',
              minWidth: 90,
              justifyContent: 'space-between',
              borderRadius: 2,
              textTransform: 'capitalize',
              py: 1,
              color: 'theme.palette.text.primary',
            }}
          >
            <FaFilter /> Filters
          </Button>
        </Box>
      </Container>
    );
  };
  
  export default OptionsTab;


  */