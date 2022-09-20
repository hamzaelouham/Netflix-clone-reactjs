import nookies from "nookies";
import { verifyTokenId } from "./firebaseAdmin";

export async function Protect(ctx, cb) {
  try {
    const cookies = nookies.get(ctx);
    const token = await verifyTokenId(cookies.token);
    return cb(token);
  } catch (err) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();

    return { props: {} };
  }
}

export async function ProtectAfterAuth(ctx) {
  const cookies = nookies.get(ctx);
  const token = await verifyTokenId(cookies.token);
  if (token) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
    return { props: {} };
  }
  return { props: {} };
}
