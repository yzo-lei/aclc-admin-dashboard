import { useState } from 'react'

function ScheduleRecords() {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      subject: 'Web Application Development 2',
      faculty: 'Juan Dela Cruz',
      room: 'Room 101',
      day: 'Monday',
      time: '8:00 AM - 10:00 AM',
      term: '2026-2027 1st Semester',
    },
    {
      id: 2,
      subject: 'Database Management',
      faculty: 'Maria Santos',
      room: 'Room 202',
      day: 'Tuesday',
      time: '10:00 AM - 12:00 PM',
      term: '2026-2027 1st Semester',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState(null)
  const [search, setSearch] = useState('')

  const [form, setForm] = useState({
    subject: '',
    faculty: '',
    room: '',
    day: 'Monday',
    time: '',
    term: '2026-2027 1st Semester',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const saveSchedule = (e) => {
    e.preventDefault()

    if (editingSchedule) {
      setSchedules((prevSchedules) =>
        prevSchedules.map((schedule) =>
          schedule.id === editingSchedule.id
            ? { ...schedule, ...form }
            : schedule
        )
      )
    } else {
      setSchedules((prevSchedules) => [
        ...prevSchedules,
        {
          id: Date.now(),
          ...form,
        },
      ])
    }

    setForm({
      subject: '',
      faculty: '',
      room: '',
      day: 'Monday',
      time: '',
      term: '2026-2027 1st Semester',
    })

    setEditingSchedule(null)
    setShowForm(false)
  }

  const editSchedule = (schedule) => {
    setEditingSchedule(schedule)

    setForm({
      subject: schedule.subject,
      faculty: schedule.faculty,
      room: schedule.room,
      day: schedule.day,
      time: schedule.time,
      term: schedule.term,
    })

    setShowForm(true)
  }

  const deleteSchedule = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this schedule?'
    )

    if (confirmDelete) {
      setSchedules((prevSchedules) =>
        prevSchedules.filter((schedule) => schedule.id !== id)
      )
    }
  }

  const filteredSchedules = schedules.filter(
    (schedule) =>
      schedule.subject.toLowerCase().includes(search.toLowerCase()) ||
      schedule.faculty.toLowerCase().includes(search.toLowerCase()) ||
      schedule.room.toLowerCase().includes(search.toLowerCase()) ||
      schedule.day.toLowerCase().includes(search.toLowerCase()) ||
      schedule.term.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Schedule Records
          </h1>

          <p className="mt-2 text-gray-600">
            Manage subject, faculty, room, and class schedules.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingSchedule(null)

            setForm({
              subject: '',
              faculty: '',
              room: '',
              day: 'Monday',
              time: '',
              term: '2026-2027 1st Semester',
            })

            setShowForm(true)
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Schedule
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={saveSchedule}
          className="bg-white p-6 mt-6 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4">
            {editingSchedule ? 'Edit Schedule' : 'Add Schedule'}
          </h2>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="border p-2 rounded w-full mb-4"
          />

          <input
            type="text"
            name="faculty"
            value={form.faculty}
            onChange={handleChange}
            placeholder="Faculty"
            required
            className="border p-2 rounded w-full mb-4"
          />

          <input
            type="text"
            name="room"
            value={form.room}
            onChange={handleChange}
            placeholder="Room"
            required
            className="border p-2 rounded w-full mb-4"
          />

          <select
            name="day"
            value={form.day}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-4"
          >
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <input
            type="text"
            name="time"
            value={form.time}
            onChange={handleChange}
            placeholder="Time e.g. 8:00 AM - 10:00 AM"
            required
            className="border p-2 rounded w-full mb-4"
          />

          <select
            name="term"
            value={form.term}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-4"
          >
            <option>2026-2027 1st Semester</option>
            <option>2026-2027 2nd Semester</option>
            <option>2027-2028 1st Semester</option>
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            {editingSchedule ? 'Update Schedule' : 'Save Schedule'}
          </button>

          <button
            type="button"
            onClick={() => {
              setShowForm(false)
              setEditingSchedule(null)
            }}
            className="ml-2 bg-gray-500 text-white px-5 py-2 rounded-lg"
          >
            Cancel
          </button>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-sm mt-6 p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Schedule List
          </h2>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-lg"
          />
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Subject</th>
              <th className="text-left p-4">Faculty</th>
              <th className="text-left p-4">Room</th>
              <th className="text-left p-4">Day</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Term</th>
              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredSchedules.map((schedule) => (
              <tr key={schedule.id} className="border-t">
                <td className="p-4">{schedule.subject}</td>
                <td className="p-4">{schedule.faculty}</td>
                <td className="p-4">{schedule.room}</td>
                <td className="p-4">{schedule.day}</td>
                <td className="p-4">{schedule.time}</td>
                <td className="p-4">{schedule.term}</td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => editSchedule(schedule)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteSchedule(schedule.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredSchedules.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No schedules found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScheduleRecords
