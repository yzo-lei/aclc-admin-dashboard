function PerformanceChart() {
  const performanceData = [
    { label: 'Below Average', value: 18, color: 'bg-red-400' },
    { label: 'Average', value: 42, color: 'bg-yellow-400' },
    { label: 'Above Average', value: 27, color: 'bg-blue-500' },
    { label: 'Excellent', value: 13, color: 'bg-green-500' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Student Performance
      </h2>

      <div className="space-y-4">
        {performanceData.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PerformanceChart
