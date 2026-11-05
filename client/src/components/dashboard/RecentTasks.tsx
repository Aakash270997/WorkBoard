const tasks =[
  { title: "Create project dashboard", status: "Completed" },
  { title: "Implement authentication", status: "In Progress" },
  { title: "Create task management API", status: "Todo" },
]

const statusStyles: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Todo: "bg-slate-100 text-slate-600",
};

export default function RecentTasks() {
  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-800">Recent Tasks</h2>

      <div className="mt-5 space-y-4">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
            <p className="text-sm font-medium text-slate-700">{task.title}</p>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[task.status]}`}>{task.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}