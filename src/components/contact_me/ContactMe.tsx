import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function ContactMe() {
  return (
    <FormControl>
      <TextField placeholder="Your Name" />
      <TextField placeholder="email@email.com" />
      <TextField placeholder="Your message here" multiline rows={4} />
    </FormControl>
  );
}

export default ContactMe;
