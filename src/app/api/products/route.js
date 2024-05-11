import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log(req)

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
    // console.log("cooke1", cooke1)

    return NextResponse.json({ "name": "sonu kumar", "msg": "Next js First API..." });
}

// Post request
export async function POST(req) {
    // console.log(req)
    // console.log("Post success...")

    // one way to post data
    // const res = await req.json();
    // console.log("resjson: ", res)

    // another way to post form data
    const formData = await req.formData();
    console.log("sendFormData: ", formData)
    console.log("sendFormData: ", formData.get("name"))
    console.log("sendFormData: ", formData.get("home"))


    return NextResponse.json({ "status": "post success..." }, {status: 201})
}