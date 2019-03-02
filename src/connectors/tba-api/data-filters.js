import * as _ from "lodash"

const compLevelOrder = {
  qm: 0,
  qf: 1,
  sf: 2,
  f: 3
}

export function filterScoutingMenuProperties(matches) {
  return matches.map(match => {
    return {
      number: match.match_number,
      set_number: match.set_number,
      blue: match.alliances.blue.team_keys,
      red: match.alliances.red.team_keys,
      comp_level: match.comp_level,
      name: match.comp_level + match.match_number + "m" + match.set_number
    }
  })
}

export function sortMatchesByCompLevel(matches) {
  return _.chain(matches)
    .groupBy(match => compLevelOrder[match.comp_level])
    .map(matches_list =>
      _.chain(matches_list)
        .groupBy("set_number")
        .map(matches_by_set => _.sortBy(matches_by_set, "number"))
        .toArray()
        .flatten().
        value())
    .toArray()
    .flatten()
    .value()
}

export function filterTeamProperties(teams) {
  return _.map(teams, (team) => team.key)
}