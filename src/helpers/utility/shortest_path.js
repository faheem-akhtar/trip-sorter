const minBy = require('lodash/minBy')

const buildGraph = (data) => {
  const graph = data.reduce((result, item) => {
    const departure = result[item.departure] || {}
    const arrival = result[item.departure] ? (result[item.departure][item.arrival] || []) : []
    return {
      ...result,
      [item.departure]: {
        ...departure,
        [item.arrival]: [
          ...arrival,
          ...[item]
        ]
      }
    }
  }, {});


  return graph;
}

export const findShortestPath = (fromCity, toCity, data, field) => {
  const visitedNodes = [];
  let finalPath = [];
  let graphCost = {
    [fromCity]: 0,
    [toCity]: Infinity
  };
  let path = {};
  // build graph base on data
  const graph = buildGraph(data)

  // validation
  if (!graph[fromCity]) {
    return []
  }

  const getNextNode = () => {
    const nextNode = Object.keys(graphCost).reduce((result, key) => {
      if (visitedNodes.indexOf(key) < 0) {
        result = !result ? key : (graphCost[result] < graphCost[key] ? result : key)
      }
      return result
    }, '')
    return graphCost[nextNode] !== Infinity ? nextNode : null
  }

  let nodeKey = getNextNode()
  let node = graph[nodeKey]

  while (nodeKey && node) {
    const cost = graphCost[nodeKey]
    // loop through the children nodes
    // eslint-disable-next-line
    Object.keys(node).forEach(childKey => {
      const child = node[childKey]
      const cheapChild = minBy(child, field)
      const calculatedCost = cost + cheapChild[field]
      if (graphCost[childKey] !== 0) {
        if (!graphCost[childKey]) {
          graphCost[childKey] = calculatedCost
          path[childKey] = { parent: nodeKey, via: cheapChild };
        }
        if (graphCost[childKey] > calculatedCost) {
          graphCost[childKey] = calculatedCost
          path[childKey] = { parent: nodeKey, via: cheapChild };
        }
      } else {
        path[childKey] = { parent: nodeKey, via: cheapChild };
      }
    })

    visitedNodes.push(nodeKey)

    nodeKey = getNextNode()
    node = graph[nodeKey]
  }

  // build final path
  var nextCity = toCity
  while (nextCity && nextCity !== fromCity) {
    if (path[nextCity]) {
      finalPath.push(path[nextCity].via)
      nextCity = path[nextCity].parent
    } else {
      nextCity = null
    }
  }

  return finalPath.reverse();
}
