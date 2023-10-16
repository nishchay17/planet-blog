"use server";

import highstorm from "@highstorm/client";

const CHANNEL_NAME =
  process.env.NODE_ENV === "production" ? "planet-blog" : "planet-blog-dev";

export async function analytics(
  event: string = "Default event",
  content: string = "",
  metadata?: Record<string, string | number | boolean | null>
) {
  try {
    highstorm(CHANNEL_NAME, {
      event,
      content,
      metadata,
    });
  } catch (e) {
    console.log(e);
  }
}
