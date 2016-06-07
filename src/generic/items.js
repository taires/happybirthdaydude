var items = [
    {
        title: "You have found a wishing orb!",
        background: "dungeon.png",
        item: "orb.png",
        chance: 0.05,
        options: [
            {
                title: "-0.4 knowledge, +0.1 health",
                chance: 1,
                action: function (success, stats) {
                    stats.knowledge -= 0.4;
                    stats.health += 0.1;
                    return "Sometimes you have to do compromises";
                }
            },
            {
                title: "-0.1 attack, -0.1 defence, +0.1 luck",
                chance: 1,
                action: function (success, stats) {
                    stats.attack -= 0.1;
                    stats.defence -= 0.1;
                    stats.luck += 0.1;
                    return "Sometimes you have to do compromises";
                }
            },
            {
                title: "-0.3 happyness, +0.1 defence, +0.1 offence",
                chance: 1,
                action: function (success, stats) {
                    stats.happyness -= 0.3;
                    stats.defence += 0.1;
                    stats.attack += 0.1;
                    return "Sometimes you have to do compromises";
                }
            }
        ]
    },
    {
        title: "You found The Bag of Holding. A magical object that can hold everything inside of it. It pulls in everything around it.",
        background: "item_forest.png",
        item: "bagofholdings.png",
        chance: function (stats) {
            return 0.2 * stats.luck;
        },
        options: [
            {
                title: "Check what is inside of it",
                chance: function (stats) {
                    return 0.4 + stats.luck;
                },
                action: function (success, stats) {
                    if (success) {
                        var result = "You have found: ";
                        var money = 1;
                        if (Math.random() > stats.luck) {
                            money = Math.round(Math.random() * 10);
                        }

                        result += money + " coins;";
                        stats.money += money;

                        if (Math.random() > stats.luck) {
                            stats.keys += 1;
                            result += " 1 key;";
                        }

                        return result;
                    } else {
                        if (Math.random() < stats.luck) {
                            return "The bag contained a strange gas. " + randomDamage(0.04);
                        } else {
                            return "There is nothing inside it";
                        }

                    }
                }
            },
            {
                title: "Leave it alone",
                chance: 1,
                action: "Probably better! You never know what it might contain."
            }
        ]
    }
];