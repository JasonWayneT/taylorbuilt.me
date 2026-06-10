const colorMap = {
  blue:   'bg-blue-50 text-blue-700 border-blue-100',
  green:  'bg-green-50 text-green-700 border-green-100',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-100',
  brand:  'bg-primary/10 text-primary border-primary/20',
};

export default function CategoryBadge({ color, label }) {
  return (
    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xl border ${colorMap[color] ?? colorMap.blue}`}>
      {label}
    </span>
  );
}
