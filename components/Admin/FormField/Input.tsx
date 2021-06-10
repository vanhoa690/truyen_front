export const Input = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">Title</label>
        <input
          type="text"
          autoComplete="off"
          name="title"
          className="w-full mt-2 border border-gray-900"

        />
      </div>
    </div>
  )
}