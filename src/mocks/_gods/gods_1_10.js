export const gods_1_10 = [
  {
    Ability1: 'Divine Presence',
    Ability2: 'Heavenly Reflection',
    Ability3: 'Glorious Charge',
    Ability4: 'Dazzling Offensive',
    Ability5: 'Illuminating Strike',
    AbilityId1: 12046,
    AbilityId2: 12055,
    AbilityId3: 12047,
    AbilityId4: 12049,
    AbilityId5: 12072,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '9s',
          cost: '50/55/60/65/70 ',
          description:
            'Amaterasu harnesses the power of her jewel, healing herself every second for 4 seconds and creating a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence. ',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Allies' },
            { description: 'Radius:', value: '30' },
          ],
          rankitems: [
            { description: 'Heal Per Tick:', value: '15/25/35/45/55 (+5% of your Physical Power)' },
            { description: 'Benevolence Aura:', value: '5/9/13/17/21 % Move Speed' },
            { description: 'Valor Aura:', value: '14/18/22/26/30 Bonus Power' },
          ],
        },
      },
      Id: 12046,
      Summary: 'Divine Presence',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/divine-presence.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            'Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '55' },
          ],
          rankitems: [
            { description: 'Self Damage Mitigation:', value: '7/9/11/13/15%' },
            { description: 'Mirror Damage:', value: '70/105/140/175/210 (60% of your Physical Power)' },
            { description: 'Full Charge Damage:', value: '140/210/280/350/420' },
          ],
        },
      },
      Id: 12055,
      Summary: 'Heavenly Reflection',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/heavenly-reflection.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '16s',
          cost: '70/75/80/85/90 ',
          description:
            'Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.  ',
          menuitems: [
            { description: 'Ability:', value: 'Dash' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '55' },
          ],
          rankitems: [
            { description: 'Silence Duration:', value: '1s' },
            { description: 'Dash Damage:', value: '60/120/180/240/300(60% of your Physical Power)' },
          ],
        },
      },
      Id: 12047,
      Summary: 'Glorious Charge',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/glorious-charge.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '95/90/85/80/75s',
          cost: '100',
          description:
            'Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.',
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '35' },
          ],
          rankitems: [
            { description: 'Damage Per Strike:', value: '80/125/170/215/260 (+50% of your Physical Power)' },
            { description: 'Slow Duration:', value: '2s' },
            { description: 'Stun Duration:', value: '2s' },
          ],
        },
      },
      Id: 12049,
      Summary: 'Dazzling Offensive',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/dazzling-offensive.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.',
          menuitems: [
            { description: 'Ability:', value: 'Debuff' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Radius:', value: '30' },
          ],
          rankitems: [
            { description: 'Weakening Aura:', value: '10% Increased Damage Taken' },
            { description: 'Stack/Aura Duration:', value: '5s' },
            { description: 'Max Auras Possible:', value: '3' },
          ],
        },
      },
      Id: 12072,
      Summary: 'Illuminating Strike',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/illuminating-strike.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.014,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.8,
    Health: 480,
    HealthPerFive: 8,
    HealthPerLevel: 85,
    Lore: 'As the first rays of dawn cross the horizon, before all else they touch the land of the rising sun. A realm of islands painted with the careful brush strokes of its deities. That morning light, which brings warmth and life is Amaterasu, the benevolent Goddess of the sun. Universally, she is adored. \\n\\nLess so are her brothers, namely Susano-o, bringer of storms, whose jealousy of his sister’s popularity drove him to burn her golden rice fields and shatter the sacred looms of her people. Grief stricken at the destruction, Amaterasu sealed herself inside a deep cavern. Her people suffered and the realm fell into crushing darkness. \\n\\nFor an unknown time, she stayed there, hidden away from the atrocities of the world. Until, one day, came a thumping from outside. At first, she tried to ignore it, but curiosity called. Moving aside the great stone sealing the cavern, she peered cautiously out, only to stare into a polished bronze mirror. Blinded by her own reflection, Amaterasu was forced to creep further out to find the source of the sound. Hands grabbed her from either side and pulled her free of the cave. Gathered around were hundreds of friends and loved ones. Atop a wide tub danced Usume, Goddess of Mirth, creating the erratic drumming to the joy of all. Amaterasu smiled and light came back to the world. \\n\\nSeeing all those that depended on her, all those that loved her, Amaterasu vowed never again to hide away from calamity. She would, instead, face it, just as the dawn rises each new day.',
    MP5PerLevel: 0.4,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 220,
    ManaPerFive: 4.8,
    ManaPerLevel: 35,
    Name: 'Amaterasu',
    OnFreeRotation: '',
    Pantheon: 'Japanese',
    PhysicalPower: 39,
    PhysicalPowerPerLevel: 2,
    PhysicalProtection: 18,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Area Damage, High Mobility',
    Roles: 'Warrior',
    Speed: 375,
    Title: 'The Shining Light',
    Type: 'Melee, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '9s',
        cost: '50/55/60/65/70 ',
        description:
          'Amaterasu harnesses the power of her jewel, healing herself every second for 4 seconds and creating a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence. ',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Allies' },
          { description: 'Radius:', value: '30' },
        ],
        rankitems: [
          { description: 'Heal Per Tick:', value: '15/25/35/45/55 (+5% of your Physical Power)' },
          { description: 'Benevolence Aura:', value: '5/9/13/17/21 % Move Speed' },
          { description: 'Valor Aura:', value: '14/18/22/26/30 Bonus Power' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          'Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '55' },
        ],
        rankitems: [
          { description: 'Self Damage Mitigation:', value: '7/9/11/13/15%' },
          { description: 'Mirror Damage:', value: '70/105/140/175/210 (60% of your Physical Power)' },
          { description: 'Full Charge Damage:', value: '140/210/280/350/420' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '16s',
        cost: '70/75/80/85/90 ',
        description:
          'Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.  ',
        menuitems: [
          { description: 'Ability:', value: 'Dash' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '55' },
        ],
        rankitems: [
          { description: 'Silence Duration:', value: '1s' },
          { description: 'Dash Damage:', value: '60/120/180/240/300(60% of your Physical Power)' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '95/90/85/80/75s',
        cost: '100',
        description:
          'Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.',
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '35' },
        ],
        rankitems: [
          { description: 'Damage Per Strike:', value: '80/125/170/215/260 (+50% of your Physical Power)' },
          { description: 'Slow Duration:', value: '2s' },
          { description: 'Stun Duration:', value: '2s' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.',
        menuitems: [
          { description: 'Ability:', value: 'Debuff' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Radius:', value: '30' },
        ],
        rankitems: [
          { description: 'Weakening Aura:', value: '10% Increased Damage Taken' },
          { description: 'Stack/Aura Duration:', value: '5s' },
          { description: 'Max Auras Possible:', value: '3' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '39 + 2/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: '1/.5/1 damage and swing time' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/divine-presence.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/heavenly-reflection.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/glorious-charge.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/dazzling-offensive.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/illuminating-strike.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/amaterasu.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/amaterasu.jpg',
    id: 2110,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Shifting Sands',
    Ability2: 'Impale',
    Ability3: 'Disperse',
    Ability4: 'Desert Fury',
    Ability5: 'Enfeeble',
    AbilityId1: 8193,
    AbilityId2: 8200,
    AbilityId3: 8198,
    AbilityId4: 8201,
    AbilityId5: 8191,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '60/65/70/75/80',
          description:
            "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Radius:', value: '30' },
          ],
          rankitems: [
            { description: 'Slow:', value: '15/20/25/30/35%' },
            { description: 'Damage Buff:', value: '8/11/14/17/20%' },
            { description: 'Lifetime:', value: '7s' },
          ],
        },
      },
      Id: 8193,
      Summary: 'Shifting Sands',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shifting-sands.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '70/75/80/85/90',
          description:
            'Anhur hurls his spear with great might.  If the spear hits a god, they take damage and are knocked back.  Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '90/155/220/285/350 (+75% of your Physical Power)' },
            { description: 'Stun Duration:', value: '1.1/1.2/1.3/1.4/1.5s' },
          ],
        },
      },
      Id: 8200,
      Summary: 'Impale',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/impale.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '60/65/70/75/80',
          description:
            'Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.',
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [{ description: 'Damage:', value: '70/110/150/190/230 (+60% of your Physical Power)' }],
        },
      },
      Id: 8198,
      Summary: 'Disperse',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/disperse.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '80/90/100/110/120',
          description:
            'Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path.  He is immune to Crowd Control for the duration.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage per Spear:', value: '65/90/115/140/165 (30% of your Physical Power)' },
            { description: 'Spears Thrown:', value: '8' },
          ],
        },
      },
      Id: 8201,
      Summary: 'Desert Fury',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/desert-fury.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description: "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds.",
          menuitems: [
            { description: 'Ability:', value: 'Debuff' },
            { description: 'Affects:', value: 'Enemy' },
          ],
          rankitems: [{ description: 'Physical Protection Debuff:', value: '20' }],
        },
      },
      Id: 8191,
      Summary: 'Enfeeble',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/enfeeble.jpg',
    },
    AttackSpeed: 0.9,
    AttackSpeedPerLevel: 0.015,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.69,
    Health: 460,
    HealthPerFive: 8,
    HealthPerLevel: 78,
    Lore: "Anhur, the lion-headed Egyptian God of war, slays his enemies with spear and guile. Weapons equally as sharp!\\n\\nAs a son of Ra, Anhur, and his sister Bastet, rode in the golden barge their father sailed across the sky each day. They protected the ship at dawn and dusk from the world serpent, Apep, who lurked at the horizon. Courageous, formidable, and above all, intelligent, Anhur defended the vessel with his spear and wits, outsmarting and distracting the serpent until feral Bastet delivered a killing blow.  With Apep gone, Ra became Pharaoh, Bastet, the Goddess of Cats and Women, and Anhur donned the mantle of the God of War.  This is how he became known as the Slayer of Enemies.\\n\\nAs time went on, another feline Goddess, Menhet, ran away from the Pantheon, spurning Ra. Anhur vowed to bring her back from the distant lands of Nubia to appease his father, but when he finally caught up with Menhet, he was enraptured and fell in love. He tied a rope to her neck and led her home, where he requested Menhet become his wife, a boon Ra happily granted.\\n\\nFor Egyptians, warfare is more than bloody battle, it's a means to break the chains of tyranny. Anhur can be found at the head of any charge, crushing corruption and leading the people to freedom. While his spear is deadly, Anhur is cunning and clever, able to outmaneuver opponents in ways they least expect.",
    MP5PerLevel: 0.32,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 220,
    ManaPerFive: 4.5,
    ManaPerLevel: 35,
    Name: 'Anhur',
    OnFreeRotation: 'true',
    Pantheon: 'Egyptian',
    PhysicalPower: 40,
    PhysicalPowerPerLevel: 2.5,
    PhysicalProtection: 11,
    PhysicalProtectionPerLevel: 2.8,
    Pros: 'High Single Target Damage',
    Roles: 'Hunter',
    Speed: 365,
    Title: 'Slayer of Enemies',
    Type: 'Ranged, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '14s',
        cost: '60/65/70/75/80',
        description:
          "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Radius:', value: '30' },
        ],
        rankitems: [
          { description: 'Slow:', value: '15/20/25/30/35%' },
          { description: 'Damage Buff:', value: '8/11/14/17/20%' },
          { description: 'Lifetime:', value: '7s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '12s',
        cost: '70/75/80/85/90',
        description:
          'Anhur hurls his spear with great might.  If the spear hits a god, they take damage and are knocked back.  Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '90/155/220/285/350 (+75% of your Physical Power)' },
          { description: 'Stun Duration:', value: '1.1/1.2/1.3/1.4/1.5s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '15s',
        cost: '60/65/70/75/80',
        description:
          'Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.',
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [{ description: 'Damage:', value: '70/110/150/190/230 (+60% of your Physical Power)' }],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '80/90/100/110/120',
        description:
          'Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path.  He is immune to Crowd Control for the duration.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage per Spear:', value: '65/90/115/140/165 (30% of your Physical Power)' },
          { description: 'Spears Thrown:', value: '8' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds.",
        menuitems: [
          { description: 'Ability:', value: 'Debuff' },
          { description: 'Affects:', value: 'Enemy' },
        ],
        rankitems: [{ description: 'Physical Protection Debuff:', value: '20' }],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '40 + 2.5/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shifting-sands.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/impale.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/disperse.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/desert-fury.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/enfeeble.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/anhur.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/anhur.jpg',
    id: 1773,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Hive',
    Ability2: 'Swarm',
    Ability3: 'Honey',
    Ability4: 'Stinger',
    Ability5: 'Bees!',
    AbilityId1: 9385,
    AbilityId2: 9381,
    AbilityId3: 9423,
    AbilityId4: 9393,
    AbilityId5: 9380,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '40',
          description:
            'Bees swarm at the ground target location, creating a new Hive that provides movement and Attack Speed Buffs to Ah Muzen Cab. He also heals for a small amount every second while he remains close to the Hives. Hives reveal enemies within 20 units of them. The Hives can only be destroyed by Basic Attacks (maximum 7 Hives).',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Self' },
            { description: 'Radius:', value: '90' },
          ],
          rankitems: [
            { description: 'Healing:', value: '4/6/8/10/12' },
            { description: 'Movement Speed:', value: '10/15/20/25/30%' },
            { description: 'Attack Speed:', value: '10/20/30/40/50%' },
          ],
        },
      },
      Id: 9385,
      Summary: 'Hive',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/hive.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15/14/13/12/11s',
          cost: '65/70/75/80/85',
          description:
            'Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '70' },
          ],
          rankitems: [{ description: 'Damage:', value: '60/110/160/210/260 (+80% of your Physical Power)' }],
        },
      },
      Id: 9381,
      Summary: 'Swarm',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/swarm.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '10s',
          cost: '60',
          description:
            'Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '13/25/37/49/61 (+15% of your Physical Power)' },
            { description: 'Slow:', value: '20/22.5/25/27.5/30%' },
          ],
        },
      },
      Id: 9423,
      Summary: 'Honey',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/honey.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '100',
          description:
            "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees!, Slowing, Crippling, and decreasing their Physical Protections for 3 seconds.  If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds.  If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '70' },
          ],
          rankitems: [
            { description: 'Damage:', value: '275/355/435/515/595 (110% of your Physical Power)' },
            { description: 'Slow:', value: '20/22.5/25/27.5/30%' },
            { description: 'Physical Protection Reduction:', value: '20%' },
            { description: 'Retrieval Cooldown Reduction:', value: '80%' },
          ],
        },
      },
      Id: 9393,
      Summary: 'Stinger',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/stinger.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects. ',
          menuitems: [
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [{ description: 'Damage:', value: '9 (+6% of your physical power)' }],
        },
      },
      Id: 9380,
      Summary: 'Bees!',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/bees.jpg',
    },
    AttackSpeed: 0.95,
    AttackSpeedPerLevel: 0.016,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.71,
    Health: 450,
    HealthPerFive: 7,
    HealthPerLevel: 73,
    Lore: 'It is said that history is written by the victors, but what happens when the victors say nothing? Everything that came before would be lost. Events, mythology, even identity. The victors – the survivors – could become anyone. Even Gods. Ah Muzen Cab is suspiciously devoid of a past, but the God of Bees enjoys the privileges of worship and ceremony. Privileges that, perhaps, he stole.\\n\\nLong ago, the sky was propped above the land by four beings, the Bacab. They endured their task without complaint, and for their service, were honored by the Mudmen beneath. In truth, the Bacab were prisoners, shackled by duty. Then, a great flood consumed the earth. Seizing their chance, the Bacab fled and the sky crashed into the rising sea. Into that terrible storm they vanished, never to be seen again.\\n\\nAs the seas retreated, new Bacab stepped in to hold the sky aloft. The land reemerged, and from it mankind was born. Gods appeared; patrons of the sustaining forces of life, like agriculture and fertility. And the bee, creator of honey, used to sweeten food, as medicine for the sick, and to produce mead for rituals, was revered, and Ah Muzen Cab arrived, as if from nowhere, as their God.\\n\\nNow, as the greatest war between the heavens clashes on earth, what will remain when the dust has settled? Who will be the victor that writes history? If Ah Muzen Cab was, indeed, one of the original four Bacab, he survived the end of the world once and became a God. What power will he seize this time when the new world is made?',
    MP5PerLevel: 0.38,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 230,
    ManaPerFive: 4.4,
    ManaPerLevel: 40,
    Name: 'Ah Muzen Cab',
    OnFreeRotation: '',
    Pantheon: 'Maya',
    PhysicalPower: 38,
    PhysicalPowerPerLevel: 2.2,
    PhysicalProtection: 12,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Movement Speed, High Attack Speed',
    Roles: 'Hunter',
    Speed: 365,
    Title: 'God of Bees',
    Type: 'Ranged, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '12s',
        cost: '40',
        description:
          'Bees swarm at the ground target location, creating a new Hive that provides movement and Attack Speed Buffs to Ah Muzen Cab. He also heals for a small amount every second while he remains close to the Hives. Hives reveal enemies within 20 units of them. The Hives can only be destroyed by Basic Attacks (maximum 7 Hives).',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Self' },
          { description: 'Radius:', value: '90' },
        ],
        rankitems: [
          { description: 'Healing:', value: '4/6/8/10/12' },
          { description: 'Movement Speed:', value: '10/15/20/25/30%' },
          { description: 'Attack Speed:', value: '10/20/30/40/50%' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15/14/13/12/11s',
        cost: '65/70/75/80/85',
        description:
          'Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '70' },
        ],
        rankitems: [{ description: 'Damage:', value: '60/110/160/210/260 (+80% of your Physical Power)' }],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '10s',
        cost: '60',
        description:
          'Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '13/25/37/49/61 (+15% of your Physical Power)' },
          { description: 'Slow:', value: '20/22.5/25/27.5/30%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '100',
        description:
          "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees!, Slowing, Crippling, and decreasing their Physical Protections for 3 seconds.  If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds.  If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '70' },
        ],
        rankitems: [
          { description: 'Damage:', value: '275/355/435/515/595 (110% of your Physical Power)' },
          { description: 'Slow:', value: '20/22.5/25/27.5/30%' },
          { description: 'Physical Protection Reduction:', value: '20%' },
          { description: 'Retrieval Cooldown Reduction:', value: '80%' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects. ',
        menuitems: [
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [{ description: 'Damage:', value: '9 (+6% of your physical power)' }],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '38 + 2.2/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/hive.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/swarm.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/honey.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/stinger.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/bees.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/ah-muzen-cab.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/ah-muzen-cab.jpg',
    id: 1956,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Water Illusion',
    Ability2: 'Dragon Call',
    Ability3: 'Wild Storm',
    Ability4: 'King of the Eastern Seas',
    Ability5: "Dragon King's Sword",
    AbilityId1: 10645,
    AbilityId2: 10648,
    AbilityId3: 10736,
    AbilityId4: 10652,
    AbilityId5: 10644,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '70',
          description:
            'Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.\n\nAo Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.',
          menuitems: [
            { description: 'Ability:', value: 'Teleport' },
            { description: 'Affects:', value: 'Self and Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range / Radius:', value: '30 / 20' },
          ],
          rankitems: [{ description: 'Damage:', value: '70/120/170/220/270 (+60% of your Magical Power)' }],
        },
      },
      Id: 10645,
      Summary: 'Water Illusion',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/water-illusion.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15/14/13/12/11s',
          cost: '60/65/70/75/80',
          description:
            'Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s.\n\nAo Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.',
          menuitems: [
            { description: 'Ability:', value: 'Stim / Line' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Range:', value: '55' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Attack Damage:', value: '35/50/65/80/95 (+30% of your Magical Power) per hit' },
            {
              description: 'Ranged Damage:',
              value: '20/25/30/35/40 (+13% of your Magical Power) per remaining dragon',
            },
            { description: 'Slow:', value: '30%/ for 1s + 0.25s per remaining dragon' },
          ],
        },
      },
      Id: 10648,
      Summary: 'Dragon Call',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/dragon-call.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '7s',
          cost: '60/65/70/75/80',
          description:
            "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '30' },
          ],
          rankitems: [{ description: 'Damage:', value: '90/135/180/225/270 (+40% of your Magical Power)' }],
        },
      },
      Id: 10736,
      Summary: 'Wild Storm',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/wild-storm.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '90/100/110/120/130',
          description:
            'Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.',
          menuitems: [
            { description: 'Ability:', value: 'Single Target' },
            { description: 'Affects:', value: 'Enemy ' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Landing Range:', value: '200' },
          ],
          rankitems: [
            { description: 'Damage:', value: '90/140/190/240/290 (+50% of your Magical Power)' },
            { description: 'Execute Threshold:', value: '30%' },
            { description: 'Heal:', value: '10/15/20/25/30% of maximum Health' },
            { description: 'Landing Damage:', value: '100/150/200/250/300 (+50% of your Magical Power)' },
          ],
        },
      },
      Id: 10652,
      Summary: 'King of the Eastern Seas',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/king-of-the-eastern-seas.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            "Every 12 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword.",
          menuitems: [{ description: 'Ability:', value: 'Passive' }],
          rankitems: [
            { description: 'Cooldown reduction', value: '2s' },
            { description: 'Heal', value: '5% of maximum Health' },
            { description: 'Max Stacks', value: '3' },
          ],
        },
      },
      Id: 10644,
      Summary: "Dragon King's Sword",
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/dragon-kings-sword.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.02,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.7,
    Health: 400,
    HealthPerFive: 10,
    HealthPerLevel: 82,
    Lore: 'Regal, powerful, the Dragon-God of the Eastern Sea commands storms and tides with the flick of a claw, yet he seethes with rage for past humiliations.\\n\\nAs one of four Dragon-Gods, Ao Kuang demands tribute from those along the Eastern shores. For their worship, tides remain calm, rivers contained, and rainfall for crops plentiful. It was not always like this, however. Long ago, Ao Kuang grew greedy and expected greater sacrifices. When they were not given, he sent floods, tidal waves, and devastating storms, striking so much fear into the people they dared not speak of this violence to the Jade Emperor. Ao Kuang enjoyed his total control.\\n\\nThen came Sun Wukong to his undersea palace seeking a weapon for his famous journey to the West. Despite the offer of other weapons, Sun Wukong took the Ruyi Jingu Bang, an immense pillar that aided in controlling the tides. It was believed none could even lift it, but Sun Wukong spun it with ease. As if this were not humiliating enough, Sun Wukong demanded other gifts of armor, shoes, and helm, all of which Ao Kuang was forced to supply.\\n\\nNext, the demigod boy Nezha, playing in a stream, inadvertently shook Ao Kuang’s palace. Annoyed, the Dragon-God set forth his favorite scout to kill the child, but Nezha defended himself and the scout was slain. Furious, Ao Kuang ordered his third son to destroy Nezha, yet Nehza slew him as well. Completely outraged, Ao Kuang went to Nezha’s father and threatened to take the issue before the Jade Emperor, but Nezha tackled the Dragon-King and forced him to submit.\\n\\nSuch repeated shame and humiliation have both humbled Ao Kuang and tempered his fury to steely resolve. Long has he awaited his chance to rise again and exert dominance as a great Dragon-God of the Sea.',
    MP5PerLevel: 0.41,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 175,
    MagicalPowerPerLevel: 12,
    Mana: 240,
    ManaPerFive: 4.8,
    ManaPerLevel: 38,
    Name: 'Ao Kuang',
    OnFreeRotation: '',
    Pantheon: 'Chinese',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 12,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Single Target Damage',
    Roles: 'Mage',
    Speed: 375,
    Title: 'Dragon King of the Eastern Seas',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '15s',
        cost: '70',
        description:
          'Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.\n\nAo Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.',
        menuitems: [
          { description: 'Ability:', value: 'Teleport' },
          { description: 'Affects:', value: 'Self and Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range / Radius:', value: '30 / 20' },
        ],
        rankitems: [{ description: 'Damage:', value: '70/120/170/220/270 (+60% of your Magical Power)' }],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15/14/13/12/11s',
        cost: '60/65/70/75/80',
        description:
          'Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s.\n\nAo Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.',
        menuitems: [
          { description: 'Ability:', value: 'Stim / Line' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Range:', value: '55' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Attack Damage:', value: '35/50/65/80/95 (+30% of your Magical Power) per hit' },
          { description: 'Ranged Damage:', value: '20/25/30/35/40 (+13% of your Magical Power) per remaining dragon' },
          { description: 'Slow:', value: '30%/ for 1s + 0.25s per remaining dragon' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '7s',
        cost: '60/65/70/75/80',
        description:
          "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '30' },
        ],
        rankitems: [{ description: 'Damage:', value: '90/135/180/225/270 (+40% of your Magical Power)' }],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '90/100/110/120/130',
        description:
          'Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.',
        menuitems: [
          { description: 'Ability:', value: 'Single Target' },
          { description: 'Affects:', value: 'Enemy ' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Landing Range:', value: '200' },
        ],
        rankitems: [
          { description: 'Damage:', value: '90/140/190/240/290 (+50% of your Magical Power)' },
          { description: 'Execute Threshold:', value: '30%' },
          { description: 'Heal:', value: '10/15/20/25/30% of maximum Health' },
          { description: 'Landing Damage:', value: '100/150/200/250/300 (+50% of your Magical Power)' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          "Every 12 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword.",
        menuitems: [{ description: 'Ability:', value: 'Passive' }],
        rankitems: [
          { description: 'Cooldown reduction', value: '2s' },
          { description: 'Heal', value: '5% of maximum Health' },
          { description: 'Max Stacks', value: '3' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '35 + 2.4/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: '1/0.5/0.5/1x Damage and Speed' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/water-illusion.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/dragon-call.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/wild-storm.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/king-of-the-eastern-seas.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/dragon-kings-sword.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/ao-kuang.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/ao-kuang.jpg',
    id: 2034,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Kiss',
    Ability2: 'Back Off!',
    Ability3: 'Love Birds',
    Ability4: 'Undying Love',
    Ability5: 'Center of Attention',
    AbilityId1: 8742,
    AbilityId2: 8776,
    AbilityId3: 8740,
    AbilityId4: 8743,
    AbilityId5: 13180,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '14/13.5/13/12.5/12s',
          cost: '50/55/60/65/70',
          description:
            "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed.  If it hits an ally, it has a reduced 1s cooldown.  If the kiss hits an enemy god, they are Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also, 70% of all Mana regenerated by Aphrodite is restored to her soul mate.",
          menuitems: [
            { description: 'Ability:', value: 'Projectile' },
            { description: 'Affects:', value: 'Gods (Enemy or Ally)' },
          ],
          rankitems: [
            { description: 'Movement Speed:', value: '8/11/14/17/20%' },
            { description: 'Stun Duration:', value: '1s' },
            { description: 'Jealousy Damage Increase:', value: '8/11/14/17/20%' },
            { description: 'Jealousy Duration:', value: '5s' },
          ],
        },
      },
      Id: 8742,
      Summary: 'Kiss',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/kiss.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '70/75/80/85/90',
          description:
            'Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her.\nIf Aphrodite has a soul mate, an explosion originates on them in addition, dealing the same damage as well as slowing enemies.\nIf an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.',
          menuitems: [
            { description: 'Ability:', value: 'Point Blank' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Damage:', value: '80/140/200/260/320 (+70% of your Magical Power)' },
            { description: 'Slow:', value: '25%' },
          ],
        },
      },
      Id: 8776,
      Summary: 'Back Off!',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/back-off.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '70/75/80/85/90',
          description:
            'Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her.  The doves circle around all enemies in the path, damaging enemies every .5s for 3s.  Aphrodite and her soul mate also receive healing when cast.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy and Allies' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '15/25/35/45/55 (+15% of your Magical Power)' },
            { description: 'Heal per Tick:', value: '10/17/24/31/38 (+10% of your Magical Power)' },
          ],
        },
      },
      Id: 8740,
      Summary: 'Love Birds',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/love-birds.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '100',
          description:
            'Aphrodite pledges undying love to herself and her soul mate.  While this is active, her and her soul mate are invulnerable to all damage for a short duration.  All Crowd Control effects are also removed when activated.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self and Soul Mate' },
          ],
          rankitems: [{ description: 'Invulnerability Duration:', value: '.8/1.1/1.4/1.7/2s' }],
        },
      },
      Id: 8743,
      Summary: 'Undying Love',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/undying-love.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Aphrodite gains 4 Physical Protection and 4 Magical Protection for each friendly or enemy god within 70 feet of her.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [],
        },
      },
      Id: 13180,
      Summary: 'Center of Attention',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/center-of-attention.jpg',
    },
    AttackSpeed: 0.87,
    AttackSpeedPerLevel: 0.008,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.45,
    Health: 380,
    HealthPerFive: 6,
    HealthPerLevel: 68,
    Lore: 'There are too few words to describe the radiance, the magnificence, the inequitable glory of Aphrodite, Goddess of Beauty. So wondrous is she to behold that one look can inspire tears, desire, jealousy, and love. Yet, beneath her flawless exterior resides a heart burdened with insecurity.\\n\\nInattentive and hideous to look upon, her husband, Hephaestus, unknowingly leaves Aphrodite feeling lonely and worthless. She finds consolation in the arms of other men such as Ares, or validation by competing in any contest of beauty she encounters.\\n\\nAt a wedding attended by all the Gods, a golden apple appeared, inscribed with the words "to the fairest." Immediately Aphrodite, her mother Hera, and sister Athena quarreled over it. Zeus elected Paris, Prince of Troy, to choose a victor. In exchange for being named the fairest, Aphrodite offered any woman in the world as his wife, so Paris agreed. However, he chose Helen as his wife, and their love began the catastrophic Trojan War.\\n\\nNow, a new war brews, but this one between Gods, not men. While the battlefield is no place for the fairest of all, Aphrodite recalls the destruction between the Greeks and Trojans. Perhaps, this time, her beauty can be used to stop a war instead of start one. Perhaps, this time, she will discover the beauty within.',
    MP5PerLevel: 0.41,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 160,
    MagicalPowerPerLevel: 7.25,
    Mana: 240,
    ManaPerFive: 4.8,
    ManaPerLevel: 43,
    Name: 'Aphrodite',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 9,
    PhysicalProtectionPerLevel: 2.7,
    Pros: 'High Sustain',
    Roles: 'Mage',
    Speed: 355,
    Title: 'Goddess of Beauty',
    Type: 'Ranged, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '14/13.5/13/12.5/12s',
        cost: '50/55/60/65/70',
        description:
          "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed.  If it hits an ally, it has a reduced 1s cooldown.  If the kiss hits an enemy god, they are Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also, 70% of all Mana regenerated by Aphrodite is restored to her soul mate.",
        menuitems: [
          { description: 'Ability:', value: 'Projectile' },
          { description: 'Affects:', value: 'Gods (Enemy or Ally)' },
        ],
        rankitems: [
          { description: 'Movement Speed:', value: '8/11/14/17/20%' },
          { description: 'Stun Duration:', value: '1s' },
          { description: 'Jealousy Damage Increase:', value: '8/11/14/17/20%' },
          { description: 'Jealousy Duration:', value: '5s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '12s',
        cost: '70/75/80/85/90',
        description:
          'Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her.\nIf Aphrodite has a soul mate, an explosion originates on them in addition, dealing the same damage as well as slowing enemies.\nIf an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.',
        menuitems: [
          { description: 'Ability:', value: 'Point Blank' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Damage:', value: '80/140/200/260/320 (+70% of your Magical Power)' },
          { description: 'Slow:', value: '25%' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '14s',
        cost: '70/75/80/85/90',
        description:
          'Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her.  The doves circle around all enemies in the path, damaging enemies every .5s for 3s.  Aphrodite and her soul mate also receive healing when cast.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy and Allies' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '15/25/35/45/55 (+15% of your Magical Power)' },
          { description: 'Heal per Tick:', value: '10/17/24/31/38 (+10% of your Magical Power)' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '100',
        description:
          'Aphrodite pledges undying love to herself and her soul mate.  While this is active, her and her soul mate are invulnerable to all damage for a short duration.  All Crowd Control effects are also removed when activated.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self and Soul Mate' },
        ],
        rankitems: [{ description: 'Invulnerability Duration:', value: '.8/1.1/1.4/1.7/2s' }],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Aphrodite gains 4 Physical Protection and 4 Magical Protection for each friendly or enemy god within 70 feet of her.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '32 + 1.45/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/kiss.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/back-off.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/love-birds.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/undying-love.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/center-of-attention.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/aphrodite.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/aphrodite.jpg',
    id: 1898,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'So Beautiful',
    Ability2: 'Serenade',
    Ability3: 'The Moves',
    Ability4: 'Across The Sky',
    Ability5: 'Audacity',
    AbilityId1: 8759,
    AbilityId2: 8808,
    AbilityId3: 8783,
    AbilityId4: 8785,
    AbilityId5: 8754,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '11s',
          cost: '70/75/80/85/90',
          description:
            "Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [{ description: 'Damage:', value: '90/150/210/270/330 (+80% of your Physical Power)' }],
        },
      },
      Id: 8759,
      Summary: 'So Beautiful',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/so-beautiful.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '17/16/15/14/13s',
          cost: '75',
          description:
            'Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional physical protection.  Any damage done breaks the effect.',
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Mesmerize:', value: '1.2/1.4/1.6/1.8/2.0s' },
            { description: 'Physical Protection:', value: '10/15/20/25/30' },
            { description: 'Buff Lifetime:', value: '5s' },
          ],
        },
      },
      Id: 8808,
      Summary: 'Serenade',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/serenade.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '70',
          description:
            'Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit.  At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.',
          menuitems: [
            { description: 'Ability:', value: 'Dash' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '70/115/160/205/250 (+60% of your Physical Power)' },
            { description: 'Movement Speed Buff/Debuff:', value: '10/12.5/15/17.5/20%' },
            { description: 'Buff Duration:', value: '3s' },
          ],
        },
      },
      Id: 8783,
      Summary: 'The Moves',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/the-moves.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '110s',
          cost: '10 + 40/50/60/70/80 per second',
          description:
            'Apollo rides his chariot across the sky, choosing when to land, dealing damage every .2s for .8s as he lands. Enemies hit by the last tick of the landing will also be knocked up.',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [{ description: 'Damage per Tick:', value: '70/95/120/145/170 (+30% of your Physical Power)' }],
        },
      },
      Id: 8785,
      Summary: 'Across The Sky',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/across-the-sky.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'After 10 successful Basic Attacks, Apollo gains Audacity, increasing his Attack Speed by 100% for the next 5 Basic Attacks (hit or miss) he makes. Apollo also gains 1 stack of Audacity for each successful damaging ability on Enemy gods.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Attack Speed Buff:', value: '100%' },
            { description: 'Buff Duration:', value: '5 Basic Attacks' },
          ],
        },
      },
      Id: 8754,
      Summary: 'Audacity',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/audacity.jpg',
    },
    AttackSpeed: 0.95,
    AttackSpeedPerLevel: 0.016,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.69,
    Health: 450,
    HealthPerFive: 8,
    HealthPerLevel: 77,
    Lore: 'There are none without admiration for Apollo, God of Music. He is brash, cavalier, and dauntless, with the power to bring hope to the hopeless and change the course of battle with a single arrow. Voices of soldiers, mothers, kings and emperors, even Gods rise in glorious melody in honor of him; and he, basking in their adoration, shines victoriously.\\n\\nThough Hera, Queen of Gods, challenged his very birth, sending the great serpent Pylos to slay Apollo, his twin sister Artemis, and their mother Leto, not even she could deny him victory. Merely four days old, Apollo, gifted with a legendary bow, slew the Gaia Serpent and defied Hera.\\n\\nIn his humble youth, Apollo was a cattle herder. The trickster God Hermes stole Apollo’s charges and led them to a nearby cave. From the shell of a tortoise and the body of a cow, he crafted the first Lyre. Apollo finally caught up with Hermes, saw the instrument, and simply had to have it, trading the rest of his cattle to Hermes for it. Years later, Hermes would send his son, Pan, to challenge Apollo in a contest of musical prowess, but Apollo soundly defeated the satyr with dexterous mastery of the Lyre.\\n\\nAs Apollo grew into his rightful place among the Gods, his victories mounted, and the songs of the Faithful were sung more and more in his name. Now, they raise their voices for Apollo to take the field as Gods clash. Never one to deny his adoring public, Apollo prepares for one last show.',
    MP5PerLevel: 0.4,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 225,
    ManaPerFive: 4.6,
    ManaPerLevel: 40,
    Name: 'Apollo',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 40,
    PhysicalPowerPerLevel: 2.6,
    PhysicalProtection: 12,
    PhysicalProtectionPerLevel: 2.7,
    Pros: 'High Mobility',
    Roles: 'Hunter',
    Speed: 365,
    Title: 'God of Music',
    Type: 'Ranged, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '11s',
        cost: '70/75/80/85/90',
        description:
          "Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [{ description: 'Damage:', value: '90/150/210/270/330 (+80% of your Physical Power)' }],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '17/16/15/14/13s',
        cost: '75',
        description:
          'Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional physical protection.  Any damage done breaks the effect.',
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Mesmerize:', value: '1.2/1.4/1.6/1.8/2.0s' },
          { description: 'Physical Protection:', value: '10/15/20/25/30' },
          { description: 'Buff Lifetime:', value: '5s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '15s',
        cost: '70',
        description:
          'Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit.  At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.',
        menuitems: [
          { description: 'Ability:', value: 'Dash' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '70/115/160/205/250 (+60% of your Physical Power)' },
          { description: 'Movement Speed Buff/Debuff:', value: '10/12.5/15/17.5/20%' },
          { description: 'Buff Duration:', value: '3s' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '110s',
        cost: '10 + 40/50/60/70/80 per second',
        description:
          'Apollo rides his chariot across the sky, choosing when to land, dealing damage every .2s for .8s as he lands. Enemies hit by the last tick of the landing will also be knocked up.',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [{ description: 'Damage per Tick:', value: '70/95/120/145/170 (+30% of your Physical Power)' }],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'After 10 successful Basic Attacks, Apollo gains Audacity, increasing his Attack Speed by 100% for the next 5 Basic Attacks (hit or miss) he makes. Apollo also gains 1 stack of Audacity for each successful damaging ability on Enemy gods.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Attack Speed Buff:', value: '100%' },
          { description: 'Buff Duration:', value: '5 Basic Attacks' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '40 + 2.6/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/so-beautiful.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/serenade.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/the-moves.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/across-the-sky.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/audacity.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/apollo.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/apollo.jpg',
    id: 1899,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Venomous Bite',
    Ability2: 'Cocoon',
    Ability3: 'Web',
    Ability4: 'Night Crawler',
    Ability5: 'Predator',
    AbilityId1: 10495,
    AbilityId2: 10614,
    AbilityId3: 10570,
    AbilityId4: 10507,
    AbilityId5: 10493,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '15/14/13/12/11s',
          cost: '60/65/70/75/80',
          description:
            "Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time and healing Arachne every 0.5s for 3s.",
          menuitems: [
            { description: 'Ability:', value: 'Stim' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Initial Damage:', value: '50/75/100/125/150 (+35% of your Physical Power)' },
            { description: 'Damage per Tick:', value: '10/18/26/34/42 (+10% of your Physical Power)' },
            { description: 'Healing per Tick:', value: '8/16/24/32/40 (+8% of your Physical Power)' },
          ],
        },
      },
      Id: 10495,
      Summary: 'Venomous Bite',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/venomous-bite.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '70',
          description:
            'Arachne spindles her webbing, and her next 3 successful Basic Attacks are executed with increased Attack Speed for 6s. If all 3 Basic Attacks hit the same target, that target is Stunned.',
          menuitems: [
            { description: 'Ability:', value: 'Stim' },
            { description: 'Affects:', value: 'Enemies' },
          ],
          rankitems: [
            { description: 'Attack Speed:', value: '30/40/50/60/70%' },
            { description: 'Stun Duration:', value: '1/1.1/1.2/1.3/1.4s' },
          ],
        },
      },
      Id: 10614,
      Summary: 'Cocoon',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/cocoon.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '50/55/60/65/70',
          description:
            'Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.',
          menuitems: [
            { description: 'Ability:', value: 'Projectile' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Slow Duration:', value: '4/4.5/5/5.5/6s' },
            { description: 'Movement Speed:', value: '40%' },
            { description: 'Broodlings:', value: '2' },
            { description: 'Broodling Damage:', value: '20/30/40/50/60 per hit' },
            { description: 'Web Lifetime:', value: '240s' },
          ],
        },
      },
      Id: 10570,
      Summary: 'Web',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/web.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90/85/80/75/70s',
          cost: '100',
          description:
            'Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail.\r\nArachne may activate Ability 1 and 2 while running on this web.',
          menuitems: [
            { description: 'Ability:', value: 'Channeled' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [
            { description: 'Damage:', value: '150/250/350/450/550 (100% of your Physical Power)' },
            { description: 'Duration on Web:', value: '5s' },
            { description: 'Movement Speed:', value: '40%' },
            { description: 'Web Radius:', value: '25ft' },
          ],
        },
      },
      Id: 10507,
      Summary: 'Night Crawler',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/night-crawler.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description: "Arachne's Basic Attacks gain 1.5% Physical damage for every 5% of a target's missing Health. ",
          menuitems: [{ description: 'Affects:', value: 'Self' }],
          rankitems: [],
        },
      },
      Id: 10493,
      Summary: 'Predator',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/predator.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.02,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.67,
    Health: 445,
    HealthPerFive: 9,
    HealthPerLevel: 79,
    Lore: 'Once, a beautiful and talented weaver of cloth and fabric, a single prideful mistake made a monster of Arachne for all time.\\n\\nWith loom and thread, there were none more skilled than the mortal Arachne. Viewers traveled leagues just to see her art. So wondrous and majestic were her tapestries, it was said the spinner must have been instructed by the patron Goddess of Weavers herself, Athena. To this comparison, Arachne proudly scoffed, claiming not even the Gods rivaled her talent at weaving.\\n\\nWhen Athena heard this, disguised as a crone, she visited Arachne and encouraged her to show proper respect to the Gods. Arachne dismissed the old woman and issued a challenge that no God, not even Athena, could weave better than she. Furious, Athena revealed herself and accepted the challenge.\\n\\nThey both set to the loom with fervor. Athena wove a glorious tapestry depicting her battle with Poseidon over the city of Athens. Her detail and imagery were exquisite. Yet Arachne’s weavings depicted Zeus in his many infidelities with mortals. So flawless, so lifelike was her artistry, not even Athena could refute the skill, nor could she contain her anger at such a sleight. Violently, she tore Arachne’s tapestry and pressed a finger to Arachne’s forehead. Twisting in anguish, Arachne fell to the ground as additional legs grew from her body, screaming as she transformed into the first spider.\\n\\nIt was an act of anger and pity, a lesson and a curse, for spiders are the greatest of weavers, and Arachne, in particular, was to weave for all time, but none could doubt the consequence for Arachne’s pride. Still, within her twisted heart, Arachne never forgave Athena, consumed by a dark hatred that can be sated only by the destruction of the Gods.',
    MP5PerLevel: 0.46,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 210,
    ManaPerFive: 4.8,
    ManaPerLevel: 41,
    Name: 'Arachne',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 38,
    PhysicalPowerPerLevel: 2.2,
    PhysicalProtection: 13,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Single Target Damage, Great Jungler',
    Roles: 'Assassin',
    Speed: 375,
    Title: 'the Weaver',
    Type: 'Melee, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '15/14/13/12/11s',
        cost: '60/65/70/75/80',
        description:
          "Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time and healing Arachne every 0.5s for 3s.",
        menuitems: [
          { description: 'Ability:', value: 'Stim' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Initial Damage:', value: '50/75/100/125/150 (+35% of your Physical Power)' },
          { description: 'Damage per Tick:', value: '10/18/26/34/42 (+10% of your Physical Power)' },
          { description: 'Healing per Tick:', value: '8/16/24/32/40 (+8% of your Physical Power)' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15s',
        cost: '70',
        description:
          'Arachne spindles her webbing, and her next 3 successful Basic Attacks are executed with increased Attack Speed for 6s. If all 3 Basic Attacks hit the same target, that target is Stunned.',
        menuitems: [
          { description: 'Ability:', value: 'Stim' },
          { description: 'Affects:', value: 'Enemies' },
        ],
        rankitems: [
          { description: 'Attack Speed:', value: '30/40/50/60/70%' },
          { description: 'Stun Duration:', value: '1/1.1/1.2/1.3/1.4s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '14s',
        cost: '50/55/60/65/70',
        description:
          'Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.',
        menuitems: [
          { description: 'Ability:', value: 'Projectile' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Slow Duration:', value: '4/4.5/5/5.5/6s' },
          { description: 'Movement Speed:', value: '40%' },
          { description: 'Broodlings:', value: '2' },
          { description: 'Broodling Damage:', value: '20/30/40/50/60 per hit' },
          { description: 'Web Lifetime:', value: '240s' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90/85/80/75/70s',
        cost: '100',
        description:
          'Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail.\r\nArachne may activate Ability 1 and 2 while running on this web.',
        menuitems: [
          { description: 'Ability:', value: 'Channeled' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [
          { description: 'Damage:', value: '150/250/350/450/550 (100% of your Physical Power)' },
          { description: 'Duration on Web:', value: '5s' },
          { description: 'Movement Speed:', value: '40%' },
          { description: 'Web Radius:', value: '25ft' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: "Arachne's Basic Attacks gain 1.5% Physical damage for every 5% of a target's missing Health. ",
        menuitems: [{ description: 'Affects:', value: 'Self' }],
        rankitems: [],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '38 + 2.2/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: '.5/1/1x damage and swing time' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/venomous-bite.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/cocoon.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/web.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/night-crawler.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/predator.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/arachne.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/arachne.jpg',
    id: 1699,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Shackles',
    Ability2: 'Bolster Defenses',
    Ability3: 'Searing Flesh',
    Ability4: 'No Escape',
    Ability5: 'Blessed Presence',
    AbilityId1: 8284,
    AbilityId2: 8315,
    AbilityId3: 8286,
    AbilityId4: 8316,
    AbilityId5: 8317,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '70/75/80/85/90',
          description:
            "Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s.",
          menuitems: [
            { description: 'Ability:', value: 'Projectile' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Minion Damage:', value: '70/90/110/130/150 (+15% of your Magical Power)' },
            { description: 'God Damage per Tick:', value: '25/45/65/85/105 (+15% of your Magical Power)' },
            { description: 'Speed Buff per Target Shackled:', value: '15% ' },
            { description: 'Duration:', value: '4s' },
            { description: 'Max Shackles:', value: '3' },
          ],
        },
      },
      Id: 8284,
      Summary: 'Shackles',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shackles.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '40/45/50/55/60',
          description:
            'Ares strengthens the defenses of himself and all nearby allies, granting Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self/Allies' },
            { description: 'Radius:', value: '35' },
          ],
          rankitems: [
            { description: 'Protections:', value: '20/25/30/35/40' },
            { description: 'CC Reduction:', value: '10/15/20/25/30%' },
            { description: 'Lifetime:', value: '8s' },
            { description: 'Shackle Bonus:', value: '7' },
            { description: 'HP5:', value: ' 25/30/35/40/45' },
          ],
        },
      },
      Id: 8315,
      Summary: 'Bolster Defenses',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/bolster-defenses.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '55/60/65/70/75',
          description:
            "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s.  Ares is immune to Knockback for the duration.",
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '15/20/25/30/35 (+7% of your Magical Power)' },
            { description: '% Max Health per Tick (Gods):', value: '1/1/2/2/3%' },
            { description: '% Max Health per Tick (Minions):', value: '5%' },
          ],
        },
      },
      Id: 8286,
      Summary: 'Searing Flesh',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/searing-flesh.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '100s',
          cost: '80/85/90/95/100',
          description:
            'Ares throws chains out to all enemy gods in an area around him. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.',
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemy Gods' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '35' },
          ],
          rankitems: [
            { description: 'Damage:', value: '200/275/350/425/500 (+40% of your magical power)' },
            { description: 'Stun:', value: '1s' },
          ],
        },
      },
      Id: 8316,
      Summary: 'No Escape',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/no-escape.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description: 'Each completed aura item that Ares owns grants him 30 additional Magical Power.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [],
        },
      },
      Id: 8317,
      Summary: 'Blessed Presence',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/blessed-presence.jpg',
    },
    AttackSpeed: 0.9,
    AttackSpeedPerLevel: 0.011,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.67,
    Health: 485,
    HealthPerFive: 8,
    HealthPerLevel: 90,
    Lore: 'Feared by his enemies, reviled by his father, adored by the Goddess of Beauty, and worshipped by warriors, Ares, a tortured and lonely soul, is the bloodthirsty Greek God of War.\\n\\nAres is not loved by the people. He represents everything they fear and despise: war, strife, chaos, and murder. It’s said that the sky darkens when Ares takes the field. That he rides to battle on a chariot drawn by fire-breathing steeds and delights only in the clash of battle and smell of bloodshed.\\n\\nAres is not loved by his father. Zeus has many sons, but only two with his wife Hera. However, the thunder God has long suspected Hera of having an affair that led to the birth of Ares, perhaps as revenge for all of Zeus’ infidelity. For this, Zeus is disgusted by him.\\n\\nAres is not loved by his sister. Athena and Ares are both Gods of War. Where Ares represents violence, force, and slaughter, Athena is the embodiment of intelligence, strategy, and leadership. Ares is quick to act and leave a bloody trail. Athena is thoughtful and careful with lives. Often they have been on the opposite sides, most notably at the Battle of Troy, where Athena viciously wounded him and forced Ares to retreat.\\n\\nAres is the lover of the Goddess of Beauty. Though Aphrodite is married to Ares’ brother, Hephaestus, Ares takes what he wants, and Aphrodite gives in willingly. Their union created offspring almost as terrible as Ares himself: Phobos and Deimos, Fear and Terror.\\n\\nAres is loved only by the Spartans, who revere the God for his masculinity, his merciless warrior spirit, and tenacity against all odds. The Spartans, however, know the unpredictable fury of their patron, and bind his statues in chains. This is, in part, to prevent Ares’ spirit of victory from escaping Sparta, and a vain effort to keep the God of War contained.',
    MP5PerLevel: 0.42,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 190,
    MagicalPowerPerLevel: 7.75,
    Mana: 200,
    ManaPerFive: 4.6,
    ManaPerLevel: 37,
    Name: 'Ares',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 20,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Crowd Control, High Defense',
    Roles: 'Guardian',
    Speed: 365,
    Title: 'God of War',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '15s',
        cost: '70/75/80/85/90',
        description:
          "Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s.",
        menuitems: [
          { description: 'Ability:', value: 'Projectile' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Minion Damage:', value: '70/90/110/130/150 (+15% of your Magical Power)' },
          { description: 'God Damage per Tick:', value: '25/45/65/85/105 (+15% of your Magical Power)' },
          { description: 'Speed Buff per Target Shackled:', value: '15% ' },
          { description: 'Duration:', value: '4s' },
          { description: 'Max Shackles:', value: '3' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15s',
        cost: '40/45/50/55/60',
        description:
          'Ares strengthens the defenses of himself and all nearby allies, granting Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self/Allies' },
          { description: 'Radius:', value: '35' },
        ],
        rankitems: [
          { description: 'Protections:', value: '20/25/30/35/40' },
          { description: 'CC Reduction:', value: '10/15/20/25/30%' },
          { description: 'Lifetime:', value: '8s' },
          { description: 'Shackle Bonus:', value: '7' },
          { description: 'HP5:', value: ' 25/30/35/40/45' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '12s',
        cost: '55/60/65/70/75',
        description:
          "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s.  Ares is immune to Knockback for the duration.",
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '15/20/25/30/35 (+7% of your Magical Power)' },
          { description: '% Max Health per Tick (Gods):', value: '1/1/2/2/3%' },
          { description: '% Max Health per Tick (Minions):', value: '5%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '100s',
        cost: '80/85/90/95/100',
        description:
          'Ares throws chains out to all enemy gods in an area around him. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.',
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemy Gods' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '35' },
        ],
        rankitems: [
          { description: 'Damage:', value: '200/275/350/425/500 (+40% of your magical power)' },
          { description: 'Stun:', value: '1s' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: 'Each completed aura item that Ares owns grants him 30 additional Magical Power.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '38 + 1.55/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: '1/.75/1/1.25x damage and swing time' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shackles.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/bolster-defenses.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/searing-flesh.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/no-escape.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/blessed-presence.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/ares.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/ares.jpg',
    id: 1782,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: "Transgressor's Fate",
    Ability2: 'Vengeful Assault',
    Ability3: 'Suppress the Insolent',
    Ability4: 'Calydonian Boar',
    Ability5: 'Still Target',
    AbilityId1: 7970,
    AbilityId2: 7974,
    AbilityId3: 8066,
    AbilityId4: 8126,
    AbilityId5: 16348,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '14/13/12/11/10s',
          cost: '45',
          description:
            'Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting and Crippling the enemy god, preventing movement abilities and dealing damage every second for 3s. ',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy Gods' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '35/48/61/74/87 (+30% of your Physical Power)' },
            { description: 'Root:', value: '2s' },
            { description: 'Max Traps:', value: '3' },
          ],
        },
      },
      Id: 7970,
      Summary: "Transgressor's Fate",
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/transgressors-fate.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '16/15.5/15/14.5/14s',
          cost: '60/65/70/75/80',
          description:
            'Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionally, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Attack Speed:', value: '40/50/60/70/80%' },
            { description: 'Movement Speed:', value: '25%' },
            { description: 'Duration:', value: '3/3.5/4/4.5/5s' },
          ],
        },
      },
      Id: 7974,
      Summary: 'Vengeful Assault',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/vengeful-assault.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '10s',
          cost: '50/55/60/65/70',
          description:
            'Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [
            { description: 'Damage:', value: '90/140/190/240/290 (+60% of your Physical Power)' },
            { description: 'Slow:', value: '25%' },
            { description: 'Slow Duration:', value: '2s' },
          ],
        },
      },
      Id: 8066,
      Summary: 'Suppress the Insolent',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/suppress-the-insolent.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '80/90/100/110/120',
          description:
            'Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.',
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemy Gods' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '150/225/300/375/450 (+100% of your Physical Power)' },
            { description: 'Stun:', value: '1.1/1.2/1.3/1.4/1.5s' },
            { description: 'Boar Lifetime:', value: '6s' },
          ],
        },
      },
      Id: 8126,
      Summary: 'Calydonian Boar',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/calydonian-boar.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Artemis deals 15% increased Basic Attack damage to gods and 30% to minions who are afflicted by Crowd Control. ',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [],
        },
      },
      Id: 16348,
      Summary: 'Still Target',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/still-target.jpg',
    },
    AttackSpeed: 0.95,
    AttackSpeedPerLevel: 0.016,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.68,
    Health: 450,
    HealthPerFive: 8,
    HealthPerLevel: 75,
    Lore: 'Armed with a magical bow, Artemis is the unrivaled Goddess of the Hunt!\\n\\nDaughter of Zeus and Leta, Artemis and her twin brother Apollo are products of Zeus’ infidelity to his wife Hera. Insulted, Hera cursed Leta while she was pregnant, forbidding her to give birth on land or sea. Fortunately, she found an island that did not touch the ocean floor, so it was neither land nor sea, and thus bore her children. Artemis was born first, then miraculously aided as midwife in the birthing of her brother.\\n\\nArtemis spent her childhood in the hills and forests, training with her bow and hunting beasts. As she grew older and more beautiful, she also grew proud and ruthless when slighted or dishonored, especially against those that claimed to be better hunters than she. Adonis boasted this very thing and Artemis sent a wild boar to skewer him. The twin demigods Otos and Ephialtes, who could not be killed except by each other, threatened to kidnap Artemis and force her to marry one of them, but were tricked when Artemis, appearing as a doe, dashed between them. As they thrust with their spears they impaled each other. Finally, Actaeon, after peeping at Artemis while she bathed, was transformed into a stag and devoured by his own hunting dogs. Such is the wrath of Artemis.\\n\\nHer name is invoked by hunters seeking prey and by midwives during childbirth. Sacrifices are made in her name before a new military campaign. Adolescent girls are sent to her shrine to serve for one year. Beautiful, deadly, and chaste, Artemis is a focused woman and a fearsome warrior.',
    MP5PerLevel: 0.25,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 205,
    ManaPerFive: 4.4,
    ManaPerLevel: 34,
    Name: 'Artemis',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 35,
    PhysicalPowerPerLevel: 2.5,
    PhysicalProtection: 12,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Single Target Damage',
    Roles: 'Hunter',
    Speed: 365,
    Title: 'Goddess of the Hunt',
    Type: 'Ranged, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '14/13/12/11/10s',
        cost: '45',
        description:
          'Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting and Crippling the enemy god, preventing movement abilities and dealing damage every second for 3s. ',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy Gods' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '35/48/61/74/87 (+30% of your Physical Power)' },
          { description: 'Root:', value: '2s' },
          { description: 'Max Traps:', value: '3' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '16/15.5/15/14.5/14s',
        cost: '60/65/70/75/80',
        description:
          'Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionally, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Attack Speed:', value: '40/50/60/70/80%' },
          { description: 'Movement Speed:', value: '25%' },
          { description: 'Duration:', value: '3/3.5/4/4.5/5s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '10s',
        cost: '50/55/60/65/70',
        description:
          'Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [
          { description: 'Damage:', value: '90/140/190/240/290 (+60% of your Physical Power)' },
          { description: 'Slow:', value: '25%' },
          { description: 'Slow Duration:', value: '2s' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '80/90/100/110/120',
        description:
          'Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.',
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemy Gods' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '150/225/300/375/450 (+100% of your Physical Power)' },
          { description: 'Stun:', value: '1.1/1.2/1.3/1.4/1.5s' },
          { description: 'Boar Lifetime:', value: '6s' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Artemis deals 15% increased Basic Attack damage to gods and 30% to minions who are afflicted by Crowd Control. ',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '35 + 2.5/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/transgressors-fate.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/vengeful-assault.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/suppress-the-insolent.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/calydonian-boar.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/still-target.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/artemis.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/artemis.jpg',
    id: 1748,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Energy Surge (Maul Prey)',
    Ability2: 'Entangling Vines (Ferocious Roar)',
    Ability3: 'Life Tap (Heavy Charge)',
    Ability4: 'Shapeshift',
    Ability5: 'Decompose',
    AbilityId1: 14681,
    AbilityId2: 14676,
    AbilityId3: 14683,
    AbilityId4: 14685,
    AbilityId5: 14680,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '40/45/50/55/60',
          description:
            'Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability.\n\nBear Form: Artio slashes twice with her claws, damaging enemies with each swipe. ',
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '25' },
          ],
          rankitems: [
            { description: 'Druid Damage:', value: '80/110/140/170/200 (+35% of your Magical Power)' },
            { description: 'Druid Heal:', value: '60/80/100/120/140 (+20% of your Magical Power)' },
            { description: 'Bear Damage Per Swipe:', value: '40/70/100/130/160 (+30% of your Magical Power)' },
          ],
        },
      },
      Id: 14681,
      Summary: 'Energy Surge (Maul Prey)',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/energy-surge.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '50/55/60/65/70',
          description:
            'Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.\n\nBear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.',
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Druid Area Duration:', value: '4/4.5/5/5.5/6s' },
            { description: 'Druid Power Debuff:', value: '5/7.5/10/12.5/15%' },
            { description: 'Bear Stun Duration:', value: '1/1.1/1.2/1.3/1.4s' },
            { description: 'Bear Self Buff:', value: '10/15/20/25/30 Protections' },
          ],
        },
      },
      Id: 14676,
      Summary: 'Entangling Vines (Ferocious Roar)',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/entangling-vines.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '17s',
          cost: '50/55/60/65/70',
          description:
            'Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s.\n\nBear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '55' },
          ],
          rankitems: [
            { description: 'Druid Damage Per Hit:', value: '15/25/35/45/55 (10% of your Magical Power)' },
            { description: 'Druid Heal Per Hit:', value: '10/15/20/25/30 (+5% of your Magical Power)' },
            { description: 'Druid Slow:', value: '10%' },
            { description: 'Bear Damage:', value: '70/120/170/220/270 (+50% of your Magical Power)' },
            { description: 'Bear Slow:', value: '20/22.5/25/27.5/30%' },
          ],
        },
      },
      Id: 14683,
      Summary: 'Life Tap (Heavy Charge)',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/life-tap.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '1s',
          cost: '0',
          description:
            'Active: Artio Shapeshifts between her Druid stance and Bear stance.\n\nPassive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.\n',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Movement Speed Per Stack', value: '1/1/2/2/3%' },
            { description: 'MP5 Per Stack', value: '2/4/6/8/10' },
          ],
        },
      },
      Id: 14685,
      Summary: 'Shapeshift',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shapeshift.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks. ",
          menuitems: [
            { description: 'Ability:', value: 'Passive' },
            { description: 'Affects:', value: 'Enemy Gods' },
          ],
          rankitems: [
            { description: 'Protections Debuff Per Stack', value: '2% ' },
            { description: 'Max Stacks', value: '8 ' },
            { description: 'Duration:', value: '6s ' },
          ],
        },
      },
      Id: 14680,
      Summary: 'Decompose',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/decompose.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.012,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.9,
    Health: 500,
    HealthPerFive: 8,
    HealthPerLevel: 95,
    Lore: 'Ice melts in cascading waterfalls from jagged mountain peaks, pouring into rivers roaring white to the cold sea. Straightening slowly, like aged men, trees and fauna of the underbrush, now free of snow-weight, reach for the sun. It is spring; the world awakens from darkness and death to grow green again. Her hibernation ends. Coat wet with fresh rain, Artio, Goddess-Bear, roars into the chill morning air.\\n\\nShe is guardian of the cycle. Not the passage of time, but the balance of things. There is no spring without winter, no death without life, no darkness without light, no goodness without evil. Nature declares these opposites into law and Artio is the enforcer.\\n\\nAmong the ursine she runs, sometimes in the shape of a woman, lithe and wild, sometimes as a bear, brown and fierce. Nowhere in the forest do there stand shrines in her name, for Artio is less worshipped and more respected. Perhaps, instead, she looms overhead, a constant presence in the twinkle of the stars, a connection of glistening light; the constellation Ursa Major.\\n\\nAnd now there is war. None could know peace without war, victory without defeat, glory without failure. Artio must join those that fight if only to enforce the cycle of things. Nothing and no one defies the laws of nature like a God.',
    MP5PerLevel: 0.43,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 190,
    MagicalPowerPerLevel: 7.5,
    Mana: 210,
    ManaPerFive: 4.6,
    ManaPerLevel: 39,
    Name: 'Artio',
    OnFreeRotation: '',
    Pantheon: 'Celtic',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 20,
    PhysicalProtectionPerLevel: 3.2,
    Pros: 'High Crowd Control, High Sustain',
    Roles: 'Guardian',
    Speed: 365,
    Title: 'The Bear Goddess',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '12s',
        cost: '40/45/50/55/60',
        description:
          'Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability.\n\nBear Form: Artio slashes twice with her claws, damaging enemies with each swipe. ',
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '25' },
        ],
        rankitems: [
          { description: 'Druid Damage:', value: '80/110/140/170/200 (+35% of your Magical Power)' },
          { description: 'Druid Heal:', value: '60/80/100/120/140 (+20% of your Magical Power)' },
          { description: 'Bear Damage Per Swipe:', value: '40/70/100/130/160 (+30% of your Magical Power)' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15s',
        cost: '50/55/60/65/70',
        description:
          'Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area.\n\nBear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.',
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Druid Area Duration:', value: '4/4.5/5/5.5/6s' },
          { description: 'Druid Power Debuff:', value: '5/7.5/10/12.5/15%' },
          { description: 'Bear Stun Duration:', value: '1/1.1/1.2/1.3/1.4s' },
          { description: 'Bear Self Buff:', value: '10/15/20/25/30 Protections' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '17s',
        cost: '50/55/60/65/70',
        description:
          'Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s.\n\nBear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '55' },
        ],
        rankitems: [
          { description: 'Druid Damage Per Hit:', value: '15/25/35/45/55 (10% of your Magical Power)' },
          { description: 'Druid Heal Per Hit:', value: '10/15/20/25/30 (+5% of your Magical Power)' },
          { description: 'Druid Slow:', value: '10%' },
          { description: 'Bear Damage:', value: '70/120/170/220/270 (+50% of your Magical Power)' },
          { description: 'Bear Slow:', value: '20/22.5/25/27.5/30%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '1s',
        cost: '0',
        description:
          'Active: Artio Shapeshifts between her Druid stance and Bear stance.\n\nPassive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.\n',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Movement Speed Per Stack', value: '1/1/2/2/3%' },
          { description: 'MP5 Per Stack', value: '2/4/6/8/10' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks. ",
        menuitems: [
          { description: 'Ability:', value: 'Passive' },
          { description: 'Affects:', value: 'Enemy Gods' },
        ],
        rankitems: [
          { description: 'Protections Debuff Per Stack', value: '2% ' },
          { description: 'Max Stacks', value: '8 ' },
          { description: 'Duration:', value: '6s ' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '38 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: '1x damage and swing time' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/energy-surge.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/entangling-vines.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/life-tap.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shapeshift.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/decompose.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/artio.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/artio.jpg',
    id: 3336,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Preemptive Strike',
    Ability2: 'Confound',
    Ability3: 'Shield Wall',
    Ability4: 'Defender of Olympus',
    Ability5: 'Reach',
    AbilityId1: 8926,
    AbilityId2: 8891,
    AbilityId3: 8892,
    AbilityId4: 8970,
    AbilityId5: 8961,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '60/70/80/90/100',
          description:
            'Athena powers up for a dash. While dashing, Athena will pass through minions, stop and hit the first enemy god she encounters, dealing damage and slowing all she hits. If she hits an enemy, Athena gains one stack of Block (max 3), absorbing the next Basic Attack from any god that hits her.',
          menuitems: [
            { description: 'Ability:', value: 'Dash' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '80/130/180/230/280 (+50% of your Magical Power)' },
            { description: 'Slow Amount:', value: '25% ' },
            { description: 'Slow Duration:', value: '2.25s' },
          ],
        },
      },
      Id: 8926,
      Summary: 'Preemptive Strike',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/preemptive-strike.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '18s',
          cost: '60/65/70/75/80',
          description:
            'Athena releases a shockwave of power from her shield, Taunting enemy gods, and forcing them to fight or chase her.',
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemy god' },
          ],
          rankitems: [
            { description: 'Taunt Duration:', value: '1.0/1.25/1.5/1.75/2.0s' },
            { description: 'Damage:', value: '40/65/90/115/140 (20% of your Magical Power)' },
          ],
        },
      },
      Id: 8891,
      Summary: 'Confound',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/confound.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '60/65/70/75/80',
          description:
            'Athena summons a group of Athenian warriors who do damage upon arrival, and after 2s strike for additional damage.',
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [
            { description: 'Initial Damage:', value: '70/110/150/190/230 (+50% of your Magical Power)' },
            { description: 'Secondary Damage:', value: '70/135/200/265/330 (+50% of your Magical Power)' },
          ],
        },
      },
      Id: 8892,
      Summary: 'Shield Wall',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shield-wall.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '110s ',
          cost: '80/90/100/110/120',
          description:
            'Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 3.6 seconds later. During that 3.6 seconds, the allied god gains 30% Damage Mitigation. Enemies nearby when Athena lands take damage.',
          menuitems: [
            { description: 'Ability:', value: 'Global' },
            { description: 'Affects:', value: 'Allies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Damage:', value: '350/430/510/590/670 (+90% of your Magical Power)' },
            { description: 'Allied Mitigation:', value: '30%' },
          ],
        },
      },
      Id: 8970,
      Summary: 'Defender of Olympus',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/defender-of-olympus.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            "After using an ability Athena's next Basic Attack is ranged, passes through and hits all enemies, and deals 50% increased damage to the first enemy hit. Reach's damage will trigger Basic Attack Item Effects, but not Ability ones.",
          menuitems: [{ description: 'Ability:', value: 'Passive' }],
          rankitems: [],
        },
      },
      Id: 8961,
      Summary: 'Reach',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/reach.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.012,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.9,
    Health: 500,
    HealthPerFive: 8,
    HealthPerLevel: 100,
    Lore: 'In war, there are two kinds of soldiers: those that fight for blood, and those that fight for honor. The first crave the clash of steel and smell of slaughter, the latter know the wisdom of justice, the kindness of mercy, and that life should never be taken wantonly. These different warriors seek different Gods. Ares, God of War revels in the bloodletting, but his sister, Athena, Goddess of Wisdom, is patron to those who fight with dignity, and only when there is no other alternative.\\n\\nFavored daughter of Zeus, wise as ten thousand scholars, just as the scales themselves; Athena is a paragon of incorruptible virtue, and worshipped with righteous fervor. So revered is she that Athens, greatest city in all the world, is named for her, and regal temples adorn the countryside in her honor, each tended by loyal priestesses. To Athena, a life is a precious thing that need not be wasted in frivolous battle. Bloodthirsty Ares, on the other hand, is reviled by their father and chained by his ravenous subjects.\\n\\nAt the Siege of Troy, Ares disobeyed Zeus and joined with the battle, fighting for the mortal Trojans. Athena rose to stop him, indirectly championing the Greeks, but directly keeping the order of divine law. Their fierce battle clashed in unspeakable proportions, ending only when Ares limped from the battle field, cowed by his sister and rival. With Ares diminished, the tide of the war shifted and the heroes of the Greek Army toppled Troy.\\n\\nIn times of war, prayers are sent to both Gods. Ares, for bloodstained victory, Athena for honor, valor, and the wisdom to fight with dignity. Make no mistake, these are times of war, and Ares has already answered the call to arms. Athena, ever cautious with lives, goes to battle without eagerness, but solemn necessity, for the Goddess of Wisdom knows honor is for the living. The dead have no need of it.',
    MP5PerLevel: 0.42,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 175,
    MagicalPowerPerLevel: 7.5,
    Mana: 190,
    ManaPerFive: 4.6,
    ManaPerLevel: 34,
    Name: 'Athena',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 20,
    PhysicalProtectionPerLevel: 3.2,
    Pros: 'High Crowd Control, High Defense',
    Roles: 'Guardian',
    Speed: 365,
    Title: 'Goddess of Wisdom',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '14s',
        cost: '60/70/80/90/100',
        description:
          'Athena powers up for a dash. While dashing, Athena will pass through minions, stop and hit the first enemy god she encounters, dealing damage and slowing all she hits. If she hits an enemy, Athena gains one stack of Block (max 3), absorbing the next Basic Attack from any god that hits her.',
        menuitems: [
          { description: 'Ability:', value: 'Dash' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '80/130/180/230/280 (+50% of your Magical Power)' },
          { description: 'Slow Amount:', value: '25% ' },
          { description: 'Slow Duration:', value: '2.25s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '18s',
        cost: '60/65/70/75/80',
        description:
          'Athena releases a shockwave of power from her shield, Taunting enemy gods, and forcing them to fight or chase her.',
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemy god' },
        ],
        rankitems: [
          { description: 'Taunt Duration:', value: '1.0/1.25/1.5/1.75/2.0s' },
          { description: 'Damage:', value: '40/65/90/115/140 (20% of your Magical Power)' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '14s',
        cost: '60/65/70/75/80',
        description:
          'Athena summons a group of Athenian warriors who do damage upon arrival, and after 2s strike for additional damage.',
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [
          { description: 'Initial Damage:', value: '70/110/150/190/230 (+50% of your Magical Power)' },
          { description: 'Secondary Damage:', value: '70/135/200/265/330 (+50% of your Magical Power)' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '110s ',
        cost: '80/90/100/110/120',
        description:
          'Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 3.6 seconds later. During that 3.6 seconds, the allied god gains 30% Damage Mitigation. Enemies nearby when Athena lands take damage.',
        menuitems: [
          { description: 'Ability:', value: 'Global' },
          { description: 'Affects:', value: 'Allies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Damage:', value: '350/430/510/590/670 (+90% of your Magical Power)' },
          { description: 'Allied Mitigation:', value: '30%' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          "After using an ability Athena's next Basic Attack is ranged, passes through and hits all enemies, and deals 50% increased damage to the first enemy hit. Reach's damage will trigger Basic Attack Item Effects, but not Ability ones.",
        menuitems: [{ description: 'Ability:', value: 'Passive' }],
        rankitems: [],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '35 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: '1/1/2x damage and swing time, hitting in an AoE on the final blow' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/preemptive-strike.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/confound.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shield-wall.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/defender-of-olympus.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/reach.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/athena.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/athena.jpg',
    id: 1919,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Unburden',
    Ability2: 'Gravity Pull',
    Ability3: 'Kinetic Charge',
    Ability4: 'Gamma-Ray Burst',
    Ability5: 'The Astrolabe',
    AbilityId1: 20944,
    AbilityId2: 20945,
    AbilityId3: 21221,
    AbilityId4: 20947,
    AbilityId5: 20951,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '14/13/12/11/10s',
          cost: '65/70/75/80/85',
          description:
            "Atlas throws his Astrolabe to a target location, damaging and slowing enemies where it lands. While deployed, his Basic Attack will cause an explosion at the target area that damages all enemies and does not trigger item effects. This explosion deals 50% damage to Minions and costs 5 Mana to use. After 5s or when he re-fires this ability, the Astrolabe will return to him. Atlas' second ability changes based on whether his Astrolabe is deployed or held.",
          menuitems: [
            { description: 'Ability:', value: 'Circle' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '50/85/120/155/190 (+40% of your Magical Power)' },
            { description: 'Slow:', value: '20/22.5/25/27.5/30%' },
            { description: 'Slow Duration:', value: '2s' },
            { description: 'Basic Explosion:', value: '23 + 6 Per Level' },
          ],
        },
      },
      Id: 20944,
      Summary: 'Unburden',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/unburden.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '16s',
          cost: '50/55/60/65/70',
          description:
            "Atlas pulls enemies towards his Astrolabe. Enemy gods who are too close get pulled into the Astrolabe. If Atlas is holding the Astrolabe he becomes immune to knockups, and enemies who get pulled into the Astrolabe get held in front of Atlas. After a brief delay, the held targets get launched in the direction Atlas is facing. If Atlas has thrown the Astrolabe, enemies who get pulled into the Astrolabe will get held at the Astrolabe's location before being launched towards Atlas.",
          menuitems: [
            { description: 'Ability:', value: 'Cone/Circle' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Pull Damage:', value: '50/80/110/140/170 (+35% of your Magical Power)' },
            { description: 'Launch Damage:', value: '50/80/110/140/170 (+35% of your Magical Power)' },
          ],
        },
      },
      Id: 20945,
      Summary: 'Gravity Pull',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/gravity-pull.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '16s',
          cost: '60/65/70/75/80',
          description:
            'Atlas charges forward, damaging minions and cleansing himself of slows. Each allied god he charges near will have their burdens removed, cleansing them of any current slows and increasing their movement speed. While Atlas is charging, he is immune to slows and knockups. When Atlas collides with an enemy god he will release accumulated burdens in an explosion, slowing enemies in a 15 unit radius. For every burden accumulated, the slow is increased by 25% up to a maximum of 75%. ',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy/Allies' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '80/135/190/245/300 (+45% of your Magical Power)' },
            { description: 'Movement Speed:', value: '25/27.5/30/32.5/35%' },
            { description: 'Min Slow:', value: '25%' },
            { description: 'Max Slow:', value: '75%' },
          ],
        },
      },
      Id: 21221,
      Summary: 'Kinetic Charge',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/kinetic-charge.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '60/70/80/90/100',
          description:
            "Atlas tears the sky asunder and calls forth a Gamma-Ray Burst. Enemies in this area are hit every 0.5s and gain a stack of Radiation. Radiation can stack up to !{rankprog:5,5,6,6,7}! times and lowers the enemy's Protections and Power. After 5s or upon re-fire the Gamma-Ray Burst will focus in power and begin traveling across the battleground. Enemies hit by this focused ray take heavier damage and gain Focused Radiation, lowering Protections and Power equal to 3 stacks of Radiation.",
          menuitems: [
            { description: 'Ability:', value: 'Circle' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '25/35/45/55/65 (+10% of your Magical Power)' },
            { description: 'Protection Reduction:', value: '5%' },
            { description: 'Power Reduction:', value: '2%' },
            { description: 'Focused Damage:', value: '120/180/240/300/360 (+40% of your Magical Power)' },
          ],
        },
      },
      Id: 20947,
      Summary: 'Gamma-Ray Burst',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/gamma-ray-burst.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'As Atlas takes damage from Gods or when he deals damage with his Basic Attacks or Abilities, he accumulates 1.25 Energy in his Astrolabe. Minions provide 1/10th of the Energy. When he reaches 20 Energy his next Basic Attack has 1.5x damage, 1.5s swing time, and deals bonus damage in an area in front of him. Gods hit are Trembled for 2s while minions are stunned. Atlas can store up to 30 Energy.',
          menuitems: [
            { description: 'Ability:', value: 'Passive' },
            { description: 'Affects:', value: 'Enemies' },
          ],
          rankitems: [{ description: 'Empowered Bonus Damage:', value: '8 * Level' }],
        },
      },
      Id: 20951,
      Summary: 'The Astrolabe',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/the-astrolabe.jpg',
    },
    AttackSpeed: 0.95,
    AttackSpeedPerLevel: 0.011,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.8,
    Health: 510,
    HealthPerFive: 8,
    HealthPerLevel: 100,
    Lore: 'Far to the west, farther than any mortal eye can perceive, stands a lonely figure. Upon his broad shoulders rests the weight of the heavens, and, some say, the totality of existence itself. His name is Atlas, and he is the celestial axis upon which all of creation revolves.\\n\\nBut his burden is not an honorable one, nor a symbol of triumph. Instead, it is a sentence handed down by mighty Zeus and the gods of Olympus, in retribution for Atlas taking up arms against the gods during the Titanomachy – the last great war between god and titan.\\n\\nAtlas, said to be the wisest of the titans, led them into battle against Olympus at the behest of Cronus, greatest of their number. But despite Atlas’ wisdom, and their strength of arms, the titans lost their war, and their freedom with it.\\n\\nThe surviving titans were cast down into Tartarus and bound in the darkness. All save Atlas, who was condemned to stand in the west and uphold the heavens on his back forevermore.\\n\\nThere was a cruel irony in this punishment. Atlas, some whisper, was the first great explorer of the heavens; a celestial cartographer second to none. It was he who gave mankind the wisdom to read the stars, and know the names of the patterns that stretched across the night sky. And now he is condemned to bear the weight of that which he once gloried in.\\n\\nOr at least, he was. But now the world trembles as existence itself threatens to come undone, thanks to the foolishness of the gods. Olympus might have a new king, but their arrogance is undimmed. It is an arrogance that Atlas knows all too well. And as the gods war upon one another once more, he finds himself questioning the nature of his great burden.\\n\\nWhat, he wonders, might happen if he were to simply…set it aside, once and for all?',
    MP5PerLevel: 0.4,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 185,
    MagicalPowerPerLevel: 7.5,
    Mana: 190,
    ManaPerFive: 5,
    ManaPerLevel: 35,
    Name: 'Atlas',
    OnFreeRotation: '',
    Pantheon: 'Greek',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 20,
    PhysicalProtectionPerLevel: 3.2,
    Pros: 'High Crowd Control, High Defense',
    Roles: 'Guardian',
    Speed: 370,
    Title: 'Titan of the Cosmos',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '14/13/12/11/10s',
        cost: '65/70/75/80/85',
        description:
          "Atlas throws his Astrolabe to a target location, damaging and slowing enemies where it lands. While deployed, his Basic Attack will cause an explosion at the target area that damages all enemies and does not trigger item effects. This explosion deals 50% damage to Minions and costs 5 Mana to use. After 5s or when he re-fires this ability, the Astrolabe will return to him. Atlas' second ability changes based on whether his Astrolabe is deployed or held.",
        menuitems: [
          { description: 'Ability:', value: 'Circle' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '50/85/120/155/190 (+40% of your Magical Power)' },
          { description: 'Slow:', value: '20/22.5/25/27.5/30%' },
          { description: 'Slow Duration:', value: '2s' },
          { description: 'Basic Explosion:', value: '23 + 6 Per Level' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '16s',
        cost: '50/55/60/65/70',
        description:
          "Atlas pulls enemies towards his Astrolabe. Enemy gods who are too close get pulled into the Astrolabe. If Atlas is holding the Astrolabe he becomes immune to knockups, and enemies who get pulled into the Astrolabe get held in front of Atlas. After a brief delay, the held targets get launched in the direction Atlas is facing. If Atlas has thrown the Astrolabe, enemies who get pulled into the Astrolabe will get held at the Astrolabe's location before being launched towards Atlas.",
        menuitems: [
          { description: 'Ability:', value: 'Cone/Circle' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Pull Damage:', value: '50/80/110/140/170 (+35% of your Magical Power)' },
          { description: 'Launch Damage:', value: '50/80/110/140/170 (+35% of your Magical Power)' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '16s',
        cost: '60/65/70/75/80',
        description:
          'Atlas charges forward, damaging minions and cleansing himself of slows. Each allied god he charges near will have their burdens removed, cleansing them of any current slows and increasing their movement speed. While Atlas is charging, he is immune to slows and knockups. When Atlas collides with an enemy god he will release accumulated burdens in an explosion, slowing enemies in a 15 unit radius. For every burden accumulated, the slow is increased by 25% up to a maximum of 75%. ',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy/Allies' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '80/135/190/245/300 (+45% of your Magical Power)' },
          { description: 'Movement Speed:', value: '25/27.5/30/32.5/35%' },
          { description: 'Min Slow:', value: '25%' },
          { description: 'Max Slow:', value: '75%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '60/70/80/90/100',
        description:
          "Atlas tears the sky asunder and calls forth a Gamma-Ray Burst. Enemies in this area are hit every 0.5s and gain a stack of Radiation. Radiation can stack up to !{rankprog:5,5,6,6,7}! times and lowers the enemy's Protections and Power. After 5s or upon re-fire the Gamma-Ray Burst will focus in power and begin traveling across the battleground. Enemies hit by this focused ray take heavier damage and gain Focused Radiation, lowering Protections and Power equal to 3 stacks of Radiation.",
        menuitems: [
          { description: 'Ability:', value: 'Circle' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '25/35/45/55/65 (+10% of your Magical Power)' },
          { description: 'Protection Reduction:', value: '5%' },
          { description: 'Power Reduction:', value: '2%' },
          { description: 'Focused Damage:', value: '120/180/240/300/360 (+40% of your Magical Power)' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'As Atlas takes damage from Gods or when he deals damage with his Basic Attacks or Abilities, he accumulates 1.25 Energy in his Astrolabe. Minions provide 1/10th of the Energy. When he reaches 20 Energy his next Basic Attack has 1.5x damage, 1.5s swing time, and deals bonus damage in an area in front of him. Gods hit are Trembled for 2s while minions are stunned. Atlas can store up to 30 Energy.',
        menuitems: [
          { description: 'Ability:', value: 'Passive' },
          { description: 'Affects:', value: 'Enemies' },
        ],
        rankitems: [{ description: 'Empowered Bonus Damage:', value: '8 * Level' }],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '37 + 1.5/Lvl (+20% of Magical Power)' },
          {
            description: 'Progression:',
            value: '1.25/1.25/1.25 damage and swing time, hitting in an AoE on the final blow',
          },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/unburden.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/gravity-pull.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/kinetic-charge.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/gamma-ray-burst.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/the-astrolabe.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/atlas.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/atlas.jpg',
    id: 4034,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Summon Suku',
    Ability2: 'Feather Step',
    Ability3: 'Moonlight Charge',
    Ability4: 'Gravity Surge',
    Ability5: 'Initiative',
    AbilityId1: 10835,
    AbilityId2: 10828,
    AbilityId3: 10922,
    AbilityId4: 10818,
    AbilityId5: 10796,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '30/35/40/45/50',
          description:
            'Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area.\n\nCanceling this ability before leaping will not trigger its Cooldown.',
          menuitems: [
            { description: 'Ability:', value: 'Mount, Leap' },
            { description: 'Affects:', value: 'Self and Enemies' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '55' },
          ],
          rankitems: [
            { description: 'Damage:', value: '80/135/190/245/300 (+80% of your Physical Power)' },
            { description: 'Movement Speed:', value: '25%' },
            { description: 'Strafe cap:', value: '275' },
          ],
        },
      },
      Id: 10835,
      Summary: 'Summon Suku',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/summon-suku.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '8s',
          cost: '60/65/70/75/80',
          description:
            "Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression.\n\nIf the next attack is her third attack, then she also hits all targets in the area around her.",
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Range:', value: '30' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '50/85/120/155/190 (+50% of your Physical Power)' },
            { description: 'Attack Progression Bonus:', value: '1x/ 1.5x/ 2x' },
            { description: 'Root and Cripple Duration:', value: '0.6s' },
          ],
        },
      },
      Id: 10828,
      Summary: 'Feather Step',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/feather-step.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            "Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from the side or behind, enemies are also knocked up into the air.",
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '70' },
          ],
          rankitems: [{ description: 'Damage:', value: '90/140/190/240/290 (+70% of your Physical Power)' }],
        },
      },
      Id: 10922,
      Summary: 'Moonlight Charge',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/moonlight-charge.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90/85/80/75/70s',
          cost: '100',
          description:
            'Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage when they land.\n\nAwilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.',
          menuitems: [
            { description: 'Ability:', value: 'Stim' },
            { description: 'Affects:', value: 'Self and Enemies' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '75' },
          ],
          rankitems: [
            { description: 'Damage:', value: '200/250/300/350/400 (80% of your Physical Power)' },
            { description: 'Attack Speed:', value: '30/40/50/60/70%' },
            { description: 'Physical Power:', value: '20/30/40/50/60' },
          ],
        },
      },
      Id: 10818,
      Summary: 'Gravity Surge',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/gravity-surge.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'If Awilix has not taken or dealt damage in the last 5s and she strikes an enemy first, she increases her Physical Power for a short duration.',
          menuitems: [
            { description: 'Ability:', value: 'Passive' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [{ description: 'Physical Power Increase:', value: '30% for 2.5s' }],
        },
      },
      Id: 10796,
      Summary: 'Initiative',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/initiative.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.019,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.68,
    Health: 475,
    HealthPerFive: 10,
    HealthPerLevel: 77,
    Lore: 'Pale white shines the light from her sentinel high above Earth. She watches, the eye that pierces shadow, and listens with the ears of birds and beasts that use the darkness to hunt and revel. As Queen of the Night, she is known; the Goddess of the Moon, Awilix.\\n\\nThey say the sun is her lover, and from his light does she shine, but those that say so have never beheld her. Left unrestrained, the sun burns skin, scorches the land, blinds the eyes. Moonlight does no such thing. Like soft white petals it blankets the night, casting the world into mystical illumination. Never has it brought calamity or ruin, only the chance to see where once there was none. She is no different. Her mysterious radiance needs no other to shine.\\n\\nThese days, the night is less welcoming. Those loyal followers, the jaguars, whose whispered roars bellow into the silence of her domain, prowl at her command. While it is, no doubt, beyond the understanding of mortals, the very moonlight is threatened. A war unlike any before it would end all things. For once that pale white will glimmer on the ugliness of bloodshed, for the night belongs to Awilix.',
    MP5PerLevel: 0.46,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 240,
    ManaPerFive: 3.9,
    ManaPerLevel: 38,
    Name: 'Awilix',
    OnFreeRotation: '',
    Pantheon: 'Maya',
    PhysicalPower: 38,
    PhysicalPowerPerLevel: 2.16,
    PhysicalProtection: 13,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Single Target Damage, High Mobility',
    Roles: 'Assassin',
    Speed: 370,
    Title: 'Goddess of the Moon',
    Type: 'Melee, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '15s',
        cost: '30/35/40/45/50',
        description:
          'Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area.\n\nCanceling this ability before leaping will not trigger its Cooldown.',
        menuitems: [
          { description: 'Ability:', value: 'Mount, Leap' },
          { description: 'Affects:', value: 'Self and Enemies' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '55' },
        ],
        rankitems: [
          { description: 'Damage:', value: '80/135/190/245/300 (+80% of your Physical Power)' },
          { description: 'Movement Speed:', value: '25%' },
          { description: 'Strafe cap:', value: '275' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '8s',
        cost: '60/65/70/75/80',
        description:
          "Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression.\n\nIf the next attack is her third attack, then she also hits all targets in the area around her.",
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Range:', value: '30' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '50/85/120/155/190 (+50% of your Physical Power)' },
          { description: 'Attack Progression Bonus:', value: '1x/ 1.5x/ 2x' },
          { description: 'Root and Cripple Duration:', value: '0.6s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          "Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from the side or behind, enemies are also knocked up into the air.",
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '70' },
        ],
        rankitems: [{ description: 'Damage:', value: '90/140/190/240/290 (+70% of your Physical Power)' }],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90/85/80/75/70s',
        cost: '100',
        description:
          'Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage when they land.\n\nAwilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.',
        menuitems: [
          { description: 'Ability:', value: 'Stim' },
          { description: 'Affects:', value: 'Self and Enemies' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '75' },
        ],
        rankitems: [
          { description: 'Damage:', value: '200/250/300/350/400 (80% of your Physical Power)' },
          { description: 'Attack Speed:', value: '30/40/50/60/70%' },
          { description: 'Physical Power:', value: '20/30/40/50/60' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'If Awilix has not taken or dealt damage in the last 5s and she strikes an enemy first, she increases her Physical Power for a short duration.',
        menuitems: [
          { description: 'Ability:', value: 'Passive' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [{ description: 'Physical Power Increase:', value: '30% for 2.5s' }],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '38 + 2.16/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: '1/0.75/1.25x damage. Range of 16' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/summon-suku.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/feather-step.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/moonlight-charge.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/gravity-surge.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/initiative.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/awilix.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/awilix.jpg',
    id: 2037,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Wild Witchcraft',
    Ability2: "Baba's Brew",
    Ability3: 'Blast Off!',
    Ability4: 'Home Sweet Home',
    Ability5: 'Creeping Cabin',
    AbilityId1: 18293,
    AbilityId2: 18295,
    AbilityId3: 18296,
    AbilityId4: 18297,
    AbilityId5: 18434,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '70/75/80/85/90',
          description:
            'Baba Yaga throws forward magic imbued with chaotic qualities. The magic will travel in the path of a random shape (Left Corner, Right Corner, Split, or Oval) and leave behind a random magical field on the ground it flew over for 4s. The fields can boost friendly Protections, boost friendly Movement Speed, lower enemy Movement Speed, or Silence enemies.',
          menuitems: [
            { description: 'Ability:', value: 'Random' },
            { description: 'Affects:', value: 'Enemy/Ally' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Width:', value: '5' },
          ],
          rankitems: [
            { description: 'Damage:', value: '100/150/200/250/300 (+70% of your Magical Power)' },
            { description: 'Protections:', value: '15/20/25/30/35 for 1s' },
            { description: 'Movement Speed:', value: '20/22.5/25/27.5/30% for 1s' },
            { description: 'Slow:', value: '20/22.5/25/27.5/30% for 1s' },
          ],
        },
      },
      Id: 18293,
      Summary: 'Wild Witchcraft',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/wild-witchcraft.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '60/65/70/75/80',
          description:
            "Baba Yaga throws together random ingredients to brew a Potion. Each Eye of Newt increases the Potion's Damage by 7.5%. Each Dragon Scale adds a 12.5% slow to enemies hit for 2.5s. Each Wolf Tooth adds a 7.5% Attack Speed slow and Power reduction to enemies hit for 5s. Baba Yaga can store a single Potion in her consumable slot refiring/canceling this ability. She can pull it out at any time to throw it.",
          menuitems: [
            { description: 'Ability:', value: 'Circle' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [
            { description: 'Damage:', value: '95/130/165/200/235 (+70% of your Magical Power)' },
            { description: 'Ingredient Count:', value: '3/3/4/4/5' },
          ],
        },
      },
      Id: 18295,
      Summary: "Baba's Brew",
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/babas-brew.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '60/65/70/75/80',
          description:
            'Baba Yaga crawls inside her Mortar for protection. While inside the mortar she gains Damage Mitigation, Knockup Protection, and begins to build up explosive magic. After 1s the magic explodes, launching Baba Yaga and her Mortar in the direction she is facing. Enemies near the Mortar when it explodes take damage.',
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '45' },
          ],
          rankitems: [
            { description: 'Damage:', value: '80/125/170/215/260 (+85% of your Magical Power)' },
            { description: 'Damage Mitigation:', value: '25/27.5/30/32.5/35%' },
          ],
        },
      },
      Id: 18296,
      Summary: 'Blast Off!',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/blast-off.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '60/65/70/75/80',
          description:
            'Baba Yaga calls down her Cabin, causing it to crash onto her and launch nearby enemies away. Baba Yaga commands the cabin for up to 8s, using it as a protective shield to create and throw 4 Witchfire Bolts from the inside. When the thrown Witchfire lands, it explodes dealing damage to enemies in the area while leaving behind a creeping patch of fire that chases nearby enemies. Enemies caught in the creeping fire take burn damage every 0.4s.',
          menuitems: [
            { description: 'Ability:', value: 'Circle' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '65' },
          ],
          rankitems: [
            { description: 'Landing Damage:', value: '100/145/190/235/280 (50% of your Magical Power)' },
            { description: 'Burst Damage:', value: '75/105/135/165/195 (+30% of your Magical Power)' },
            { description: 'Burn Damage:', value: '12/17/22/27/32 (+10% of your Magical Power)' },
            { description: 'Shield Health:', value: '160/230/300/370/440 (+25% of your Magical Power)' },
          ],
        },
      },
      Id: 18297,
      Summary: 'Home Sweet Home',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/home-sweet-home.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            "Baba Yaga's Cabin accumulates up to 100 essence over time, when it moves, and if enemy gods get too close. Baba Yaga can approach the Cabin and use this essence to gain evolving item stacks. Items with a low stack count take more energy. If Baba Yaga has no stacking item this essence heals Baba Yaga for 0.8% max health per tick.",
          menuitems: [{ description: 'Ability:', value: 'Passive' }],
          rankitems: [
            { description: 'Item Stack Cost:', value: '400 / Item Max Stacks' },
            { description: 'Heal Cost:', value: '4' },
          ],
        },
      },
      Id: 18434,
      Summary: 'Creeping Cabin',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/creeping-cabin.jpg',
    },
    AttackSpeed: 0.95,
    AttackSpeedPerLevel: 0.01,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.5,
    Health: 400,
    HealthPerFive: 8,
    HealthPerLevel: 73,
    Lore: 'It is an old story. Perhaps the oldest story there is. In the dark woods, there is a witch called Baba Yaga. Sometimes she is a mother. Sometimes she is a daughter. Sometimes she is cruel and sometimes, kind. But always, Baba Yaga is cunning. And there is always a price to pay for dealing with her, if you are brave enough – or desperate enough – to seek her out.\\n\\nIt is said that Baba Yaga waits for travellers in her house atop its gnarled chicken legs, behind a fence made of human bones. If you are brave enough to pass through the fence and enter the house you will see her stretched out across the interior, looming over her stove, or reaching out from one corner to another. Or, if you are in the woods late at night, you might see her flying overhead in her mortar and pestle and the hear the thunderous tramp of the chicken-legged house as it pursues its mistress.\\n\\nRegardless, she is an ugly creature with a long nose and cruel, iron teeth, and her eyes gleam with malice. But despite her inherent malevolence, she does not interfere with others without first being approached – or provoked. If you are foolish enough to seek her, she might well punish you for your effrontery before aiding you, or aid you and then tear you to pieces because it amuses her to do so. And sometimes, very rarely, she helps without harm.\\n\\nBut only when it suits her to do so.\\n\\nNow, as the world shudders on its axis and new horrors rise, Baba Yaga stirs in her long isolation. The gods have ignored her warnings for long enough, and if they will not ask for her help willingly, she will find a way to force them to do so…',
    MP5PerLevel: 0.6,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 175,
    MagicalPowerPerLevel: 7.5,
    Mana: 280,
    ManaPerFive: 5,
    ManaPerLevel: 50,
    Name: 'Baba Yaga',
    OnFreeRotation: '',
    Pantheon: 'Slavic',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 11,
    PhysicalProtectionPerLevel: 2.7,
    Pros: 'High Area Damage',
    Roles: 'Mage',
    Speed: 365,
    Title: 'Witch of the Woods',
    Type: 'Ranged, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '12s',
        cost: '70/75/80/85/90',
        description:
          'Baba Yaga throws forward magic imbued with chaotic qualities. The magic will travel in the path of a random shape (Left Corner, Right Corner, Split, or Oval) and leave behind a random magical field on the ground it flew over for 4s. The fields can boost friendly Protections, boost friendly Movement Speed, lower enemy Movement Speed, or Silence enemies.',
        menuitems: [
          { description: 'Ability:', value: 'Random' },
          { description: 'Affects:', value: 'Enemy/Ally' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Width:', value: '5' },
        ],
        rankitems: [
          { description: 'Damage:', value: '100/150/200/250/300 (+70% of your Magical Power)' },
          { description: 'Protections:', value: '15/20/25/30/35 for 1s' },
          { description: 'Movement Speed:', value: '20/22.5/25/27.5/30% for 1s' },
          { description: 'Slow:', value: '20/22.5/25/27.5/30% for 1s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '14s',
        cost: '60/65/70/75/80',
        description:
          "Baba Yaga throws together random ingredients to brew a Potion. Each Eye of Newt increases the Potion's Damage by 7.5%. Each Dragon Scale adds a 12.5% slow to enemies hit for 2.5s. Each Wolf Tooth adds a 7.5% Attack Speed slow and Power reduction to enemies hit for 5s. Baba Yaga can store a single Potion in her consumable slot refiring/canceling this ability. She can pull it out at any time to throw it.",
        menuitems: [
          { description: 'Ability:', value: 'Circle' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [
          { description: 'Damage:', value: '95/130/165/200/235 (+70% of your Magical Power)' },
          { description: 'Ingredient Count:', value: '3/3/4/4/5' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '14s',
        cost: '60/65/70/75/80',
        description:
          'Baba Yaga crawls inside her Mortar for protection. While inside the mortar she gains Damage Mitigation, Knockup Protection, and begins to build up explosive magic. After 1s the magic explodes, launching Baba Yaga and her Mortar in the direction she is facing. Enemies near the Mortar when it explodes take damage.',
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '45' },
        ],
        rankitems: [
          { description: 'Damage:', value: '80/125/170/215/260 (+85% of your Magical Power)' },
          { description: 'Damage Mitigation:', value: '25/27.5/30/32.5/35%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '60/65/70/75/80',
        description:
          'Baba Yaga calls down her Cabin, causing it to crash onto her and launch nearby enemies away. Baba Yaga commands the cabin for up to 8s, using it as a protective shield to create and throw 4 Witchfire Bolts from the inside. When the thrown Witchfire lands, it explodes dealing damage to enemies in the area while leaving behind a creeping patch of fire that chases nearby enemies. Enemies caught in the creeping fire take burn damage every 0.4s.',
        menuitems: [
          { description: 'Ability:', value: 'Circle' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '65' },
        ],
        rankitems: [
          { description: 'Landing Damage:', value: '100/145/190/235/280 (50% of your Magical Power)' },
          { description: 'Burst Damage:', value: '75/105/135/165/195 (+30% of your Magical Power)' },
          { description: 'Burn Damage:', value: '12/17/22/27/32 (+10% of your Magical Power)' },
          { description: 'Shield Health:', value: '160/230/300/370/440 (+25% of your Magical Power)' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          "Baba Yaga's Cabin accumulates up to 100 essence over time, when it moves, and if enemy gods get too close. Baba Yaga can approach the Cabin and use this essence to gain evolving item stacks. Items with a low stack count take more energy. If Baba Yaga has no stacking item this essence heals Baba Yaga for 0.8% max health per tick.",
        menuitems: [{ description: 'Ability:', value: 'Passive' }],
        rankitems: [
          { description: 'Item Stack Cost:', value: '400 / Item Max Stacks' },
          { description: 'Heal Cost:', value: '4' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '33 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/wild-witchcraft.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/babas-brew.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/blast-off.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/home-sweet-home.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/creeping-cabin.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/baba-yaga.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/baba-yaga.jpg',
    id: 3925,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Chug',
    Ability2: 'Belly Flop',
    Ability3: 'Belch of the Gods',
    Ability4: 'Intoxicate',
    Ability5: 'Drunk-O-Meter',
    AbilityId1: 8447,
    AbilityId2: 8449,
    AbilityId3: 8483,
    AbilityId4: 8491,
    AbilityId5: 8463,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '8s',
          cost: '20',
          description: 'Bacchus takes a drink from his jug, giving him additional Buffs.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Drunk-O-Meter:', value: '40%' },
            { description: 'Protections:', value: '0/15/20/25/30/35' },
            { description: 'Magical Power:', value: '0/7/14/21/28/35' },
            { description: 'Duration:', value: '6s' },
          ],
        },
      },
      Id: 8447,
      Summary: 'Chug',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/chug.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '16/15.5/15/14.5/14s',
          cost: '70/75/80/85/90',
          description:
            'Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.',
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [
            { description: 'Damage:', value: '90/130/170/210/250 (+70% of your Magical Power)' },
            { description: 'Slow:', value: '20%' },
            { description: 'Slow Duration:', value: '2s' },
          ],
        },
      },
      Id: 8449,
      Summary: 'Belly Flop',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/belly-flop.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '70/75/80/85/90',
          description:
            'Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.',
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '30/45/60/75/90 (+15% of your Magical Power)' },
            { description: 'Stun:', value: '1s' },
            { description: 'Healing Reduction:', value: '50%' },
            { description: 'Healing Reduction Duration:', value: '4s' },
          ],
        },
      },
      Id: 8483,
      Summary: 'Belch of the Gods',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/belch-of-the-gods.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90s',
          cost: '95',
          description:
            'Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!',
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '30' },
          ],
          rankitems: [
            { description: 'Damage:', value: '250/325/400/475/550 (+70% of your Magical Power)' },
            { description: 'Intoxication Debuff Duration:', value: '6s' },
            { description: 'Magical Power Buff:', value: '20/30/40/50/60' },
            { description: 'Buff Duration:', value: '5s' },
          ],
        },
      },
      Id: 8491,
      Summary: 'Intoxicate',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/intoxicate.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining Buffs when he gets Tipsy and Smashed. Bacchus also celebrates when he kills an enemy god, giving him 10% on his meter.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Tipsy:', value: 'Gain 10 Magical Power and 5% Damage Mitigation' },
            { description: 'Smashed:', value: 'Gain 30 Magical Power and 10% Damage Mitigation' },
          ],
        },
      },
      Id: 8463,
      Summary: 'Drunk-O-Meter',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/drunk-o-meter.jpg',
    },
    AttackSpeed: 0.88,
    AttackSpeedPerLevel: 0.009,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.8,
    Health: 495,
    HealthPerFive: 8,
    HealthPerLevel: 86,
    Lore: 'Eat, drink, and be merry, for tomorrow you may die. None adhere more vigorously to this creed than Bacchus, the Roman God of Wine, lewd behavior, and madness.\\n\\nAfter spending much of his formative years with his impressively intoxicated mentor Solinus, whom Bacchus loves like a father, the God of Wine is now a wanderer and teacher. He’s journeyed across all of Asia, through India, and finally back to Rome, spreading the “Mysteries of the Vine,” a ritual involving incredible amounts of wine to lower inhibitions, freeing one from social constraints, oppression of gender, sexual taboos, and the stresses of life. Quite the successful ritual, if ever there was one.\\n\\nMuch of this ritual seems to have come from Solinus, who is widely known to have vast, secret knowledge and the ability to predict the future, though only while completely drunk. The king Midas, covetous of this knowledge, captured Solinus, endeavoring to extract it by providing the scholar the finest food, drink, and entertainment he could muster. Bacchus finally tracked down his mentor in the court of Midas and discovered him well fed and cared for. Quickly, Midas lied, claiming Solinus had been lost and the king had taken him in. Seeing through the ruse, Bacchus offered the monarch a boon. Midas asked that anything he touched be turned to gold. Without hesitation, Bacchus granted this. He tested his new gift on a twig and stone and found them turned completely to gold. Elated, Midas called a feast, but found his food turned to gold in his hands and his daughter solidified at his touch. Starving and crazed, Midas begged Bacchus to remove the “gift.” Bacchus acquiesced, allowing the greedy king to wash his hands in the Pactolus river. As the golden touch left his hands, the river sands transformed to glittering gold.\\n\\nOf course, the product of continuous overindulgence in alcohol and deviant behavior, Bacchus could simply be insane.',
    MP5PerLevel: 0.4,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 185,
    MagicalPowerPerLevel: 7.5,
    Mana: 200,
    ManaPerFive: 4.8,
    ManaPerLevel: 40,
    Name: 'Bacchus',
    OnFreeRotation: '',
    Pantheon: 'Roman',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 19,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Crowd Control, High Defense',
    Roles: 'Guardian',
    Speed: 365,
    Title: 'God of Wine',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '8s',
        cost: '20',
        description: 'Bacchus takes a drink from his jug, giving him additional Buffs.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Drunk-O-Meter:', value: '40%' },
          { description: 'Protections:', value: '0/15/20/25/30/35' },
          { description: 'Magical Power:', value: '0/7/14/21/28/35' },
          { description: 'Duration:', value: '6s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '16/15.5/15/14.5/14s',
        cost: '70/75/80/85/90',
        description:
          'Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.',
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [
          { description: 'Damage:', value: '90/130/170/210/250 (+70% of your Magical Power)' },
          { description: 'Slow:', value: '20%' },
          { description: 'Slow Duration:', value: '2s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '14s',
        cost: '70/75/80/85/90',
        description:
          'Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.',
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '30/45/60/75/90 (+15% of your Magical Power)' },
          { description: 'Stun:', value: '1s' },
          { description: 'Healing Reduction:', value: '50%' },
          { description: 'Healing Reduction Duration:', value: '4s' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90s',
        cost: '95',
        description:
          'Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!',
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '30' },
        ],
        rankitems: [
          { description: 'Damage:', value: '250/325/400/475/550 (+70% of your Magical Power)' },
          { description: 'Intoxication Debuff Duration:', value: '6s' },
          { description: 'Magical Power Buff:', value: '20/30/40/50/60' },
          { description: 'Buff Duration:', value: '5s' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining Buffs when he gets Tipsy and Smashed. Bacchus also celebrates when he kills an enemy god, giving him 10% on his meter.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Tipsy:', value: 'Gain 10 Magical Power and 5% Damage Mitigation' },
          { description: 'Smashed:', value: 'Gain 30 Magical Power and 10% Damage Mitigation' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '37 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/chug.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/belly-flop.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/belch-of-the-gods.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/intoxicate.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/drunk-o-meter.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/bacchus.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/bacchus.jpg',
    id: 1809,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Take Down',
    Ability2: 'Eat Minion',
    Ability3: 'Butcher Blades',
    Ability4: 'Regurgitate',
    Ability5: 'Insatiable Hunger',
    AbilityId1: 8178,
    AbilityId2: 8180,
    AbilityId3: 8184,
    AbilityId4: 8190,
    AbilityId5: 8176,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            'Bakasura leaps to his ground target location, dealing damage to all enemies in the area and increases the damage they take from all sources by 10% for 3s.',
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '15' },
          ],
          rankitems: [
            { description: 'Damage:', value: '100/160/220/280/340 (+60% of your Physical Power)' },
            { description: 'Damage Taken Increase:', value: '10%' },
            { description: 'Duration:', value: '3s' },
          ],
        },
      },
      Id: 8178,
      Summary: 'Take Down',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/take-down.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '40',
          description:
            'Bakasura grabs a minion and devours it, healing himself, restoring Mana, reducing His 1st and 3rd ability cooldowns, and gaining a Protections Buff. Large Jungle monsters must be at 33% Health to be eaten, but will provide 2 minions toward Regurgitate. Up to 6 minions can be stored for Regurgitate.',
          menuitems: [
            { description: 'Ability:', value: 'Melee Target' },
            { description: 'Affects:', value: 'Enemy Minion' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Heal:', value: '70/120/170/220/270 (+70% of your Physical Power)' },
            { description: 'Mana Restore:', value: '60/65/70/75/80' },
            { description: 'Cooldown Decrease:', value: '1/1.25/1.5/1.75/2' },
            { description: 'Protections:', value: '10/15/20/25/30' },
            { description: 'Protections Duration:', value: '10s' },
          ],
        },
      },
      Id: 8180,
      Summary: 'Eat Minion',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/eat-minion.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            'Bakasura passively gains Physical Power. When activated, he gains additional true damage on each strike for the duration.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
            { description: 'Damage:', value: 'True' },
          ],
          rankitems: [
            { description: 'Passive Physical Power:', value: '10/15/20/25/30' },
            { description: 'True Damage:', value: '10/25/40/55/70' },
            { description: 'Duration:', value: '6s' },
          ],
        },
      },
      Id: 8184,
      Summary: 'Butcher Blades',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/butcher-blades.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90/85/80/75/70s',
          cost: '80/90/100/110/120',
          description:
            "Bakasura regurgitates all of the minions consumed by his Eat Minion ability at his ground target location that Slows for 3s and Cripples enemy players. This area lasts for 6s. Bakasura's Basic Attacks become cone attacks and he is immune to Crowd Control for a short duration. Bakasura is able to use Eat Minion on his regurgitated minions.",
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Radius:', value: '25' },
          ],
          rankitems: [
            { description: 'Slow:', value: '20/25/30/35/40%' },
            { description: 'Slow Duration:', value: '3s' },
            { description: 'Cone Attack Duration:', value: '6s' },
            { description: 'CC Immunity Duration:', value: '1.5s' },
            { description: 'Minion Damage:', value: '17 (+15% of your Physical Power)' },
          ],
        },
      },
      Id: 8190,
      Summary: 'Regurgitate',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/regurgitate.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description: "Bakasura's attack and movement speed temporarily increases for each enemy that he kills.",
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Attack Speed per Stack:', value: '7%' },
            { description: 'Movement Speed per Stack:', value: '5%' },
            { description: 'Buff Duration:', value: '10s' },
            { description: 'Max Stacks:', value: '3' },
          ],
        },
      },
      Id: 8176,
      Summary: 'Insatiable Hunger',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/insatiable-hunger.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.016,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.68,
    Health: 455,
    HealthPerFive: 9,
    HealthPerLevel: 78,
    Lore: 'A horrendous demon with a bottomless appetite for human flesh, Bakasura is a nightmare come to life.\\n\\nAfter committing countless atrocities, Bakasura has demonstrated no end to his depravity, no limits to his brutality, no sating his desire to slurp human meat, crunch bone, and guzzle hot blood. So many are his vile victories over mankind that they cannot be relayed here, yet it his defeat at the hands of a man that is worth the telling.\\n\\nAccording to the Hindu epic, the Mahabharata, the famous Pandava brothers were traveling in exile with their mother, Kunti, when they came to the village Ekachakra. Disguised as brahmins, they sought alms from the villagers in order to sustain themselves. They soon learned that a demon, Bakasura, was living outside the village, devouring the people as they passed through the woods. The chief went to the demon and begged that the feasting stop. In return, a cart of food would be sent to Bakasura each day. Bakasura consumed not only the provisions, but the person that brought the cart as well.\\n\\nAfter hearing this tale from a weeping woman whose son would bear the cart on the morrow, Kunti declared that her son Bhima, who possessed impossible strength and had slain demons before, would take the cart instead, as repayment to the kindness the villagers had shown their family.\\n\\nOnce in the forest, Bhima nonchalantly ate the food intended for Bakasura. Furious, Bakasura threatened to eat Bhima, which he just laughed off, goading the demon to attack him. All day they battled until Bhima finally slew the demon, tied him to the cart and dragged the body back to the village, where the people celebrated the victory in bewilderment.\\n\\nHunger, however, is a demon that cannot be defeated and, inevitably, Bakasura’s disgusting rumble will rise again, now more ravenous than ever and ready to feed.',
    MP5PerLevel: 0.46,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 200,
    ManaPerFive: 4.8,
    ManaPerLevel: 39,
    Name: 'Bakasura',
    OnFreeRotation: '',
    Pantheon: 'Hindu',
    PhysicalPower: 38,
    PhysicalPowerPerLevel: 2.2,
    PhysicalProtection: 13,
    PhysicalProtectionPerLevel: 2.8,
    Pros: 'High Single Target Damage',
    Roles: 'Assassin',
    Speed: 370,
    Title: 'the Great Devourer',
    Type: 'Melee, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          'Bakasura leaps to his ground target location, dealing damage to all enemies in the area and increases the damage they take from all sources by 10% for 3s.',
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '15' },
        ],
        rankitems: [
          { description: 'Damage:', value: '100/160/220/280/340 (+60% of your Physical Power)' },
          { description: 'Damage Taken Increase:', value: '10%' },
          { description: 'Duration:', value: '3s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15s',
        cost: '40',
        description:
          'Bakasura grabs a minion and devours it, healing himself, restoring Mana, reducing His 1st and 3rd ability cooldowns, and gaining a Protections Buff. Large Jungle monsters must be at 33% Health to be eaten, but will provide 2 minions toward Regurgitate. Up to 6 minions can be stored for Regurgitate.',
        menuitems: [
          { description: 'Ability:', value: 'Melee Target' },
          { description: 'Affects:', value: 'Enemy Minion' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Heal:', value: '70/120/170/220/270 (+70% of your Physical Power)' },
          { description: 'Mana Restore:', value: '60/65/70/75/80' },
          { description: 'Cooldown Decrease:', value: '1/1.25/1.5/1.75/2' },
          { description: 'Protections:', value: '10/15/20/25/30' },
          { description: 'Protections Duration:', value: '10s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          'Bakasura passively gains Physical Power. When activated, he gains additional true damage on each strike for the duration.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
          { description: 'Damage:', value: 'True' },
        ],
        rankitems: [
          { description: 'Passive Physical Power:', value: '10/15/20/25/30' },
          { description: 'True Damage:', value: '10/25/40/55/70' },
          { description: 'Duration:', value: '6s' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90/85/80/75/70s',
        cost: '80/90/100/110/120',
        description:
          "Bakasura regurgitates all of the minions consumed by his Eat Minion ability at his ground target location that Slows for 3s and Cripples enemy players. This area lasts for 6s. Bakasura's Basic Attacks become cone attacks and he is immune to Crowd Control for a short duration. Bakasura is able to use Eat Minion on his regurgitated minions.",
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Radius:', value: '25' },
        ],
        rankitems: [
          { description: 'Slow:', value: '20/25/30/35/40%' },
          { description: 'Slow Duration:', value: '3s' },
          { description: 'Cone Attack Duration:', value: '6s' },
          { description: 'CC Immunity Duration:', value: '1.5s' },
          { description: 'Minion Damage:', value: '17 (+15% of your Physical Power)' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: "Bakasura's attack and movement speed temporarily increases for each enemy that he kills.",
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Attack Speed per Stack:', value: '7%' },
          { description: 'Movement Speed per Stack:', value: '5%' },
          { description: 'Buff Duration:', value: '10s' },
          { description: 'Max Stacks:', value: '3' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '38 + 2.2/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/take-down.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/eat-minion.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/butcher-blades.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/regurgitate.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/insatiable-hunger.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/bakasura.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/bakasura.jpg',
    id: 1755,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Noxious Fumes',
    Ability2: 'Flame Wave',
    Ability3: 'Path of Flames',
    Ability4: 'Rain Fire',
    Ability5: 'Combustion',
    AbilityId1: 7812,
    AbilityId2: 7811,
    AbilityId3: 7818,
    AbilityId4: 7824,
    AbilityId5: 7822,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '10/20/30/40/50 (+5% of your Magical Power)' },
            { description: 'Explosion Damage:', value: '20/40/60/80/100 (20% of your Magical Power)' },
            { description: 'Fumes Duration:', value: '10s' },
            { description: 'Stun Duration:', value: '1s' },
          ],
        },
      },
      Id: 7812,
      Summary: 'Noxious Fumes',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/noxious-fumes.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '15/14/13/12/11s',
          cost: '60/65/70/75/80',
          description:
            'Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [{ description: 'Damage:', value: '90/140/190/240/290 (+65% of your Magical Power)' }],
        },
      },
      Id: 7811,
      Summary: 'Flame Wave',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/flame-wave.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '15s',
          cost: '70/75/80/85/90',
          description:
            'Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.',
          menuitems: [
            { description: 'Ability:', value: 'Dash' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '20/30/40/50/60 (+15% of your Magical Power)' },
            { description: 'Path Duration:', value: '3s' },
          ],
        },
      },
      Id: 7818,
      Summary: 'Path of Flames',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/path-of-flames.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: 'Dependent on Halos',
          cost: '10',
          description:
            'Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Damage:', value: '140/180/220/260/300 (+70% of your Magical Power)' },
            { description: 'Max Halos:', value: '3' },
          ],
        },
      },
      Id: 7824,
      Summary: 'Rain Fire',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/rain-fire.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s.",
          menuitems: [
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [{ description: 'Damage per Tick:', value: '5 (+10% of your Magical Power)' }],
        },
      },
      Id: 7822,
      Summary: 'Combustion',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/combustion.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.012,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.47,
    Health: 360,
    HealthPerFive: 7,
    HealthPerLevel: 71,
    Lore: 'There are few elements as destructive or as purifying as fire. Agni, God of Fire, is the embodiment of both of these qualities, with a head for each.\\n\\nThough the source of his origin warrants debate - for there are many tales of his parentage ranging from two simple sticks rubbed together, to the cosmic energy that made all things at the beginning of time - Agni is a pivotal and important God with many duties to the Pantheon. He is the twin brother to Indra, God of the Heavens and Rains and chief among warriors. Conversely, Agni is chief among priests, acting as messenger between mortals and Gods. Every Hindu ritual and prayer is performed in front of a fire of some kind, so Agni carries the words and sacrifices, traveling between the Earth and the Heavens. He is welcome in every home and every hearth and much beloved by the Faithful.\\n\\nThrough his flames, Agni provides heat and light, but also cleanses impurities. Smoke from his pyres create the air and hold the Heavens aloft. The sun, a source of fire itself, brings life-giving energy to the world, and his lightning streaks the sky during storms.\\n\\nFor all his kindness and service, Agni has two faces. One is the face of kindness and purity, turned towards the people and Gods. His other face, grim and resolute, guides the God of Fire, to play his role in the cosmic cycle of creation and destruction, to burn and blacken all the atrocities of the world to ash.',
    MP5PerLevel: 0.37,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 170,
    MagicalPowerPerLevel: 7.5,
    Mana: 255,
    ManaPerFive: 4.7,
    ManaPerLevel: 45,
    Name: 'Agni',
    OnFreeRotation: '',
    Pantheon: 'Hindu',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 11,
    PhysicalProtectionPerLevel: 2.6,
    Pros: 'High Area Damage',
    Roles: 'Mage',
    Speed: 355,
    Title: 'God of Fire',
    Type: 'Ranged, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '10/20/30/40/50 (+5% of your Magical Power)' },
          { description: 'Explosion Damage:', value: '20/40/60/80/100 (20% of your Magical Power)' },
          { description: 'Fumes Duration:', value: '10s' },
          { description: 'Stun Duration:', value: '1s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '15/14/13/12/11s',
        cost: '60/65/70/75/80',
        description:
          'Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [{ description: 'Damage:', value: '90/140/190/240/290 (+65% of your Magical Power)' }],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '15s',
        cost: '70/75/80/85/90',
        description:
          'Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.',
        menuitems: [
          { description: 'Ability:', value: 'Dash' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '20/30/40/50/60 (+15% of your Magical Power)' },
          { description: 'Path Duration:', value: '3s' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: 'Dependent on Halos',
        cost: '10',
        description:
          'Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Damage:', value: '140/180/220/260/300 (+70% of your Magical Power)' },
          { description: 'Max Halos:', value: '3' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s.",
        menuitems: [
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [{ description: 'Damage per Tick:', value: '5 (+10% of your Magical Power)' }],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '34 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/noxious-fumes.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/flame-wave.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/path-of-flames.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/rain-fire.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/combustion.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/agni.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/agni.jpg',
    id: 1737,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Pounce',
    Ability2: 'Razor Whip',
    Ability3: 'Ensnaring Claw',
    Ability4: 'Huntress of Bast',
    Ability5: 'Nightstalker',
    AbilityId1: 18286,
    AbilityId2: 18258,
    AbilityId3: 18299,
    AbilityId4: 20192,
    AbilityId5: 20633,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            'Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state.',
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [{ description: 'Damage:', value: '80/135/190/245/300 (+90% of your Physical Power)' }],
        },
      },
      Id: 18286,
      Summary: 'Pounce',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/pounce.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '11s',
          cost: '40/45/50/55/60',
          description:
            'Bastet swipes at her enemies, causing them to Bleed for damage every 0.66 seconds for the duration.',
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '30/50/70/90/110 (20% of your Physical Power)' },
            { description: 'Duration:', value: '2s' },
          ],
        },
      },
      Id: 18258,
      Summary: 'Razor Whip',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/razor-whip.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '12s',
          cost: '60/65/70/75/80',
          description:
            'Bastet sends a cat forward at her enemies. If a cat finds an enemy it ensnares them, damaging them and rooting them for .5s. The cat persists for 4s or until defeated, continuing to attack nearby enemies. The cats attacks will apply a 2s slow to the enemy.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Root Damage:', value: '60/95/130/165/200 (65% of your Physical Power)' },
            { description: 'Cat Damage:', value: '20/25/30/35/40 (0% of your Inhand Power)' },
            { description: 'Cat Hit Points:', value: '2' },
            { description: 'Lane Minion Damage:', value: '1 HP lost per 5 hits' },
            { description: 'Slow:', value: '25%' },
          ],
        },
      },
      Id: 18299,
      Summary: 'Ensnaring Claw',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/ensnaring-claw.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '110/105/100/95/90s',
          cost: '80/85/90/95/100',
          description:
            'Bastet becomes CC Immune and conjures a radiant projectile that travels forward in a line damaging and stunning the first enemy god hit. A Huntress of Bast appears near the hit target and a destination is marked at Bastet. The Huntress then picks up and carries the enemy hit to the marked location.\nOn successful capture, a pool of quicksand is formed under the enemy creating a Vortex which drags targets toward the center and deals damage.',
          menuitems: [
            { description: 'Ability:', value: 'Line + Grab + AoE' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '100' },
          ],
          rankitems: [
            { description: 'Initial Hit:', value: '160/220/280/340/400 (90% of your physical power)' },
            {
              description: 'Quicksand Damage:',
              value: '20/25/30/35/40 (+15% of your physical power) every 0.5s for 3s',
            },
          ],
        },
      },
      Id: 20192,
      Summary: 'Huntress of Bast',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/huntress-of-bast.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Bastet gains Physical Lifesteal and Physical Ability Lifesteal when hitting enemies. Additionally enemy gods hit are revealed to Bastet for 6s.',
          menuitems: [
            { description: 'Ability:', value: 'Buff and Debuff' },
            { description: 'Affects:', value: 'Self and Enemy' },
          ],
          rankitems: [
            { description: 'Lifesteal:', value: '5% +0.5% per level against gods/ 0.15% per level against minions' },
            {
              description: 'Ability Lifesteal:',
              value: '5% +0.5% per level against gods/ 0.15% per level against minions',
            },
          ],
        },
      },
      Id: 20633,
      Summary: 'Nightstalker',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/nightstalker.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.02,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.72,
    Health: 415,
    HealthPerFive: 9,
    HealthPerLevel: 80,
    Lore: 'Reveling in the joys of life, Bastet, daughter of Ra, is the sensual embodiment of her feline form. This cat, however,  has the fiercest claws.\\n\\nCats are creatures that demand worship. They are regal, nonchalant, and insatiable. Though, as much as they languish in the sun and rumble with purrs of pleasure, cats are agile and deadly hunters. Mercilessly, they cull the populations of invasive vermin and stinging scorpions, protecting the home from vile invaders. Perhaps, the most troublesome enemy of the cat is the serpent, and there was no greater snake in the world than the horrendous Apep.\\n\\nCircling the world along the horizon line, Apep’s scaly girth waited in ambush each morning for Ra to rise and bring light to the world. To fend off this beast, Ra kept the company of his daughter, Bastet. Since time began, as Ra lifted into the Eastern sky, Bastet would spit and howl, claws bared against the treacherous Apep. Countless battles were fought, countless mornings faced uncertainty, until, at last, Bastet tore the foul serpent apart.\\n\\nWith her greatest enemy gone, Bastet is free to prowl as she pleases. Now, she is the guardian of home and hearth,  idol to women - especially those desiring children and exploring their sensuality - and patron of arts, wine, and any occasion of revelry. Like any cat, though, Bastet can still pounce without warning, shredding her enemies once her claws come out.',
    MP5PerLevel: 0.25,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 230,
    ManaPerFive: 4.4,
    ManaPerLevel: 39,
    Name: 'Bastet',
    OnFreeRotation: '',
    Pantheon: 'Egyptian',
    PhysicalPower: 37,
    PhysicalPowerPerLevel: 2.21,
    PhysicalProtection: 12,
    PhysicalProtectionPerLevel: 2.9,
    Pros: 'High Single Target Damage',
    Roles: 'Assassin',
    Speed: 375,
    Title: 'Goddess of Cats',
    Type: 'Melee, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          'Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state.',
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [{ description: 'Damage:', value: '80/135/190/245/300 (+90% of your Physical Power)' }],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '11s',
        cost: '40/45/50/55/60',
        description:
          'Bastet swipes at her enemies, causing them to Bleed for damage every 0.66 seconds for the duration.',
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '30/50/70/90/110 (20% of your Physical Power)' },
          { description: 'Duration:', value: '2s' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '12s',
        cost: '60/65/70/75/80',
        description:
          'Bastet sends a cat forward at her enemies. If a cat finds an enemy it ensnares them, damaging them and rooting them for .5s. The cat persists for 4s or until defeated, continuing to attack nearby enemies. The cats attacks will apply a 2s slow to the enemy.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Root Damage:', value: '60/95/130/165/200 (65% of your Physical Power)' },
          { description: 'Cat Damage:', value: '20/25/30/35/40 (0% of your Inhand Power)' },
          { description: 'Cat Hit Points:', value: '2' },
          { description: 'Lane Minion Damage:', value: '1 HP lost per 5 hits' },
          { description: 'Slow:', value: '25%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '110/105/100/95/90s',
        cost: '80/85/90/95/100',
        description:
          'Bastet becomes CC Immune and conjures a radiant projectile that travels forward in a line damaging and stunning the first enemy god hit. A Huntress of Bast appears near the hit target and a destination is marked at Bastet. The Huntress then picks up and carries the enemy hit to the marked location.\nOn successful capture, a pool of quicksand is formed under the enemy creating a Vortex which drags targets toward the center and deals damage.',
        menuitems: [
          { description: 'Ability:', value: 'Line + Grab + AoE' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '100' },
        ],
        rankitems: [
          { description: 'Initial Hit:', value: '160/220/280/340/400 (90% of your physical power)' },
          { description: 'Quicksand Damage:', value: '20/25/30/35/40 (+15% of your physical power) every 0.5s for 3s' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Bastet gains Physical Lifesteal and Physical Ability Lifesteal when hitting enemies. Additionally enemy gods hit are revealed to Bastet for 6s.',
        menuitems: [
          { description: 'Ability:', value: 'Buff and Debuff' },
          { description: 'Affects:', value: 'Self and Enemy' },
        ],
        rankitems: [
          { description: 'Lifesteal:', value: '5% +0.5% per level against gods/ 0.15% per level against minions' },
          {
            description: 'Ability Lifesteal:',
            value: '5% +0.5% per level against gods/ 0.15% per level against minions',
          },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '37 + 2.21/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: '1/.7/1.3x damage and swing time' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/pounce.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/razor-whip.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/ensnaring-claw.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/huntress-of-bast.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/nightstalker.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/bastet.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/bastet.jpg',
    id: 1678,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Shield Bash',
    Ability2: 'Bludgeon',
    Ability3: 'Scourge',
    Ability4: "Eagle's Rally",
    Ability5: 'Master of War',
    AbilityId1: 11127,
    AbilityId2: 11137,
    AbilityId3: 11140,
    AbilityId4: 11141,
    AbilityId5: 11145,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '14s',
          cost: '60',
          description:
            'Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her.\nBellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).\n',
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemies and Self' },
            { description: 'Damage:', value: 'Physical' },
          ],
          rankitems: [
            { description: 'Damage:', value: '80/120/160/200/240 (+50% of your Physical Power)' },
            { description: 'Block Reflect:', value: '30%' },
            { description: 'Slow:', value: '15/20/25/30/35% for 2s' },
          ],
        },
      },
      Id: 11127,
      Summary: 'Shield Bash',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shield-bash.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '14/13/12/11/10s',
          cost: '60/65/70/75/80',
          description:
            "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack.\n\nBellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
          menuitems: [
            { description: 'Ability:', value: 'Area' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '25' },
          ],
          rankitems: [
            { description: 'Spin Damage:', value: '45/75/105/135/165 (+25% of your Physical Power)' },
            { description: 'Slam Damage:', value: '70/130/190/250/310 (+60% of your Physical Power)' },
            { description: 'Slam Damage Increase:', value: '25% per Enemy God hit' },
          ],
        },
      },
      Id: 11137,
      Summary: 'Bludgeon',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/bludgeon.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '18/17/16/15/14s',
          cost: '60/65/70/75/80',
          description:
            'Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks.\n\nBellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Range:', value: '55' },
          ],
          rankitems: [
            { description: 'Damage:', value: '90/130/170/210/250 (+50% of your Physical Power)' },
            { description: 'Disarm Duration:', value: '1.4/1.6/1.8/2/2.2s' },
            { description: 'Healing:', value: '25/30/35/40/45' },
          ],
        },
      },
      Id: 11140,
      Summary: 'Scourge',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/scourge.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '75s',
          cost: '100',
          description:
            'Bellona plants a Roman flag, granting Protections and increased Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.',
          menuitems: [
            { description: 'Ability:', value: 'Leap' },
            { description: 'Affects:', value: 'Everyone' },
            { description: 'Damage:', value: 'Physical' },
            { description: 'Radius:', value: '40' },
          ],
          rankitems: [
            { description: 'Damage:', value: '140/230/320/410/500 (+50% of your Physical Power)' },
            { description: 'Protections:', value: '15/20/25/30/35' },
            { description: 'Physical Power:', value: '20/30/40/50/60' },
            { description: 'Magical Power:', value: '35/45/55/65/75' },
            { description: 'Flag Duration:', value: '8s' },
          ],
        },
      },
      Id: 11141,
      Summary: "Eagle's Rally",
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/eagles-rally.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            'Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks).\n',
          menuitems: [
            { description: 'Ability:', value: 'Passive' },
            { description: 'Affects:', value: 'Self' },
          ],
          rankitems: [
            { description: 'Protections:', value: '5 Protections per Stack' },
            { description: 'Movement Speed:', value: '+3% per Stack' },
          ],
        },
      },
      Id: 11145,
      Summary: 'Master of War',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/master-of-war.jpg',
    },
    AttackSpeed: 1,
    AttackSpeedPerLevel: 0.012,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.8,
    Health: 490,
    HealthPerFive: 8,
    HealthPerLevel: 88,
    Lore: 'Rome has forgotten her.\\n\\nBellona, the Goddess of War, took no time to build temples or gather worshipers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory.\\n\\nWhen Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshipers, Lucius Cornelius Sulla.\\n\\nSulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so.\\n\\nBut the Roman Senate moved to displace Sulla and end his rise to glory.\\n\\n"March on Rome," Bellona quietly urged, "and you shall rise as no other."\\n\\nEmboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome.\\n\\nDuring Sulla\'s reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot.\\n\\nBut the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.',
    MP5PerLevel: 0.4,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 0,
    MagicalPowerPerLevel: 0,
    Mana: 220,
    ManaPerFive: 4.8,
    ManaPerLevel: 35,
    Name: 'Bellona',
    OnFreeRotation: '',
    Pantheon: 'Roman',
    PhysicalPower: 36,
    PhysicalPowerPerLevel: 2,
    PhysicalProtection: 18,
    PhysicalProtectionPerLevel: 3,
    Pros: 'High Defense',
    Roles: 'Warrior',
    Speed: 375,
    Title: 'Goddess of War',
    Type: 'Melee, Physical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '14s',
        cost: '60',
        description:
          'Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her.\nBellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).\n',
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemies and Self' },
          { description: 'Damage:', value: 'Physical' },
        ],
        rankitems: [
          { description: 'Damage:', value: '80/120/160/200/240 (+50% of your Physical Power)' },
          { description: 'Block Reflect:', value: '30%' },
          { description: 'Slow:', value: '15/20/25/30/35% for 2s' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '14/13/12/11/10s',
        cost: '60/65/70/75/80',
        description:
          "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack.\n\nBellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
        menuitems: [
          { description: 'Ability:', value: 'Area' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '25' },
        ],
        rankitems: [
          { description: 'Spin Damage:', value: '45/75/105/135/165 (+25% of your Physical Power)' },
          { description: 'Slam Damage:', value: '70/130/190/250/310 (+60% of your Physical Power)' },
          { description: 'Slam Damage Increase:', value: '25% per Enemy God hit' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '18/17/16/15/14s',
        cost: '60/65/70/75/80',
        description:
          'Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks.\n\nBellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Range:', value: '55' },
        ],
        rankitems: [
          { description: 'Damage:', value: '90/130/170/210/250 (+50% of your Physical Power)' },
          { description: 'Disarm Duration:', value: '1.4/1.6/1.8/2/2.2s' },
          { description: 'Healing:', value: '25/30/35/40/45' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '75s',
        cost: '100',
        description:
          'Bellona plants a Roman flag, granting Protections and increased Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.',
        menuitems: [
          { description: 'Ability:', value: 'Leap' },
          { description: 'Affects:', value: 'Everyone' },
          { description: 'Damage:', value: 'Physical' },
          { description: 'Radius:', value: '40' },
        ],
        rankitems: [
          { description: 'Damage:', value: '140/230/320/410/500 (+50% of your Physical Power)' },
          { description: 'Protections:', value: '15/20/25/30/35' },
          { description: 'Physical Power:', value: '20/30/40/50/60' },
          { description: 'Magical Power:', value: '35/45/55/65/75' },
          { description: 'Flag Duration:', value: '8s' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          'Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks).\n',
        menuitems: [
          { description: 'Ability:', value: 'Passive' },
          { description: 'Affects:', value: 'Self' },
        ],
        rankitems: [
          { description: 'Protections:', value: '5 Protections per Stack' },
          { description: 'Movement Speed:', value: '+3% per Stack' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '39 + 2/Lvl (+100% of Physical Power)' },
          { description: 'Progression:', value: 'Special' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shield-bash.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/bludgeon.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/scourge.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/eagles-rally.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/master-of-war.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/bellona.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/bellona.jpg',
    id: 2047,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Seismic Crush',
    Ability2: 'Refraction Shield',
    Ability3: 'Tremors',
    Ability4: 'Tectonic Shift',
    Ability5: 'Shadow Zone',
    AbilityId1: 10453,
    AbilityId2: 10262,
    AbilityId3: 10271,
    AbilityId4: 10387,
    AbilityId5: 10252,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '18/17/16/15/14s',
          cost: '50/55/60/65/70 ',
          description:
            'Cabrakan becomes enraged, increasing his movement speed. While active, Cabrakan gains 70% increased Attack Speed and his next successful Basic Attack will Stun with no diminishing returns and do bonus damage. Additionally, Cabrakan gains Haste and is immune to Slows and Roots while this ability is active.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Self' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Duration:', value: '5s' },
          ],
          rankitems: [
            { description: 'Damage:', value: '100/145/190/235/280 (+50% of your Magical Power)' },
            { description: 'Stun Duration:', value: '1s' },
            { description: 'Movement Speed Increase:', value: '15/20/25/30/35%' },
          ],
        },
      },
      Id: 10453,
      Summary: 'Seismic Crush',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/seismic-crush.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '10s',
          cost: '65/70/75/80/85',
          description:
            "Passive: As Cabrakan's shields take damage they store energy and gain Protection stacks.\n\nActive: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him. If his shields have the maximum number of Stacks then the enemy gods hit are Stunned. Stacks are removed.",
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Self, Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '20' },
          ],
          rankitems: [
            { description: 'Damage:', value: '100/155/210/265/320 (+50% of your Magical Power)' },
            { description: 'Stun Duration:', value: '1.1/1.2/1.3/1.4/1.5s' },
            { description: 'Protections per Stack:', value: '2/3/4/5/6 Max 5 Stacks' },
          ],
        },
      },
      Id: 10262,
      Summary: 'Refraction Shield',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/refraction-shield.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '8s',
          cost: '10/15/20/25/30 every 0.5s.',
          description:
            'Cabrakan repeatedly slams the ground with his shields creating an earthquake and causing enemy gods around him to Tremble. Enemies in the earthquake also take damage and are caught in a Vortex which drags them towards Cabrakan. This ability can only be channeled for a maximum amount of 10s.',
          menuitems: [
            { description: 'Ability:', value: 'AOE' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '30' },
          ],
          rankitems: [{ description: 'Damage:', value: '22/32/42/52/62 (+35% of your Magical Power) every 0.5s.' }],
        },
      },
      Id: 10271,
      Summary: 'Tremors',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/tremors.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '75s',
          cost: '100 ',
          description:
            'Cabrakan stomps the ground creating a wall of earth and a fissure that travels out in front of him and damages any enemies caught in its path. The walls may be destroyed if they take enough hits. Cabrakan may destroy his own walls with a single Basic Attack.',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemies' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Range:', value: '35' },
          ],
          rankitems: [
            { description: 'Damage:', value: '150/250/350/450/550 (+70% of your Magical Power)' },
            { description: 'Hits to destroy:', value: '3 hits ' },
          ],
        },
      },
      Id: 10387,
      Summary: 'Tectonic Shift',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/tectonic-shift.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description: 'Cabrakan and nearby allies take 5% reduced damage.',
          menuitems: [
            { description: 'Ability:', value: 'Buff' },
            { description: 'Affects:', value: 'Allies' },
            { description: 'Range:', value: '30' },
          ],
          rankitems: [],
        },
      },
      Id: 10252,
      Summary: 'Shadow Zone',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shadow-zone.jpg',
    },
    AttackSpeed: 0.9,
    AttackSpeedPerLevel: 0.011,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.75,
    Health: 490,
    HealthPerFive: 8,
    HealthPerLevel: 90,
    Lore: 'Feel the earth trembling beneath your feet? Only a titan of tremendous power could cause such fear. He is the Render of Stone, the Earthsunder. He is Cabrakan, Destroyer of Mountains.\\n\\nProud, boastful, confident to the point of arrogance, Cabrakan revels in his strength, tearing down what the earth has labored to rise. These traits – and worse - he inherited from his sire, the demon bird Seven Macaw.\\n\\nSeeking to end Seven Macaw\'s entire lineage, the Hero Twins tracked Cabrakan by his quaking footfalls. They found him in a valley, surrounded by great peaks, shattering rock into dust.\\n\\n"How mighty you are," they told him, playing to his pride.\\n\\n"I am," he boasted.\\n\\n"Can you shatter that distant mountain?" they asked.\\n\\n"Of course," Cabrakan roared.\\n\\n"You must be hungry," the Hero Twins offered.\\n\\n"Always!"\\n\\nAnd so they shot a bird from the sky for the giant to feast upon, yet as they turned the carcass over the flame, Hun-apu coated it with poisonous mud.\\n\\nWithout a thought, Cabrakan devoured the feast and rose, but already the poison had taken him. Teetering, losing sight, the Earthsunder collapsed. Mountains crumbled a final time. The valley became his tomb.\\n\\nYet vengeance is a cycle. Blood for blood, and a Titan is not so easily slain. The destroyer of mountains cannot be buried beneath stone, and Cabrakan\'s pained slumber is at an end. Bursting free, he now thunders across the field of war, seeking the Twins that played him the fool. Why stop at mountains when Cabrakan can destroy Gods.',
    MP5PerLevel: 0.42,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 190,
    MagicalPowerPerLevel: 7.5,
    Mana: 200,
    ManaPerFive: 4.6,
    ManaPerLevel: 38,
    Name: 'Cabrakan',
    OnFreeRotation: '',
    Pantheon: 'Maya',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 20,
    PhysicalProtectionPerLevel: 3.3,
    Pros: 'High Crowd Control, High Defense',
    Roles: 'Guardian',
    Speed: 365,
    Title: 'Destroyer of Mountains',
    Type: 'Melee, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '18/17/16/15/14s',
        cost: '50/55/60/65/70 ',
        description:
          'Cabrakan becomes enraged, increasing his movement speed. While active, Cabrakan gains 70% increased Attack Speed and his next successful Basic Attack will Stun with no diminishing returns and do bonus damage. Additionally, Cabrakan gains Haste and is immune to Slows and Roots while this ability is active.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Self' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Duration:', value: '5s' },
        ],
        rankitems: [
          { description: 'Damage:', value: '100/145/190/235/280 (+50% of your Magical Power)' },
          { description: 'Stun Duration:', value: '1s' },
          { description: 'Movement Speed Increase:', value: '15/20/25/30/35%' },
        ],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '10s',
        cost: '65/70/75/80/85',
        description:
          "Passive: As Cabrakan's shields take damage they store energy and gain Protection stacks.\n\nActive: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him. If his shields have the maximum number of Stacks then the enemy gods hit are Stunned. Stacks are removed.",
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Self, Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '20' },
        ],
        rankitems: [
          { description: 'Damage:', value: '100/155/210/265/320 (+50% of your Magical Power)' },
          { description: 'Stun Duration:', value: '1.1/1.2/1.3/1.4/1.5s' },
          { description: 'Protections per Stack:', value: '2/3/4/5/6 Max 5 Stacks' },
        ],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '8s',
        cost: '10/15/20/25/30 every 0.5s.',
        description:
          'Cabrakan repeatedly slams the ground with his shields creating an earthquake and causing enemy gods around him to Tremble. Enemies in the earthquake also take damage and are caught in a Vortex which drags them towards Cabrakan. This ability can only be channeled for a maximum amount of 10s.',
        menuitems: [
          { description: 'Ability:', value: 'AOE' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '30' },
        ],
        rankitems: [{ description: 'Damage:', value: '22/32/42/52/62 (+35% of your Magical Power) every 0.5s.' }],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '75s',
        cost: '100 ',
        description:
          'Cabrakan stomps the ground creating a wall of earth and a fissure that travels out in front of him and damages any enemies caught in its path. The walls may be destroyed if they take enough hits. Cabrakan may destroy his own walls with a single Basic Attack.',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemies' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Range:', value: '35' },
        ],
        rankitems: [
          { description: 'Damage:', value: '150/250/350/450/550 (+70% of your Magical Power)' },
          { description: 'Hits to destroy:', value: '3 hits ' },
        ],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: 'Cabrakan and nearby allies take 5% reduced damage.',
        menuitems: [
          { description: 'Ability:', value: 'Buff' },
          { description: 'Affects:', value: 'Allies' },
          { description: 'Range:', value: '30' },
        ],
        rankitems: [],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage', value: '38 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/seismic-crush.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/refraction-shield.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/tremors.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/tectonic-shift.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/shadow-zone.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/cabrakan.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/cabrakan.jpg',
    id: 2008,
    latestGod: 'n',
    ret_msg: null,
  },
  {
    Ability1: 'Plague of Locusts',
    Ability2: 'Mummify',
    Ability3: 'Grasping Hands',
    Ability4: 'Death Gaze',
    Ability5: 'Sorrow',
    AbilityId1: 11495,
    AbilityId2: 11497,
    AbilityId3: 11498,
    AbilityId4: 11491,
    AbilityId5: 7547,
    Ability_1: {
      Description: {
        itemDescription: {
          cooldown: '15/14/13/12/11s',
          cost: '60/65/70/75/80',
          description:
            "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .5s for 3s. Anubis is immune to knockback while channeling.",
          menuitems: [
            { description: 'Ability:', value: 'Cone' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [{ description: 'Damage per Tick:', value: '35/50/65/80/95 (+40% of your magical power)' }],
        },
      },
      Id: 11495,
      Summary: 'Plague of Locusts',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/plague-of-locusts.jpg',
    },
    Ability_2: {
      Description: {
        itemDescription: {
          cooldown: '16/15/14/13/12s',
          cost: '60',
          description: 'Anubis fires a bandage projectile, mummifying and stunning his target.',
          menuitems: [
            { description: 'Ability:', value: 'Projectile' },
            { description: 'Affects:', value: 'Enemy Gods' },
          ],
          rankitems: [{ description: 'Stun Duration:', value: '1.6/1.7/1.8/1.9/2s' }],
        },
      },
      Id: 11497,
      Summary: 'Mummify',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/mummify.jpg',
    },
    Ability_3: {
      Description: {
        itemDescription: {
          cooldown: '14/13/12/11/10s',
          cost: '60/65/70/75/80',
          description:
            'Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.',
          menuitems: [
            { description: 'Ability:', value: 'Ground Target' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
            { description: 'Radius:', value: '20' },
          ],
          rankitems: [
            { description: 'Damage per Tick:', value: '25/40/55/70/85 (+35% of your Magical Power)' },
            { description: 'Slow:', value: '25%' },
          ],
        },
      },
      Id: 11498,
      Summary: 'Grasping Hands',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/grasping-hands.jpg',
    },
    Ability_4: {
      Description: {
        itemDescription: {
          cooldown: '90/85/80/75/70s',
          cost: '90',
          description:
            'Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.',
          menuitems: [
            { description: 'Ability:', value: 'Line' },
            { description: 'Affects:', value: 'Enemy' },
            { description: 'Damage:', value: 'Magical' },
          ],
          rankitems: [{ description: 'Damage per Tick:', value: '23/28/33/38/43 (+15% of your magical power)' }],
        },
      },
      Id: 11491,
      Summary: 'Death Gaze',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/death-gaze.jpg',
    },
    Ability_5: {
      Description: {
        itemDescription: {
          cooldown: '',
          cost: '',
          description:
            "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations.",
          menuitems: [
            { description: 'Ability:', value: 'Buff/Debuff' },
            { description: 'Affects:', value: 'Self/Enemy' },
          ],
          rankitems: [
            { description: 'Protections Stolen Per Stack:', value: '7' },
            { description: 'Increased Healing per Stack:', value: '33%' },
            { description: 'Duration:', value: '5s' },
            { description: 'Max Stacks:', value: '3' },
          ],
        },
      },
      Id: 7547,
      Summary: 'Sorrow',
      URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/sorrow.jpg',
    },
    AttackSpeed: 0.86,
    AttackSpeedPerLevel: 0.009,
    AutoBanned: 'n',
    Cons: '',
    HP5PerLevel: 0.45,
    Health: 380,
    HealthPerFive: 7,
    HealthPerLevel: 70,
    Lore: 'Jackal-headed Anubis holds the ultimate judgment over the dead, measuring every heart against the weight of Truth.\\n\\nNephthys, wife of Set - the God of Darkness, desired a child, yet her husband was infertile, so Nephthys disguised herself as Eset, the wife of Set’s brother Osiris, and seduced him. From that union, Anubis was born. Osiris cared for Anubis as his own, but when Osiris was murdered by his evil brother, Set, Anubis embalmed his adopted father and mummified the corpse so he would not rot. This preservation passed down to the Faithful, for if it was good enough for the Gods, it was good enough for man.\\n\\nNone enter the abyss of the Underworld without first being tested by Anubis. When corpses are preserved, he is the embalmer. When time for judgment comes, he is the final arbiter. In his realm, he keeps legendary weighing scales. On one side, the massive weight of Ma’at – truth and order. On the other side, he places the heart of the deceased. Should the weight of Ma’at prove infinitely heavier than that of the heart, Anubis casts the soul deep into the darkness of the Underworld, where it is forgotten, never to be reborn.',
    MP5PerLevel: 0.36,
    MagicProtection: 30,
    MagicProtectionPerLevel: 0.9,
    MagicalPower: 175,
    MagicalPowerPerLevel: 7.5,
    Mana: 280,
    ManaPerFive: 4.8,
    ManaPerLevel: 58,
    Name: 'Anubis',
    OnFreeRotation: '',
    Pantheon: 'Egyptian',
    PhysicalPower: 0,
    PhysicalPowerPerLevel: 0,
    PhysicalProtection: 10,
    PhysicalProtectionPerLevel: 2.5,
    Pros: 'High Area Damage',
    Roles: 'Mage',
    Speed: 360,
    Title: 'God of the Dead',
    Type: 'Ranged, Magical',
    abilityDescription1: {
      itemDescription: {
        cooldown: '15/14/13/12/11s',
        cost: '60/65/70/75/80',
        description:
          "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .5s for 3s. Anubis is immune to knockback while channeling.",
        menuitems: [
          { description: 'Ability:', value: 'Cone' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [{ description: 'Damage per Tick:', value: '35/50/65/80/95 (+40% of your magical power)' }],
      },
    },
    abilityDescription2: {
      itemDescription: {
        cooldown: '16/15/14/13/12s',
        cost: '60',
        description: 'Anubis fires a bandage projectile, mummifying and stunning his target.',
        menuitems: [
          { description: 'Ability:', value: 'Projectile' },
          { description: 'Affects:', value: 'Enemy Gods' },
        ],
        rankitems: [{ description: 'Stun Duration:', value: '1.6/1.7/1.8/1.9/2s' }],
      },
    },
    abilityDescription3: {
      itemDescription: {
        cooldown: '14/13/12/11/10s',
        cost: '60/65/70/75/80',
        description:
          'Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.',
        menuitems: [
          { description: 'Ability:', value: 'Ground Target' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
          { description: 'Radius:', value: '20' },
        ],
        rankitems: [
          { description: 'Damage per Tick:', value: '25/40/55/70/85 (+35% of your Magical Power)' },
          { description: 'Slow:', value: '25%' },
        ],
      },
    },
    abilityDescription4: {
      itemDescription: {
        cooldown: '90/85/80/75/70s',
        cost: '90',
        description:
          'Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.',
        menuitems: [
          { description: 'Ability:', value: 'Line' },
          { description: 'Affects:', value: 'Enemy' },
          { description: 'Damage:', value: 'Magical' },
        ],
        rankitems: [{ description: 'Damage per Tick:', value: '23/28/33/38/43 (+15% of your magical power)' }],
      },
    },
    abilityDescription5: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description:
          "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations.",
        menuitems: [
          { description: 'Ability:', value: 'Buff/Debuff' },
          { description: 'Affects:', value: 'Self/Enemy' },
        ],
        rankitems: [
          { description: 'Protections Stolen Per Stack:', value: '7' },
          { description: 'Increased Healing per Stack:', value: '33%' },
          { description: 'Duration:', value: '5s' },
          { description: 'Max Stacks:', value: '3' },
        ],
      },
    },
    basicAttack: {
      itemDescription: {
        cooldown: '',
        cost: '',
        description: '',
        menuitems: [
          { description: 'Damage:', value: '35 + 1.5/Lvl (+20% of Magical Power)' },
          { description: 'Progression:', value: 'None' },
        ],
        rankitems: [],
      },
    },
    godAbility1_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/plague-of-locusts.jpg',
    godAbility2_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/mummify.jpg',
    godAbility3_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/grasping-hands.jpg',
    godAbility4_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/death-gaze.jpg',
    godAbility5_URL: 'https://webcdn.hirezstudios.com/smite/god-abilities/sorrow.jpg',
    godCard_URL: 'https://webcdn.hirezstudios.com/smite/god-cards/anubis.jpg',
    godIcon_URL: 'https://webcdn.hirezstudios.com/smite/god-icons/anubis.jpg',
    id: 1668,
    latestGod: 'n',
    ret_msg: null,
  },
];
