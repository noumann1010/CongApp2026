const sicknesses = [
    {
        id: 1,
        name: "COVID",
        symptoms: [
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
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Use over-the-counter symptom relief as directed",
            "Ask a healthcare provider about early antiviral treatment if high-risk"
        ]
    },
    {
        id: 2,
        name: "Flu",
        symptoms: [
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
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Use over-the-counter symptom relief as directed",
            "Contact a healthcare provider early about antiviral treatment if high-risk or severely ill"
        ]
    },
    {
        id: 3,
        name: "Common Cold",
        symptoms: [
            "Fever",
            "Cough",
            "Sore Throat",
            "Runny Nose",
            "Nasal Congestion",
            "Sneezing",
            "Body Aches",
            "Headache"
        ],
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Use a clean humidifier",
            "Use saline nasal spray"
        ]
    },
    {
        id: 4,
        name: "Strep Throat",
        symptoms: [
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
        treatment_tips: [
            "Get tested by a healthcare provider",
            "Take prescribed antibiotics",
            "Complete all prescribed antibiotics",
            "Drink warm liquids to soothe the throat"
        ]
    },
    {
        id: 5,
        name: "Sinus Infection",
        symptoms: [
            "Runny Nose",
            "Nasal Congestion",
            "Facial Pain",
            "Headache",
            "Cough",
            "Sore Throat",
            "Postnasal Drip",
            "Bad Breath"
        ],
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Use saline nasal spray",
            "Apply a warm compress to the face",
            "See a healthcare provider if symptoms are severe or continue getting worse"
        ]
    },
    {
        id: 6,
        name: "Ear Infection",
        symptoms: [
            "Ear Pain",
            "Fever",
            "Difficulty Sleeping",
            "Irritability"
        ],
        treatment_tips: [
            "Apply a warm compress to the ear",
            "Use over-the-counter symptom relief as directed",
            "See a healthcare provider if pain is severe or persistent",
            "Take prescribed antibiotics if needed"
        ]
    },
    {
        id: 7,
        name: "Acute Bronchitis",
        symptoms: [
            "Cough",
            "Mucus",
            "Fatigue",
            "Nasal Congestion",
            "Sore Throat",
            "Body Aches"
        ],
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Use a clean humidifier",
            "Use throat lozenges"
        ]
    },
    {
        id: 8,
        name: "Pneumonia",
        symptoms: [
            "Fever",
            "Chills",
            "Cough",
            "Shortness of Breath",
            "Chest Pain",
            "Fatigue"
        ],
        treatment_tips: [
            "Seek medical evaluation",
            "Take prescribed medicine exactly as directed",
            "Rest",
            "Drink plenty of fluids",
            "Seek urgent medical care for severe breathing difficulty"
        ]
    },
    {
        id: 9,
        name: "Norovirus",
        symptoms: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Stomach Pain",
            "Fever",
            "Headache",
            "Body Aches"
        ],
        treatment_tips: [
            "Rest",
            "Take frequent small sips of fluids",
            "Use an oral rehydration drink",
            "Seek medical care for signs of dehydration"
        ]
    },
    {
        id: 10,
        name: "Urinary Tract Infection",
        symptoms: [
            "Pain When Urinating",
            "Frequent Urination",
            "Stomach Pain",
            "Cloudy Urine",
            "Strong-Smelling Urine",
            "Fever"
        ],
        treatment_tips: [
            "Seek medical evaluation",
            "Take prescribed antibiotics",
            "Complete all prescribed antibiotics",
            "Drink plenty of fluids"
        ]
    },
    {
        id: 11,
        name: "Pink Eye",
        symptoms: [
            "Eye Redness",
            "Eye Swelling",
            "Watery Eyes",
            "Eye Discharge",
            "Eye Itching"
        ],
        treatment_tips: [
            "Apply a clean cold compress",
            "Use artificial tears as directed",
            "Stop wearing contact lenses until symptoms are gone",
            "See a healthcare provider for eye pain or vision changes"
        ]
    },
    {
        id: 12,
        name: "Mononucleosis",
        symptoms: [
            "Fatigue",
            "Fever",
            "Sore Throat",
            "Headache",
            "Body Aches",
            "Swollen Lymph Nodes",
            "Rash"
        ],
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Use over-the-counter symptom relief as directed",
            "Avoid contact sports and heavy lifting until medically cleared"
        ]
    },
    {
        id: 13,
        name: "Hand Foot and Mouth Disease",
        symptoms: [
            "Fever",
            "Sore Throat",
            "Mouth Sores",
            "Rash"
        ],
        treatment_tips: [
            "Rest",
            "Drink plenty of fluids",
            "Eat soft and cool foods",
            "Use over-the-counter symptom relief as directed"
        ]
    },
    {
        id: 14,
        name: "Chickenpox",
        symptoms: [
            "Fever",
            "Fatigue",
            "Headache",
            "Loss of Appetite",
            "Rash",
            "Skin Itching"
        ],
        treatment_tips: [
            "Contact a healthcare provider",
            "Apply calamine lotion",
            "Take a cool oatmeal bath",
            "Avoid scratching the rash",
            "Never give aspirin to children or teenagers"
        ]
    },
    {
        id: 15,
        name: "Impetigo",
        symptoms: [
            "Skin Redness",
            "Skin Itching",
            "Skin Sores",
            "Skin Discharge",
            "Yellow Crust"
        ],
        treatment_tips: [
            "Get evaluated by a healthcare provider",
            "Use prescribed antibiotics",
            "Keep skin sores clean and covered",
            "Avoid scratching skin sores"
        ]
    }
];

export default sicknesses;