import { Nullable } from 'src/common/nullable'

export interface GetEngineOutput {
  id: string
  healthScore: number
  serialNumber: string
  flyingHoursAccumulated: number
  cyclesSinceLastOverhaul: number
  isInstalled: boolean
  status: string
  aircraftId: Nullable<string>
}
