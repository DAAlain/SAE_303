const socialMediaStats = {
    // Statistiques globales
    global: {
        totalUsers: {
            value: "4.9 milliards",
            percentage: "61.4%",
            description: "de la population mondiale"
        },
        dailyTimeSpent: {
            value: "2h 31min",
            yearChange: "+2 minutes",
            description: "temps moyen quotidien"
        },
        annualGrowth: {
            value: "+3.7%",
            absoluteValue: "+177 millions",
            description: "nouveaux utilisateurs en 2023"
        }
    },

    // Plateformes principales
    platforms: {
        top10: [
            { name: "Facebook", users: "2.9 milliards", engagement: "33 minutes/jour" },
            { name: "YouTube", users: "2.5 milliards", engagement: "45 minutes/jour" },
            { name: "WhatsApp", users: "2 milliards", engagement: "28 minutes/jour" },
            { name: "Instagram", users: "1.8 milliards", engagement: "29 minutes/jour" },
            { name: "WeChat", users: "1.3 milliards", engagement: "43 minutes/jour" },
            { name: "TikTok", users: "1.1 milliards", engagement: "95 minutes/jour" },
            { name: "LinkedIn", users: "900 millions", engagement: "17 minutes/jour" },
            { name: "Snapchat", users: "750 millions", engagement: "25 minutes/jour" },
            { name: "Twitter", users: "550 millions", engagement: "31 minutes/jour" },
            { name: "Pinterest", users: "450 millions", engagement: "14 minutes/jour" }
        ]
    },

    // Données démographiques
    demographics: {
        ageGroups: [
            { group: "13-17 ans", percentage: "8.9%" },
            { group: "18-24 ans", percentage: "18.7%" },
            { group: "25-34 ans", percentage: "31.2%" },
            { group: "35-44 ans", percentage: "20.1%" },
            { group: "45-54 ans", percentage: "12.5%" },
            { group: "55+ ans", percentage: "8.6%" }
        ],
        genderSplit: {
            male: "43.8%",
            female: "56.2%"
        }
    },

    // Comportements des utilisateurs
    userBehavior: {
        deviceUsage: {
            mobile: "96.2%",
            desktop: "31.8%",
            tablet: "8.4%"
        },
        contentPreferences: [
            { type: "Photos", engagement: "54%" },
            { type: "Status/Texte", engagement: "41%" },
            { type: "Vidéos", engagement: "79%" },
            { type: "Stories", engagement: "47%" },
            { type: "Lives", engagement: "16%" }
        ],
        postingFrequency: {
            daily: "23%",
            weekly: "47%",
            monthly: "21%",
            lessOften: "9%"
        }
    },


    // Tendances émergentes
    trends: {
        growing: [
            "Social Commerce",
            "Réalité Augmentée",
            "Vidéos Courtes",
            "Audio Social",
            "NFTs et Web3"
        ],
        decreasingTrends: [
            "Posts textuels longs",
            "Photos filtrées",
            "Contenu non-authentique",
            "Marketing de masse"
        ]
    },

    // Données par pays
    countriesData: {
        france: {
            population: "67.39 millions",
            socialMediaUsers: "52.6 millions",
            penetrationRate: "78.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Snapchat", "TikTok"],
                usageStats: {
                    facebook: "42 millions",
                    youtube: "46 millions",
                    instagram: "31 millions",
                    snapchat: "24 millions",
                    tiktok: "14.9 millions"
                }
            },
            averageDailyUse: "1h 46min",
            demographicsSplit: {
                age: {
                    "13-17": "7.2%",
                    "18-24": "16.8%",
                    "25-34": "28.4%",
                    "35-44": "22.1%",
                    "45-54": "15.2%",
                    "55+": "10.3%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },
        unitedStates: {
            population: "331.9 millions",
            socialMediaUsers: "302 millions",
            penetrationRate: "91%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "TikTok", "LinkedIn"],
                usageStats: {
                    facebook: "190 millions",
                    youtube: "247 millions",
                    instagram: "159 millions",
                    tiktok: "113 millions",
                    linkedin: "196 millions"
                }
            },
            averageDailyUse: "2h 17min",
            demographicsSplit: {
                age: {
                    "13-17": "8.1%",
                    "18-24": "19.2%",
                    "25-34": "25.7%",
                    "35-44": "21.3%",
                    "45-54": "14.8%",
                    "55+": "10.9%"
                },
                gender: {
                    male: "45%",
                    female: "55%"
                }
            }
        },
        japan: {
            population: "125.7 millions",
            socialMediaUsers: "89.8 millions",
            penetrationRate: "71.4%",
            platforms: {
                mostPopular: ["LINE", "Twitter", "Instagram", "YouTube", "Facebook"],
                usageStats: {
                    line: "86 millions",
                    twitter: "45 millions",
                    instagram: "42 millions",
                    youtube: "66 millions",
                    facebook: "26 millions"
                }
            },
            averageDailyUse: "45min",
            demographicsSplit: {
                age: {
                    "13-17": "6.8%",
                    "18-24": "12.4%",
                    "25-34": "23.7%",
                    "35-44": "25.9%",
                    "45-54": "18.3%",
                    "55+": "12.9%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },
        germany: {
            population: "83.2 millions",
            socialMediaUsers: "66.4 millions",
            penetrationRate: "79.8%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "47 millions",
                    youtube: "58 millions",
                    facebook: "32 millions",
                    instagram: "26 millions",
                    tiktok: "18.5 millions"
                }
            },
            averageDailyUse: "1h 29min",
            demographicsSplit: {
                age: {
                    "13-17": "6.9%",
                    "18-24": "15.4%",
                    "25-34": "24.8%",
                    "35-44": "23.1%",
                    "45-54": "17.2%",
                    "55+": "12.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },
        
        unitedKingdom: {
            population: "67.22 millions",
            socialMediaUsers: "57.6 millions",
            penetrationRate: "85.7%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "Instagram", "Twitter", "TikTok"],
                usageStats: {
                    facebook: "44.8 millions",
                    whatsapp: "40.2 millions",
                    instagram: "31.9 millions",
                    twitter: "28.1 millions",
                    tiktok: "23.3 millions"
                }
            },
            averageDailyUse: "1h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "17.2%",
                    "25-34": "26.4%",
                    "35-44": "21.8%",
                    "45-54": "15.6%",
                    "55+": "11.2%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        brazil: {
            population: "214.3 millions",
            socialMediaUsers: "171.5 millions",
            penetrationRate: "80%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Instagram", "Facebook", "TikTok"],
                usageStats: {
                    whatsapp: "165 millions",
                    youtube: "138 millions",
                    instagram: "119 millions",
                    facebook: "116 millions",
                    tiktok: "94 millions"
                }
            },
            averageDailyUse: "3h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "9.8%",
                    "18-24": "21.3%",
                    "25-34": "29.7%",
                    "35-44": "19.4%",
                    "45-54": "12.6%",
                    "55+": "7.2%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        india: {
            population: "1.4 milliards",
            socialMediaUsers: "467 millions",
            penetrationRate: "33.4%",
            platforms: {
                mostPopular: ["YouTube", "WhatsApp", "Instagram", "Facebook", "Telegram"],
                usageStats: {
                    youtube: "462 millions",
                    whatsapp: "487 millions",
                    instagram: "349 millions",
                    facebook: "329 millions",
                    telegram: "147 millions"
                }
            },
            averageDailyUse: "2h 36min",
            demographicsSplit: {
                age: {
                    "13-17": "12.3%",
                    "18-24": "27.5%",
                    "25-34": "32.4%",
                    "35-44": "15.8%",
                    "45-54": "8.2%",
                    "55+": "3.8%"
                },
                gender: {
                    male: "71%",
                    female: "29%"
                }
            }
        },

        southKorea: {
            population: "51.74 millions",
            socialMediaUsers: "45.9 millions",
            penetrationRate: "88.7%",
            platforms: {
                mostPopular: ["YouTube", "KakaoTalk", "Instagram", "Facebook", "Twitter"],
                usageStats: {
                    youtube: "43.7 millions",
                    kakaotalk: "44.4 millions",
                    instagram: "23.8 millions",
                    facebook: "14.3 millions",
                    twitter: "12.5 millions"
                }
            },
            averageDailyUse: "1h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "16.8%",
                    "25-34": "25.3%",
                    "35-44": "24.7%",
                    "45-54": "16.9%",
                    "55+": "8.9%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        canada: {
            population: "38.25 millions",
            socialMediaUsers: "32.8 millions",
            penetrationRate: "85.7%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "Instagram", "TikTok", "Twitter"],
                usageStats: {
                    youtube: "31.5 millions",
                    facebook: "27.8 millions",
                    instagram: "18.5 millions",
                    tiktok: "16.2 millions",
                    twitter: "8.9 millions"
                }
            },
            averageDailyUse: "1h 46min",
            demographicsSplit: {
                age: {
                    "13-17": "8.2%",
                    "18-24": "16.9%",
                    "25-34": "24.8%",
                    "35-44": "22.3%",
                    "45-54": "16.1%",
                    "55+": "11.7%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        australia: {
            population: "25.69 millions",
            socialMediaUsers: "21.1 millions",
            penetrationRate: "82.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "17.5 millions",
                    youtube: "18.2 millions",
                    instagram: "12.8 millions",
                    whatsapp: "8.9 millions",
                    tiktok: "7.5 millions"
                }
            },
            averageDailyUse: "1h 57min",
            demographicsSplit: {
                age: {
                    "13-17": "7.9%",
                    "18-24": "16.8%",
                    "25-34": "25.3%",
                    "35-44": "22.1%",
                    "45-54": "16.4%",
                    "55+": "11.5%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        spain: {
            population: "47.4 millions",
            socialMediaUsers: "38.2 millions",
            penetrationRate: "80.6%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "35.8 millions",
                    youtube: "37.2 millions",
                    facebook: "27.4 millions",
                    instagram: "24.1 millions",
                    tiktok: "16.8 millions"
                }
            },
            averageDailyUse: "1h 53min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "15.8%",
                    "25-34": "24.6%",
                    "35-44": "23.2%",
                    "45-54": "17.5%",
                    "55+": "11.5%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        italy: {
            population: "60.36 millions",
            socialMediaUsers: "43.2 millions",
            penetrationRate: "71.6%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "Telegram"],
                usageStats: {
                    whatsapp: "38.4 millions",
                    facebook: "36.8 millions",
                    instagram: "28.7 millions",
                    youtube: "35.9 millions",
                    telegram: "15.2 millions"
                }
            },
            averageDailyUse: "1h 47min",
            demographicsSplit: {
                age: {
                    "13-17": "6.8%",
                    "18-24": "14.9%",
                    "25-34": "23.7%",
                    "35-44": "24.1%",
                    "45-54": "18.2%",
                    "55+": "12.3%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        china: {
            population: "1.4 milliards",
            socialMediaUsers: "1.02 milliards",
            penetrationRate: "72.9%",
            platforms: {
                mostPopular: ["WeChat", "Douyin", "Weibo", "QQ", "Xiaohongshu"],
                usageStats: {
                    wechat: "989 millions",
                    douyin: "689 millions",
                    weibo: "573 millions",
                    qq: "617 millions",
                    xiaohongshu: "200 millions"
                }
            },
            averageDailyUse: "2h 01min",
            demographicsSplit: {
                age: {
                    "13-17": "8.9%",
                    "18-24": "22.4%",
                    "25-34": "31.8%",
                    "35-44": "20.3%",
                    "45-54": "11.2%",
                    "55+": "5.4%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        russia: {
            population: "144.1 millions",
            socialMediaUsers: "106 millions",
            penetrationRate: "73.6%",
            platforms: {
                mostPopular: ["VKontakte", "WhatsApp", "Telegram", "YouTube", "Instagram"],
                usageStats: {
                    vkontakte: "97 millions",
                    whatsapp: "75 millions",
                    telegram: "88 millions",
                    youtube: "85 millions",
                    instagram: "63 millions"
                }
            },
            averageDailyUse: "2h 20min",
            demographicsSplit: {
                age: {
                    "13-17": "8.1%",
                    "18-24": "18.7%",
                    "25-34": "28.9%",
                    "35-44": "22.4%",
                    "45-54": "13.8%",
                    "55+": "8.1%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        mexico: {
            population: "130.2 millions",
            socialMediaUsers: "100.8 millions",
            penetrationRate: "77.4%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "93.5 millions",
                    facebook: "89.1 millions",
                    youtube: "86.3 millions",
                    instagram: "44.2 millions",
                    tiktok: "58.3 millions"
                }
            },
            averageDailyUse: "3h 26min",
            demographicsSplit: {
                age: {
                    "13-17": "10.2%",
                    "18-24": "22.8%",
                    "25-34": "28.4%",
                    "35-44": "19.7%",
                    "45-54": "12.6%",
                    "55+": "6.3%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        argentina: {
            population: "45.8 millions",
            socialMediaUsers: "36.9 millions",
            penetrationRate: "80.6%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "35.1 millions",
                    youtube: "34.2 millions",
                    facebook: "31.8 millions",
                    instagram: "28.4 millions",
                    tiktok: "23.9 millions"
                }
            },
            averageDailyUse: "3h 18min",
            demographicsSplit: {
                age: {
                    "13-17": "9.7%",
                    "18-24": "20.8%",
                    "25-34": "27.9%",
                    "35-44": "20.4%",
                    "45-54": "13.2%",
                    "55+": "8%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        southAfrica: {
            population: "60.6 millions",
            socialMediaUsers: "25 millions",
            penetrationRate: "41.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "23 millions",
                    facebook: "19.8 millions",
                    youtube: "16.4 millions",
                    instagram: "9.8 millions",
                    tiktok: "7.5 millions"
                }
            },
            averageDailyUse: "3h 32min",
            demographicsSplit: {
                age: {
                    "13-17": "11.2%",
                    "18-24": "24.8%",
                    "25-34": "29.7%",
                    "35-44": "18.4%",
                    "45-54": "10.2%",
                    "55+": "5.7%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        indonesia: {
            population: "276.4 millions",
            socialMediaUsers: "191.4 millions",
            penetrationRate: "69.2%",
            platforms: {
                mostPopular: ["WhatsApp", "Instagram", "Facebook", "TikTok", "YouTube"],
                usageStats: {
                    whatsapp: "183.6 millions",
                    instagram: "167.8 millions",
                    facebook: "158.9 millions",
                    tiktok: "125.4 millions",
                    youtube: "139.2 millions"
                }
            },
            averageDailyUse: "3h 17min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "25.7%",
                    "25-34": "30.2%",
                    "35-44": "17.8%",
                    "45-54": "9.6%",
                    "55+": "4.3%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        turkey: {
            population: "84.3 millions",
            socialMediaUsers: "68.9 millions",
            penetrationRate: "81.7%",
            platforms: {
                mostPopular: ["YouTube", "Instagram", "WhatsApp", "Facebook", "Twitter"],
                usageStats: {
                    youtube: "65.2 millions",
                    instagram: "58.3 millions",
                    whatsapp: "55.7 millions",
                    facebook: "44.8 millions",
                    twitter: "19.6 millions"
                }
            },
            averageDailyUse: "2h 57min",
            demographicsSplit: {
                age: {
                    "13-17": "9.8%",
                    "18-24": "21.6%",
                    "25-34": "28.4%",
                    "35-44": "20.7%",
                    "45-54": "12.8%",
                    "55+": "6.7%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        netherlands: {
            population: "17.44 millions",
            socialMediaUsers: "14.8 millions",
            penetrationRate: "84.9%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "12.9 millions",
                    youtube: "13.2 millions",
                    facebook: "10.4 millions",
                    instagram: "7.8 millions",
                    linkedin: "5.7 millions"
                }
            },
            averageDailyUse: "1h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "7.2%",
                    "18-24": "15.8%",
                    "25-34": "24.6%",
                    "35-44": "23.1%",
                    "45-54": "17.8%",
                    "55+": "11.5%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        sweden: {
            population: "10.35 millions",
            socialMediaUsers: "8.9 millions",
            penetrationRate: "86%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "Instagram", "WhatsApp", "LinkedIn"],
                usageStats: {
                    youtube: "8.4 millions",
                    facebook: "7.2 millions",
                    instagram: "6.1 millions",
                    whatsapp: "4.8 millions",
                    linkedin: "3.9 millions"
                }
            },
            averageDailyUse: "1h 53min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "16.2%",
                    "25-34": "25.1%",
                    "35-44": "22.8%",
                    "45-54": "16.9%",
                    "55+": "11.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        portugal: {
            population: "10.31 millions",
            socialMediaUsers: "8.4 millions",
            penetrationRate: "81.5%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "LinkedIn"],
                usageStats: {
                    whatsapp: "7.8 millions",
                    facebook: "7.1 millions",
                    instagram: "6.3 millions",
                    youtube: "7.4 millions",
                    linkedin: "3.2 millions"
                }
            },
            averageDailyUse: "2h 09min",
            demographicsSplit: {
                age: {
                    "13-17": "7.1%",
                    "18-24": "15.4%",
                    "25-34": "23.8%",
                    "35-44": "24.2%",
                    "45-54": "17.9%",
                    "55+": "11.6%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        belgium: {
            population: "11.59 millions",
            socialMediaUsers: "9.7 millions",
            penetrationRate: "83.7%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "TikTok"],
                usageStats: {
                    whatsapp: "8.4 millions",
                    facebook: "7.9 millions",
                    instagram: "5.8 millions",
                    youtube: "8.1 millions",
                    tiktok: "3.2 millions"
                }
            },
            averageDailyUse: "1h 56min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "16.1%",
                    "25-34": "24.3%",
                    "35-44": "22.9%",
                    "45-54": "17.2%",
                    "55+": "11.7%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        switzerland: {
            population: "8.7 millions",
            socialMediaUsers: "7.3 millions",
            penetrationRate: "83.9%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "6.8 millions",
                    youtube: "6.5 millions",
                    facebook: "4.3 millions",
                    instagram: "3.8 millions",
                    linkedin: "3.2 millions"
                }
            },
            averageDailyUse: "1h 39min",
            demographicsSplit: {
                age: {
                    "13-17": "7.1%",
                    "18-24": "15.3%",
                    "25-34": "24.8%",
                    "35-44": "23.6%",
                    "45-54": "17.9%",
                    "55+": "11.3%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        poland: {
            population: "37.8 millions",
            socialMediaUsers: "28.4 millions",
            penetrationRate: "75.1%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "WhatsApp", "Instagram", "TikTok"],
                usageStats: {
                    youtube: "26.8 millions",
                    facebook: "23.1 millions",
                    whatsapp: "18.4 millions",
                    instagram: "14.2 millions",
                    tiktok: "11.8 millions"
                }
            },
            averageDailyUse: "2h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "8.4%",
                    "18-24": "17.2%",
                    "25-34": "26.8%",
                    "35-44": "22.4%",
                    "45-54": "15.6%",
                    "55+": "9.6%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        thailand: {
            population: "69.8 millions",
            socialMediaUsers: "55.6 millions",
            penetrationRate: "79.7%",
            platforms: {
                mostPopular: ["Facebook", "LINE", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "51.2 millions",
                    line: "48.7 millions",
                    youtube: "46.8 millions",
                    instagram: "21.4 millions",
                    tiktok: "19.8 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "9.8%",
                    "18-24": "22.4%",
                    "25-34": "29.6%",
                    "35-44": "20.8%",
                    "45-54": "11.9%",
                    "55+": "5.5%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        vietnam: {
            population: "97.3 millions",
            socialMediaUsers: "76.9 millions",
            penetrationRate: "79%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Zalo"],
                usageStats: {
                    facebook: "71.8 millions",
                    youtube: "68.4 millions",
                    tiktok: "48.9 millions",
                    instagram: "22.3 millions",
                    zalo: "64.2 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "10.2%",
                    "18-24": "23.8%",
                    "25-34": "31.4%",
                    "35-44": "19.6%",
                    "45-54": "10.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        philippines: {
            population: "110.8 millions",
            socialMediaUsers: "92.1 millions",
            penetrationRate: "83.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "86.4 millions",
                    youtube: "81.2 millions",
                    tiktok: "55.8 millions",
                    instagram: "32.1 millions",
                    twitter: "28.4 millions"
                }
            },
            averageDailyUse: "4h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "11.4%",
                    "18-24": "24.8%",
                    "25-34": "30.2%",
                    "35-44": "18.6%",
                    "45-54": "10.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        malaysia: {
            population: "32.7 millions",
            socialMediaUsers: "28.8 millions",
            penetrationRate: "88.1%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "TikTok"],
                usageStats: {
                    whatsapp: "26.9 millions",
                    facebook: "24.5 millions",
                    instagram: "16.7 millions",
                    youtube: "22.8 millions",
                    tiktok: "13.2 millions"
                }
            },
            averageDailyUse: "3h 01min",
            demographicsSplit: {
                age: {
                    "13-17": "10.8%",
                    "18-24": "23.4%",
                    "25-34": "29.8%",
                    "35-44": "19.2%",
                    "45-54": "11.3%",
                    "55+": "5.5%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        singapore: {
            population: "5.85 millions",
            socialMediaUsers: "5.1 millions",
            penetrationRate: "87.2%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "Telegram"],
                usageStats: {
                    whatsapp: "4.8 millions",
                    youtube: "4.5 millions",
                    facebook: "4.2 millions",
                    instagram: "3.4 millions",
                    telegram: "2.9 millions"
                }
            },
            averageDailyUse: "2h 29min",
            demographicsSplit: {
                age: {
                    "13-17": "7.2%",
                    "18-24": "16.8%",
                    "25-34": "28.4%",
                    "35-44": "24.6%",
                    "45-54": "15.2%",
                    "55+": "7.8%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        ireland: {
            population: "5.03 millions",
            socialMediaUsers: "4.2 millions",
            penetrationRate: "83.5%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "LinkedIn"],
                usageStats: {
                    whatsapp: "3.8 millions",
                    facebook: "3.4 millions",
                    instagram: "2.5 millions",
                    youtube: "3.6 millions",
                    linkedin: "2.1 millions"
                }
            },
            averageDailyUse: "1h 55min",
            demographicsSplit: {
                age: {
                    "13-17": "7.6%",
                    "18-24": "16.4%",
                    "25-34": "25.8%",
                    "35-44": "23.2%",
                    "45-54": "16.4%",
                    "55+": "10.6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        denmark: {
            population: "5.83 millions",
            socialMediaUsers: "4.9 millions",
            penetrationRate: "84.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "Snapchat"],
                usageStats: {
                    facebook: "4.3 millions",
                    youtube: "4.1 millions",
                    instagram: "2.8 millions",
                    linkedin: "2.4 millions",
                    snapchat: "2.2 millions"
                }
            },
            averageDailyUse: "1h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "7.2%",
                    "18-24": "15.8%",
                    "25-34": "24.6%",
                    "35-44": "23.4%",
                    "45-54": "17.2%",
                    "55+": "11.8%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        norway: {
            population: "5.41 millions",
            socialMediaUsers: "4.5 millions",
            penetrationRate: "83.2%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Snapchat", "Instagram", "LinkedIn"],
                usageStats: {
                    facebook: "3.9 millions",
                    youtube: "3.8 millions",
                    snapchat: "3.2 millions",
                    instagram: "2.7 millions",
                    linkedin: "2.1 millions"
                }
            },
            averageDailyUse: "1h 44min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "15.6%",
                    "25-34": "24.2%",
                    "35-44": "23.8%",
                    "45-54": "17.4%",
                    "55+": "11.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        finland: {
            population: "5.54 millions",
            socialMediaUsers: "4.6 millions",
            penetrationRate: "83%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "Snapchat"],
                usageStats: {
                    whatsapp: "4.1 millions",
                    youtube: "4.2 millions",
                    facebook: "3.3 millions",
                    instagram: "2.4 millions",
                    snapchat: "1.8 millions"
                }
            },
            averageDailyUse: "1h 51min",
            demographicsSplit: {
                age: {
                    "13-17": "7.6%",
                    "18-24": "15.4%",
                    "25-34": "24.8%",
                    "35-44": "23.6%",
                    "45-54": "17.2%",
                    "55+": "11.4%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        austria: {
            population: "9.03 millions",
            socialMediaUsers: "7.2 millions",
            penetrationRate: "79.7%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "6.4 millions",
                    youtube: "6.1 millions",
                    facebook: "4.8 millions",
                    instagram: "3.2 millions",
                    tiktok: "2.1 millions"
                }
            },
            averageDailyUse: "1h 43min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "16.2%",
                    "25-34": "24.4%",
                    "35-44": "22.8%",
                    "45-54": "17.4%",
                    "55+": "11.4%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        greece: {
            population: "10.67 millions",
            socialMediaUsers: "8.5 millions",
            penetrationRate: "79.7%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "Instagram", "Messenger", "TikTok"],
                usageStats: {
                    youtube: "8.1 millions",
                    facebook: "7.2 millions",
                    instagram: "5.4 millions",
                    messenger: "6.8 millions",
                    tiktok: "3.2 millions"
                }
            },
            averageDailyUse: "2h 17min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "16.8%",
                    "25-34": "25.2%",
                    "35-44": "22.4%",
                    "45-54": "16.8%",
                    "55+": "11.4%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        czechRepublic: {
            population: "10.7 millions",
            socialMediaUsers: "8.7 millions",
            penetrationRate: "81.3%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "WhatsApp", "Instagram", "TikTok"],
                usageStats: {
                    youtube: "8.2 millions",
                    facebook: "7.1 millions",
                    whatsapp: "5.8 millions",
                    instagram: "3.9 millions",
                    tiktok: "2.8 millions"
                }
            },
            averageDailyUse: "2h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "8.2%",
                    "18-24": "17.4%",
                    "25-34": "25.8%",
                    "35-44": "21.6%",
                    "45-54": "16.2%",
                    "55+": "10.8%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        hungary: {
            population: "9.71 millions",
            socialMediaUsers: "7.8 millions",
            penetrationRate: "80.3%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Messenger", "TikTok"],
                usageStats: {
                    facebook: "7.1 millions",
                    youtube: "7.3 millions",
                    instagram: "4.2 millions",
                    messenger: "6.4 millions",
                    tiktok: "2.9 millions"
                }
            },
            averageDailyUse: "2h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "8.4%",
                    "18-24": "17.2%",
                    "25-34": "25.4%",
                    "35-44": "21.8%",
                    "45-54": "16.4%",
                    "55+": "10.8%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        romania: {
            population: "19.2 millions",
            socialMediaUsers: "12.8 millions",
            penetrationRate: "66.7%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "WhatsApp", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "11.8 millions",
                    youtube: "11.2 millions",
                    whatsapp: "9.8 millions",
                    instagram: "6.4 millions",
                    tiktok: "4.8 millions"
                }
            },
            averageDailyUse: "2h 24min",
            demographicsSplit: {
                age: {
                    "13-17": "8.8%",
                    "18-24": "18.2%",
                    "25-34": "26.4%",
                    "35-44": "21.8%",
                    "45-54": "15.2%",
                    "55+": "9.6%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        israel: {
            population: "9.3 millions",
            socialMediaUsers: "7.6 millions",
            penetrationRate: "81.7%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "Telegram"],
                usageStats: {
                    whatsapp: "7.2 millions",
                    facebook: "6.4 millions",
                    instagram: "4.8 millions",
                    youtube: "6.1 millions",
                    telegram: "3.2 millions"
                }
            },
            averageDailyUse: "2h 38min",
            demographicsSplit: {
                age: {
                    "13-17": "9.2%",
                    "18-24": "19.4%",
                    "25-34": "27.8%",
                    "35-44": "21.4%",
                    "45-54": "14.2%",
                    "55+": "8%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        uae: {
            population: "9.99 millions",
            socialMediaUsers: "9.84 millions",
            penetrationRate: "98.5%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "LinkedIn"],
                usageStats: {
                    whatsapp: "9.2 millions",
                    facebook: "8.8 millions",
                    instagram: "7.4 millions",
                    youtube: "8.2 millions",
                    linkedin: "5.3 millions"
                }
            },
            averageDailyUse: "2h 55min",
            demographicsSplit: {
                age: {
                    "13-17": "6.8%",
                    "18-24": "18.4%",
                    "25-34": "32.6%",
                    "35-44": "24.8%",
                    "45-54": "12.4%",
                    "55+": "5%"
                },
                gender: {
                    male: "62%",
                    female: "38%"
                }
            }
        },

        saudiArabia: {
            population: "35.3 millions",
            socialMediaUsers: "27.8 millions",
            penetrationRate: "78.7%",
            platforms: {
                mostPopular: ["YouTube", "WhatsApp", "Instagram", "Facebook", "Snapchat"],
                usageStats: {
                    youtube: "26.2 millions",
                    whatsapp: "25.4 millions",
                    instagram: "22.8 millions",
                    facebook: "18.6 millions",
                    snapchat: "16.4 millions"
                }
            },
            averageDailyUse: "3h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "8.6%",
                    "18-24": "22.4%",
                    "25-34": "31.8%",
                    "35-44": "21.4%",
                    "45-54": "11.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "58%",
                    female: "42%"
                }
            }
        },

        egypt: {
            population: "104.3 millions",
            socialMediaUsers: "53.7 millions",
            penetrationRate: "51.5%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "49.8 millions",
                    whatsapp: "45.2 millions",
                    youtube: "44.6 millions",
                    instagram: "18.4 millions",
                    tiktok: "14.8 millions"
                }
            },
            averageDailyUse: "3h 15min",
            demographicsSplit: {
                age: {
                    "13-17": "11.2%",
                    "18-24": "24.8%",
                    "25-34": "29.6%",
                    "35-44": "18.4%",
                    "45-54": "10.8%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "56%",
                    female: "44%"
                }
            }
        },

        morocco: {
            population: "37.08 millions",
            socialMediaUsers: "25.3 millions",
            penetrationRate: "68.2%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "23.8 millions",
                    facebook: "22.1 millions",
                    youtube: "20.4 millions",
                    instagram: "11.2 millions",
                    tiktok: "8.9 millions"
                }
            },
            averageDailyUse: "2h 32min",
            demographicsSplit: {
                age: {
                    "13-17": "10.8%",
                    "18-24": "23.4%",
                    "25-34": "28.6%",
                    "35-44": "19.8%",
                    "45-54": "11.2%",
                    "55+": "6.2%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        nigeria: {
            population: "213.4 millions",
            socialMediaUsers: "32.9 millions",
            penetrationRate: "15.4%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "31.2 millions",
                    facebook: "28.6 millions",
                    youtube: "27.4 millions",
                    instagram: "12.8 millions",
                    tiktok: "9.4 millions"
                }
            },
            averageDailyUse: "3h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "26.8%",
                    "25-34": "31.2%",
                    "35-44": "17.4%",
                    "45-54": "8.2%",
                    "55+": "4%"
                },
                gender: {
                    male: "58%",
                    female: "42%"
                }
            }
        },

        kenya: {
            population: "54.98 millions",
            socialMediaUsers: "12.1 millions",
            penetrationRate: "22%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "11.5 millions",
                    facebook: "9.8 millions",
                    youtube: "8.7 millions",
                    instagram: "4.2 millions",
                    linkedin: "3.1 millions"
                }
            },
            averageDailyUse: "3h 24min",
            demographicsSplit: {
                age: {
                    "13-17": "11.8%",
                    "18-24": "25.4%",
                    "25-34": "30.8%",
                    "35-44": "18.2%",
                    "45-54": "9.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "55%",
                    female: "45%"
                }
            }
        },

        newZealand: {
            population: "5.12 millions",
            socialMediaUsers: "4.3 millions",
            penetrationRate: "84%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "TikTok"],
                usageStats: {
                    facebook: "3.8 millions",
                    youtube: "3.9 millions",
                    instagram: "2.4 millions",
                    linkedin: "2.1 millions",
                    tiktok: "1.8 millions"
                }
            },
            averageDailyUse: "1h 49min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "16.4%",
                    "25-34": "24.8%",
                    "35-44": "22.6%",
                    "45-54": "16.8%",
                    "55+": "11.6%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        colombia: {
            population: "51.52 millions",
            socialMediaUsers: "39.8 millions",
            penetrationRate: "77.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "37.2 millions",
                    facebook: "35.4 millions",
                    youtube: "33.8 millions",
                    instagram: "24.6 millions",
                    tiktok: "19.8 millions"
                }
            },
            averageDailyUse: "3h 30min",
            demographicsSplit: {
                age: {
                    "13-17": "10.2%",
                    "18-24": "22.8%",
                    "25-34": "28.4%",
                    "35-44": "20.2%",
                    "45-54": "12.4%",
                    "55+": "6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        peru: {
            population: "33.72 millions",
            socialMediaUsers: "27.4 millions",
            penetrationRate: "81.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "25.8 millions",
                    facebook: "24.2 millions",
                    youtube: "23.1 millions",
                    instagram: "14.8 millions",
                    tiktok: "12.6 millions"
                }
            },
            averageDailyUse: "3h 18min",
            demographicsSplit: {
                age: {
                    "13-17": "10.4%",
                    "18-24": "22.6%",
                    "25-34": "28.8%",
                    "35-44": "19.8%",
                    "45-54": "12.2%",
                    "55+": "6.2%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        chile: {
            population: "19.45 millions",
            socialMediaUsers: "16.2 millions",
            penetrationRate: "83.3%",
            platforms: {
                mostPopular: ["WhatsApp", "YouTube", "Facebook", "Instagram", "TikTok"],
                usageStats: {
                    whatsapp: "15.4 millions",
                    youtube: "14.8 millions",
                    facebook: "13.6 millions",
                    instagram: "10.2 millions",
                    tiktok: "8.4 millions"
                }
            },
            averageDailyUse: "3h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "9.2%",
                    "18-24": "20.4%",
                    "25-34": "27.8%",
                    "35-44": "21.2%",
                    "45-54": "13.8%",
                    "55+": "7.6%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        pakistan: {
            population: "220.9 millions",
            socialMediaUsers: "71.7 millions",
            penetrationRate: "32.5%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "WhatsApp", "TikTok", "Instagram"],
                usageStats: {
                    youtube: "68.9 millions",
                    facebook: "64.2 millions",
                    whatsapp: "61.8 millions",
                    tiktok: "39.6 millions",
                    instagram: "24.8 millions"
                }
            },
            averageDailyUse: "3h 09min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "28.4%",
                    "25-34": "31.2%",
                    "35-44": "16.4%",
                    "45-54": "7.8%",
                    "55+": "3.4%"
                },
                gender: {
                    male: "72%",
                    female: "28%"
                }
            }
        },

        bangladesh: {
            population: "165.2 millions",
            socialMediaUsers: "47.2 millions",
            penetrationRate: "28.6%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "WhatsApp", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "44.8 millions",
                    youtube: "42.6 millions",
                    whatsapp: "38.4 millions",
                    instagram: "18.2 millions",
                    tiktok: "16.8 millions"
                }
            },
            averageDailyUse: "3h 01min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "29.6%",
                    "25-34": "30.8%",
                    "35-44": "15.8%",
                    "45-54": "7.2%",
                    "55+": "3.4%"
                },
                gender: {
                    male: "69%",
                    female: "31%"
                }
            }
        },

        ukraine: {
            population: "43.79 millions",
            socialMediaUsers: "29.4 millions",
            penetrationRate: "67.1%",
            platforms: {
                mostPopular: ["YouTube", "Telegram", "Instagram", "Facebook", "TikTok"],
                usageStats: {
                    youtube: "27.8 millions",
                    telegram: "26.4 millions",
                    instagram: "19.2 millions",
                    facebook: "16.8 millions",
                    tiktok: "12.4 millions"
                }
            },
            averageDailyUse: "2h 36min",
            demographicsSplit: {
                age: {
                    "13-17": "8.4%",
                    "18-24": "18.6%",
                    "25-34": "27.8%",
                    "35-44": "22.4%",
                    "45-54": "14.8%",
                    "55+": "8%"
                },
                gender: {
                    male: "45%",
                    female: "55%"
                }
            }
        },

        kazakhstan: {
            population: "19.4 millions",
            socialMediaUsers: "12.6 millions",
            penetrationRate: "64.9%",
            platforms: {
                mostPopular: ["YouTube", "WhatsApp", "Instagram", "Telegram", "VKontakte"],
                usageStats: {
                    youtube: "11.8 millions",
                    whatsapp: "10.9 millions",
                    instagram: "8.4 millions",
                    telegram: "7.2 millions",
                    vkontakte: "4.8 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "9.4%",
                    "18-24": "20.6%",
                    "25-34": "28.4%",
                    "35-44": "21.8%",
                    "45-54": "13.2%",
                    "55+": "6.6%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        algeria: {
            population: "44.6 millions",
            socialMediaUsers: "28.4 millions",
            penetrationRate: "63.7%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "26.2 millions",
                    youtube: "24.8 millions",
                    instagram: "16.4 millions",
                    whatsapp: "22.6 millions",
                    tiktok: "12.8 millions"
                }
            },
            averageDailyUse: "3h 15min",
            demographicsSplit: {
                age: {
                    "13-17": "11.2%",
                    "18-24": "24.6%",
                    "25-34": "29.8%",
                    "35-44": "18.4%",
                    "45-54": "10.8%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "59%",
                    female: "41%"
                }
            }
        },

        tunisia: {
            population: "11.94 millions",
            socialMediaUsers: "8.4 millions",
            penetrationRate: "70.4%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "YouTube", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "7.8 millions",
                    instagram: "4.6 millions",
                    youtube: "6.2 millions",
                    whatsapp: "5.8 millions",
                    tiktok: "3.4 millions"
                }
            },
            averageDailyUse: "2h 54min",
            demographicsSplit: {
                age: {
                    "13-17": "10.4%",
                    "18-24": "23.8%",
                    "25-34": "28.6%",
                    "35-44": "19.2%",
                    "45-54": "11.8%",
                    "55+": "6.2%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        ghana: {
            population: "31.73 millions",
            socialMediaUsers: "8.2 millions",
            penetrationRate: "25.8%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "Twitter"],
                usageStats: {
                    whatsapp: "7.8 millions",
                    facebook: "6.9 millions",
                    instagram: "3.8 millions",
                    youtube: "5.2 millions",
                    twitter: "2.4 millions"
                }
            },
            averageDailyUse: "3h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "12.2%",
                    "18-24": "26.4%",
                    "25-34": "30.2%",
                    "35-44": "17.8%",
                    "45-54": "9.2%",
                    "55+": "4.2%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        ivoryCoast: {
            population: "26.38 millions",
            socialMediaUsers: "7.2 millions",
            penetrationRate: "27.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    whatsapp: "6.8 millions",
                    facebook: "5.9 millions",
                    youtube: "4.8 millions",
                    instagram: "2.9 millions",
                    twitter: "1.8 millions"
                }
            },
            averageDailyUse: "3h 22min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "27.2%",
                    "25-34": "29.4%",
                    "35-44": "17.2%",
                    "45-54": "8.9%",
                    "55+": "4.5%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },
        iraq: {
            population: "41.2 millions",
            socialMediaUsers: "28.4 millions",
            penetrationRate: "68.9%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Snapchat", "TikTok"],
                usageStats: {
                    facebook: "25.8 millions",
                    youtube: "24.2 millions",
                    instagram: "16.8 millions",
                    snapchat: "12.4 millions",
                    tiktok: "10.2 millions"
                }
            },
            averageDailyUse: "3h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "26.8%",
                    "25-34": "29.4%",
                    "35-44": "17.8%",
                    "45-54": "9.2%",
                    "55+": "4.4%"
                },
                gender: {
                    male: "58%",
                    female: "42%"
                }
            }
        },

        azerbaijan: {
            population: "10.1 millions",
            socialMediaUsers: "7.2 millions",
            penetrationRate: "71.3%",
            platforms: {
                mostPopular: ["Instagram", "Facebook", "TikTok", "YouTube", "Telegram"],
                usageStats: {
                    instagram: "5.8 millions",
                    facebook: "4.9 millions",
                    tiktok: "3.8 millions",
                    youtube: "5.2 millions",
                    telegram: "3.4 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "9.8%",
                    "18-24": "21.4%",
                    "25-34": "28.6%",
                    "35-44": "20.8%",
                    "45-54": "12.8%",
                    "55+": "6.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        croatia: {
            population: "4.05 millions",
            socialMediaUsers: "3.2 millions",
            penetrationRate: "79%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "Instagram", "YouTube", "TikTok"],
                usageStats: {
                    facebook: "2.8 millions",
                    whatsapp: "2.6 millions",
                    instagram: "1.9 millions",
                    youtube: "2.4 millions",
                    tiktok: "1.2 millions"
                }
            },
            averageDailyUse: "2h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "16.4%",
                    "25-34": "25.2%",
                    "35-44": "22.8%",
                    "45-54": "16.8%",
                    "55+": "11%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        slovakia: {
            population: "5.46 millions",
            socialMediaUsers: "4.2 millions",
            penetrationRate: "76.9%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "3.6 millions",
                    youtube: "3.4 millions",
                    instagram: "2.2 millions",
                    whatsapp: "1.8 millions",
                    tiktok: "1.4 millions"
                }
            },
            averageDailyUse: "2h 14min",
            demographicsSplit: {
                age: {
                    "13-17": "8.2%",
                    "18-24": "17.4%",
                    "25-34": "25.8%",
                    "35-44": "22.4%",
                    "45-54": "15.8%",
                    "55+": "10.4%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        slovenia: {
            population: "2.1 millions",
            socialMediaUsers: "1.7 millions",
            penetrationRate: "81%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "1.4 millions",
                    youtube: "1.3 millions",
                    instagram: "0.9 millions",
                    whatsapp: "0.8 millions",
                    tiktok: "0.5 millions"
                }
            },
            averageDailyUse: "1h 58min",
            demographicsSplit: {
                age: {
                    "13-17": "7.6%",
                    "18-24": "16.2%",
                    "25-34": "24.8%",
                    "35-44": "23.2%",
                    "45-54": "16.8%",
                    "55+": "11.4%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },
        lithuania: {
            population: "2.79 millions",
            socialMediaUsers: "2.2 millions",
            penetrationRate: "78.9%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "1.9 millions",
                    youtube: "1.8 millions",
                    instagram: "1.1 millions",
                    whatsapp: "0.9 millions",
                    tiktok: "0.7 millions"
                }
            },
            averageDailyUse: "2h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "8.1%",
                    "18-24": "16.8%",
                    "25-34": "25.4%",
                    "35-44": "22.8%",
                    "45-54": "16.2%",
                    "55+": "10.7%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        estonia: {
            population: "1.33 millions",
            socialMediaUsers: "1.1 millions",
            penetrationRate: "82.7%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "Instagram", "WhatsApp", "TikTok"],
                usageStats: {
                    youtube: "0.95 millions",
                    facebook: "0.88 millions",
                    instagram: "0.52 millions",
                    whatsapp: "0.48 millions",
                    tiktok: "0.32 millions"
                }
            },
            averageDailyUse: "2h 04min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "16.2%",
                    "25-34": "24.8%",
                    "35-44": "23.4%",
                    "45-54": "16.8%",
                    "55+": "11%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        cyprus: {
            population: "1.21 millions",
            socialMediaUsers: "1.02 millions",
            penetrationRate: "84.3%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "Instagram", "YouTube", "TikTok"],
                usageStats: {
                    facebook: "0.92 millions",
                    whatsapp: "0.88 millions",
                    instagram: "0.64 millions",
                    youtube: "0.82 millions",
                    tiktok: "0.38 millions"
                }
            },
            averageDailyUse: "2h 26min",
            demographicsSplit: {
                age: {
                    "13-17": "8.2%",
                    "18-24": "17.4%",
                    "25-34": "26.2%",
                    "35-44": "22.8%",
                    "45-54": "15.8%",
                    "55+": "9.6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        luxembourg: {
            population: "0.63 millions",
            socialMediaUsers: "0.54 millions",
            penetrationRate: "85.7%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "0.48 millions",
                    facebook: "0.42 millions",
                    youtube: "0.44 millions",
                    instagram: "0.28 millions",
                    linkedin: "0.24 millions"
                }
            },
            averageDailyUse: "1h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "15.8%",
                    "25-34": "25.2%",
                    "35-44": "24.2%",
                    "45-54": "17.2%",
                    "55+": "10.2%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        malta: {
            population: "0.51 millions",
            socialMediaUsers: "0.44 millions",
            penetrationRate: "86.3%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "Instagram", "YouTube", "LinkedIn"],
                usageStats: {
                    facebook: "0.41 millions",
                    whatsapp: "0.38 millions",
                    instagram: "0.26 millions",
                    youtube: "0.34 millions",
                    linkedin: "0.18 millions"
                }
            },
            averageDailyUse: "2h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "7.8%",
                    "18-24": "16.4%",
                    "25-34": "25.8%",
                    "35-44": "23.2%",
                    "45-54": "16.4%",
                    "55+": "10.4%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },
        iceland: {
            population: "0.37 millions",
            socialMediaUsers: "0.33 millions",
            penetrationRate: "89.2%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Snapchat", "WhatsApp"],
                usageStats: {
                    facebook: "0.31 millions",
                    youtube: "0.29 millions",
                    instagram: "0.24 millions",
                    snapchat: "0.19 millions",
                    whatsapp: "0.16 millions"
                }
            },
            averageDailyUse: "1h 46min",
            demographicsSplit: {
                age: {
                    "13-17": "7.2%",
                    "18-24": "15.4%",
                    "25-34": "24.8%",
                    "35-44": "23.6%",
                    "45-54": "17.4%",
                    "55+": "11.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        montenegro: {
            population: "0.62 millions",
            socialMediaUsers: "0.46 millions",
            penetrationRate: "74.2%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "YouTube", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "0.42 millions",
                    instagram: "0.32 millions",
                    youtube: "0.38 millions",
                    whatsapp: "0.28 millions",
                    tiktok: "0.18 millions"
                }
            },
            averageDailyUse: "2h 32min",
            demographicsSplit: {
                age: {
                    "13-17": "8.8%",
                    "18-24": "18.4%",
                    "25-34": "26.2%",
                    "35-44": "21.4%",
                    "45-54": "15.6%",
                    "55+": "9.6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        albania: {
            population: "2.88 millions",
            socialMediaUsers: "2.1 millions",
            penetrationRate: "72.9%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "WhatsApp", "YouTube", "TikTok"],
                usageStats: {
                    facebook: "1.9 millions",
                    instagram: "1.4 millions",
                    whatsapp: "1.6 millions",
                    youtube: "1.7 millions",
                    tiktok: "0.8 millions"
                }
            },
            averageDailyUse: "2h 46min",
            demographicsSplit: {
                age: {
                    "13-17": "9.4%",
                    "18-24": "19.8%",
                    "25-34": "27.4%",
                    "35-44": "20.8%",
                    "45-54": "14.2%",
                    "55+": "8.4%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        northMacedonia: {
            population: "2.08 millions",
            socialMediaUsers: "1.52 millions",
            penetrationRate: "73.1%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "YouTube", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "1.38 millions",
                    instagram: "0.92 millions",
                    youtube: "1.12 millions",
                    whatsapp: "0.84 millions",
                    tiktok: "0.56 millions"
                }
            },
            averageDailyUse: "2h 38min",
            demographicsSplit: {
                age: {
                    "13-17": "8.8%",
                    "18-24": "18.6%",
                    "25-34": "26.8%",
                    "35-44": "21.2%",
                    "45-54": "15.2%",
                    "55+": "9.4%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        moldova: {
            population: "2.62 millions",
            socialMediaUsers: "1.84 millions",
            penetrationRate: "70.2%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "YouTube", "Telegram", "TikTok"],
                usageStats: {
                    facebook: "1.62 millions",
                    instagram: "0.98 millions",
                    youtube: "1.42 millions",
                    telegram: "0.86 millions",
                    tiktok: "0.64 millions"
                }
            },
            averageDailyUse: "2h 28min",
            demographicsSplit: {
                age: {
                    "13-17": "8.6%",
                    "18-24": "18.2%",
                    "25-34": "26.4%",
                    "35-44": "21.8%",
                    "45-54": "15.6%",
                    "55+": "9.4%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },
        georgia: {
            population: "3.97 millions",
            socialMediaUsers: "2.9 millions",
            penetrationRate: "73%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "YouTube", "TikTok", "Telegram"],
                usageStats: {
                    facebook: "2.6 millions",
                    instagram: "1.8 millions",
                    youtube: "2.2 millions",
                    tiktok: "1.2 millions",
                    telegram: "0.9 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "8.8%",
                    "18-24": "19.4%",
                    "25-34": "27.6%",
                    "35-44": "21.2%",
                    "45-54": "14.6%",
                    "55+": "8.4%"
                },
                gender: {
                    male: "46%",
                    female: "54%"
                }
            }
        },

        armenia: {
            population: "2.96 millions",
            socialMediaUsers: "2.1 millions",
            penetrationRate: "70.9%",
            platforms: {
                mostPopular: ["YouTube", "Facebook", "Instagram", "Telegram", "TikTok"],
                usageStats: {
                    youtube: "1.9 millions",
                    facebook: "1.8 millions",
                    instagram: "1.2 millions",
                    telegram: "0.9 millions",
                    tiktok: "0.7 millions"
                }
            },
            averageDailyUse: "2h 38min",
            demographicsSplit: {
                age: {
                    "13-17": "8.6%",
                    "18-24": "19.2%",
                    "25-34": "27.8%",
                    "35-44": "21.4%",
                    "45-54": "14.8%",
                    "55+": "8.2%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },

        jordan: {
            population: "10.2 millions",
            socialMediaUsers: "7.8 millions",
            penetrationRate: "76.5%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "7.2 millions",
                    whatsapp: "6.8 millions",
                    youtube: "6.4 millions",
                    instagram: "4.2 millions",
                    tiktok: "3.1 millions"
                }
            },
            averageDailyUse: "3h 14min",
            demographicsSplit: {
                age: {
                    "13-17": "11.2%",
                    "18-24": "24.6%",
                    "25-34": "28.8%",
                    "35-44": "19.4%",
                    "45-54": "10.8%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        lebanon: {
            population: "6.8 millions",
            socialMediaUsers: "4.8 millions",
            penetrationRate: "70.6%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "TikTok"],
                usageStats: {
                    whatsapp: "4.4 millions",
                    facebook: "4.1 millions",
                    instagram: "2.8 millions",
                    youtube: "3.6 millions",
                    tiktok: "1.9 millions"
                }
            },
            averageDailyUse: "3h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "9.8%",
                    "18-24": "22.4%",
                    "25-34": "28.6%",
                    "35-44": "20.2%",
                    "45-54": "12.4%",
                    "55+": "6.6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        qatar: {
            population: "2.93 millions",
            socialMediaUsers: "2.88 millions",
            penetrationRate: "98.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Instagram", "Facebook", "YouTube", "Snapchat"],
                usageStats: {
                    whatsapp: "2.7 millions",
                    instagram: "2.4 millions",
                    facebook: "2.2 millions",
                    youtube: "2.5 millions",
                    snapchat: "1.8 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "7.4%",
                    "18-24": "19.8%",
                    "25-34": "32.4%",
                    "35-44": "24.6%",
                    "45-54": "11.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "64%",
                    female: "36%"
                }
            }
        },
        kuwait: {
            population: "4.27 millions",
            socialMediaUsers: "4.05 millions",
            penetrationRate: "94.8%",
            platforms: {
                mostPopular: ["WhatsApp", "Instagram", "Snapchat", "Facebook", "YouTube"],
                usageStats: {
                    whatsapp: "3.8 millions",
                    instagram: "3.2 millions",
                    snapchat: "2.8 millions",
                    facebook: "2.6 millions",
                    youtube: "3.4 millions"
                }
            },
            averageDailyUse: "3h 04min",
            demographicsSplit: {
                age: {
                    "13-17": "8.2%",
                    "18-24": "20.4%",
                    "25-34": "31.8%",
                    "35-44": "23.6%",
                    "45-54": "11.4%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "61%",
                    female: "39%"
                }
            }
        },

        oman: {
            population: "5.12 millions",
            socialMediaUsers: "4.25 millions",
            penetrationRate: "83%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "Instagram", "YouTube", "Snapchat"],
                usageStats: {
                    whatsapp: "3.9 millions",
                    facebook: "3.2 millions",
                    instagram: "2.8 millions",
                    youtube: "3.4 millions",
                    snapchat: "2.1 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "9.4%",
                    "18-24": "21.6%",
                    "25-34": "30.2%",
                    "35-44": "22.8%",
                    "45-54": "11.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "62%",
                    female: "38%"
                }
            }
        },

        bahrain: {
            population: "1.47 millions",
            socialMediaUsers: "1.35 millions",
            penetrationRate: "91.8%",
            platforms: {
                mostPopular: ["WhatsApp", "Instagram", "Facebook", "YouTube", "Snapchat"],
                usageStats: {
                    whatsapp: "1.28 millions",
                    instagram: "1.1 millions",
                    facebook: "0.95 millions",
                    youtube: "1.05 millions",
                    snapchat: "0.82 millions"
                }
            },
            averageDailyUse: "2h 56min",
            demographicsSplit: {
                age: {
                    "13-17": "8.6%",
                    "18-24": "20.2%",
                    "25-34": "31.4%",
                    "35-44": "23.8%",
                    "45-54": "11.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "58%",
                    female: "42%"
                }
            }
        },

        sriLanka: {
            population: "22.16 millions",
            socialMediaUsers: "8.2 millions",
            penetrationRate: "37%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "WhatsApp", "Instagram", "LinkedIn"],
                usageStats: {
                    facebook: "7.8 millions",
                    youtube: "7.2 millions",
                    whatsapp: "6.8 millions",
                    instagram: "2.4 millions",
                    linkedin: "1.8 millions"
                }
            },
            averageDailyUse: "3h 24min",
            demographicsSplit: {
                age: {
                    "13-17": "10.8%",
                    "18-24": "24.2%",
                    "25-34": "29.6%",
                    "35-44": "19.4%",
                    "45-54": "10.8%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "58%",
                    female: "42%"
                }
            }
        },

        nepal: {
            population: "29.14 millions",
            socialMediaUsers: "12.6 millions",
            penetrationRate: "43.2%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "11.8 millions",
                    youtube: "10.4 millions",
                    tiktok: "8.2 millions",
                    instagram: "4.8 millions",
                    twitter: "2.2 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "26.8%",
                    "25-34": "29.4%",
                    "35-44": "17.2%",
                    "45-54": "9.2%",
                    "55+": "5%"
                },
                gender: {
                    male: "62%",
                    female: "38%"
                }
            }
        },
        myanmar: {
            population: "54.4 millions",
            socialMediaUsers: "25.1 millions",
            penetrationRate: "46.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "23.8 millions",
                    youtube: "20.4 millions",
                    tiktok: "16.2 millions",
                    instagram: "8.4 millions",
                    twitter: "3.2 millions"
                }
            },
            averageDailyUse: "3h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "12.2%",
                    "18-24": "26.4%",
                    "25-34": "29.8%",
                    "35-44": "17.8%",
                    "45-54": "9.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        cambodia: {
            population: "16.72 millions",
            socialMediaUsers: "12.4 millions",
            penetrationRate: "74.2%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Telegram"],
                usageStats: {
                    facebook: "11.8 millions",
                    youtube: "10.2 millions",
                    tiktok: "8.4 millions",
                    instagram: "4.2 millions",
                    telegram: "3.6 millions"
                }
            },
            averageDailyUse: "3h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "11.8%",
                    "18-24": "25.6%",
                    "25-34": "28.4%",
                    "35-44": "18.2%",
                    "45-54": "10.4%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        laos: {
            population: "7.28 millions",
            socialMediaUsers: "3.9 millions",
            penetrationRate: "53.6%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Line"],
                usageStats: {
                    facebook: "3.6 millions",
                    youtube: "3.2 millions",
                    tiktok: "2.4 millions",
                    instagram: "1.2 millions",
                    line: "0.8 millions"
                }
            },
            averageDailyUse: "2h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "11.4%",
                    "18-24": "24.8%",
                    "25-34": "28.6%",
                    "35-44": "19.2%",
                    "45-54": "10.8%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        mongolia: {
            population: "3.28 millions",
            socialMediaUsers: "2.6 millions",
            penetrationRate: "79.3%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "TikTok", "Twitter"],
                usageStats: {
                    facebook: "2.4 millions",
                    youtube: "2.2 millions",
                    instagram: "1.6 millions",
                    tiktok: "1.2 millions",
                    twitter: "0.8 millions"
                }
            },
            averageDailyUse: "3h 14min",
            demographicsSplit: {
                age: {
                    "13-17": "10.2%",
                    "18-24": "22.8%",
                    "25-34": "28.4%",
                    "35-44": "20.6%",
                    "45-54": "12.4%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        brunei: {
            population: "0.46 millions",
            socialMediaUsers: "0.42 millions",
            penetrationRate: "91.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Instagram", "Facebook", "YouTube", "TikTok"],
                usageStats: {
                    whatsapp: "0.39 millions",
                    instagram: "0.34 millions",
                    facebook: "0.32 millions",
                    youtube: "0.36 millions",
                    tiktok: "0.24 millions"
                }
            },
            averageDailyUse: "2h 54min",
            demographicsSplit: {
                age: {
                    "13-17": "9.4%",
                    "18-24": "21.2%",
                    "25-34": "29.8%",
                    "35-44": "22.4%",
                    "45-54": "11.8%",
                    "55+": "5.4%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },
        maldives: {
            population: "0.54 millions",
            socialMediaUsers: "0.47 millions",
            penetrationRate: "87%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "TikTok", "YouTube", "Twitter"],
                usageStats: {
                    facebook: "0.42 millions",
                    instagram: "0.38 millions",
                    tiktok: "0.32 millions",
                    youtube: "0.36 millions",
                    twitter: "0.18 millions"
                }
            },
            averageDailyUse: "3h 18min",
            demographicsSplit: {
                age: {
                    "13-17": "10.2%",
                    "18-24": "23.4%",
                    "25-34": "29.8%",
                    "35-44": "20.2%",
                    "45-54": "11.2%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        bhutan: {
            population: "0.77 millions",
            socialMediaUsers: "0.52 millions",
            penetrationRate: "67.5%",
            platforms: {
                mostPopular: ["Facebook", "WeChat", "Instagram", "YouTube", "WhatsApp"],
                usageStats: {
                    facebook: "0.48 millions",
                    wechat: "0.42 millions",
                    instagram: "0.28 millions",
                    youtube: "0.34 millions",
                    whatsapp: "0.31 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "11.4%",
                    "18-24": "24.6%",
                    "25-34": "28.2%",
                    "35-44": "19.4%",
                    "45-54": "11.2%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        timorLeste: {
            population: "1.32 millions",
            socialMediaUsers: "0.84 millions",
            penetrationRate: "63.6%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "TikTok", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.78 millions",
                    youtube: "0.62 millions",
                    tiktok: "0.48 millions",
                    instagram: "0.36 millions",
                    twitter: "0.14 millions"
                }
            },
            averageDailyUse: "2h 56min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.4%",
                    "25-34": "28.2%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "5%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        papuaNewGuinea: {
            population: "8.95 millions",
            socialMediaUsers: "1.7 millions",
            penetrationRate: "19%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "TikTok", "LinkedIn"],
                usageStats: {
                    facebook: "1.5 millions",
                    youtube: "1.2 millions",
                    instagram: "0.8 millions",
                    tiktok: "0.6 millions",
                    linkedin: "0.3 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "27.4%",
                    "25-34": "28.8%",
                    "35-44": "16.8%",
                    "45-54": "9.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "56%",
                    female: "44%"
                }
            }
        },

        fiji: {
            population: "0.9 millions",
            socialMediaUsers: "0.62 millions",
            penetrationRate: "68.9%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "TikTok", "LinkedIn"],
                usageStats: {
                    facebook: "0.58 millions",
                    youtube: "0.48 millions",
                    instagram: "0.32 millions",
                    tiktok: "0.24 millions",
                    linkedin: "0.12 millions"
                }
            },
            averageDailyUse: "3h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "11.8%",
                    "18-24": "24.6%",
                    "25-34": "28.4%",
                    "35-44": "18.8%",
                    "45-54": "10.8%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        vanuatu: {
            population: "0.31 millions",
            socialMediaUsers: "0.18 millions",
            penetrationRate: "58.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "Twitter"],
                usageStats: {
                    facebook: "0.16 millions",
                    youtube: "0.12 millions",
                    instagram: "0.08 millions",
                    linkedin: "0.04 millions",
                    twitter: "0.02 millions"
                }
            },
            averageDailyUse: "2h 34min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "25.2%",
                    "25-34": "27.8%",
                    "35-44": "18.4%",
                    "45-54": "10.6%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        samoa: {
            population: "0.2 millions",
            socialMediaUsers: "0.13 millions",
            penetrationRate: "65%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "TikTok", "Twitter"],
                usageStats: {
                    facebook: "0.12 millions",
                    youtube: "0.09 millions",
                    instagram: "0.06 millions",
                    tiktok: "0.04 millions",
                    twitter: "0.02 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "12.2%",
                    "18-24": "24.8%",
                    "25-34": "27.6%",
                    "35-44": "18.8%",
                    "45-54": "11.2%",
                    "55+": "5.4%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        tonga: {
            population: "0.105 millions",
            socialMediaUsers: "0.068 millions",
            penetrationRate: "64.8%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "TikTok", "Twitter"],
                usageStats: {
                    facebook: "0.062 millions",
                    youtube: "0.048 millions",
                    instagram: "0.032 millions",
                    tiktok: "0.024 millions",
                    twitter: "0.012 millions"
                }
            },
            averageDailyUse: "2h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "12.6%",
                    "18-24": "24.4%",
                    "25-34": "27.2%",
                    "35-44": "18.6%",
                    "45-54": "11.4%",
                    "55+": "5.8%"
                },
                gender: {
                    male: "50%",
                    female: "50%"
                }
            }
        },

        kiribati: {
            population: "0.119 millions",
            socialMediaUsers: "0.052 millions",
            penetrationRate: "43.7%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "Twitter"],
                usageStats: {
                    facebook: "0.048 millions",
                    youtube: "0.036 millions",
                    instagram: "0.024 millions",
                    linkedin: "0.012 millions",
                    twitter: "0.008 millions"
                }
            },
            averageDailyUse: "2h 38min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "25.8%",
                    "25-34": "26.4%",
                    "35-44": "18.2%",
                    "45-54": "10.8%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        nauru: {
            population: "0.012 millions",
            socialMediaUsers: "0.007 millions",
            penetrationRate: "58.3%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "Twitter"],
                usageStats: {
                    facebook: "0.0065 millions",
                    youtube: "0.005 millions",
                    instagram: "0.003 millions",
                    linkedin: "0.001 millions",
                    twitter: "0.0008 millions"
                }
            },
            averageDailyUse: "2h 24min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "24.6%",
                    "25-34": "26.8%",
                    "35-44": "18.4%",
                    "45-54": "11.2%",
                    "55+": "6.2%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },
        solomonIslands: {
            population: "0.687 millions",
            socialMediaUsers: "0.21 millions",
            penetrationRate: "30.6%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "Twitter"],
                usageStats: {
                    facebook: "0.19 millions",
                    youtube: "0.15 millions",
                    instagram: "0.08 millions",
                    linkedin: "0.04 millions",
                    twitter: "0.02 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "13.4%",
                    "18-24": "26.2%",
                    "25-34": "27.8%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "5%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        micronesia: {
            population: "0.115 millions",
            socialMediaUsers: "0.064 millions",
            penetrationRate: "55.7%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"],
                usageStats: {
                    facebook: "0.058 millions",
                    youtube: "0.042 millions",
                    instagram: "0.028 millions",
                    twitter: "0.012 millions",
                    linkedin: "0.008 millions"
                }
            },
            averageDailyUse: "2h 38min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "25.4%",
                    "25-34": "27.2%",
                    "35-44": "18.6%",
                    "45-54": "10.4%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        palau: {
            population: "0.018 millions",
            socialMediaUsers: "0.014 millions",
            penetrationRate: "77.8%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"],
                usageStats: {
                    facebook: "0.013 millions",
                    youtube: "0.011 millions",
                    instagram: "0.008 millions",
                    twitter: "0.004 millions",
                    linkedin: "0.002 millions"
                }
            },
            averageDailyUse: "2h 28min",
            demographicsSplit: {
                age: {
                    "13-17": "11.2%",
                    "18-24": "23.8%",
                    "25-34": "28.4%",
                    "35-44": "19.2%",
                    "45-54": "11.8%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "50%",
                    female: "50%"
                }
            }
        },
        marshallIslands: {
            population: "0.059 millions",
            socialMediaUsers: "0.035 millions",
            penetrationRate: "59.3%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"],
                usageStats: {
                    facebook: "0.032 millions",
                    youtube: "0.028 millions",
                    instagram: "0.018 millions",
                    twitter: "0.008 millions",
                    linkedin: "0.004 millions"
                }
            },
            averageDailyUse: "2h 32min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "24.8%",
                    "25-34": "27.2%",
                    "35-44": "18.8%",
                    "45-54": "11.2%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        tuvalu: {
            population: "0.012 millions",
            socialMediaUsers: "0.006 millions",
            penetrationRate: "50%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"],
                usageStats: {
                    facebook: "0.0055 millions",
                    youtube: "0.004 millions",
                    instagram: "0.002 millions",
                    twitter: "0.001 millions",
                    linkedin: "0.0005 millions"
                }
            },
            averageDailyUse: "2h 18min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "24.6%",
                    "25-34": "26.8%",
                    "35-44": "18.4%",
                    "45-54": "11.8%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "50%",
                    female: "50%"
                }
            }
        },

        seychelles: {
            population: "0.098 millions",
            socialMediaUsers: "0.082 millions",
            penetrationRate: "83.7%",
            platforms: {
                mostPopular: ["Facebook", "Instagram", "YouTube", "WhatsApp", "TikTok"],
                usageStats: {
                    facebook: "0.076 millions",
                    instagram: "0.048 millions",
                    youtube: "0.058 millions",
                    whatsapp: "0.068 millions",
                    tiktok: "0.032 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "9.8%",
                    "18-24": "20.4%",
                    "25-34": "28.6%",
                    "35-44": "21.8%",
                    "45-54": "12.8%",
                    "55+": "6.6%"
                },
                gender: {
                    male: "49%",
                    female: "51%"
                }
            }
        },

        comoros: {
            population: "0.869 millions",
            socialMediaUsers: "0.21 millions",
            penetrationRate: "24.2%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.19 millions",
                    whatsapp: "0.18 millions",
                    youtube: "0.14 millions",
                    instagram: "0.08 millions",
                    twitter: "0.02 millions"
                }
            },
            averageDailyUse: "2h 54min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.4%",
                    "25-34": "28.2%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "5%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        capeVerde: {
            population: "0.556 millions",
            socialMediaUsers: "0.32 millions",
            penetrationRate: "57.6%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    facebook: "0.29 millions",
                    whatsapp: "0.28 millions",
                    youtube: "0.24 millions",
                    instagram: "0.18 millions",
                    linkedin: "0.08 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "11.4%",
                    "18-24": "23.8%",
                    "25-34": "28.4%",
                    "35-44": "19.2%",
                    "45-54": "11.6%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        saoTomePrincipe: {
            population: "0.219 millions",
            socialMediaUsers: "0.086 millions",
            penetrationRate: "39.3%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.078 millions",
                    whatsapp: "0.072 millions",
                    youtube: "0.054 millions",
                    instagram: "0.032 millions",
                    twitter: "0.012 millions"
                }
            },
            averageDailyUse: "2h 36min",
            demographicsSplit: {
                age: {
                    "13-17": "12.6%",
                    "18-24": "25.4%",
                    "25-34": "27.8%",
                    "35-44": "18.2%",
                    "45-54": "10.4%",
                    "55+": "5.6%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        guineaBissau: {
            population: "1.97 millions",
            socialMediaUsers: "0.42 millions",
            penetrationRate: "21.3%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.38 millions",
                    whatsapp: "0.36 millions",
                    youtube: "0.28 millions",
                    instagram: "0.16 millions",
                    twitter: "0.06 millions"
                }
            },
            averageDailyUse: "2h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.8%",
                    "25-34": "28.4%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "5%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        djibouti: {
            population: "0.988 millions",
            socialMediaUsers: "0.52 millions",
            penetrationRate: "52.6%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "0.48 millions",
                    whatsapp: "0.46 millions",
                    youtube: "0.38 millions",
                    instagram: "0.24 millions",
                    tiktok: "0.18 millions"
                }
            },
            averageDailyUse: "2h 58min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "25.8%",
                    "25-34": "28.6%",
                    "35-44": "18.2%",
                    "45-54": "10.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        eswatini: {
            population: "1.16 millions",
            socialMediaUsers: "0.48 millions",
            penetrationRate: "41.4%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.42 millions",
                    whatsapp: "0.44 millions",
                    youtube: "0.36 millions",
                    instagram: "0.22 millions",
                    twitter: "0.12 millions"
                }
            },
            averageDailyUse: "3h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "12.2%",
                    "18-24": "25.4%",
                    "25-34": "28.8%",
                    "35-44": "18.4%",
                    "45-54": "10.2%",
                    "55+": "5%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },

        lesotho: {
            population: "2.14 millions",
            socialMediaUsers: "0.76 millions",
            penetrationRate: "35.5%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.68 millions",
                    whatsapp: "0.72 millions",
                    youtube: "0.58 millions",
                    instagram: "0.32 millions",
                    twitter: "0.18 millions"
                }
            },
            averageDailyUse: "2h 54min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.2%",
                    "25-34": "28.4%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "5%"
                },
                gender: {
                    male: "47%",
                    female: "53%"
                }
            }
        },
        gambia: {
            population: "2.42 millions",
            socialMediaUsers: "0.84 millions",
            penetrationRate: "34.7%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.76 millions",
                    whatsapp: "0.72 millions",
                    youtube: "0.58 millions",
                    instagram: "0.32 millions",
                    twitter: "0.14 millions"
                }
            },
            averageDailyUse: "3h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "13.4%",
                    "18-24": "26.8%",
                    "25-34": "28.2%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "5%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        equatorialGuinea: {
            population: "1.4 millions",
            socialMediaUsers: "0.68 millions",
            penetrationRate: "48.6%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.62 millions",
                    whatsapp: "0.58 millions",
                    youtube: "0.46 millions",
                    instagram: "0.28 millions",
                    twitter: "0.12 millions"
                }
            },
            averageDailyUse: "2h 54min",
            demographicsSplit: {
                age: {
                    "13-17": "12.6%",
                    "18-24": "25.8%",
                    "25-34": "28.4%",
                    "35-44": "18.2%",
                    "45-54": "10.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        mauritania: {
            population: "4.65 millions",
            socialMediaUsers: "1.32 millions",
            penetrationRate: "28.4%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "1.18 millions",
                    whatsapp: "1.12 millions",
                    youtube: "0.86 millions",
                    instagram: "0.42 millions",
                    twitter: "0.18 millions"
                }
            },
            averageDailyUse: "3h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.4%",
                    "25-34": "28.6%",
                    "35-44": "17.4%",
                    "45-54": "9.6%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "56%",
                    female: "44%"
                }
            }
        },

        eritrea: {
            population: "3.55 millions",
            socialMediaUsers: "0.28 millions",
            penetrationRate: "7.9%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"],
                usageStats: {
                    facebook: "0.24 millions",
                    youtube: "0.18 millions",
                    instagram: "0.12 millions",
                    twitter: "0.06 millions",
                    linkedin: "0.04 millions"
                }
            },
            averageDailyUse: "2h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.2%",
                    "25-34": "28.4%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "5%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        burundi: {
            population: "12.26 millions",
            socialMediaUsers: "1.12 millions",
            penetrationRate: "9.1%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.98 millions",
                    whatsapp: "0.92 millions",
                    youtube: "0.76 millions",
                    instagram: "0.38 millions",
                    twitter: "0.16 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "13.6%",
                    "18-24": "27.2%",
                    "25-34": "28.4%",
                    "35-44": "16.8%",
                    "45-54": "9.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        centralAfricanRepublic: {
            population: "4.83 millions",
            socialMediaUsers: "0.48 millions",
            penetrationRate: "9.9%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.42 millions",
                    whatsapp: "0.38 millions",
                    youtube: "0.32 millions",
                    instagram: "0.18 millions",
                    twitter: "0.08 millions"
                }
            },
            averageDailyUse: "2h 36min",
            demographicsSplit: {
                age: {
                    "13-17": "13.4%",
                    "18-24": "26.8%",
                    "25-34": "28.2%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "5%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        chad: {
            population: "16.43 millions",
            socialMediaUsers: "1.42 millions",
            penetrationRate: "8.6%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "1.28 millions",
                    whatsapp: "1.18 millions",
                    youtube: "0.92 millions",
                    instagram: "0.48 millions",
                    twitter: "0.22 millions"
                }
            },
            averageDailyUse: "2h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "13.8%",
                    "18-24": "27.4%",
                    "25-34": "28.2%",
                    "35-44": "16.8%",
                    "45-54": "9.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "55%",
                    female: "45%"
                }
            }
        },

        congo: {
            population: "5.52 millions",
            socialMediaUsers: "1.86 millions",
            penetrationRate: "33.7%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "1.68 millions",
                    whatsapp: "1.58 millions",
                    youtube: "1.24 millions",
                    instagram: "0.68 millions",
                    twitter: "0.32 millions"
                }
            },
            averageDailyUse: "3h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.2%",
                    "25-34": "28.6%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        gabon: {
            population: "2.23 millions",
            socialMediaUsers: "1.12 millions",
            penetrationRate: "50.2%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.98 millions",
                    whatsapp: "0.92 millions",
                    youtube: "0.76 millions",
                    instagram: "0.42 millions",
                    twitter: "0.18 millions"
                }
            },
            averageDailyUse: "2h 58min",
            demographicsSplit: {
                age: {
                    "13-17": "12.2%",
                    "18-24": "25.4%",
                    "25-34": "28.8%",
                    "35-44": "18.4%",
                    "45-54": "10.2%",
                    "55+": "5%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        southSudan: {
            population: "11.19 millions",
            socialMediaUsers: "0.86 millions",
            penetrationRate: "7.7%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.76 millions",
                    whatsapp: "0.72 millions",
                    youtube: "0.58 millions",
                    instagram: "0.32 millions",
                    twitter: "0.14 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "13.6%",
                    "18-24": "27.2%",
                    "25-34": "28.4%",
                    "35-44": "16.8%",
                    "45-54": "9.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },
        sierraLeone: {
            population: "8.14 millions",
            socialMediaUsers: "1.12 millions",
            penetrationRate: "13.8%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.98 millions",
                    whatsapp: "0.92 millions",
                    youtube: "0.76 millions",
                    instagram: "0.42 millions",
                    twitter: "0.18 millions"
                }
            },
            averageDailyUse: "2h 46min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.8%",
                    "25-34": "28.4%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "5%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        liberia: {
            population: "5.18 millions",
            socialMediaUsers: "0.92 millions",
            penetrationRate: "17.8%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "0.82 millions",
                    whatsapp: "0.78 millions",
                    youtube: "0.62 millions",
                    instagram: "0.34 millions",
                    twitter: "0.16 millions"
                }
            },
            averageDailyUse: "2h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "13.4%",
                    "18-24": "26.6%",
                    "25-34": "28.2%",
                    "35-44": "17.4%",
                    "45-54": "9.6%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        togo: {
            population: "8.28 millions",
            socialMediaUsers: "1.8 millions",
            penetrationRate: "21.7%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "1.6 millions",
                    whatsapp: "1.5 millions",
                    youtube: "1.2 millions",
                    instagram: "0.68 millions",
                    twitter: "0.32 millions"
                }
            },
            averageDailyUse: "2h 58min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.2%",
                    "25-34": "28.6%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        benin: {
            population: "12.45 millions",
            socialMediaUsers: "2.8 millions",
            penetrationRate: "22.5%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "2.4 millions",
                    whatsapp: "2.2 millions",
                    youtube: "1.8 millions",
                    instagram: "0.92 millions",
                    twitter: "0.42 millions"
                }
            },
            averageDailyUse: "3h 04min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.4%",
                    "25-34": "28.2%",
                    "35-44": "17.6%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        niger: {
            population: "24.21 millions",
            socialMediaUsers: "2.4 millions",
            penetrationRate: "9.9%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "2.1 millions",
                    whatsapp: "1.9 millions",
                    youtube: "1.6 millions",
                    instagram: "0.82 millions",
                    twitter: "0.36 millions"
                }
            },
            averageDailyUse: "2h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "14.2%",
                    "18-24": "27.6%",
                    "25-34": "27.8%",
                    "35-44": "16.4%",
                    "45-54": "9.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "56%",
                    female: "44%"
                }
            }
        },

        mali: {
            population: "20.25 millions",
            socialMediaUsers: "4.2 millions",
            penetrationRate: "20.7%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "3.8 millions",
                    whatsapp: "3.6 millions",
                    youtube: "2.8 millions",
                    instagram: "1.4 millions",
                    twitter: "0.62 millions"
                }
            },
            averageDailyUse: "3h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "13.6%",
                    "18-24": "26.8%",
                    "25-34": "28.2%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        burkinaFaso: {
            population: "21.38 millions",
            socialMediaUsers: "3.8 millions",
            penetrationRate: "17.8%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "3.4 millions",
                    whatsapp: "3.2 millions",
                    youtube: "2.6 millions",
                    instagram: "1.2 millions",
                    twitter: "0.54 millions"
                }
            },
            averageDailyUse: "2h 56min",
            demographicsSplit: {
                age: {
                    "13-17": "13.8%",
                    "18-24": "26.6%",
                    "25-34": "28.4%",
                    "35-44": "17.2%",
                    "45-54": "9.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "55%",
                    female: "45%"
                }
            }
        },

        sudan: {
            population: "44.91 millions",
            socialMediaUsers: "12.6 millions",
            penetrationRate: "28.1%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    facebook: "11.4 millions",
                    whatsapp: "10.8 millions",
                    youtube: "8.6 millions",
                    instagram: "4.2 millions",
                    twitter: "1.8 millions"
                }
            },
            averageDailyUse: "3h 22min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.4%",
                    "25-34": "28.8%",
                    "35-44": "17.6%",
                    "45-54": "9.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "58%",
                    female: "42%"
                }
            }
        },

        somalia: {
            population: "15.89 millions",
            socialMediaUsers: "2.8 millions",
            penetrationRate: "17.6%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "TikTok"],
                usageStats: {
                    facebook: "2.4 millions",
                    whatsapp: "2.2 millions",
                    youtube: "1.8 millions",
                    instagram: "0.92 millions",
                    tiktok: "0.68 millions"
                }
            },
            averageDailyUse: "3h 14min",
            demographicsSplit: {
                age: {
                    "13-17": "13.8%",
                    "18-24": "27.2%",
                    "25-34": "28.4%",
                    "35-44": "16.8%",
                    "45-54": "9.2%",
                    "55+": "4.6%"
                },
                gender: {
                    male: "56%",
                    female: "44%"
                }
            }
        },

        rwanda: {
            population: "13.28 millions",
            socialMediaUsers: "1.8 millions",
            penetrationRate: "13.6%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    whatsapp: "1.6 millions",
                    facebook: "1.5 millions",
                    youtube: "1.2 millions",
                    instagram: "0.68 millions",
                    twitter: "0.32 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.2%",
                    "25-34": "28.6%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },
        tanzania: {
            population: "61.5 millions",
            socialMediaUsers: "15.4 millions",
            penetrationRate: "25%",
            platforms: {
                mostPopular: ["WhatsApp", "Instagram", "Facebook", "YouTube", "TikTok"],
                usageStats: {
                    whatsapp: "14.2 millions",
                    instagram: "8.6 millions",
                    facebook: "12.8 millions",
                    youtube: "10.2 millions",
                    tiktok: "6.8 millions"
                }
            },
            averageDailyUse: "3h 12min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.4%",
                    "25-34": "28.8%",
                    "35-44": "17.6%",
                    "45-54": "9.6%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        uganda: {
            population: "47.12 millions",
            socialMediaUsers: "3.4 millions",
            penetrationRate: "7.2%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "Twitter"],
                usageStats: {
                    whatsapp: "3.1 millions",
                    facebook: "2.8 millions",
                    youtube: "2.2 millions",
                    instagram: "1.4 millions",
                    twitter: "0.8 millions"
                }
            },
            averageDailyUse: "3h 08min",
            demographicsSplit: {
                age: {
                    "13-17": "13.4%",
                    "18-24": "26.8%",
                    "25-34": "28.2%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "5%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        kenya: {
            population: "54.98 millions",
            socialMediaUsers: "12.8 millions",
            penetrationRate: "23.3%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "11.8 millions",
                    facebook: "10.2 millions",
                    youtube: "8.6 millions",
                    instagram: "4.8 millions",
                    linkedin: "3.2 millions"
                }
            },
            averageDailyUse: "3h 42min",
            demographicsSplit: {
                age: {
                    "13-17": "12.2%",
                    "18-24": "25.8%",
                    "25-34": "29.2%",
                    "35-44": "18.4%",
                    "45-54": "9.6%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        ethiopia: {
            population: "117.88 millions",
            socialMediaUsers: "7.8 millions",
            penetrationRate: "6.6%",
            platforms: {
                mostPopular: ["Facebook", "TikTok", "YouTube", "Instagram", "Telegram"],
                usageStats: {
                    facebook: "6.8 millions",
                    tiktok: "4.2 millions",
                    youtube: "5.6 millions",
                    instagram: "2.8 millions",
                    telegram: "3.4 millions"
                }
            },
            averageDailyUse: "2h 54min",
            demographicsSplit: {
                age: {
                    "13-17": "13.6%",
                    "18-24": "27.2%",
                    "25-34": "28.4%",
                    "35-44": "16.8%",
                    "45-54": "9.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "54%",
                    female: "46%"
                }
            }
        },

        madagascar: {
            population: "28.92 millions",
            socialMediaUsers: "3.8 millions",
            penetrationRate: "13.1%",
            platforms: {
                mostPopular: ["Facebook", "YouTube", "Instagram", "LinkedIn", "Twitter"],
                usageStats: {
                    facebook: "3.4 millions",
                    youtube: "2.8 millions",
                    instagram: "1.6 millions",
                    linkedin: "0.8 millions",
                    twitter: "0.6 millions"
                }
            },
            averageDailyUse: "2h 48min",
            demographicsSplit: {
                age: {
                    "13-17": "12.8%",
                    "18-24": "26.2%",
                    "25-34": "28.6%",
                    "35-44": "17.8%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        mozambique: {
            population: "32.17 millions",
            socialMediaUsers: "4.2 millions",
            penetrationRate: "13.1%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "3.8 millions",
                    facebook: "3.6 millions",
                    youtube: "2.8 millions",
                    instagram: "1.6 millions",
                    linkedin: "0.8 millions"
                }
            },
            averageDailyUse: "3h 06min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.4%",
                    "25-34": "28.2%",
                    "35-44": "17.6%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "51%",
                    female: "49%"
                }
            }
        },

        zimbabwe: {
            population: "14.86 millions",
            socialMediaUsers: "1.8 millions",
            penetrationRate: "12.1%",
            platforms: {
                mostPopular: ["WhatsApp", "Facebook", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    whatsapp: "1.6 millions",
                    facebook: "1.4 millions",
                    youtube: "1.1 millions",
                    instagram: "0.6 millions",
                    linkedin: "0.4 millions"
                }
            },
            averageDailyUse: "2h 52min",
            demographicsSplit: {
                age: {
                    "13-17": "12.4%",
                    "18-24": "25.8%",
                    "25-34": "28.6%",
                    "35-44": "18.2%",
                    "45-54": "10.2%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        zambia: {
            population: "18.92 millions",
            socialMediaUsers: "3.2 millions",
            penetrationRate: "16.9%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    facebook: "2.8 millions",
                    whatsapp: "2.6 millions",
                    youtube: "2.1 millions",
                    instagram: "1.2 millions",
                    linkedin: "0.6 millions"
                }
            },
            averageDailyUse: "3h 14min",
            demographicsSplit: {
                age: {
                    "13-17": "13.2%",
                    "18-24": "26.4%",
                    "25-34": "28.2%",
                    "35-44": "17.6%",
                    "45-54": "9.8%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "53%",
                    female: "47%"
                }
            }
        },

        angola: {
            population: "33.64 millions",
            socialMediaUsers: "9.8 millions",
            penetrationRate: "29.1%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    facebook: "8.6 millions",
                    whatsapp: "8.2 millions",
                    youtube: "6.4 millions",
                    instagram: "3.8 millions",
                    linkedin: "1.6 millions"
                }
            },
            averageDailyUse: "3h 28min",
            demographicsSplit: {
                age: {
                    "13-17": "13.4%",
                    "18-24": "26.8%",
                    "25-34": "28.4%",
                    "35-44": "17.2%",
                    "45-54": "9.4%",
                    "55+": "4.8%"
                },
                gender: {
                    male: "52%",
                    female: "48%"
                }
            }
        },

        namibia: {
            population: "2.54 millions",
            socialMediaUsers: "1.2 millions",
            penetrationRate: "47.2%",
            platforms: {
                mostPopular: ["Facebook", "WhatsApp", "YouTube", "Instagram", "LinkedIn"],
                usageStats: {
                    facebook: "1.1 millions",
                    whatsapp: "1.0 millions",
                    youtube: "0.8 millions",
                    instagram: "0.4 millions",
                    linkedin: "0.2 millions"
                }
            },
            averageDailyUse: "3h 02min",
            demographicsSplit: {
                age: {
                    "13-17": "11.8%",
                    "18-24": "24.6%",
                    "25-34": "29.2%",
                    "35-44": "18.8%",
                    "45-54": "10.4%",
                    "55+": "5.2%"
                },
                gender: {
                    male: "48%",
                    female: "52%"
                }
            }
        },


        // Fonction helper pour obtenir les données d'un pays
        getCountryData: function(countryCode) {
            return this[countryCode.toLowerCase()] || null;
        },
        
        // Fonction pour comparer deux pays
        compareCountries: function(country1, country2, metric) {
            const data1 = this.getCountryData(country1);
            const data2 = this.getCountryData(country2);
            
            if (!data1 || !data2) return null;
            
            return {
                country1: {
                    name: country1,
                    value: data1[metric]
                },
                country2: {
                    name: country2,
                    value: data2[metric]
                }
            };
        }
    }
};
/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║            Fonction globale pour formater le nom du pays              ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */

function formatCountryName(name) {
    return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║        Fonction pour mettre à jour les statistiques dans le DOM       ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */

function updateSocialStats() {
    const statsContainer = document.querySelector('.statscards');
    if (!statsContainer) return;

    // Créer la liste des pays à partir de countriesData
    const countries = Object.keys(socialMediaStats.countriesData)
        .filter(key => key !== 'getCountryData' && key !== 'compareCountries')
        .sort();

    // Créer un mapping bidirectionnel
    const countryMapping = {};
    const reverseMapping = {};
    
    countries.forEach(country => {
        const formattedName = formatCountryName(country);
        countryMapping[country] = formattedName;
        reverseMapping[formattedName] = country;
    });

    const formHTML = `
        <div class="country-selector">
            <input type="text" 
                   id="countrySearch" 
                   class="country-search" 
                   placeholder="Rechercher ou sélectionner un pays..."
                   list="countryList">
            <datalist id="countryList">
                ${countries.map(country => 
                    `<option value="${countryMapping[country]}">`
                ).join('')}
            </datalist>
        </div>
        <div id="countryStatsDisplay"></div>
    `;

    statsContainer.innerHTML = formHTML;

    const searchInput = document.getElementById('countrySearch');

    const handleCountrySelection = (value) => {
        const countryKey = reverseMapping[value];  
        if (countryKey) {
            displayCountryStats(countryKey);
        }
    };

    searchInput.addEventListener('input', (e) => {
        if (reverseMapping[e.target.value]) {
            handleCountrySelection(e.target.value);
        }
    });

    searchInput.addEventListener('change', (e) => {
        if (reverseMapping[e.target.value]) {
            handleCountrySelection(e.target.value);
        }
    });
}
/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║            Fonction pour afficher les statistiques d'un pays          ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */

function displayCountryStats(countryCode) {
    const countryData = socialMediaStats.countriesData[countryCode];
    const statsDisplay = document.getElementById('countryStatsDisplay');
    
    if (!countryData || Object.keys(countryData).length === 0) {
        statsDisplay.innerHTML = `
            <div class="country-stat-card">
                <h3>${countryCode.charAt(0).toUpperCase() + countryCode.slice(1)}</h3>
                <div class="no-data-message">
                    Aucune donnée disponible pour ce pays.
                </div>
            </div>
        `;
        return;
    }

    statsDisplay.innerHTML = `
        <div class="country-stat-card">
            <h3>${formatCountryName(countryCode)}</h3>
            <div class="stat-row">
                <div class="stat-item">
                    <span class="stat-label">Population</span>
                    <span class="stat-value">${countryData.population}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Utilisateurs</span>
                    <span class="stat-value">${countryData.socialMediaUsers}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Taux de pénétration</span>
                    <span class="stat-value">${countryData.penetrationRate}</span>
                </div>
            </div>

            <div class="platforms-section">
                <h4>Plateformes populaires</h4>
                <div class="platforms-grid">
                    ${countryData.platforms.mostPopular.map(platform => `
                        <div class="platform-item">
                            <span class="platform-name">${platform}</span>
                            <span class="platform-users">${countryData.platforms.usageStats[platform.toLowerCase()]}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="demographics-section">
                <h4>Démographie</h4>
                <div class="age-distribution">
                    <h5>Par âge</h5>
                    ${Object.entries(countryData.demographicsSplit.age).map(([age, percentage]) => `
                        <div class="age-item">
                            <span class="age-range">${age}</span>
                            <span class="age-percentage">${percentage}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="gender-distribution">
                    <h5>Par genre</h5>
                    <div class="gender-items">
                        <div class="gender-item">
                            <span class="gender-range">Hommes</span>
                            <span class="gender-percentage">${countryData.demographicsSplit.gender.male}</span>
                        </div>
                        <div class="gender-item">
                            <span class="gender-range">Femmes</span>
                            <span class="gender-percentage">${countryData.demographicsSplit.gender.female}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
} 

/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║ Fonction pour initialiser les sélecteurs des pays pour la comparaison ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */

function initializeCountryComparison() {
    const countries = Object.keys(socialMediaStats.countriesData)
        .filter(key => key !== 'getCountryData' && key !== 'compareCountries')
        .sort();

    // Remplir les datalists
    const datalist1 = document.getElementById('countryList1');
    const datalist2 = document.getElementById('countryList2');
    
    countries.forEach(country => {
        const formattedName = formatCountryName(country);
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = formattedName;
        option2.value = formattedName;
        datalist1.appendChild(option1);
        datalist2.appendChild(option2);
    });

    // Gérer les événements de sélection
    const input1 = document.getElementById('countrySearch1');
    const input2 = document.getElementById('countrySearch2');
    
    function handleCountrySelection() {
        const country1 = input1.value;
        const country2 = input2.value;
        
        if (country1 && country2) {
            displayCountryComparison(country1, country2);
        }
    }

    input1.addEventListener('change', handleCountrySelection);
    input2.addEventListener('change', handleCountrySelection);
}

/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║           Fonction pour afficher la comparaison de 2 pays             ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */

function displayCountryComparison(country1Name, country2Name) {
    const reverseMapping = {};
    Object.keys(socialMediaStats.countriesData)
        .filter(key => key !== 'getCountryData' && key !== 'compareCountries')
        .forEach(country => {
            reverseMapping[formatCountryName(country)] = country;
        });

    const country1Data = socialMediaStats.countriesData[reverseMapping[country1Name]];
    const country2Data = socialMediaStats.countriesData[reverseMapping[country2Name]];
    
    if (!country1Data || !country2Data) {
        document.getElementById('comparisonStatsDisplay').innerHTML = 
            '<p class="error-message">Données non disponibles pour un ou les deux pays.</p>';
        return;
    }

    const comparisonHTML = `
        <div class="comparison-stats">
            <div class="country-stat-card">
                <h3>${country1Name}</h3>
                <div class="stat-row">
                    <div class="stat-item">
                        <span class="stat-label">Population</span>
                        <span class="stat-value">${country1Data.population}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Utilisateurs</span>
                        <span class="stat-value">${country1Data.socialMediaUsers}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Taux de pénétration</span>
                        <span class="stat-value">${country1Data.penetrationRate}</span>
                    </div>
                </div>
            </div>

            <div class="country-stat-card">
                <h3>${country2Name}</h3>
                <div class="stat-row">
                    <div class="stat-item">
                        <span class="stat-label">Population</span>
                        <span class="stat-value">${country2Data.population}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Utilisateurs</span>
                        <span class="stat-value">${country2Data.socialMediaUsers}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Taux de pénétration</span>
                        <span class="stat-value">${country2Data.penetrationRate}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('comparisonStatsDisplay').innerHTML = comparisonHTML;
}

/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║            Appeler les fonctions quand le DOM est chargé              ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */

document.addEventListener('DOMContentLoaded', function() {
    updateSocialStats();
    initializeCountryComparison();
});
