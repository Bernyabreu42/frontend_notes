
export default function NotNotes({ error }) {
  return (
    <div className="not_Notes">
      <img src="/empty.png" draggable="false" />
      <h3>{error}</h3>
    </div>
  );
}
