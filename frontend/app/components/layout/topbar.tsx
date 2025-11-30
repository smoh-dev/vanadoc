export default function Topbar(){
    return(
        <header className="h-12 flex items-center justify-between px-4 border-b border-gray-200 bh-white">
            <div className="font-medium">Page title</div>
            <div className="flex items-center gap-3">
                <button className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">
                    Share
                </button>
                <div className="w-8 h-8 rounded-full bg-gray-300"/>
            </div>
        </header>
    );
}