export default function Header () {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Dashboard
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Notifications" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">♧</button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">A</div>
      </div>
    </header>
  )
}