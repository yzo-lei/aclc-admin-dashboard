function UserDistribution() {
  const users = [
    { role: 'Students', count: 1250 },
    { role: 'Faculty', count: 85 },
    { role: 'Registrar', count: 2 },
    { role: 'Academic Head', count: 1 },
    { role: 'Cashier', count: 3 },
    { role: 'Admissions', count: 5 },
    { role: 'Alumni', count: 300 },
    { role: 'Administrators', count: 3 },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        User Distribution
      </h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.role}
            className="flex items-center justify-between border-b pb-3"
          >
            <span className="text-gray-600">
              {user.role}
            </span>

            <span className="font-semibold text-gray-800">
              {user.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDistribution