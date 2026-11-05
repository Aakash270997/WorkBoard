interface StatsCardProps {
  title: string;
  count: number;
  description: string;
}

export default function StatsCard ({title, count, description}: StatsCardProps){
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mt-3 text-3xl font-bold text-slate-900">{count}</h3>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </div>
  )
}