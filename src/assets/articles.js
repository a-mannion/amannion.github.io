const ARTICLES_DATA = [
    {
        "title": "Is Biomedical Specialization Still Worth It? Insights from Domain-Adaptive Language Modelling with a New French Health Corpus",
        "venue": "The Fifteenth Language Resources and Evaluation Conference (LREC 2026), May 2026, Palma, Spain",
        "authors": "Aidan Mannion, Cécile Macaire, Armand Violle, Stéphane Ohayon, Xavier Tannier, Didier Schwab, Lorraine Goeuriot, François Portet",
        "link_hal": "https://hal.science/hal-05627769",
        "link_arxiv": "https://arxiv.org/abs/2604.06903",
        "link_pub": null,
        "link_code": "https://github.com/PARTAGES-dev/partages-llm",
        "link_hf": "https://huggingface.co/collections/PARTAGES-dev/qwen3pdaptslerp",
        "hide": false
    },
    {
        "title": "Pantagruel: Unified Self-Supervised Encoders for French Text and Speech",
        "venue": "The Fifteenth Language Resources and Evaluation Conference (LREC 2026), May 2026, Palma, Spain",
        "authors": "Phuong-Hang Le, Valentin Pelloin, Arnault Chatelain, Maryem Bouziane, Mohammed Ghennai, Qianwen Guan, Kirill Milintsevich, Salima Mdhaffar, Aidan Mannion, Nils Defauw, et al.",
        "link_hal": "https://hal.science/hal-05627744",
        "link_arxiv": "https://arxiv.org/abs/2601.05911",
        "link_pub": null,
        "link_code": null,
        "link_hf": "https://huggingface.co/PantagrueLLM/collections",
        "hide": false
    },
    {
        "title": "Jargon: A Suite of Language Models and Evaluation Tasks for French Specialized Domains",
        "venue": "LREC-COLING 2024 - Joint International Conference on Computational Linguistics, Language Resources and Evaluation, May 2024, Turin, Italy",
        "authors": "Vincent Segonne, Aidan Mannion, Laura Cristina Alonzo Canul, Alexandre Audibert, Xingyu Liu, Cécile Macaire, Adrien Pupier, Yongxin Zhou, Mathilde Aguiar, Felix Herron, et al.",
        "link_hal": "https://hal.science/hal-04535557",
        "link_arxiv": null,
        "link_pub": {
            "link": "https://aclanthology.org/2024.lrec-main.827/",
            "name": "ACL Anthology"
        },
        "link_code": "https://github.com/PantagrueLLM/Jargon",
        "link_hf": "https://huggingface.co/collections/PantagrueLLM/jargon-text-models",
        "hide": false
    },
    {
        "title": "MedDialog-FR: a French Version of the MedDialog Corpus for Multi-label Classification and Response Generation related to Women's Intimate Health",
        "venue": "First Workshop on Patient-Oriented Language Processing @ LREC-COLING, May 2024, Turin, Italy",
        "authors": "Xingyu Liu, Vincent Segonne, Aidan Mannion, Didier Schwab, Lorraine Goeuriot, et al.",
        "link_hal": "https://cnrs.hal.science/hal-04534338",
        "link_arxiv": "",
        "link_pub": {
            "link": "https://aclanthology.org/2024.cl4health-1.21/",
            "name": "ACL Anthology"
        },
        "link_code": null,
        "link_hf": null,
        "hide": false
    },
    {
        "title": "Université Grenoble Alpes/LIG at TREC Deep Learning Track 2022",
        "venue": "Thirty-First Text REtrieval Conference (TREC), NIST, Nov 2022, United States (Online)",
        "authors": "Petra Galuščáková, Lucas Alberede, Gabriela Nicole Gonzalez Saez, Aidan Mannion, Philippe Mulhem, Georges Quénot",
        "link_hal": "https://hal.science/hal-04197946",
        "link_arxiv": null,
        "link_pub": {
            "link": "https://trec.nist.gov/pubs/trec31",
            "name": "Conference Proceedings"
        },
        "link_code": null,
        "link_hf": null,
        "hide": false
    },
    {
        "title": "UMLS-KGI-BERT: Data-Centric Knowledge Integration in Transformers for Biomedical Entity Recognition",
        "venue": "5th Clinical Natural Language Processing Workshop, Jul 2023, Toronto, Canada",
        "authors": "Aidan Mannion, Didier Schwab, Lorraine Goeuriot, Thierry Chevalier",
        "link_hal": "https://hal.science/hal-04167619",
        "link_arxiv": "https://arxiv.org/abs/2307.11170",
        "link_pub": {
            "link": "https://aclanthology.org/2023.clinicalnlp-1.35/",
            "name": "ACL Anthology"
        },
        "link_code": "https://github.com/a-mannion/bertify-umls",
        "link_hf": "https://huggingface.co/collections/a-mannion/umls-kgi-bert",
        "hide": false
    },
    {
        "title": "Augmentation des modèles de langage français par graphes de connaissances pour la reconnaissance des entités biomédicales",
        "venue": "30e Conférence sur le Traitement Automatique des Langues Naturelles, 2023, Paris, France",
        "authors": "Aidan Mannion, Didier Schwab, Lorraine Goeuriot, Thierry Chevalier",
        "link_hal": "https://hal.science/hal-04130185",
        "link_arxiv": null,
        "link_pub": null,
        "link_code": null,
        "link_hf": null,
        "hide": false
    },
    {
        "title": "Predicting the Risk of & Time to Impairment for ALS patients: Report for the Lab on Intelligent Disease Progression Prediction at CLEF 2022",
        "venue": "Conference & Labs of the Evaluation Forum (CLEF) 2022, Sep 2022, Bologna, Italy",
        "authors": "Aidan Mannion, Didier Schwab, Lorraine Goeuriot, Thierry Chevalier",
        "link_hal": "https://hal.science/hal-03751159",
        "link_arxiv": null,
        "link_pub": {
            "link": "https://ceur-ws.org/Vol-3180/paper-91.pdf",
            "name": "Workshop Proceedings"
        },
        "link_code": "",
        "link_hf": "",
        "hide": false
    },
    {
        "title": "Identification de profil clinique du patient: Une approche de classification de séquences utilisant des modèles de langage français contextualisés",
        "venue": "Traitement Automatique des Langues Naturelles, 2021, Lille, France",
        "authors": "Aidan Mannion, Didier Schwab, Lorraine Goeuriot, Thierry Chevalier",
        "link_hal": "https://hal.science/hal-03265922",
        "link_arxiv": null,
        "link_pub": null,
        "link_code": "https://github.com/a-mannion/deft21",
        "link_hf": null,
        "hide": false
    },
    {
        "title": "LIG-Health at Adhoc and Spoken IR Consumer Health Search: expanding queries using UMLS and FastText",
        "venue": "",
        "authors": "Philippe Mulhem, Gabriela Gonzalez Saez, Aidan Mannion, Didier Schwab, Jibril Frej",
        "link_hal": "https://hal.univ-grenoble-alpes.fr/hal-02977382",
        "link_arxiv": null,
        "link_pub": {
            "link": "https://ceur-ws.org/Vol-2696/paper_129.pdf",
            "name": "Workshop Proceedings"
        },
        "link_code": null,
        "link_hf": null,
        "hide": false
    },
    {
        "title": "",
        "venue": "",
        "authors": "",
        "link_hal": "",
        "link_arxiv": "",
        "link_pub": {
            "link": "",
            "name": ""
        },
        "link_code": "",
        "link_hf": "",
        "hide": false
    }
];
