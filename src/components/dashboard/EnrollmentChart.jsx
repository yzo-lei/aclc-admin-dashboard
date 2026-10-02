function EnrollmentChart() {
  const enrollmentData = [
    { month: 'Jan', value: 42 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 48 },
    { month: 'Apr', value: 68 },
    { month: 'May', value: 74 },
    { month: 'Jun', value: 81 },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Enrollment Trends
        </h2>
        <span className="text-sm text-green-600 font-medium">+12.4%</span>
      </div>

      <div className="space-y-4">
        {enrollmentData.map((item) => (
          <div key={item.month} className="flex items-center">
            <span className="w-12 text-sm text-gray-500">{item.month}</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden ml-3">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
            <span className="ml-3 text-sm text-gray-600">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EnrollmentChart
