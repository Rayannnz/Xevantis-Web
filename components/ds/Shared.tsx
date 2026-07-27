import type { ReactNode } from "react";

/** A documented section with an anchor the scroll-spy can target. */
export function Block({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="block" id={id}>
      <div className="block__head">
        <h2 data-reveal="">{title}</h2>
        {lead && (
          <p className="lead" data-reveal="" data-delay="80">
            {lead}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

/**
 * Static, author-written code samples with token highlighting.
 * `dangerouslySetInnerHTML` is safe here: every string is a literal in this
 * repo — there is no user input anywhere in this path.
 */
export function Code({ html }: { html: string }) {
  return <pre className="code" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function DoDont({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div className="do-dont">
      <div className="do-dont__item do">
        <strong>Do</strong>
        <ul className="stack body-sm u-muted" style={{ ["--gap" as string]: ".5rem", marginTop: ".6rem" }}>
          {dos.map((d) => (
            <li key={d}>· {d}</li>
          ))}
        </ul>
      </div>
      <div className="do-dont__item dont">
        <strong>Don&apos;t</strong>
        <ul className="stack body-sm u-muted" style={{ ["--gap" as string]: ".5rem", marginTop: ".6rem" }}>
          {donts.map((d) => (
            <li key={d}>· {d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Ramp({
  name,
  token,
  steps,
}: {
  name: string;
  token: string;
  steps: Array<{ step: string; light?: boolean }>;
}) {
  return (
    <div className="ramp">
      <span className="ramp__name">{name}</span>
      {steps.map((s) => (
        <div
          className="ramp__step"
          key={s.step}
          data-copy={`var(--${token}-${s.step})`}
          style={{
            background: `var(--${token}-${s.step})`,
            ...(s.light ? { color: "#fff" } : {}),
          }}
        >
          {s.step}
        </div>
      ))}
    </div>
  );
}

export function SpecTable({
  head,
  rows,
}: {
  head: string[];
  rows: Array<Array<ReactNode>>;
}) {
  return (
    <div className="table-scroll">
      <table className="spec">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
