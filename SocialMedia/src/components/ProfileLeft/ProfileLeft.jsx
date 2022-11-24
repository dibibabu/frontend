import React from 'react'
import LogoSearch from '../../components/logosearch/LogoSearch'
import FollowersCard from '../../components/followersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'


const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>

  )
}

export default ProfileLeft