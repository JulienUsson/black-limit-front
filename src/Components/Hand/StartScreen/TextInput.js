import React from 'react';
import glamorous from 'glamorous';

const Input = glamorous.input({
  color: '#ffffff',
  backgroundColor: 'transparent',
  borderWidth: 0,
  borderBottomWidth: 2,
  borderBottomColor: '#ffffff',
  padding: 8,
  fontSize: 18,
});

export default props => <Input type="text" {...props} />;
