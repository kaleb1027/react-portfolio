import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const styles = {
    footerStyles: {
        position: "fixed",
        bottom: "0px",
        width: "100vw",

    }
}
export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={styles.footerStyles} sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="GitHub"
        value="GitHub"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="LinkedIn"
        icon={<LinkedInIcon />}
      />
      
    </BottomNavigation>
  );
}
