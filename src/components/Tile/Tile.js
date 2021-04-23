import "./Tile.css";

const number;  //there is problem because of typescripts file
export default function Tile() {
  if (number % 2 === 0) {
    return <div className="tile black-tile">Hello</div>;
  } else {
    return <div className="tile white-tile">Hello</div>;
  }
}
