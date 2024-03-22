import { useStore } from '../../Store/Zustand'


const ScoreCardZ = () => {
  const score = useStore(s => s.user.score)
  const updateUser = useStore(s => s.updateUser)

  return (
    <div>
      <input 
        type="text" 
        value={score}
        onChange={(ev)=> updateUser({ score: parseInt(ev.target.value)})}
        placeholder='score'
        />
    </div>
  )
}

export default ScoreCardZ
