import { NextResponse } from "next/server";

export async function GET(req) {
    console.log(req)

    // headers
    const requestHeader = new Headers(req.headers)
    // console.log("Headers", requestHeader)

    // url query params
    const { searchParams } = new URL(req.url)
    // console.log("Search Params", searchParams.get("search"))


    // another way to fid
    const searchUrl = req.nextUrl.searchParams
    // console.log(searchUrl) 

    // cookee
    const cooke1 = req.cookies;
    console.log("cooke1", cooke1)

    return NextResponse.json({ "name": "sonu kumar", "msg": "Next js First API..." });
}