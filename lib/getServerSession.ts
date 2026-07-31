import { getServerSession as getSession } from "next-auth";
import { authOptions } from "./auth";

export async function getServerSession() {
  return getSession(authOptions);
}
