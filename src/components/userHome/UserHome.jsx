import React from 'react'
import { Header } from '../header/Header'
import { PostSection } from '../postSection/PostSection'
import { UserProfile } from '../userProfile/UserProfile'
import { Footer } from '../footer/Footer'
import './UserHome'

export const UserHome = () => {
  return (
    <div>
        <Header />
        <UserProfile />
        <PostSection />
        <Footer />
    </div>
  )
}
