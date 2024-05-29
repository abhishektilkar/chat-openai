import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: messages
        });

        const stream = OpenAIStream(response);

        return new StreamingTextResponse(stream);
    } catch(e) {
        return NextResponse.next()
    }

}