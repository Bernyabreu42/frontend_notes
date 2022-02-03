import Actions from "./Actions";

export default function Note() {
  return (
    <div className="note">
      <input type="text" maxLength={17} placeholder="Type a title..." />
      <h3>
        ultima actualizacion:
        <span>fecha</span>
      </h3>
      <textarea cols="30" maxLength={120} rows="10" placeholder='Type a description' />
      <Actions />
    </div>
  );
}
