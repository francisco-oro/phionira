// /api/course/createChapters

import { NextResponse } from "next/server";
import { createChaptersSchema } from "@/validators/course";
import { ZodError } from "zod";
import { strict_output } from "@/lib/gpt";
import { getUnsplashImage } from "@/lib/unsplash";
import { prisma } from "@/lib/db";

export async function POST(req: Request, res: Response){
  try {
    const body = await req.json();
    const { title, units } = createChaptersSchema.parse(body);

    type outputUnits = {
      title: string;
      chapters: {
        youtube_search_query: string;
        chapter_title: string;
      }[]
    }

    let output_units = await strict_output(
      `You are an AI capable of curating course content, coming up with relevant chapter titles and finding relevant youtube videos for each chapter`,
      new Array(units.length).fill(`It is your job to create a course about ${title}. The user has requested to create chapters for each one of the units. Then, for each chapter, provide a detailed youtube search query that can be used to find an informative educational video for each chapter. Each query should five an Educational informative course in Youtube. It is very important to look for results in spanish`
    ), 
    {
      title: 'title of the unit in spanish',
      chapters: 'an array of chapters in spanish, each chapter should have a youtube_search_query and a chapter_title key in the JSON object'
    }
    )

    console.log(output_units);
    return NextResponse.json(output_units);
    
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("Invalid body", { status: 400 });
    }
  }
}