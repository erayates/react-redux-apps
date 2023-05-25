import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'

import { store } from './store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { theme } from './themes/theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
     <ThemeProvider theme={theme}>
       <App/>
     </ThemeProvider>
    </Provider>
)
