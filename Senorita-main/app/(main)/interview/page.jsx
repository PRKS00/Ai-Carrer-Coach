import { getAssessments } from '@/actions/interview'
import React from 'react'
import StatsCards from './_components/statscard';
import PerformanceChart from './_components/performance';
import QuizList from './_components/quizlist';

const page = async() => {
    const assessments= await getAssessments();
  return (
    <div>
        <div className='space-y-6'>
            <h1 className='text-6xl font-bold gradient-title'>
                Interview Preparation
            </h1>
            <div>
                <StatsCards assessments={assessments}/>
                <PerformanceChart assessments={assessments}/>
                <QuizList assessments={assessments}/>
            </div>
        </div>
    </div>
  )
}

export default page