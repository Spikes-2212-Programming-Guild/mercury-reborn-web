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
      blue: match.alliances.blue.team_keys,
      red: match.alliances.red.team_keys,
      comp_level: match.comp_level
    }
  })
}

export function sortMatchesByCompLevel(matches) {
  return matches.sort((a, b) => {
    a = compLevelOrder[a]
    b = compLevelOrder[b]
    if (a > b) return 1;
    if (a < b) return -1;
    return 0
  })
}