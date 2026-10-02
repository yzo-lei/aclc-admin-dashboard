import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-8">
        ACLC Admin
      </h2>

      <nav className="space-y-2">
        <Link
          to="/"
          className="block w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-gray-700"
        >
          Dashboard
        </Link>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          User Management
        </p>

        <Link to="/users" className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Users
        </Link>

        <Link to="/roles-permissions" className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Roles & Permissions
        </Link>

        <Link to="/alumni-accounts" className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Alumni Accounts
        </Link>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          Academic Management
        </p>

        <Link to="/programs" className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Programs
        </Link>

        <Link to="/subjects" className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Subjects
        </Link>

        <Link
          to="/academic-terms"
          className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Academic Terms
        </Link>

        <Link
          to="/schedule-records"
          className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Schedule Records
        </Link>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          Grade Consolidation
        </p>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Consolidated Grades
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Grade Reports
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Grade Submission Monitoring
        </button>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
           Analytics & Prediction
        </p>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Academic Analytics
        </button>

       <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Early Warning Dashboard
        </button>

       <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
        Prediction Features
       </button>

       <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
        Program Decision Dashboard
       </button>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          Reports
        </p>

       <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Academic Reports
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          User Activity Reports
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          System Reports
        </button>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          Audit & Monitoring
        </p>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Activity Logs
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Audit Trails
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Login History
        </button>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          System Administration
        </p>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          System Settings
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Security Settings
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Backup & Recovery
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Notifications
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Profile
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-red-700 mt-4">
          Logout
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar