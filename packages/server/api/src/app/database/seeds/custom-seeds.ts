import { logger, SharedSystemProp, system } from '@activepieces/server-shared'
import { ApEnvironment, PlatformRole} from '@activepieces/shared'
import { FlagEntity } from '../../flags/flag.entity'
import { databaseConnection } from '../database-connection'
import { platformService} from '../../platform/platform.service'
import {userService} from '../../user/user-service'

const CUSTOM_SEEDED_FLAG = "DEV_CUSTOM_SEEDED"
export const ensureCustomSeeds = async ()=>{
  const isDev = system.get(SharedSystemProp.ENVIRONMENT) == ApEnvironment.DEVELOPMENT
  const alreadySeeded = (await databaseConnection()
    .getRepository(FlagEntity)
    .findOneBy({ id: CUSTOM_SEEDED_FLAG }))
    ?.value === true
  
  const platformId = (await platformService.getOldestPlatform())?.id
  if(isDev && !alreadySeeded && platformId){
    for(let i =1; i<=10; i++){
      userService.create({
        email:`email_${i}@example.com`,
        password: '12345',
        firstName: i<3?'John':i<6?'Mark':'Sue',
        lastName: i%2? i%3? "Smith":"Bigs":"Crow",
        trackEvents: false,
        newsLetter: false,
        verified: true,
        platformId,
        platformRole: PlatformRole.MEMBER
      })
    }
    await databaseConnection()
      .getRepository(FlagEntity)
      .save({
        id: CUSTOM_SEEDED_FLAG,
        value: true,
    })
    logger.info({ name: 'seedCustomData' }, 'done')
  }else{
    logger.info({ name: 'seedCustomData' }, 'skip: already seeded or not dev')
  }
}
