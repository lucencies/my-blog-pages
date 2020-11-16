function makeLink(name) {
    let link = "https://lucencies.wordpress.com/tag/";
    return link + name.toLowerCase().replace(" ", "-");
}

function buildTable(where, tags) {
    table = "<table>";
            "<tr>" +
            "<th>Game</th>" +
            "<th>Posts</th>" +
            "</tr>";

    for (i = 0; i < tags.length; ++i) {
        let link = makeLink(tags[i].name)
        table += "<tr>";
        table += "<td align='left'>" + "<a href='" + link + "'>" + tags[i].name + "</a></td>";
        table += "<td align='right'>" + tags[i].posts + "</td>";
    }

    table += "</table>"

    document.getElementById(where).innerHTML = table;
}

let VIDEO_GAMES = [
    {name: 'Animal Crossing', posts: 2},
    {name: 'Baba Is You', posts: 1},
    {name: 'Bloodstained', posts: 3},
    {name: 'Castlevania', posts: 3},
    {name: 'Celeste', posts: 2},
    {name: 'Devil May Cry', posts: 1},
    {name: 'Disco Elysium', posts: 1},
    {name: 'Dishonored', posts: 1},
    {name: 'Disgaea', posts: 1},
    {name: 'Into The Breach', posts: 1},
    {name: 'Final Fantasy', posts: 3},
    {name: 'Fire Emblem', posts: 4},
    {name: 'FTL: Faster Than Light', posts: 1},
    {name: 'Hollow Knight', posts: 2},
    {name: 'MapleStory', posts: 1},
    {name: 'Metroid', posts: 2},
    {name: 'Ori and the Blind Forest', posts: 1},
    {name: 'Pokemon', posts: 2},
    {name: 'Shin Megami Tensei <a href="https://lucencies.wordpress.com/tag/persona/">[includes Persona]</a>', posts: 3},
    {name: 'Spider-Man', posts: 1},
    {name: 'Spiritfarer', posts: 1},
    {name: 'Stardew Valley', posts: 1},
    {name: 'SteamWorld', posts: 1},
    {name: 'The Legend of Zelda', posts: 2},
    {name: 'The Outer Worlds', posts: 1},
    {name: 'Timespinner', posts: 1},
    {name: 'Undertale', posts: 1}
];

let GAMING_TOPICS = [
    {name: 'Backlog', posts: 3},
    {name: 'Metroidvania', posts: 4},
    {name: 'Video Game Music', posts: 2},
    {name: 'Xbox', posts: 1}
];

let BOARD_GAMES = [
    {name: 'Flip Ships', posts: 1},
    {name: 'Stuffed Fables', posts: 1}
];

let TABLETOP_RPGS = [
    {name: 'Blades in the Dark', posts: 1},
    {name: 'Powered by the Apocalypse', posts: 1}
]

buildAllTables()

function buildAllTables() {
    buildTable("videoGamesTable", VIDEO_GAMES);
    buildTable("gamingTopicsTable", GAMING_TOPICS);
    buildTable("boardGamesTable", BOARD_GAMES);
    buildTable("tabletopRpgsTable", TABLETOP_RPGS);
}

function sortByName() {
    VIDEO_GAMES = sortTable(VIDEO_GAMES, "NAME");
    GAMING_TOPICS = sortTable(GAMING_TOPICS, "NAME");
    BOARD_GAMES = sortTable(BOARD_GAMES, "NAME");
    TABLETOP_RPGS = sortTable(TABLETOP_RPGS, "NAME");
    buildAllTables();
}

function sortByPosts() {
    VIDEO_GAMES = sortTable(VIDEO_GAMES, "POSTS");
    GAMING_TOPICS = sortTable(GAMING_TOPICS, "POSTS");
    BOARD_GAMES = sortTable(BOARD_GAMES, "POSTS");
    TABLETOP_RPGS = sortTable(TABLETOP_RPGS, "POSTS");
    buildAllTables();
}