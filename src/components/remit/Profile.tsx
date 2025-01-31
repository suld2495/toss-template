import Image from "next/image";
import profile from '@/assets/profile.jpg';

const Profile = () => (
  <div className="rounded-full overflow-hidden w-10 h-10 relative">
    <Image 
      src={profile} 
      alt="프로필 이미지"
      fill
    />
  </div>
)

export default Profile;