function AnalyticsOverview() {
  const analyticsData = [
    { title: 'Students at Risk', value: '35' },
    { title: 'High Performing Students', value: '420' },
    { title: 'Average GPA', value: '2.15' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Analytics Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {analyticsData.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-4"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <p className="text-2xl font-bold text-gray-800 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="border rounded-lg p-4">
          <p className="font-semibold text-gray-800">
            Student Performance Summary
          </p>
          <p className="text-sm text-gray-500 mt-2">
            View overall student academic performance.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="font-semibold text-gray-800">
            Program Performance Summary
          </p>
          <p className="text-sm text-gray-500 mt-2">
            View academic performance by program.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="font-semibold text-gray-800">
            Academic Trends
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Monitor academic performance trends.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="font-semibold text-gray-800">
            Early Warning Summary
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Monitor students who may need academic assistance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsOverview