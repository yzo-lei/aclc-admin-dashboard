function SystemHealth() {
  const systemData = [
    { title: 'Active Users Online', value: '24' },
    { title: 'Database Status', value: 'Connected' },
    { title: 'Server Status', value: 'Online' },
    { title: 'Last Backup', value: 'Today, 2:00 AM' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        System Health
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {systemData.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-4"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <p className="text-lg font-bold text-gray-800 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SystemHealth