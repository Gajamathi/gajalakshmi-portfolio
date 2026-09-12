const InkFlow: React.FC = () => {
  return (
    <div className="ink-decor" aria-hidden="true">
      <svg className="ink-mark ink-mark-one" viewBox="0 0 180 260">
        <path d="M154 8C104 38 45 66 62 112c14 38 77 21 61 68-10 29-62 36-92 65" />
        <path d="M126 34c-12 31-24 59-52 82" />
      </svg>

      <svg className="ink-mark ink-mark-two" viewBox="0 0 220 180">
        <path d="M10 146c38-8 42-62 77-69 35-8 47 39 79 22 19-10 20-38 44-58" />
      </svg>

      <svg className="ink-mark ink-mark-three" viewBox="0 0 180 240">
        <path d="M24 20c48 18 96 28 110 66 12 32-23 48-56 68-26 16-39 42-28 76" />
        <path d="M66 176c26 8 55 3 82-13" />
      </svg>
    </div>
  );
};

export default InkFlow;
