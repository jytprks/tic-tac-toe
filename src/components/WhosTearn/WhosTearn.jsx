const WhosTearn = ({playar}) => {
  return (
    <div style={{fontSize:24}}>
        <span>
        Player 
        </span>
        <span style={{ color: playar === 'x' ? 'red' : 'blue' , fontSize:48}}> {playar.toUpperCase()} </span>
        <span>
         Turn
        </span>
    </div>
  )
}
export default WhosTearn