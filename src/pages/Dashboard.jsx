import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import SummaryCard from '../components/dashboard/SummaryCard'
import EnrollmentChart from '../components/dashboard/EnrollmentChart'
import PerformanceChart from '../components/dashboard/PerformanceChart'
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
            <SummaryCard title="Total Faculty" value="20" />
            <SummaryCard title="Total Alumni" value="300" />
            <SummaryCard title="Total Active Users" value="1,300" />
            <SummaryCard title="Total Programs" value="10" />
            <SummaryCard title="Total Subjects" value="50" />
            <SummaryCard title="Pending Appointments" value="20" />
            <SummaryCard title="Active Academic Terms" value="2" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <EnrollmentChart />
            <PerformanceChart />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <UserDistribution />
            <AnalyticsOverview />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <AcademicOverview />
            <RecentActivities />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            <Notifications />
            <SystemHealth />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
