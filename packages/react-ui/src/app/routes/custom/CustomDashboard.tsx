"use client"
import {User} from '@activepieces/shared'

import {NamesChart, LastNamesChart} from './Charts'
import UsersTable from './Table'

const CustomDashboard = ({users}:{users:User[]})=> {
  const getData = (arr:string[])=>{
    const map = new Map<string, number>()
    arr.forEach(name=>map.set(name, (map.get(name) || 0) + 1))
    return Array.from(map).map(([name, number])=>({name,number}))
  }

  return (
    <div className='flex m-16 space-x-8'>
      <div className='flex-1'>
        <UsersTable data={users}/>
      </div>
      <div className='flex-1'>
        <NamesChart data={getData(users.map(user=>user.firstName))}/>
      </div>
      <div className='flex-1'>
        <LastNamesChart data={getData(users.map(user=>user.lastName))}/>
      </div>
    </div>
  )
}

export default CustomDashboard


