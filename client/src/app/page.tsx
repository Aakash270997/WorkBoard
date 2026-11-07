import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentTasks from "@/components/dashboard/RecentTasks";
import CreateTaskButton from "@/components/dashboard/CreateTaskButton";

const stats = [
  { title: "Total Tasks", count: 24, description: "All assigned tasks" },
  { title: "In Progress", count: 8, description: "Currently working" },
  { title: "Completed", count: 12, description: "Successfully finished" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <div className="md:pl-64">
        <Header />
        <div className="mt-5">
          <CreateTaskButton />
        </div>
        <main className="p-6 md:p-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back, Aakash!
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Here's what's happening with your workspace.
            </p>
          </div>

          <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <StatsCard key={item.title} {...item} />
            ))}
          </section>

          <RecentTasks />
        </main>
      </div>
    </div>
  )
}