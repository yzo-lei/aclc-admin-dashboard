function SummaryCards({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-2">
        {value}
      </h3>
    </div>
  )
}

export default SummaryCards;