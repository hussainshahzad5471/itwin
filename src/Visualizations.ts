import { IModelConnection , ScreenViewport } from "@itwin/core-frontend";
import { QueryRowFormat } from "@itwin/core-common";

export class Visualizations {
    public static hideDetails = async  (vp : ScreenViewport) => {

        
      const categoriesToHide: string [] = ["'Wall 2nd'", 
      "'Wall 1st'",
      "'Dry Wall 1st'",
      "'Dry Wall 2nd'",
      "'Brick Exterior'",
      "'WINDOWS 1ST'",
      "'WINDOWS 2ND'",
      "'Ceiling 1st'",
      "'Ceiling 2nd'",
      "'Callouts'",
      "'Roof'"
    ]
    
    const query = `select ECInstanceId from bis.Element where CodeValue in (${categoriesToHide.toString()})`
    const categoryIDs  = [];
    const result = vp.iModel.query(query, undefined, {rowFormat: QueryRowFormat.UseJsPropertyNames})
    for await (const row of result)
        categoryIDs.push(row.id)  
    
        console.log(categoryIDs)

        vp.changeCategoryDisplay(categoryIDs , false);

    }
}