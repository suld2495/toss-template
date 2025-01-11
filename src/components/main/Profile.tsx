import Image from "next/image";
import profile from '@/assets/profile.jpg';

const Profile = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="profile rounded-full overflow-hidden">
        <Image 
          src={profile} 
          width={50} 
          height={50} 
          alt="프로필"
        />
      </div>
      <span className="info font-bold">김토스</span>
    </div>
  );
};

export default Profile;