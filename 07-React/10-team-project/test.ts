import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './views/components/login/Login'
import Layout from './views/components/layout/Layout'
<Router>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path='/login' element={<Login />} />
  </Route>
</Routes>
</Router>
