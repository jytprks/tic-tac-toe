import './Winner.css'
const Winner = ({playar}) => {
    return (
      <>
      <div className='winner' style={{color: playar === 'x' ? ' #FF827E':'blue'}}>Player {playar} won</div>
      </>
    )
  }
  export default Winner