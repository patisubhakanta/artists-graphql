export default function ArtistsLoading() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Artists</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-lg animate-pulse">
                        <div className="h-48 bg-gray-300 mb-4"></div>
                        <div className="h-6 bg-gray-300 mb-2"></div>
                        <div className="h-4 bg-gray-300"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}