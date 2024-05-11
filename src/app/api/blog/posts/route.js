import { NextResponse } from "next/server";

export async function GET(req) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            'Content-type': 'application/json',
        }
    });

    const posts = await res.json();
    // console.log("result: ", posts)
    return NextResponse.json({ "data": posts }, { status: 200 });
}
