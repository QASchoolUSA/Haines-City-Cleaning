export type CommunityServiceLink = {
  href: string;
  label: string;
};

export type Community = {
  slug: string;
  name: string;
  city: "Haines City";
  county: "Polk County";
  state: "FL";
  shortBlurb: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  context: string;
  housingNotes: string;
  accessNotes: string;
  priorities: string[];
  aeoQuestion: string;
  aeoAnswer: string;
  howVisitsWork: string;
  servicesFeatured: CommunityServiceLink[];
  nearbyCommunities: string[];
  faqs: { q: string; a: string }[];
};

const SHARED_SERVICES: CommunityServiceLink[] = [
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/residential-cleaning", label: "Maintenance & Housekeeping" },
  { href: "/post-construction-cleaning", label: "Post-Construction Cleaning" },
  { href: "/move-in-cleaning", label: "Move-In Cleaning" },
  { href: "/move-out-cleaning", label: "Move-Out Cleaning" },
  { href: "/airbnb-cleaning", label: "Airbnb / Turnover Cleaning" },
];

export const communities: Community[] = [
  {
    slug: "marion-ridge",
    name: "Marion Ridge",
    city: "Haines City",
    county: "Polk County",
    state: "FL",
    shortBlurb:
      "Family-friendly house cleaning and housekeeping throughout Marion Ridge streets and cul-de-sacs.",
    metaTitle: "House Cleaning Marion Ridge | Haines City, FL",
    metaDescription:
      "Proudly serving Marion Ridge in Haines City, FL with house cleaning, maintenance housekeeping, and post-construction cleaning. Local Polk County crew—request a quote.",
    keywords: [
      "house cleaning Marion Ridge Haines City",
      "maid service Marion Ridge FL",
      "housekeeping Marion Ridge",
      "post construction cleaning Marion Ridge",
      "residential cleaning Haines City FL",
    ],
    intro:
      "Haines City Cleaning is proud to serve homeowners throughout Marion Ridge in Haines City, FL. From busy weeknight kitchens to weekend guest baths, we bring dependable house cleaning, maintenance housekeeping, and post-construction cleanup to homes along Marion Ridge’s streets and quiet cul-de-sacs—so your family can enjoy Polk County living without the constant scrub list.",
    context:
      "Marion Ridge is a family-oriented planned community where everyday life leaves a clear footprint: backpacks by the door, after-school snacks on counters, pets tracking fine Central Florida pollen, and bathrooms that work hard in Florida humidity. Homes here typically mix open living areas with multiple baths, tile or hard floors at entries, and ceiling fans that collect AC dust between visits. A smart cleaning plan for Marion Ridge focuses on high-traffic zones first, then rotates detail work so baseboards, vents, and window tracks never become a once-a-year crisis.",
    housingNotes:
      "Expect active households with kids and pets, mid-size floor plans, and finishes that show humidity film on shower glass and hard-water spots on fixtures. Open kitchens and island seating mean grease and crumbs travel farther than a single sink wipe can cover. We adjust dwell time in baths and kitchens so maintenance visits keep pace with real family use—not a generic checklist written for empty model homes.",
    accessNotes:
      "Share gate or HOA entry instructions, preferred parking, pets on-site, and any alarm notes when you book. If your street has limited parking during school drop-off hours, tell us the best window so the crew arrives ready to work without blocking neighbors.",
    priorities: [
      "Kitchen counters, sinks, and appliance exteriors after weeknight cooking",
      "Bathroom humidity control—shower glass, fixtures, and floors",
      "Entry floors and high-traffic paths after outdoor play or pets",
      "Ceiling fans, AC returns, and pollen on window sills",
      "Rotating baseboards and detail work so buildup never snowballs",
    ],
    aeoQuestion:
      "What house cleaning and housekeeping services does Haines City Cleaning provide in Marion Ridge?",
    aeoAnswer:
      "Haines City Cleaning provides house cleaning, recurring maintenance housekeeping, and post-construction cleaning for Marion Ridge homes in Haines City, FL. Crews prioritize kitchens, humidity-prone bathrooms, entry floors, and AC dust—then set a weekly or biweekly rhythm matched to family traffic, pets, and Polk County pollen seasons.",
    howVisitsWork:
      "Most Marion Ridge families choose weekly service when kids, pets, or frequent cooking keep surfaces busy, or biweekly service when the home needs steady maintenance without a weekly commitment. One-time deep cleans reset bathrooms and kitchens before recurring visits begin. After renovations or new construction punch lists, we schedule post-construction cleaning so fine dust is removed before furniture and textiles absorb it. Every visit starts from your access notes and ends with the rooms that matter most for how your household actually lives.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: [
      "cedar-crossings",
      "covered-bridge",
      "bradbury-creek",
      "summerview-crossing",
      "tarpon-bay",
    ],
    faqs: [
      {
        q: "Do you clean homes throughout Marion Ridge in Haines City?",
        a: "Yes. Haines City Cleaning serves Marion Ridge addresses across the community’s streets and cul-de-sacs, subject to route availability. Include your full address, preferred date, and gate or parking notes when requesting a quote.",
      },
      {
        q: "Is weekly or biweekly housekeeping better for a Marion Ridge family home?",
        a: "Weekly visits suit active homes with children, pets, or frequent guests. Biweekly maintenance cleaning works well for smaller households or lighter weekday use. We help you choose based on bathrooms, floor type, and how quickly kitchens and baths show humidity film.",
      },
      {
        q: "Can you handle post-construction cleaning after a Marion Ridge remodel?",
        a: "Yes. After builds or renovations we remove fine drywall dust, wipe protected surfaces carefully, and detail floors, fixtures, and vents so the home is ready for everyday living—not just a quick broom pass.",
      },
      {
        q: "What should I prepare before a housekeeping visit?",
        a: "Clear personal items from counters when possible, secure pets, and confirm access instructions. Note any specialty finishes, allergy preferences, or rooms to skip. Quotes reflect home size, bathrooms, condition, frequency, and agreed add-ons.",
      },
      {
        q: "Do you also serve nearby Haines City communities?",
        a: "We proudly serve Marion Ridge alongside nearby communities such as Cedar Crossings, Covered Bridge, Bradbury Creek, Summerview Crossing, and Tarpon Bay—plus broader Polk County routes when scheduling allows.",
      },
    ],
  },
  {
    slug: "cedar-crossings",
    name: "Cedar Crossings",
    city: "Haines City",
    county: "Polk County",
    state: "FL",
    shortBlurb:
      "Newer-home specialists—post-construction resets and ongoing house cleaning in Cedar Crossings.",
    metaTitle: "House Cleaning Cedar Crossings | Haines City, FL",
    metaDescription:
      "House cleaning and post-construction cleaning for Cedar Crossings in Haines City, FL. We clear settle dust, then keep kitchens and baths on a maintenance schedule.",
    keywords: [
      "house cleaning Cedar Crossings Haines City",
      "post construction cleaning Cedar Crossings",
      "maid service Cedar Crossings FL",
      "new home cleaning Haines City",
      "residential cleaning Cedar Crossings",
    ],
    intro:
      "Cedar Crossings homeowners in Haines City, FL often need two kinds of help: a thorough reset after construction or move-in dust, then reliable house cleaning that keeps open-concept kitchens and new baths looking intentional. Haines City Cleaning is proud to serve Cedar Crossings with post-construction cleaning, one-time deep cleans, and maintenance housekeeping along the community’s streets.",
    context:
      "Newer planned-community homes in Cedar Crossings commonly feature larger open kitchens, multiple bathrooms, light tile or LVP floors, and tall ceilings that collect fine dust long after the builders leave. Construction settle dust hides on window tracks, closet shelves, ceiling fans, and inside AC returns—places a quick wipe never reaches. Once the home is lived-in, Florida humidity and hard water start building film on shower glass while pollen sticks to still-new window sills. Our Cedar Crossings plans start with a serious dust-and-detail pass, then shift to a maintenance cadence that protects those finishes.",
    housingNotes:
      "Fresh paint, new cabinets, and open floor plans look great—and show every fingerprint and dust ring. We use methods appropriate for newer surfaces, pay attention to manufacturer-friendly care on sealed floors and fixtures, and treat post-construction work as a dedicated scope (not a standard weekly clean squeezed into the same minutes).",
    accessNotes:
      "New residents sometimes share temporary access codes or builder-related entry notes. Send the current gate procedure, preferred parking, and whether construction crews are still on-site so we can schedule around punch-list traffic.",
    priorities: [
      "Fine construction and settle dust on fans, vents, tracks, and shelves",
      "Kitchen islands, cabinet exteriors, and appliance fronts",
      "New shower glass and fixtures before hard-water film sets in",
      "Floor edges and baseboards in open living areas",
      "A clear handoff from post-construction reset to recurring housekeeping",
    ],
    aeoQuestion:
      "Do you offer post-construction and house cleaning in Cedar Crossings, Haines City?",
    aeoAnswer:
      "Yes. Haines City Cleaning offers post-construction cleaning and ongoing house cleaning for Cedar Crossings in Haines City, FL. We remove fine settle dust from fans, vents, tracks, and floors, then switch to weekly or biweekly housekeeping that protects new kitchens, baths, and hard floors from humidity and pollen.",
    howVisitsWork:
      "Many Cedar Crossings clients book a post-construction or move-in deep clean first, then convert to maintenance housekeeping once dust stops redistributing. Weekly service fits new households still unpacking and cooking every night; biweekly service suits lighter occupancy. If a renovation room is still taped off, we can clean the finished zones and return for a final construction pass when the job is complete.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: [
      "marion-ridge",
      "covered-bridge",
      "bradbury-creek",
      "summerview-crossing",
      "tarpon-bay",
    ],
    faqs: [
      {
        q: "When should I schedule post-construction cleaning in Cedar Crossings?",
        a: "Book after major dusty work is finished and before heavy furniture and textiles go in when possible. If punch-list items remain, tell us which rooms are ready so we can plan a primary clean and, if needed, a follow-up pass.",
      },
      {
        q: "Is new-home dust different from everyday dust in Haines City?",
        a: "Yes. Construction and settle dust is finer and travels into tracks, vents, and high surfaces. A standard maintenance visit is not enough for a first reset—Cedar Crossings homes usually need a dedicated post-construction or deep-clean scope first.",
      },
      {
        q: "Can you switch us to recurring house cleaning afterward?",
        a: "Absolutely. Once the reset is complete, we set a weekly or biweekly housekeeping schedule focused on kitchens, baths, floors, and the detail rotation that keeps newer finishes looking sharp in Polk County humidity.",
      },
      {
        q: "Do you clean throughout Cedar Crossings streets?",
        a: "We serve Cedar Crossings addresses across the community, subject to scheduling. Include your address, access notes, home size, and whether you need post-construction, deep, or maintenance cleaning.",
      },
      {
        q: "What about move-in cleaning for a new Cedar Crossings purchase?",
        a: "Move-in cleaning pairs well with new construction dust removal—cabinets, baths, floors, and fixtures get a careful pass so you start with a clean baseline before boxes and routines take over.",
      },
    ],
  },
  {
    slug: "covered-bridge",
    name: "Covered Bridge",
    city: "Haines City",
    county: "Polk County",
    state: "FL",
    shortBlurb:
      "Quiet residential housekeeping with HOA-friendly access for Covered Bridge homes.",
    metaTitle: "House Cleaning Covered Bridge | Haines City, FL",
    metaDescription:
      "Trusted house cleaning and housekeeping in Covered Bridge, Haines City, FL. HOA-aware access, maintenance cleaning, and post-construction support from a local crew.",
    keywords: [
      "house cleaning Covered Bridge Haines City",
      "maid service Covered Bridge FL",
      "housekeeping Covered Bridge",
      "residential cleaning Covered Bridge Haines City",
      "HOA cleaning service Haines City",
    ],
    intro:
      "Covered Bridge is one of the Haines City, FL communities we are proud to serve with calm, consistent residential cleaning. Whether you need discreet weekly housekeeping, a deeper seasonal reset, or post-construction cleanup after a remodel, Haines City Cleaning works with your access preferences so visits feel respectful of neighbors and HOA norms along Covered Bridge streets.",
    context:
      "Covered Bridge homes often sit in a quieter residential rhythm—less vacation churn, more everyday living. That still means Florida bathrooms need humidity attention, kitchens collect weeknight grease, and entries bring in pollen and grit after afternoon storms. Planned-community layouts may include gated or controlled access, limited street parking, and HOA expectations about vendor vehicles and work hours. We plan Covered Bridge visits around those realities: clear entry instructions, predictable arrival windows, and a checklist that keeps lived-in homes fresh without disrupting the street.",
    housingNotes:
      "Expect a mix of established floor plans and updated interiors. Many households want reliable maintenance more than dramatic one-off cleans—steady kitchens, baths, floors, and dust control. When renovations happen, we treat post-construction dust as its own scope so fine particles do not linger in still-quiet guest rooms and closets.",
    accessNotes:
      "If Covered Bridge uses a gate code, call box, or visitor procedure, send current instructions with your booking. Note preferred parking, quiet hours if your HOA publishes them, and whether someone will be home. We follow your access plan so the crew never has to improvise at the entrance.",
    priorities: [
      "Reliable kitchen and bathroom maintenance on a set cadence",
      "Entry floors and pollen control after Florida weather",
      "Discreet scheduling that respects HOA and neighbor norms",
      "Dust on fans, vents, and quieter guest spaces",
      "Post-remodel detail cleaning when projects wrap",
    ],
    aeoQuestion:
      "How does house cleaning work for Covered Bridge homes in Haines City?",
    aeoAnswer:
      "Haines City Cleaning provides house cleaning and housekeeping for Covered Bridge in Haines City, FL using your gate or HOA access notes, preferred parking, and schedule. Visits focus on kitchens, humidity-prone bathrooms, entry floors, and dust control, with weekly or biweekly maintenance—and post-construction cleaning when renovations finish.",
    howVisitsWork:
      "Covered Bridge clients often prefer a standing weekly or biweekly appointment so the same rhythm becomes part of the household calendar. We confirm access before arrival, work the agreed rooms thoroughly, and keep communication simple if codes change. Seasonal deep cleans or post-construction visits can be slotted between regular housekeeping without losing the maintenance cadence.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: [
      "marion-ridge",
      "cedar-crossings",
      "bradbury-creek",
      "summerview-crossing",
      "tarpon-bay",
    ],
    faqs: [
      {
        q: "Can your crew enter Covered Bridge with a gate code?",
        a: "Yes—when you provide current gate, call-box, or HOA visitor instructions. Update us if codes change so arrival stays smooth for you and your neighbors.",
      },
      {
        q: "Do you offer quiet, daytime housekeeping in Covered Bridge?",
        a: "We schedule residential visits during normal service hours and follow any access or parking notes you share. Tell us if you need a specific window for HOA or household reasons.",
      },
      {
        q: "Is maintenance cleaning available without a deep clean first?",
        a: "If the home is already in good shape, recurring housekeeping can start immediately. If bathrooms, kitchens, or baseboards show buildup, a deep reset first makes later maintenance visits more effective.",
      },
      {
        q: "Do you provide post-construction cleaning after Covered Bridge remodels?",
        a: "Yes. We remove fine dust from floors, fixtures, vents, and tracks after renovations so the home returns to a comfortable residential standard.",
      },
      {
        q: "Which nearby communities do you also serve?",
        a: "Alongside Covered Bridge, we serve Marion Ridge, Cedar Crossings, Bradbury Creek, Summerview Crossing, Tarpon Bay, and other Haines City / Polk County addresses based on route availability.",
      },
    ],
  },
  {
    slug: "bradbury-creek",
    name: "Bradbury Creek",
    city: "Haines City",
    county: "Polk County",
    state: "FL",
    shortBlurb:
      "Active-home cleaning for Bradbury Creek—floors, kitchens, and outdoor-living soil.",
    metaTitle: "House Cleaning Bradbury Creek | Haines City, FL",
    metaDescription:
      "House cleaning and maintenance housekeeping for Bradbury Creek in Haines City, FL. Floors, kitchens, baths, and post-construction cleaning for active Polk County homes.",
    keywords: [
      "house cleaning Bradbury Creek Haines City",
      "maid service Bradbury Creek FL",
      "residential cleaning Bradbury Creek",
      "housekeeping Bradbury Creek",
      "post construction cleaning Bradbury Creek",
    ],
    intro:
      "Bradbury Creek households in Haines City, FL stay busy—and their homes show it in the best way. Haines City Cleaning is proud to serve Bradbury Creek with house cleaning and maintenance housekeeping that keeps up with outdoor living, weekend guests, and everyday cooking, plus post-construction cleaning when projects stir up dust along community streets.",
    context:
      "Active Bradbury Creek homes often blend indoor living with patios, lanais, and frequent trips in and out. That traffic pulls fine grit onto hard floors, leaves sliding-door tracks packed with debris, and spreads kitchen mess farther on busy evenings. Florida humidity still claims bathrooms, while pollen seasons coat sills and returns. Our Bradbury Creek checklists lead with floors and entries, kitchens, and baths—then rotate fans, tracks, and baseboards so the home feels caught up even when the calendar is full.",
    housingNotes:
      "Floor plans that encourage outdoor living need honest floor care and track detail, not just surface wipe-downs. Larger gathering kitchens benefit from consistent appliance-exterior and counter attention. If a room addition or renovation is underway, we separate lived-in maintenance from post-construction dust work so neither job is half-done.",
    accessNotes:
      "Tell us about preferred parking on your street, any gate instructions, pets that need securing, and whether lanai or patio doors should stay closed during the visit. If outdoor projects are active, note dusty zones to avoid or include.",
    priorities: [
      "Hard floors and entry paths after outdoor traffic",
      "Sliding-door tracks and outdoor-adjacent living areas",
      "Busy kitchens after frequent cooking and entertaining",
      "Bathroom moisture and soap-film control",
      "Post-project dust removal when renovations wrap",
    ],
    aeoQuestion:
      "What should house cleaning include for an active Bradbury Creek home?",
    aeoAnswer:
      "House cleaning for Bradbury Creek in Haines City, FL should prioritize entry floors, sliding-door tracks, kitchens, and humidity-prone bathrooms—the zones outdoor living and busy households stress first. Haines City Cleaning pairs those priorities with weekly or biweekly housekeeping and post-construction cleaning after renovations.",
    howVisitsWork:
      "Active Bradbury Creek homes often thrive on weekly housekeeping so floors and kitchens never fall a full two weeks behind. Biweekly service still works when occupancy is lighter or a mid-week tidy keeps things manageable. Add a deep clean before holidays or after construction. We build each visit around how your household actually moves through the home—not a one-size checklist.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: [
      "marion-ridge",
      "cedar-crossings",
      "covered-bridge",
      "summerview-crossing",
      "tarpon-bay",
    ],
    faqs: [
      {
        q: "Do you clean Bradbury Creek homes with pets and kids?",
        a: "Yes. Share pet notes and high-traffic rooms when you book. We focus on floors, kitchens, and baths that active households use hardest, and we can emphasize pet-hair pickup where needed.",
      },
      {
        q: "Can you detail sliding-door tracks and outdoor-adjacent floors?",
        a: "Those areas are common Bradbury Creek priorities. We include track and floor attention in the agreed scope so grit from patios and lanais does not migrate through the main living space.",
      },
      {
        q: "Do you offer post-construction cleaning in Bradbury Creek?",
        a: "Yes. After additions or renovations we remove fine dust from floors, fixtures, vents, and tracks, then you can return to a normal housekeeping cadence.",
      },
      {
        q: "How do I get a quote for Bradbury Creek house cleaning?",
        a: "Send your address, bedrooms and bathrooms, preferred frequency, and any add-ons. Quotes reflect size, condition, service type, and schedule—not a flat community rate.",
      },
      {
        q: "Is Haines City Cleaning local to Polk County?",
        a: "Yes. We are based around Haines City and serve Bradbury Creek along with nearby communities such as Marion Ridge, Cedar Crossings, Covered Bridge, Summerview Crossing, and Tarpon Bay.",
      },
    ],
  },
  {
    slug: "summerview-crossing",
    name: "Summerview Crossing",
    city: "Haines City",
    county: "Polk County",
    state: "FL",
    shortBlurb:
      "Steady weekly and biweekly house cleaning for Summerview Crossing cul-de-sac living.",
    metaTitle: "House Cleaning Summerview Crossing | Haines City, FL",
    metaDescription:
      "Recurring house cleaning and housekeeping in Summerview Crossing, Haines City, FL. Weekly or biweekly maintenance plus post-construction cleaning from a local crew.",
    keywords: [
      "house cleaning Summerview Crossing Haines City",
      "maid service Summerview Crossing FL",
      "biweekly cleaning Summerview Crossing",
      "housekeeping Summerview Crossing",
      "residential cleaning Haines City FL",
    ],
    intro:
      "Summerview Crossing is a Haines City, FL community where cul-de-sac calm meets everyday Florida living—and Haines City Cleaning is proud to keep those homes on a dependable cleaning rhythm. We provide house cleaning, maintenance housekeeping, and post-construction cleaning for neighbors who want kitchens, baths, and floors handled without adding another project to the week.",
    context:
      "Cul-de-sac and interior-street homes in Summerview Crossing often run on predictable routines: school mornings, weeknight dinners, weekend resets. That predictability is perfect for recurring cleaning. Humidity still films shower doors, hard water spots fixtures, and pollen settles on sills—especially when AC runs hard in peak season. A Summerview Crossing plan that works is usually simple: lock a weekly or biweekly visit, protect the rooms you use daily, and rotate detail work so the home never needs an emergency deep clean to feel livable again.",
    housingNotes:
      "Typical residential floor plans reward consistency more than complexity. We keep scopes clear—standard house cleaning versus deep or post-construction—so you always know what the visit covers. Families who travel or host occasionally can add a one-time deeper pass without abandoning the maintenance schedule.",
    accessNotes:
      "Share gate or community entry details if required, preferred parking on your street or driveway, and whether you will be home. Cul-de-sac parking can be tight during gatherings—telling us the best arrival window helps the visit stay neighbor-friendly.",
    priorities: [
      "Weekly or biweekly kitchen and bathroom maintenance",
      "Consistent floor care in main living paths",
      "Humidity and hard-water attention in showers and fixtures",
      "Rotating dust detail on fans, vents, and baseboards",
      "Optional deep or post-construction resets between regular visits",
    ],
    aeoQuestion:
      "How often should Summerview Crossing homes schedule house cleaning?",
    aeoAnswer:
      "Most Summerview Crossing homes in Haines City, FL do well with weekly house cleaning when households are active, or biweekly maintenance housekeeping for lighter traffic. Haines City Cleaning keeps kitchens, baths, and floors consistent, then adds deep or post-construction cleans when humidity buildup or renovations demand a reset.",
    howVisitsWork:
      "We help you pick a cadence, confirm access, and keep the same service expectations visit after visit. Weekly clients often notice bathrooms and kitchens stay ahead of Florida humidity; biweekly clients get a solid mid-month reset. Either way, you can request add-ons—ovens, interior fridge, post-construction rooms—without rewriting the whole plan.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: [
      "marion-ridge",
      "cedar-crossings",
      "covered-bridge",
      "bradbury-creek",
      "tarpon-bay",
    ],
    faqs: [
      {
        q: "Do you offer weekly house cleaning in Summerview Crossing?",
        a: "Yes. Weekly and biweekly housekeeping are both available based on route capacity. Weekly suits busier homes; biweekly suits lighter occupancy or smaller floor plans.",
      },
      {
        q: "Can I start with a deep clean, then switch to maintenance?",
        a: "That is a common Summerview Crossing path. A deep clean resets baths, kitchens, and detail zones; recurring visits then maintain the baseline.",
      },
      {
        q: "Do you clean after renovations in Summerview Crossing?",
        a: "Yes. Post-construction cleaning removes fine dust from floors, fixtures, vents, and tracks so you can return to normal housekeeping afterward.",
      },
      {
        q: "How do quotes work for Summerview Crossing addresses?",
        a: "Pricing depends on bedrooms, bathrooms, condition, frequency, and add-ons. Share your address and service goals for a clear estimate—not a one-size community price.",
      },
      {
        q: "Which other Haines City communities do you serve?",
        a: "We also serve Marion Ridge, Cedar Crossings, Covered Bridge, Bradbury Creek, and Tarpon Bay, along with broader Polk County routes when scheduling allows.",
      },
    ],
  },
  {
    slug: "tarpon-bay",
    name: "Tarpon Bay",
    city: "Haines City",
    county: "Polk County",
    state: "FL",
    shortBlurb:
      "Pool- and amenity-adjacent cleaning for Tarpon Bay—guest-ready homes and maintenance care.",
    metaTitle: "House Cleaning Tarpon Bay | Haines City, FL",
    metaDescription:
      "House cleaning and housekeeping for Tarpon Bay in Haines City, FL. Pool-adjacent floor care, guest-ready resets, maintenance cleaning, and post-construction service.",
    keywords: [
      "house cleaning Tarpon Bay Haines City",
      "maid service Tarpon Bay FL",
      "housekeeping Tarpon Bay",
      "pool home cleaning Haines City",
      "post construction cleaning Tarpon Bay",
    ],
    intro:
      "Tarpon Bay homeowners in Haines City, FL know how quickly pool days, patio traffic, and guests can undo a tidy house. Haines City Cleaning is proud to serve Tarpon Bay with house cleaning and housekeeping that handles outdoor-adjacent soil, humidity-prone baths, and guest-ready living spaces—plus post-construction cleaning when homes are refreshed or newly finished.",
    context:
      "Communities with strong amenity and outdoor lifestyles see a distinct soil pattern: sunscreen and water tracked indoors, fine grit near patio doors, towels and guest baths working overtime, and kitchens that support entertaining. Tarpon Bay homes benefit from cleaning plans that treat the indoor–outdoor boundary as a real zone—not an afterthought. We keep floors and tracks honest, refresh baths before humidity wins, and support both full-time households and homes that host family or visitors through Polk County seasons.",
    housingNotes:
      "Pool- and patio-adjacent living spaces need consistent hard-floor and track care. Guest bathrooms deserve the same humidity standards as primary baths. When renovations or new finishes are involved, post-construction dust control protects textiles and HVAC returns before regular housekeeping resumes.",
    accessNotes:
      "Provide gate or community entry instructions, preferred parking, and notes about pets or patio doors. If you want lanai furniture wiped or outdoor-adjacent floors emphasized, list that in the scope so the visit matches how you use Tarpon Bay living.",
    priorities: [
      "Floors and tracks near pool, patio, or amenity traffic",
      "Guest and primary bathrooms under Florida humidity",
      "Kitchen readiness for hosting and everyday cooking",
      "Dust and pollen on sills, fans, and returns",
      "Post-construction detail after remodels or new finishes",
    ],
    aeoQuestion:
      "Can Haines City Cleaning keep Tarpon Bay homes guest-ready with regular housekeeping?",
    aeoAnswer:
      "Yes. Haines City Cleaning provides house cleaning and maintenance housekeeping for Tarpon Bay in Haines City, FL with emphasis on pool-adjacent floors, sliding-door tracks, kitchens, and humidity-prone bathrooms. Weekly or biweekly visits keep homes guest-ready, with post-construction cleaning available after renovations.",
    howVisitsWork:
      "Tarpon Bay clients often choose weekly service during heavy hosting or pool season, then ease to biweekly when traffic slows. Before guests arrive, we can prioritize baths, floors, and living areas. After construction or finish work, schedule a dedicated dust-out clean first so maintenance visits are not fighting settle dust.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: [
      "marion-ridge",
      "cedar-crossings",
      "covered-bridge",
      "bradbury-creek",
      "summerview-crossing",
    ],
    faqs: [
      {
        q: "Do you clean Tarpon Bay homes near pool and patio areas?",
        a: "Yes. Indoor floors and tracks that collect outdoor grit are a common Tarpon Bay focus. Share whether lanai or patio-adjacent spaces are included in your requested scope.",
      },
      {
        q: "Can you help before weekend guests arrive?",
        a: "We can prioritize kitchens, baths, and living areas on a one-time or recurring visit. Tell us your guest timing so scheduling and scope match the arrival window.",
      },
      {
        q: "Is post-construction cleaning available in Tarpon Bay?",
        a: "Yes. After renovations or new finishes we remove fine dust from floors, fixtures, vents, and tracks before regular housekeeping continues.",
      },
      {
        q: "What housekeeping cadence works for Tarpon Bay?",
        a: "Weekly cleaning suits active pool-season households and frequent guests. Biweekly maintenance works for lighter occupancy. We adjust based on bathrooms, floor type, and outdoor traffic.",
      },
      {
        q: "Do you serve other Haines City communities nearby?",
        a: "We proudly serve Tarpon Bay along with Marion Ridge, Cedar Crossings, Covered Bridge, Bradbury Creek, Summerview Crossing, and other Polk County addresses based on route availability.",
      },
    ],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((community) => community.slug === slug);
}

export function getAllCommunitySlugs(): string[] {
  return communities.map((community) => community.slug);
}
