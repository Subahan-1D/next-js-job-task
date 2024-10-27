import BookInfo from "../../../../libs/models/bookInfo";
import { main } from "../../../../libs/config/mongodb";

export const GET = async (request) => {
  try {
    await main();
    const book = await BookInfo.find({})
    return new Response(JSON.stringify(book), {
      status: 200,
    });

  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};
