const sicknesses = [
  {
    id: 1,
    name: "covid",
    symptoms: [
      "fever",
      "chills",
      "cough",
      "shortness of breath",
      "sore throat",
      "runny nose",
      "nasal congestion",
      "body aches",
      "headache",
      "fatigue",
      "nausea",
      "vomiting",
      "diarrhea",
      "loss of taste or smell"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use over-the-counter symptom relief as directed",
      "ask a healthcare provider about early antiviral treatment if high-risk"
    ]
  },
  {
    id: 2,
    name: "flu",
    symptoms: [
      "fever",
      "chills",
      "cough",
      "sore throat",
      "runny nose",
      "nasal congestion",
      "body aches",
      "headache",
      "fatigue"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use over-the-counter symptom relief as directed",
      "contact a healthcare provider early about antiviral treatment if high-risk or severely ill"
    ]
  },
  {
    id: 3,
    name: "common cold",
    symptoms: [
      "fever",
      "cough",
      "sore throat",
      "runny nose",
      "nasal congestion",
      "sneezing",
      "body aches",
      "headache"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use a clean humidifier",
      "use saline nasal spray"
    ]
  },
  {
    id: 4,
    name: "strep throat",
    symptoms: [
      "fever",
      "sore throat",
      "pain when swallowing",
      "swollen tonsils",
      "swollen lymph nodes",
      "headache",
      "nausea",
      "vomiting",
      "stomach pain"
    ],
    treatment_tips: [
      "get tested by a healthcare provider",
      "take prescribed antibiotics",
      "complete all prescribed antibiotics",
      "drink warm liquids to soothe the throat"
    ]
  },
  {
    id: 5,
    name: "sinus infection",
    symptoms: [
      "runny nose",
      "nasal congestion",
      "facial pain",
      "headache",
      "cough",
      "sore throat",
      "postnasal drip",
      "bad breath"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use saline nasal spray",
      "apply a warm compress to the face",
      "see a healthcare provider if symptoms are severe or continue getting worse"
    ]
  },
  {
    id: 6,
    name: "ear infection",
    symptoms: [
      "ear pain",
      "fever",
      "difficulty sleeping",
      "irritability"
    ],
    treatment_tips: [
      "apply a warm compress to the ear",
      "use over-the-counter symptom relief as directed",
      "see a healthcare provider if pain is severe or persistent",
      "take prescribed antibiotics if needed"
    ]
  },
  {
    id: 7,
    name: "acute bronchitis",
    symptoms: [
      "cough",
      "mucus",
      "fatigue",
      "nasal congestion",
      "sore throat",
      "body aches"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use a clean humidifier",
      "use throat lozenges"
    ]
  },
  {
    id: 8,
    name: "pneumonia",
    symptoms: [
      "fever",
      "chills",
      "cough",
      "shortness of breath",
      "chest pain",
      "fatigue"
    ],
    treatment_tips: [
      "seek medical evaluation",
      "take prescribed medicine exactly as directed",
      "rest",
      "drink plenty of fluids",
      "seek urgent medical care for severe breathing difficulty"
    ]
  },
  {
    id: 9,
    name: "norovirus",
    symptoms: [
      "nausea",
      "vomiting",
      "diarrhea",
      "stomach pain",
      "fever",
      "headache",
      "body aches"
    ],
    treatment_tips: [
      "rest",
      "take frequent small sips of fluids",
      "use an oral rehydration drink",
      "seek medical care for signs of dehydration"
    ]
  },
  {
    id: 10,
    name: "urinary tract infection",
    symptoms: [
      "pain when urinating",
      "frequent urination",
      "stomach pain",
      "cloudy urine",
      "strong-smelling urine",
      "fever"
    ],
    treatment_tips: [
      "seek medical evaluation",
      "take prescribed antibiotics",
      "complete all prescribed antibiotics",
      "drink plenty of fluids"
    ]
  },
  {
    id: 11,
    name: "pink eye",
    symptoms: [
      "eye redness",
      "eye swelling",
      "watery eyes",
      "eye discharge",
      "eye itching"
    ],
    treatment_tips: [
      "apply a clean cold compress",
      "use artificial tears as directed",
      "stop wearing contact lenses until symptoms are gone",
      "see a healthcare provider for eye pain or vision changes"
    ]
  },
  {
    id: 12,
    name: "mononucleosis",
    symptoms: [
      "fatigue",
      "fever",
      "sore throat",
      "headache",
      "body aches",
      "swollen lymph nodes",
      "rash"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use over-the-counter symptom relief as directed",
      "avoid contact sports and heavy lifting until medically cleared"
    ]
  },
  {
    id: 13,
    name: "hand foot and mouth disease",
    symptoms: [
      "fever",
      "sore throat",
      "mouth sores",
      "rash"
    ],
    treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "eat soft and cool foods",
      "use over-the-counter symptom relief as directed"
    ]
  },
  {
    id: 14,
    name: "chickenpox",
    symptoms: [
      "fever",
      "fatigue",
      "headache",
      "loss of appetite",
      "rash",
      "skin itching"
    ],
    treatment_tips: [
      "contact a healthcare provider",
      "apply calamine lotion",
      "take a cool oatmeal bath",
      "avoid scratching the rash",
      "never give aspirin to children or teenagers"
    ]
  },
  {
    id: 15,
    name: "impetigo",
    symptoms: [
      "skin redness",
      "skin itching",
      "skin sores",
      "skin discharge",
      "yellow crust"
    ],
    treatment_tips: [
      "get evaluated by a healthcare provider",
      "use prescribed antibiotics",
      "keep skin sores clean and covered",
      "avoid scratching skin sores"
    ]
  }
];
