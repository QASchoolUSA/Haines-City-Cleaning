export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hainescitycleaning.com";

export const siteName = "Haines City Cleaning";

export const businessPhone = "+18633587388";
export const businessPhoneDisplay = "(863) 358-7388";
export const businessEmail = "hello@hainescitycleaning.com";

export const googleBusinessUrl =
  process.env.NEXT_PUBLIC_GBP_URL ?? "";

export const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "";

export function absoluteUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
}
