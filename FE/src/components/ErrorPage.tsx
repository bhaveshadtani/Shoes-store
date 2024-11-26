const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something Went Wrong</h1>
      <p className="text-lg text-gray-600 mb-8">
        We
        couldn't fetch the products at the moment. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Try Again
      </button>
    </div>
  )
}

export default ErrorPage