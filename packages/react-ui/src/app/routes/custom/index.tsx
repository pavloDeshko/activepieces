import { useEffect, useState } from 'react'

import { api } from '@/lib/api'
import {User} from '@activepieces/shared'
import { toast, INTERNAL_ERROR_TOAST} from '@/components/ui/use-toast'

import CustomDashboard from './CustomDashboard'
const Custom = ()=>{
  const [data, setData] = useState<User[]>([])

  const fetchData = async()=>{
    try{
      setData((await api.get<{data:User[]}>('/v1/users')).data)
    }catch{
      toast(INTERNAL_ERROR_TOAST)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return data.length ? (
    <CustomDashboard users={data}/>
  ) :<div className='flex justify-center items-center m-4 text-2xl'>'Loading..'</div>
}
export default Custom