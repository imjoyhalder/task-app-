export function ProductSkeleton() {
  return (
    <div className="container mx-auto px-6 py-12 animate-pulse">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-200 rounded-2xl aspect-square" />
        <div className="space-y-6">
          <div className="h-10 bg-slate-200 rounded w-3/4" />
          <div className="h-6 bg-slate-200 rounded w-1/2" />
          <div className="h-32 bg-slate-200 rounded" />
          <div className="h-12 bg-slate-200 rounded w-full" />
        </div>
      </div>
    </div>
  );
}