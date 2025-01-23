export default function Log({turnList}){
return (
    <ol id="log">
    {turnList.map(turn=> <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li> )}
    </ol>
)
}