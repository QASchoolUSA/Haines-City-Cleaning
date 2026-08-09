import {
  BATH_RATE,
  SQFT_BANDS,
  bedroomBase,
  bedroomLabel,
  commercialByBand,
  postByBand,
} from "@/lib/pricing";

export type PriceRow = { label: string; price: number };

/** Derived from the live quote engine so the page can never drift from the calculator. */
export const residentialRows: PriceRow[] = Object.entries(bedroomBase).map(
  ([bedrooms, price]) => ({
    label: bedroomLabel(Number(bedrooms)),
    price,
  })
);

export const commercialRows: PriceRow[] = SQFT_BANDS.map((band) => ({
  label: band.label,
  price: commercialByBand[band.key],
}));

export const postRows: PriceRow[] = SQFT_BANDS.map((band) => ({
  label: band.label,
  price: postByBand[band.key],
}));

export { BATH_RATE };
