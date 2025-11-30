export default function Sidebar() {
    return (
        <aside className="w-60 h-full bg-gray-100 border-r border-gray-200 p4">
            <div className="font-bold text-xl mb-4">Workspace</div>
            <nav className="flex flex-col gap-2">
                <button className="text-left px-2 py-1 rounded hover-bg-gray-200">
                    Page1
                </button>
                <button className="text-left px-2 py-1 rounded hover-bg-gray-200">
                    Page2
                </button>                
            </nav>
        </aside>
    );
}