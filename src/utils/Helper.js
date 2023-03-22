export function filterData(inSno, sheetData){
    const data =  sheetData.filter((tree)=> tree.sno === inSno);
    return data;
}