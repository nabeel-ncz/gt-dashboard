export default function SkeletonCard() {
    return (
        <>
            <div className="relative backdrop-blur-sm bg-gradient-to-r from-[rgba(255,255,255,0.5)] from-10% to-[rgba(255,255,255,0.1)] w-80 h-36 rounded-lg text-white animate-pulse">
                <div className="w-full flex items-center justify-end absolute -left-4 top-4">
                    <div className="bg-gray-300 rounded-full w-10 h-10"></div>
                </div>
                <div className="w-full flex flex-col items-start justify-center pt-12 px-4 space-y-2">
                    <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
                    <div className="bg-gray-300 h-4 w-full rounded"></div>
                    <div className="bg-gray-300 h-4 w-5/6 rounded"></div>
                </div>
            </div>
        </>
    )
}
