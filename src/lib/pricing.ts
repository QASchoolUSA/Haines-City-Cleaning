export type ServiceType = "residential" | "commercial" | "post-construction";

export type QuoteInput = {
  serviceType: ServiceType;
  sizeKey: string; // e.g., "studio", "1bed", "small"
  level: "standard" | "deep" | "move" | "post";
  addOns: { fridge?: boolean; oven?: boolean; windows?: boolean; cabinets?: boolean; baseboards?: boolean };
};

const baseResidential: Record<string, number> = {
  studio: 99,
  "1bed": 119,
  "2bed": 139,
  "3bed": 169,
  "4plus": 199,
};

const baseCommercial: Record<string, number> = {
  small: 149, // up to ~1000 sqft
  medium: 249, // 1000–3000 sqft
  large: 399, // 3000+ sqft
};

const basePost: Record<string, number> = {
  under1k: 299,
  "1k-2k": 449,
  over2k: 649,
};

const addOnPrices = {
  fridge: 25,
  oven: 25,
  windows: 40,
  cabinets: 30,
  baseboards: 35,
};

export function computeQuote(input: QuoteInput) {
  let base = 0;
  if (input.serviceType === "residential") base = baseResidential[input.sizeKey] ?? 119;
  if (input.serviceType === "commercial") base = baseCommercial[input.sizeKey] ?? 249;
  if (input.serviceType === "post-construction") base = basePost[input.sizeKey] ?? 449;

  let multiplier = 1;
  if (input.level === "deep") multiplier += 0.4;
  if (input.level === "move") multiplier += 0.2; // move-in/out premium
  if (input.level === "post") multiplier += 0.3; // post-construction detailing premium

  const addOnsTotal = Object.entries(input.addOns).reduce((sum, [key, enabled]) => {
    if (!enabled) return sum;
    return sum + (addOnPrices as any)[key];
  }, 0);

  const price = Math.round((base * multiplier + addOnsTotal) / 5) * 5; // round to nearest $5
  const low = Math.round(price * 0.9);
  const high = Math.round(price * 1.1);

  return {
    base,
    multiplier,
    addOnsTotal,
    price,
    range: { low, high },
  };
}