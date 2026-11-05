import React from 'react'

import { industries } from "@/data/industries";
import OnboardingForm from './_components/Onboarding-Form';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
const page = async() => {
    const { isOnboarded } = await getUserOnboardingStatus();
    if(isOnboarded){
        redirect("/dashboard");
    }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>

    
  )
}

export default page