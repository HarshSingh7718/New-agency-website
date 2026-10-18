type Stat = {_key?: string; value: number; suffix?: string; label: string};

export default function Stats({items, ariaLabel}: {items: Stat[]; ariaLabel?: string}) {
  return (
    <section className="section tight alt" aria-label={ariaLabel}>
      <div className="container"><div className="stats reveal">
        {items.map((item) => (
          <div className="stat" key={item._key || item.label}>
            <span className="num"><span data-count={item.value}>{item.value}</span>{item.suffix}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div></div>
    </section>
  );
}
