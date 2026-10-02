import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import RolesPermissions from './pages/RolesPermissions'
import AlumniAccounts from './pages/AlumniAccounts'
import Programs from './pages/Programs'
import Subjects from './pages/Subjects'
import AcademicTerms from './pages/AcademicTerms'
import ScheduleRecords from './pages/ScheduleRecords'



function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/users" element={<Users />} />
    <Route path="/roles-permissions" element={<RolesPermissions />} />
    <Route path="/alumni-accounts" element={<AlumniAccounts />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/subjects" element={<Subjects />} />
    <Route path="/academic-terms" element={<AcademicTerms />} />
    <Route path="/schedule-records" element={<ScheduleRecords />} />

  </Routes>
  </BrowserRouter>
  )
}

export default App;
