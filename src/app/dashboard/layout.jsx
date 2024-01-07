export default function Layout({ children, graph, financial_overview }) {
  return (
    <div>
      {children}
      <div>{financial_overview}</div>

      <div className="grid grid-cols-1 "> {graph}</div>
    </div>
  );
}
