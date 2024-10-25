import { main } from "../../../libs/config/mongodb";
export async function GET() {
  main();
  return Response.json({
    message: "Hello Server",
  });
}
export async function POST() {
  main();
  return Response.json({
    message: "Hello Server mongodb",
  });
}
