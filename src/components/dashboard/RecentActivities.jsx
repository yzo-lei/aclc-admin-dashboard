function RecentActivities() {
  const activities = [
    'Faculty submitted grades',
    'Registrar processed credentials',
    'Cashier recorded payment',
    'Student requested an appointment',
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Recent Activities
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center border-b pb-3"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>

            <p className="text-gray-600">
              {activity}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivities