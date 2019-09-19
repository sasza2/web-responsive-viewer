import React from 'react';

const App = () => (    
  <div dangerouslySetInnerHTML={{ __html: '<webview src="https://www.github.com/" disablewebsecurity></webview>'}} /> 
)

export default App
