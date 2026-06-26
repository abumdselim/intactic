import Counter from '../ui/Counter';
import { statsData } from '../../data/contentData';

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="section-container stats-grid-wrap">
        {statsData.map((stat, i) => (
          <div key={i} className="stat-block">
            <div className="stat-icon"><i className={stat.icon}></i></div>
            <div className="stat-num-wrap">
              <Counter target={stat.target} suffix={stat.suffix} />
            </div>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
