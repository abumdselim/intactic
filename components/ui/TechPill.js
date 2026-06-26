export default function TechPill({ icon, label }) {
  return (
    <div className="tech-pill">
      <i className={icon}></i>
      <span>{label}</span>
    </div>
  );
}
