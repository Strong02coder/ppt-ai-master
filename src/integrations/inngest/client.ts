import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "ppt-ai",
  isDev: process.env.NODE_ENV === "development",
});