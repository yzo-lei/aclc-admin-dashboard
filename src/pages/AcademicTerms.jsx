import { useState } from 'react'

function AcademicTerms() {
  const [terms, setTerms] = useState([
    {
      id: 1,
      academicYear: '2026-2027',
      semester: '1st Semester',
      status: 'Active',
    },
    {
      id: 2,
      academicYear: '2026-2027',
      semester: '2nd Semester',
      status: 'Upcoming',
    },
    {
      id: 3,
      academicYear: '2025-2026',
      semester: '2nd Semester',
      status: 'Completed',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingTerm, setEditingTerm] = useState(null)
  const [search, setSearch] = useState('')

  const [formData, setFormData] = useState({
    academicYear: '',
    semester: '1st Semester',
    status: 'Upcoming',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingTerm) {
      setTerms(
        terms.map((term) =>
          term.id === editingTerm.id
            ? { ...term, ...formData }
            : term
        )
      )
    } else {
      const newTerm = {
        id: Date.now(),
        ...formData,
      }

      setTerms([...terms, newTerm])
    }

    setFormData({
      academicYear: '',
      semester: '1st Semester',
      status: 'Upcoming',
    })

    setEditingTerm(null)
    setShowForm(false)
  }

  const handleEdit = (term) => {
    setEditingTerm(term)

    setFormData({
      academicYear: term.academicYear,
      semester: term.semester,
      status: term.status,
    })

    setShowForm(true)
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this academic term?'
    )

    if (confirmDelete) {
      setTerms(terms.filter((term) => term.id !== id))
    }
  }

  const filteredTerms = terms.filter(
    (term) =>
      term.academicYear
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      term.semester
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      term.status
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Academic Terms
          </h1>

          <p className="mt-2 text-gray-600">
            Manage academic years and semesters.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingTerm(null)
            setFormData({
              academicYear: '',
              semester: '1st Semester',
              status: 'Upcoming',
            })
            setShowForm(true)
          }}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700"
        >
          + Add Academic Term
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            {editingTerm
              ? 'Edit Academic Term'
              : 'Add Academic Term'}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Year
                </label>

                <input
                  type="text"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                  placeholder="e.g. 2026-2027"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Semester
                </label>

                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                >
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>Summer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                >
                  <option>Active</option>
                  <option>Upcoming</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingTerm(null)
                }}
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {editingTerm ? 'Update Term' : 'Save Term'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm mt-6">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Academic Term List
            </h2>

            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Academic Year
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Semester
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTerms.length > 0 ? (
                filteredTerms.map((term) => (
                  <tr
                    key={term.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-gray-800">
                      {term.academicYear}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {term.semester}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          term.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : term.status === 'Upcoming'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {term.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEdit(term)}
                          className="px-3 py-1.5 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(term.id)}
                          className="px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center px-6 py-10 text-gray-500"
                  >
                    No academic terms found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AcademicTerms
