const sicknesses = [
  {
    Id: 1,
    Name: "covid",
    Symptoms: [
      "Fever",
      "Chills",
      "Cough",
      "Shortness of Breath",
      "Sore Throat",
      "Runny Nose",
      "Nasal Congestion",
      "Body Aches",
      "Headache",
      "Fatigue",
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Loss of Taste or Smell"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use over-the-counter symptom relief as directed",
      "ask a healthcare provider about early antiviral treatment if high-risk"
    ]
  },
  {
    Id: 2,
    Name: "flu",
    Symptoms: [
      "Fever",
      "Chills",
      "Cough",
      "Sore Throat",
      "Runny Nose",
      "Nasal Congestion",
      "Body Aches",
      "Headache",
      "Fatigue"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use over-the-counter symptom relief as directed",
      "contact a healthcare provider early about antiviral treatment if high-risk or severely ill"
    ]
  },
  {
    Id: 3,
    Name: "common cold",
    Symptoms: [
      "Fever",
      "Cough",
      "Sore Throat",
      "Runny Nose",
      "Nasal Congestion",
      "Sneezing",
      "Body Aches",
      "Headache"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use a clean humidifier",
      "use saline nasal spray"
    ]
  },
  {
    Id: 4,
    Name: "strep throat",
    Symptoms: [
      "Fever",
      "Sore Throat",
      "Pain When Swallowing",
      "Swollen Tonsils",
      "Swollen Lymph Nodes",
      "Headache",
      "Nausea",
      "Vomiting",
      "Stomach Pain"
    ],
    Treatment_tips: [
      "get tested by a healthcare provider",
      "take prescribed antibiotics",
      "complete all prescribed antibiotics",
      "drink warm liquids to soothe the throat"
    ]
  },
  {
    Id: 5,
    Name: "sinus infection",
    Symptoms: [
      "Runny Nose",
      "Nasal Congestion",
      "Facial Pain",
      "Headache",
      "Cough",
      "Sore Throat",
      "Postnasal Drip",
      "Bad Breath"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use saline nasal spray",
      "apply a warm compress to the face",
      "see a healthcare provider if symptoms are severe or continue getting worse"
    ]
  },
  {
    Id: 6,
    Name: "ear infection",
    Symptoms: [
      "Ear Pain",
      "Fever",
      "Difficulty Sleeping",
      "Irritability"
    ],
    Treatment_tips: [
      "apply a warm compress to the ear",
      "use over-the-counter symptom relief as directed",
      "see a healthcare provider if pain is severe or persistent",
      "take prescribed antibiotics if needed"
    ]
  },
  {
    Id: 7,
    Name: "acute bronchitis",
    Symptoms: [
      "Cough",
      "Mucus",
      "Fatigue",
      "Nasal Congestion",
      "Sore Throat",
      "Body Aches"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use a clean humidifier",
      "use throat lozenges"
    ]
  },
  {
    Id: 8,
    Name: "pneumonia",
    Symptoms: [
      "Fever",
      "Chills",
      "Cough",
      "Shortness of Breath",
      "Chest Pain",
      "Fatigue"
    ],
    Treatment_tips: [
      "seek medical evaluation",
      "take prescribed medicine exactly as directed",
      "rest",
      "drink plenty of fluids",
      "seek urgent medical care for severe breathing difficulty"
    ]
  },
  {
    Id: 9,
    Name: "norovirus",
    Symptoms: [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Stomach Pain",
      "Fever",
      "Headache",
      "Body Aches"
    ],
    Treatment_tips: [
      "rest",
      "take frequent small sips of fluids",
      "use an oral rehydration drink",
      "seek medical care for signs of dehydration"
    ]
  },
  {
    Id: 10,
    Name: "urinary tract infection",
    Symptoms: [
      "Pain When Urinating",
      "Frequent Urination",
      "Stomach Pain",
      "Cloudy Urine",
      "Strong-Smelling Urine",
      "Fever"
    ],
    Treatment_tips: [
      "seek medical evaluation",
      "take prescribed antibiotics",
      "complete all prescribed antibiotics",
      "drink plenty of fluids"
    ]
  },
  {
    Id: 11,
    Name: "pink eye",
    Symptoms: [
      "Eye Redness",
      "Eye Swelling",
      "Watery Eyes",
      "Eye Discharge",
      "Eye Itching"
    ],
    Treatment_tips: [
      "apply a clean cold compress",
      "use artificial tears as directed",
      "stop wearing contact lenses until symptoms are gone",
      "see a healthcare provider for eye pain or vision changes"
    ]
  },
  {
    Id: 12,
    Name: "mononucleosis",
    Symptoms: [
      "Fatigue",
      "Fever",
      "Sore Throat",
      "Headache",
      "Body Aches",
      "Swollen Lymph Nodes",
      "Rash"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "use over-the-counter symptom relief as directed",
      "avoid contact sports and heavy lifting until medically cleared"
    ]
  },
  {
    Id: 13,
    Name: "hand foot and mouth disease",
    Symptoms: [
      "Fever",
      "Sore Throat",
      "Mouth Sores",
      "Rash"
    ],
    Treatment_tips: [
      "rest",
      "drink plenty of fluids",
      "eat soft and cool foods",
      "use over-the-counter symptom relief as directed"
    ]
  },
  {
    Id: 14,
    Name: "chickenpox",
    Symptoms: [
      "Fever",
      "Fatigue",
      "Headache",
      "Loss of Appetite",
      "Rash",
      "Skin Itching"
    ],
    Treatment_tips: [
      "contact a healthcare provider",
      "apply calamine lotion",
      "take a cool oatmeal bath",
      "avoid scratching the rash",
      "never give aspirin to children or teenagers"
    ]
  },
  {
    Id: 15,
    Name: "impetigo",
    Symptoms: [
      "Skin Redness",
      "Skin Itching",
      "Skin Sores",
      "Skin Discharge",
      "Yellow Crust"
    ],
    Treatment_tips: [
      "get evaluated by a healthcare provider",
      "use prescribed antibiotics",
      "keep skin sores clean and covered",
      "avoid scratching skin sores"
    ]
  }
];
