/*
js object containing info on elements
Kept separate from table.js for easier readability/editing
Currently contains element's: atomic number, symbol, name, & group
    Element info in nested object (symbol is also the property)
*/
const elements={
    H:{
        number:"1",
        symbol:"H",
        name:"Hydrogen",
        group: "Nonmetal"},
    He: {
        number:"2",
        symbol:"He",
        name:"Helium",
        group:"Noble Gas",},
    Li: {
        number:"3",
        symbol:"Li",
        name:"Lithium",
        group:"Alkali Metal",},    
    Be: {
        number:"4",
        symbol:"Be",
        name:"Beryllium",
        group:"Alkali Earth Metal",},
    B: {
        number:"5",
        symbol:"B",
        name:"Boron",
        group:"Metalloid",},
    C: {
        number:"6",
        symbol:"C",
        name:"Carbon",
        group:"Nonmetal",},
    N: {
        number:"7",
        symbol:"N",
        name:"nitrogen",
        group:"Nonmetal",},
    O: {
        number:"8",
        symbol:"O",
        name:"Oxygen",
        group:"Nonmetal",},
    F: {
        number:"9",
        symbol:"F",
        name:"Fluorine",
        group:"Halogen",},
    Ne: {
        number:"10",
        symbol:"Ne",
        name:"Neon",
        group:"Noble Gas",},
    Na: {
        number:"11",
        symbol:"Na",
        name:"Sodium",
        group:"Alkali Metal",},
    Mg: {
        number:"12",
        symbol:"Mg",
        name:"Magnesium",
        group:"Alkaline Earth Metal",},
    Al: {
        number:"13",
        symbol:"Al",
        name:"Aluminum",
        group:"Post-Transition Metal",},
    Si: {
        number:"14",
        symbol:"Si",
        name:"Silicon",
        group:"Metalloid",},
    P: {
        number:"15",
        symbol:"P",
        name:"Phosphorus",
        group:"Nonmetal",},
    S: {
        number:"16",
        symbol:"S",
        name:"Sulfur",
        group:"Nonmetal",},
    Cl: {
        number:"17",
        symbol:"Cl",
        name:"Chlorine",
        group:"Halogen",},
    Ar: {
        number:"18",
        symbol:"Ar",
        name:"Argon",
        group:"Noble Gas",},
    K: {
        number:"19",
        symbol:"K",
        name:"Potassium",
        group:"Alkali Metal",},
    Ca: {
        number:"20",
        symbol:"Ca",
        name:"Calcium",
        group:"Alkali Earth Metal",},
    Sc: {
        number:"21",
        symbol:"Sc",
        name:"Scandium",
        group:"Transition Metal",},
    Ti: {
        number:"22",
        symbol:"Ti",
        name:"Titanium",
        group:"Transition Metal",},
    V: {
        number:"23",
        symbol:"V",
        name:"Vanadium",
        group:"Transition Metal",},
    Cr: {
        number:"24",
        symbol:"Cr",
        name:"Chromium",
        group:"Transition Metal",},
    Mn: {
        number:"25",
        symbol:"Mn",
        name:"Manganese",
        group:"Transition Metal",},
    Fe: {
        number:"26",
        symbol:"Fe",
        name:"Iron",
        group:"Transition Metal",},
    Co: {
        number:"27",
        symbol:"Co",
        name:"Cobalt",
        group:"Transition Metal",},
    Ni: {
        number:"28",
        symbol:"Ni",
        name:"Nickel",
        group:"Transition Metal",},
    Cu: {
        number:"29",
        symbol:"Cu",
        name:"Copper",
        group:"Transition Metal",},
    Zn: {
        number:"30",
        symbol:"Zn",
        name:"Zinc",
        group:"Transition Metal",},
    Ga: {
        number:"31",
        symbol:"Ga",
        name:"Gallium",
        group:"Post-Transition Metal",},
    Ge: {
        number:"32",
        symbol:"Ge",
        name:"Germanium",
        group:"Metalloid",},
    As: {
        number:"33",
        symbol:"As",
        name:"Arsenic",
        group:"Transition Metal",},
    Se: {
        number:"34",
        symbol:"Se",
        name:"Selenium",
        group:"Nonmetal",},
    Br: {
        number:"35",
        symbol:"Br",
        name:"Bromine",
        group:"Halogen",},
    Kr: {
        number:"36",
        symbol:"Kr",
        name:"Krypton",
        group:"Noble Gas",},
    Rb: {
        number:"37",
        symbol:"Rb",
        name:"Rubidium",
        group:"Alkali Metal",},
    Sr: {
        number:"38",
        symbol:"Sr",
        name:"Strontium",
        group:"Alkali Earth Metal",},
    Y: {
        number:"39",
        symbol:"Y",
        name:"Yttrium",
        group:"Transition Metal",},
    Zr: {
        number:"40",
        symbol:"Zr",
        name:"Zirconium",
        group:"Transition Metal",},
    Nb: {
        number:"41",
        symbol:"Nb",
        name:"Niobium",
        group:"Transition Metal",},
    Mo: {
        number:"42",
        symbol:"Mo",
        name:"Molybdenum",
        group:"Transition Metal",},
    Tc: {
        number:"43",
        symbol:"Tc",
        name:"Technetium",
        group:"Transition Metal",},
    Ru: {
        number:"44",
        symbol:"Ru",
        name:"Ruthenium",
        group:"Transition Metal",},
    Rh: {
        number:"45",
        symbol:"Rh",
        name:"Rhodium",
        group:"Transition Metal",},
    Pd: {
        number:"46",
        symbol:"Pd",
        name:"Palladium",
        group:"Transition Metal",},
    Ag: {
        number:"47",
        symbol:"Ag",
        name:"Silver",
        group:"Transition Metal",},
    Cd: {
        number:"48",
        symbol:"Cd",
        name:"Cadmium",
        group:"Transition Metal",},
    In: {
        number:"49",
        symbol:"In",
        name:"Indium",
        group:"Post-Transition Metal",},
    Sn: {
        number:"50",
        symbol:"Sn",
        name:"Tin",
        group:"Post-Transition Metal",},
    Sb: {
        number:"51",
        symbol:"Sb",
        name:"Antimony",
        group:"Metalloid",},
    Te: {
        number:"52",
        symbol:"Te",
        name:"Tellurium",
        group:"Metalloid",},
    I: {
        number:"53",
        symbol:"I",
        name:"Iodine",
        group:"Halogen",},
    Xe: {
        number:"54",
        symbol:"Xe",
        name:"Xenon",
        group:"Transition Metal",},
    Cs: {
        number:"55",
        symbol:"Cs",
        name:"Caesium",
        group:"Alkali Metal",},
    Ba: {
        number:"56",
        symbol:"Ba",
        name:"Barium",
        group:"Alkali Earth Metal",},
    La: {
        number:"57",
        symbol:"La",
        name:"Lanthanum",
        group:"Lanthanide",},
    Ce: {
        number:"58",
        symbol:"Ce",
        name:"Cerium",
        group:"Lanthanide",},
    Pr: {
        number:"59",
        symbol:"Pr",
        name:"Praseodymium",
        group:"Lanthanide",},
    Nd: {
        number:"60",
        symbol:"Nd",
        name:"Neodymium",
        group:"Lanthanide",},
    Pm: {
        number:"61",
        symbol:"Pm",
        name:"Promethium",
        group:"Lanthanide",},
    Sm: {
        number:"62",
        symbol:"Sm",
        name:"Samarium",
        group:"Lanthanide",},
    Eu: {
        number:"63",
        symbol:"Eu",
        name:"Europium",
        group:"Lanthanide",},
    Gd: {
        number:"64",
        symbol:"Gd",
        name:"Gadolinium",
        group:"Lanthanide",},
    Tb: {
        number:"65",
        symbol:"Tb",
        name:"Terbium",
        group:"Lanthanide",},
    Dy: {
        number:"66",
        symbol:"Dy",
        name:"Dysprosium",
        group:"Lanthanide",},
    Ho: {
        number:"67",
        symbol:"Ho",
        name:"Holmium",
        group:"Lanthanide",},
    Er: {
        number:"68",
        symbol:"Er",
        name:"Erbium",
        group:"Lanthanide",},
    Tm: {
        number:"69",
        symbol:"Tm",
        name:"Thulium",
        group:"Lanthanide",},
    Yb: {
        number:"70",
        symbol:"Yb",
        name:"Ytterbium",
        group:"Lanthanide",},
    Lu: {
        number:"71",
        symbol:"Lu",
        name:"Lutetium",
        group:"Lanthanide",},
    Hf: {
        number:"72",
        symbol:"Hf",
        name:"Hafnium",
        group:"Transition Metal",},
    Ta: {
        number:"73",
        symbol:"Ta",
        name:"Tantalum",
        group:"Transition Metal",},
    W: {
        number:"74",
        symbol:"W",
        name:"Tungsten",
        group:"Transition Metal",},
    Re: {
        number:"75",
        symbol:"Re",
        name:"Rhenium",
        group:"Transition Metal",},
    Os: {
        number:"76",
        symbol:"Os",
        name:"Osmium",
        group:"Transition Metal",},
    Ir: {
        number:"77",
        symbol:"Ir",
        name:"Iridium",
        group:"Transition Metal",},
    Pt: {
        number:"78",
        symbol:"Pt",
        name:"Platinum",
        group:"Transition Metal",}, 
    Au: {
        number:"79",
        symbol:"Au",
        name:"Gold",
        group:"Transition Metal",},  
    Hg: {
        number:"80",
        symbol:"Hg",
        name:"Mercury",
        group:"Transition Metal",},
    Tl: {
        number:"81",
        symbol:"Tl",
        name:"Thallium",
        group:"Post-Transition Metal",},
    Pb: {
        number:"82",
        symbol:"Pb",
        name:"Lead",
        group:"Post-Transition Metal",},
    Bi: {
        number:"83",
        symbol:"Bi",
        name:"Bismuth",
        group:"Post-Transition Metal",},
    Po: {
        number:"84",
        symbol:"Po",
        name:"Polonium",
        group:"Post-Transition Metal",},
    At: {
        number:"85",
        symbol:"At",
        name:"Astatine",
        group:"Post-Transition Metal",},
    Rn: {
        number:"86",
        symbol:"Rn",
        name:"Radon",
        group:"Transition Metal",},
    Fr: {
        number:"87",
        symbol:"Fr",
        name:"Francium",
        group:"Alkali Metal",},
    Ra: {
        number:"88",
        symbol:"Ra",
        name:"Radium",
        group:"Alkali Earth Metal",},
    Ac: {
        number:"89",
        symbol:"Ac",
        name:"Actinium",
        group:"Actinide",},
    Th: {
        number:"90",
        symbol:"Th",
        name:"Thorium",
        group:"Actinide",},
    Pa: {
        number:"91",
        symbol:"Pa",
        name:"Protactinium",
        group:"Actinide",},
    U: {
        number:"92",
        symbol:"Ur",
        name:"Uranium",
        group:"Actinide",},
    Np: {
        number:"93",
        symbol:"Np",
        name:"Neptunium",
        group:"Actinide",},
    Pu: {
        number:"94",
        symbol:"Pu",
        name:"Plutonium",
        group:"Actinide",},
    Am: {
        number:"95",
        symbol:"Am",
        name:"Americium",
        group:"Actinide",},
    Cm: {
        number:"96",
        symbol:"Cm",
        name:"Curium",
        group:"Actinide",},
    Bk: {
        number:"97",
        symbol:"Bk",
        name:"Berkelium",
        group:"Actinide",},
    Cf: {
        number:"98",
        symbol:"Cf",
        name:"Californium",
        group:"Actinide",},
    Es: {
        number:"99",
        symbol:"Es",
        name:"Einsteinium",
        group:"Actinide",},
    Fm: {
        number:"100",
        symbol:"Fm",
        name:"Fermium",
        group:"Actinide",},
    Md: {
        number:"101",
        symbol:"Md",
        name:"Mendelevium",
        group:"Actinide",},
    No: {
        number:"102",
        symbol:"No",
        name:"Nobelium",
        group:"Actinide",},
    Lr: {
        number:"103",
        symbol:"Lr",
        name:"Lawrencium",
        group:"Actinide",},
    Rf: {
        number:"104",
        symbol:"Rf",
        name:"Rutherfordium",
        group:"Actinide",},
    Db: {
        number:"105",
        symbol:"Db",
        name:"Dubnium",
        group:"Actinide",},
    Sg: {
        number:"106",
        symbol:"Sg",
        name:"Seaborgium",
        group:"Actinide",},
    Bh: {
        number:"107",
        symbol:"Bh",
        name:"Bohrium",
        group:"Actinide",},
    Hs: {
        number:"108",
        symbol:"Hs",
        name:"Hassium",
        group:"Actinide",},
    Mt: {
        number:"109",
        symbol:"Mt",
        name:"Meitnerium",
        group:"Transition Metal",},
    Ds: {
        number:"110",
        symbol:"Ds",
        name:"Darmstadtium",
        group:"Transition Metal",},
    Rg: {
        number:"111",
        symbol:"Rg",
        name:"Roentgenium",
        group:"Transition Metal",},
    Cn: {
        number:"112",
        symbol:"Cn",
        name:"Copernicium",
        group:"Transition Metal",},
    Nh: {
        number:"113",
        symbol:"Nh",
        name:"Nihonium",
        group:"Post-Transition Metal",},
    Fl: {
        number:"114",
        symbol:"Fl",
        name:"Flerovium",
        group:"Post-Transition Metal",},
    Mc: {
        number:"115",
        symbol:"Mc",
        name:"Moscovium",
        group:"Post-Transition Metal",},
    Lv: {
        number:"116",
        symbol:"Lv",
        name:"Livermorium",
        group:"Post-Transition Metal",},
    Ts: {
        number:"117",
        symbol:"Ts",
        name:"Tennessine",
        group:"Post-Transition Metal",},
    Og: {
        number:"118",
        symbol:"Og",
        name:"Oganesson",
        group:"Noble Gas",},
    }