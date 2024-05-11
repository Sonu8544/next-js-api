import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    console.log("req: ", req)
    console.log("params: ", params.id)

    return NextResponse.json({ "msg: ": "cuccess msg..." }, { status: 200 })
}

