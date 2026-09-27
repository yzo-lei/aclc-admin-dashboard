import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import SummaryCard from '../components/dashboard/SummaryCard'
import UserDistribution from '../components/dashboard/UserDistribution'
import AcademicOverview from '../components/dashboard/AcademicOverview'
import AnalyticsOverview from '../components/dashboard/AnalyticsOverview'
import RecentActivities from '../components/dashboard/RecentActivities'
import Notifications from '../components/dashboard/Notifications'
import SystemHealth from '../components/dashboard/SystemHealth'

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome to ACLC Admin Dashboard
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            <SummaryCard title="Total Students" value="1,250" />
            <SummaryCard title="Total Faculty" value="85" />
            <SummaryCard title="Total Alumni" value="350" />
            <SummaryCard title="Total Active Users" value="1,685" />

            <SummaryCard title="Total Programs" value="12" />
            <SummaryCard title="Total Subjects" value="96" />
            <SummaryCard title="Pending Appointments" value="18" />
            <SummaryCard title="Active Academic Terms" value="1" />
          </div>

          <UserDistribution />

          <AcademicOverview />

          <AnalyticsOverview />

          <RecentActivities />

          <Notifications />

          <SystemHealth />
        </main>
      </div>
    </div>
  )
}

export default Dashboard