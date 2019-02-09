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
  const result = []
  const match_tree = {
    qm: [], qf: [], sf: [], f: []
  }

  for (const match of matches) {
    match_tree[match.comp_level].push(match)
  }

  for (const comp_level in match_tree) {
    result.push(...match_tree[comp_level].sort((a, b) => parseInt(a.number) - parseInt(b.number)))
  }
  return result
}