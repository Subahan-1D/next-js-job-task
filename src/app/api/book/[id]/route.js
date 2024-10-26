import BookInfo from "../../../../../libs/models/bookInfo";
import { main } from "../../../../../libs/config/mongodb";


export const DELETE = async (request ,{params}) =>{
    try{
        await main()
        await BookInfo.findByIdAndDelete(params.id)
        return new Response("Delete Successfully" , {status:200})
    }
    catch(error){
        console.log(error.message)
        return new Response("Delete Failed" , {status:404})
    }
}