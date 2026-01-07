// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const res = await fetch(
//       "https://connections-api.goit.global/users/signup",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       }
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       return NextResponse.json(
//         { message: data.message || "Register failed" },
//         { status: res.status }
//       );
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }
