let respecConfig = {

  // Config parameters
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "IM",
  pubDomain: "ronl",

  // shortName = Repository name as is
  shortName: "wetsuitvoering",
  publishDate: "2024-11-29",
  publishVersion: "1.0.2",

  previousPublishVersion: "",
  previousPublishDate: "",
  previousMaturity: "WV",
  title: "Specificatie van het juridisch referentiemodel (JRM)",
  subtitle:
    "Specificatie van het juridisch referentiemodel (JRM) dat met scenario's beschrijft hoe een burger of bedrijf een bepaald stuk wet- en regelgeving ervaart of doorloopt in de wetsuitvoering.",

  // Content
  content: {
    "H1-classificaties": "",
    "H2-scenarios": "",
    "H3-rechtsgevolg": "",
    "H4-relevantfeit": "",
    "H5-classificatiewaarde": ""
  },
  editors: [
    {
    name: "Mariette Lokin",
    mailto: "mariette@hooghiemstra-en-partners.nl",
    company: "Hooghiemstra & Partners",
    companyURL: "https://hooghiemstra-en-partners.nl",
    },
    {
    name: "Steven Gort",
    mailto: "steven.gort@ictu.nl",
    company: "ICTU",
    companyURL: "http://www.ictu.nl",
  }],
  authors: [
    {
      name: "John Bulles",
      url: "https://pna-group.com/",
    },
    {
      name: "Dirkjan van der Hoven",
      url: "https://hit.nl",
    },
    {
      name: "Sjir Nijssen",
      url: "https://pna-group.com/",
    }
  ],
  github: "https://github.com/MinBZK/wetsuitvoering/",

  // References & footnotes
  localBiblio: {
    HOHFELD_1: {
      title: "Some Fundamental Conceptions as Applied in Judicial Reasoning",
      href: "https://openyls.law.yale.edu/bitstream/handle/20.500.13051/11079/05_23YaleLJ16_1913_1914_.pdf?sequence=2",
      publisher: "Yale Law Journal (23) 1913, afl. 1, p. 16-59",
      },
      HOHFELD_2: {
        title: "Fundamental Legal Conceptions as Applied in Judicial Reasoning",
        href: "https://openyls.law.yale.edu/bitstream/handle/20.500.13051/3864/Fundamental_Legal_Conceptions_as_Applied_in_Judicial_Reasoning.pdf?sequence=2",
        publisher: "Yale Law Journal (26) 1917, afl. 8, p. 710-770.",
      },
      BLKAMER: {
        title: "Een kapstok voor herleidbare wet- en regelgeving voor dienstverlening",
        href: "https://wendbarewetsuitvoering.pleio.nl/attachment/1dddbb91-8f6b-4bca-9b4f-5e3d4a19efef",
        publisher: "Harrie van Houtum (Business KnowHow Services) et al",
      },
      NLSBB: {
        href: "https://docs.geostandaarden.nl/nl-sbb/nl-sbb/",
        title: "NL-SBB - Standaard voor het beschrijven van begrippen",
        authors: [
          "Geonovum Standaard - versie ter vaststelling.",
        ],
        date: "16 april 2024",
      },
    },

  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
        label: "pdf",
        uri: "https://regels.overheid.nl/standaarden/wetsuitvoering/pdf",
    },
  ],
};