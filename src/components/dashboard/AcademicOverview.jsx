function AcademicOverview() {
  const academicData = [
    { title: 'Total Enlisted Students', value: '1,180' },
    { title: 'Grade Consolidation Progress', value: '82%' },
    { title: 'Submitted Grades', value: '920' },
    { title: 'Pending Grade Submissions', value: '260' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Academic Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {academicData.map((item) => (
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
    </div>
  )
}

export default AcademicOverview