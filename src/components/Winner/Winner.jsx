import "./Winner.css";
const Winner = ({ playar }) => {
  return (
    <>
      <div
        className="winner"
        style={{ color: playar === "x" ? " #FF827E" : "blue" }}
      >
        Player <span style={{ fontSize: 48 }}>{playar}</span> won
      </div>
    </>
  );
};
export default Winner;
