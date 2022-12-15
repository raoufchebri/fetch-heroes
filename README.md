# Getting started with Neon and NodeJS

Run the below command to copy the `.env.sample` file:

```
cp .env.sample .env && rm .env.sample
```

## Store your Neon credentials

Store your Neon credentials in your `.env` file.

```
PGHOST='<endpoint_hostname>:<port>'
PGDATABASE='<database>'
PGUSER='<username>'
PGPASSWORD='<password>'
ENDPOINT_ID='<endpoint_id>'
```

where:

- `<endpoint_hostname>` the hostname of the branch endpoint, which is found on the Neon **Dashboard**, under **Connection Settings**.
- `<post>` is the Postgres port number. Neon uses port `5432` by default.
- `<database>` is the name of the database in your Neon project. `main` is the default database created with each Neon project.
- `<username>` is the database user, which is found on the Neon Console **Dashboard** tab, under **Connection Details**.
- `<password>` is the database user's password, which is provided to you when you create a project.
- `<endpoint_id>` is the ID of the branch endpoint that you are connecting to, which can be found on the Neon **Dashboard**, under **Connection Settings**. The `<endpoint_id>` starts with an `ep-` prefix, as in this example: `ep-steep-forest-654321`.

**_Important_**: To ensure the security of your data, never expose your Neon credentials to the browser.

Run the below command to install project dependencies:

```
npm install
```

Run the NodeJS application using the following command:

```
npm run dev
```

# Schema and Data

Run the following query:

```
CREATE TABLE marvels (ID INTEGER PRIMARY KEY,
    name TEXT,
    popularity INTEGER,
    alignment TEXT,
    gender TEXT,
    height_m NUMERIC,
    weight_kg NUMERIC,
    hometown TEXT,
    intelligence INTEGER,
    strength INTEGER,
    speed INTEGER,
    durability INTEGER,
    energy_Projection INTEGER,
    fighting_Skills INTEGER);

INSERT INTO marvels VALUES(1, 'Spider Man', 1, 'Good', 'Male', 1.78, 75.75, 'USA', 4, 4, 3, 3, 1, 4);
INSERT INTO marvels VALUES(2, 'Iron Man', 20, 'Neutral', 'Male', 1.98, 102.58, 'USA', 6, 6, 5, 6, 6, 4);
INSERT INTO marvels VALUES(3, 'Hulk', 18, 'Neutral', 'Male', 2.44, 635.29, 'USA', 6, 7, 3, 7, 5, 4);
INSERT INTO marvels VALUES(4, 'Wolverine', 3, 'Good', 'Male', 1.6, 88.46, 'Canada', 2, 4, 2, 4, 1, 7);
INSERT INTO marvels VALUES(5, 'Thor', 5, 'Good', 'Male', 1.98, 290.3, 'Norway', 2, 7, 7, 6, 6, 4);
INSERT INTO marvels VALUES(6, 'Green Goblin', 91, 'Bad', 'Male', 1.93, 174.63, 'USA', 4, 4, 3, 4, 3, 3);
INSERT INTO marvels VALUES(7, 'Magneto', 11, 'Neutral', 'Male', 1.88, 86.18, 'Germany', 6, 3, 5, 4, 6, 4);
INSERT INTO marvels VALUES(8, 'Thanos', 47, 'Bad', 'Male', 2.01, 446.79, 'Titan', 6, 7, 7, 6, 6, 4);
INSERT INTO marvels VALUES(9, 'Loki', 32, 'Bad', 'Male', 1.93, 238.14, 'Jotunheim', 5, 5, 7, 6, 6, 3);
INSERT INTO marvels VALUES(10, 'Doctor Doom', 19, 'Bad', 'Male', 2.01, 188.24, 'Latveria', 6, 4, 5, 6, 6, 4);
INSERT INTO marvels VALUES(11, 'Jean Greay', 8, 'Good', 'Female', 1.68, 52.16, 'USA', 3, 2, 7, 7, 7, 4);
INSERT INTO marvels VALUES(12, 'Rogue', 4, 'Good', 'Female', 1.73, 54.43, 'USA', 7, 7, 7, 7, 7, 7);
INSERT INTO Marvels VALUES(13, 'Storm', 2, 'Good', 'Female', 1.80, 66, 'Kenya', 2, 2, 3, 2, 5, 4);
INSERT INTO Marvels VALUES(14, 'Nightcrawler', 6, 'Good', 'Male', 1.75, 73, 'Germany', 3, 2, 7, 2, 1, 3);
INSERT INTO Marvels VALUES(15, 'Gambit', 7, 'Good', 'Male', 1.88, 81, 'EUA', 2, 2, 2, 2, 2, 4);
INSERT INTO Marvels VALUES(16, 'Captain America', 9, 'Good', 'Male', 1.88, 108, 'EUA', 3, 3, 2, 3, 1, 6);
INSERT INTO Marvels VALUES(17, 'Cyclops', 10, 'Good', 'Male', 1.90, 88, 'EUA', 3, 2, 2, 2, 5, 4);
INSERT INTO Marvels VALUES(18, 'Emma Frost', 12, 'Neutral', 'Female', 1.78, 65, 'EUA', 4, 4, 2, 5, 5, 3);
INSERT INTO Marvels VALUES(19, 'Kitty Pryde', 13, 'Good', 'Female', 1.68, 50, 'EUA', 4, 2, 2, 3, 1, 5);
INSERT INTO Marvels VALUES(20, 'Daredevil', 14, 'Good', 'Male', 1.83, 91, 'EUA', 3, 3, 2, 2, 4, 5);
INSERT INTO Marvels VALUES(21, 'Punisher', 50, 'Neutral', 'Male', 1.85, 91, 'EUA', 3, 3, 2, 2, 1, 6);
INSERT INTO Marvels VALUES(22, 'Silver Surfer', 33, 'Good', 'Male', 1.93, 102, 'Zenn-La', 3, 7, 7, 6, 7, 2);
INSERT INTO Marvels VALUES(23, 'Ghost Rider', 86, 'Good', 'Male', 1.88, 99, 'EUA', 2, 4, 3, 5, 4, 2);
INSERT INTO Marvels VALUES(24, 'Venon', 78, 'Neutral', 'Male', 1.90, 118, 'EUA', 3, 4, 2, 6, 1, 4);
INSERT INTO Marvels VALUES(25, 'Juggernaut', 76, 'Neutral', 'Male', 2.87, 862, 'EUA', 2, 7, 2, 7, 1, 4);
INSERT INTO Marvels VALUES(26, 'Professor X', 58, 'Good', 'Male', 1.83, 86, 'EUA', 5, 2, 2, 2, 5, 3);
```

# credit
Thanks Mentrasto for the Marvel hearoes list: https://gist.github.com/Mentrasto/967148a4b41713977839
