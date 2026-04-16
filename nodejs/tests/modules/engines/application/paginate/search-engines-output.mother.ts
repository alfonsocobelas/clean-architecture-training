import { Nullable } from 'src/common/nullable'
import { Engine } from 'src/modules/engines/domain/engine'
import { SearchEnginesOutput } from 'src/modules/engines/application/paginate/search-engines-output.dto'
import { CursorPaginatedOutput } from 'src/modules/shared/application/search-output.dto'

export class SearchEnginesOutputMother {
  static fromDomain(
    items: Engine[],
    hasMore: boolean,
    nextCursor: Nullable<string>
  ): CursorPaginatedOutput<SearchEnginesOutput> {
    return {
      nextCursor,
      hasMore,
      items: items.map(engine => ({
        id: engine.id,
        serialNumber: engine.serialNumber,
        healthScore: engine.healthScore,
        flyingHoursAccumulated: engine.flyingHoursAccumulated,
        cyclesSinceLastOverhaul: engine.cyclesSinceLastOverhaul,
        status: engine.status
      }))
    }
  }

  static empty(): CursorPaginatedOutput<SearchEnginesOutput> {
    return this.fromDomain([], false, null)
  }
}
