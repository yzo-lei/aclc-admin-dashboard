function Notifications() {
  const notifications = [
    'Pending Appointments',
    'Pending Grade Approvals',
    'System Announcements',
    'Security Alerts',
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Notifications
      </h2>

      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3"
          >
            <p className="text-gray-600">
              {notification}
            </p>

            <button className="text-sm text-blue-600 hover:underline">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications