import { useContext } from 'react'
import { UserContext } from '../../Store/UserContext'

const ScoreCard = () => {
    const context = useContext(UserContext)
  return (
    <div>
      <input 
        type="text" 
        value={context?.user.score}
        onChange={(ev)=> context?.updateUser({ score: parseInt(ev.target.value)})}
        placeholder='score'
        />
    </div>
  )
}

export default ScoreCard
