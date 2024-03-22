import { useStore } from '../../Store/Zustand'

const ProfileZ = () => {
  const fullName = useStore(s => s.user.fullName)
  const email = useStore(s => s.user.email)
  const updateUser = useStore(s => s.updateUser)

  return (
    <div>
      <input 
        type="text" 
        value={fullName}
        onChange={(ev)=> updateUser({ fullName: ev.target.value})}
        placeholder='Full name'
        />
      <input 
        type="email" 
        value={email}
        onChange={(ev)=> updateUser({ email: ev.target.value})}
        placeholder='email'
        />
    </div>
  )
}

export default ProfileZ
