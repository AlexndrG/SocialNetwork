export const updateObjectInArray = (items: any[], objPropName: string, userId: number, newObjProps: any) => {
    return items.map(u => u[objPropName] === userId ? {...u, ...newObjProps} : u)
}