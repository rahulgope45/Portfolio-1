import React from 'react'
import GitHubCalendar from 'react-github-calendar';


function GitContributions({rahulgope45}) {

  const explicitTheme ={
     light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a34c', '#48e063']


  }

  const loadingfallback = () =>{
    <div className="p-6 text-center text-gray-500 font-semibold">
      Loading contributions... ⏳
    </div>
  }


  return (
    <div className="mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl overflow-x-auto">
       <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 border-b pb-2 border-gray-300 dark:border-gray-700">
        My GitHub Activity
      </h2>
      <GitHubCalendar
      username='rahulgope45'
      fontSize={14}
        blockSize={12}
        blockMargin={4}
        showWeekdayLabels
        hideTotalCount={false}
      
       theme={explicitTheme} 
       loading={loadingfallback()}
       
       labels={{
            totalCount: '{{count}} contributions in the last year',
        }}

      
      />

    </div>
  )
}

export default GitContributions