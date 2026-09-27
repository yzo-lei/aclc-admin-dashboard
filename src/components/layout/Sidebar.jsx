function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-8">
        ACLC Admin
      </h2>

      <nav className="space-y-2">
        <button className="block w-full text-left px-4 py-2 rounded bg-gray-700">
          Dashboard
        </button>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          User Management
        </p>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Users
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Roles & Permissions
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Alumni Accounts
        </button>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">
          Academic Management
        </p>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Programs
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Subjects
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Academic Terms
        </button>

        <button className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          Schedule Records
        </button>

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