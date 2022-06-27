export const getUniqueValues = (data, type) => {
 let unique = data.map(i => i[type])
 return ['all', ...new Set(unique)]

}