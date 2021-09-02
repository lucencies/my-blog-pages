function makeLink(tag) {
    let link = "https://lucencies.wordpress.com/tag/";
    let name = tag.name;

    if ('link' in tag) {
        name = tag.link;
    }

    return link + name.toLowerCase().replaceAll(" ", "-");
}

function buildTable(where, tags) {
    table = "<table>";
            "<tr>" +
            "<th>Game</th>" +
            "<th>Posts</th>" +
            "</tr>";

    for (i = 0; i < tags.length; ++i) {
        let link = makeLink(tags[i])
        table += "<tr>";
        table += "<td align='left'>" + "<a href='" + link + "'>" + tags[i].name + "</a></td>";
        table += "<td align='right'>" + tags[i].posts + "</td>";
    }

    table += "</table>"

    document.getElementById(where).innerHTML = table;
}

let VIDEO_GAMES = [
    {name: 'Ace Attorney', posts: 1},
    {name: 'Animal Crossing', posts: 2},
    {name: 'Baba Is You', posts: 2},
    {name: 'Bloodstained', posts: 3},
    {name: 'Castlevania', posts: 3},
    {name: 'Celeste', posts: 2},
    {name: 'Dandara', posts: 1},
    {name: 'Devil May Cry', posts: 2},
    {name: 'Disco Elysium', posts: 1},
    {name: 'Dishonored', posts: 2},
    {name: 'Disgaea', posts: 1},
    {name: 'Final Fantasy', posts: 4},
    {name: 'Fire Emblem', posts: 4},
    {name: 'FTL: Faster Than Light', posts: 1, link: 'ftl'},
    {name: 'Genshin Impact', posts: 2},
    {name: 'Hades', posts: 1},
    {name: 'Hollow Knight', posts: 2},
    {name: 'Into The Breach', posts: 1},
    {name: 'MapleStory', posts: 1},
    {name: 'Metroid', posts: 2},
    {name: 'Monster Hunter', posts: 1},
    {name: 'Monster Sanctuary', posts: 1},
    {name: 'Ori and the Blind Forest', posts: 1, link: 'ori'},
    {name: 'Pokemon', posts: 3},
    {name: 'Shin Megami Tensei <a href="https://lucencies.wordpress.com/tag/persona/">[includes Persona]</a>', posts: 4, link: 'shin megami tensei'},
    {name: 'Spider-Man', posts: 1, link: 'spiderman'},
    {name: 'Spiritfarer', posts: 2},
    {name: 'Stardew Valley', posts: 1},
    {name: 'SteamWorld', posts: 1},
    {name: 'The Legend of Zelda', posts: 2},
    {name: 'The Outer Worlds', posts: 1},
    {name: 'Timespinner', posts: 1},
    {name: 'Undertale', posts: 1},
    {name: 'Yakuza', posts: 1}
];

let GAMING_TOPICS = [
    {name: 'Backlog', posts: 3},
    {name: 'E3', posts: 1},
    {name: 'Metroidvania', posts: 5},
    {name: 'PlayStation', posts: 1},
    {name: 'Video Game Music', posts: 2},
    {name: 'Xbox', posts: 1}
];

let BOARD_GAMES = [
    {name: 'Blades in the Dark', posts: 1},
    {name: 'Flip Ships', posts: 1},
    {name: 'Powered by the Apocalypse', posts: 1},
    {name: 'Stuffed Fables', posts: 1}
];

buildAllTables()

function buildAllTables() {
    buildTable("videoGamesTable", VIDEO_GAMES);
    buildTable("gamingTopicsTable", GAMING_TOPICS);
    buildTable("tabletopTable", TABLETOP);
}

function sortByName() {
    VIDEO_GAMES = sortTable(VIDEO_GAMES, "NAME");
    GAMING_TOPICS = sortTable(GAMING_TOPICS, "NAME");
    TABLETOP = sortTable(TABLETOP, "NAME");
    buildAllTables();
}

function sortByPosts() {
    VIDEO_GAMES = sortTable(VIDEO_GAMES, "POSTS");
    GAMING_TOPICS = sortTable(GAMING_TOPICS, "POSTS");
    BOARD_GAMES = sortTable(BOARD_GAMES, "POSTS");
    TABLETOP = sortTable(TABLETOP, "POSTS");
    buildAllTables();
}
