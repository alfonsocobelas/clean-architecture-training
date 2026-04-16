import { Nullable } from 'src/modules/shared/types'

export interface GetEngineOutput {
    id: string;
    healthScore: number;
    serialNumber: string;
    flyingHoursAccumulated: number;
    cyclesSinceLastOverhaul: number;
    isInstalled: boolean;
    status: string;
    aircraftId: Nullable<string>;
}
