// import Card from "./Card"


const Form = () => {
  return (
    <form>
      <div className="mt-8">
        <h4 className="text-gray-600">Category Story</h4>

        <div className="mt-4">
          <div className="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
            <label
              className="inline-flex items-center ml-3"
            >
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              /><span className="ml-2 text-gray-700">cat</span>
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-gray-700">Name Story</label>
          <input
            className="w-full mt-2 border border-gray-900"
            type="text"

          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-gray-700" htmlFor="slug">Slug Story</label>
          <input
            className="w-full mt-2 border border-gray-900"
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-gray-700" htmlFor="author">Author Story</label>
          <input
            className="w-full mt-2 border border-gray-900 "
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-gray-700" htmlFor="avatar">Avatar Story</label>
          <input
            className="w-full mt-2 border border-gray-900 "
            type="text"

          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-gray-700" htmlFor="name">Content Story</label>
          <textarea className="w-full mt-2 resize-none border border-gray-900" ></textarea>
        </div>
      </div>
      <button
        className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500"
        type="submit"
      >
        Add Story
   </button>
    </form>
  );
}
export default Form
