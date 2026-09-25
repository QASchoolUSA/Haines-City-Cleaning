import {
  DEFAULT_PRICING_CONFIG,
  SERVICE_LABELS,
  bedroomLabel,
  commercialPrices,
  minimumBase,
  postPrices,
  type PricingConfig,
  type ServiceTypeId,
} from "@/lib/pricing";

export type PriceRow = { label: string; price: number };

const SERVICE_ORDER: ServiceTypeId[] = [
  "house",
  "apartment",
  "maintenance",
  "deep",
  "move",
  "airbnb",
  "post-construction",
];

/** Derived from the live quote engine so the page can never drift from the calculator. */
export function residentialRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  const floors = minimumBase(config);
  const br = config.bedroomRate;
  return [0, 1, 2, 3, 4].map((bedrooms) => ({
    label: bedroomLabel(bedrooms),
    price: floors.house + bedrooms * br,
  }));
}

export function commercialRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  const prices = commercialPrices(config);
  return [
    { label: "Small (~800 sq ft)", price: prices.small },
    { label: "Medium (~2,000 sq ft)", price: prices.medium },
    { label: "Large (~4,000 sq ft)", price: prices.large },
  ];
}

export function postRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  const prices = postPrices(config);
  return [
    { label: "Under 1,000 sq ft", price: prices.under1k },
    { label: "1,000–2,000 sq ft", price: prices["1k-2k"] },
    { label: "2,000+ sq ft", price: prices.over2k },
  ];
}

export function serviceFloorRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  const floors = minimumBase(config);
  return SERVICE_ORDER.map((key) => ({
    label: SERVICE_LABELS[key],
    price: floors[key],
  }));
}

/** Per-bathroom add-on in the sqft-rate-min engine. */
export function bathRate(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
  return config.bathroomRate;
}
