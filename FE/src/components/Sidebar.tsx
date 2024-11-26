function Sidebar() {
  return (
    <aside className="w-1/4 p-4 bg-white border-r border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Found 420 results for</h2>
      <p className="text-gray-500 mb-6">Summer sneakers</p>

      <div className="mb-4">
        <h3 className="text-gray-800 font-medium">Category</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <input type="checkbox" /> Sport shoes
          </li>
          <li>
            <input type="checkbox" /> Sneakers
          </li>
          <li>
            <input type="checkbox" /> Special edition shoes
          </li>
          <li>
            <input type="checkbox" /> Summer specials
          </li>
          <li>
            <input type="checkbox" /> Jordan series
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-gray-800 font-medium">Color</h3>
        <div className="flex mt-2 space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"></div>
          <div className="w-6 h-6 bg-gray-500 rounded-full cursor-pointer"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
          <div className="w-6 h-6 bg-white border border-gray-400 rounded-full cursor-pointer"></div>
          <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-gray-800 font-medium">Size</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["30", "38", "40", "41", "42", "44", "45"].map((size) => (
            <button
              key={size}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add more filter sections as shown in the screenshot */}
    </aside>
  );
}

export default Sidebar;
