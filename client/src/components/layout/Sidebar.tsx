import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", icon: "◫" },
  { name: "My Task", href: "/tasks", icon: "✓" },
  { name: "Projects", href: "/projects", icon: "▦" },
  { name: "team", href: "/team", icon: "♙" }
]

export default function Sidebar (){
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white p-5 md:block">
      <h2 className="mb-10 text-2xl font-bold text-indigo-600">WorkBoard</h2>
      <p className="mb-4 text-xs font-semibold uppercase text-slate-400">Workspance</p>

      <nav className="space-y-2">
        {navigation.map((nav)=>(
          <Link
            key={nav.name}
            href={nav.href}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600">
              {nav.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}