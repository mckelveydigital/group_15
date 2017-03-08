-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 08, 2017 at 10:48 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `group_15`
--

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

CREATE TABLE `card` (
  `id` int(11) NOT NULL,
  `colour` varchar(255) NOT NULL,
  `time` date NOT NULL,
  `player_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `stage` varchar(255) NOT NULL,
  `home_goals` int(11) NOT NULL,
  `away_goals` int(11) NOT NULL,
  `date` date NOT NULL,
  `home_id` int(11) NOT NULL,
  `away_id` int(11) NOT NULL,
  `referee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `goal`
--

CREATE TABLE `goal` (
  `id` int(11) NOT NULL,
  `time` date NOT NULL,
  `away_goal` tinyint(1) NOT NULL,
  `method` varchar(255) NOT NULL,
  `player_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `date_of_birth` date NOT NULL,
  `position` varchar(50) NOT NULL,
  `shirt_number` int(3) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `referee`
--

CREATE TABLE `referee` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `nationality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `stadium`
--

CREATE TABLE `stadium` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_opened` date NOT NULL,
  `capacity` int(11) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `lat` double(23,20) NOT NULL,
  `lng` double(23,20) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `established` date NOT NULL,
  `description` text NOT NULL,
  `league` varchar(255) NOT NULL,
  `mascot` varchar(255) NOT NULL,
  `logo_path` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`, `established`, `description`, `league`, `mascot`, `logo_path`) VALUES
(1, 'Leicester City', '1884-01-01', 'Leicester City Football Club, also known as the Foxes, is an English professional football club based at the King Power Stadium in Leicester. They compete in the Premier League, England''s top tier of football, and are the current reigning champions. Having been promoted as champions of the Football League Championship in 2013 14, this signalled a return to the top flight of English football after a decade away.', 'Premier League', 'Frank the Fox', 'leicester'),
(2, 'Manchester City', '1894-11-10', 'Manchester City Football Club is a football club in Manchester, England. Founded in 1880 as St. Mark''s (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club moved to the City of Manchester Stadium in 2003, having played at Maine Road since 1923.', 'Premier League', 'Moonchester Moon Beam', 'manchestercity'),
(3, 'Arsenal FC', '1886-01-01', 'Arsenal Football Club is a professional football club based in Highbury, London, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, 12 FA Cups (a joint record), two League Cups, 14 FA Community Shields, one UEFA Cup Winners'' Cup and one Inter-Cities Fairs Cup.', 'Premier League', 'Gunnersaurus', 'arsenal'),
(4, 'Tottenham Hotspur', '1882-09-05', 'Tottenham Hotspur Football Club, commonly referred to as Spurs, is an English football club located in Tottenham, Haringey, London, that competes in the Premier League. The club''s home stadium is White Hart Lane. Their newly developed training ground is in Bulls Cross on the northern borders of the London Borough of Enfield.', 'Premier League', 'Chirpy', 'tottenham'),
(5, 'FC Barcelona', '1899-01-01', 'Founded in 1899 by a group of Swiss, English and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "MÃ©s que un club" (English: "More than a club"). Unlike many other football clubs, the supporters own and operate Barcelona. It is the second most valuable sports team in the world, worth $3.56 billion, and the world''s second richest football club in terms of revenue, with an annual turnover of â‚¬560.8 million.', 'La Liga', 'l''Avi', 'barcelona'),
(6, 'Real Madrid CF', '1902-01-01', 'Founded in 1902 as Madrid Football Club, the team has traditionally worn a white home kit since inception. The word Real is Spanish for Royal and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 85,454-capacity Santiago BernabÃ©u Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid''s members (socios) have owned and operated the club throughout its history.', 'La Liga', 'The Banker', 'realmadrid'),
(7, 'AtlÃ©tico Madrid', '1903-04-26', 'In terms of UEFA competition titles won, AtlÃ©tico Madrid is Spain''s third most successful club behind Real Madrid and Barcelona. In terms of the number of titles, AtlÃ©tico Madrid is the fourth most successful club in Spanish football, behind Barcelona, Real Madrid and Athletic Bilbao. AtlÃ©tico have won La Liga on ten occasions, including a league and cup double in 1996; the Copa del Rey on ten occasions; two Supercopas de EspaÃ±a and one Copa Eva Duarte; in Europe, they won the European Cup Winners'' Cup in 1962, were runners-up in 1963 and 1986, were European Cup runners-up in 1974, 2014 and 2016,[2] won the Europa League in 2010 and in 2012, won the UEFA Super Cup in 2010 and 2012, as well as the 1974 Intercontinental Cup.', 'La Liga', 'Locco', 'athleticomadrid'),
(8, 'Sevilla', '1890-01-25', 'Sevilla Football Club, S.A.D. is Spainâ€™s oldest club solely devoted to football practice. Sevilla FC is based in Seville, capital and largest city of the autonomous community of Andalusia. Sevilla FC is one of the teams that play in Spainâ€™s top flight, La Liga. The club was formed on 25 January 1890, Scot Mr. Edward Farquharson Johnston being their first president. A few years later, on October 14, 1905, the clubâ€™s articles of association were registered in the Civil Government of Seville under the presidency of the Jerez-born JosÃ© Luis Gallegos Arnosa.', 'La Liga', 'The Savage', 'sevilla'),
(9, 'Villarreal CF', '1923-01-01', 'Villarreal Club de FÃºtbol, S.A.D. (Valencian: Vila-real Club de Futbol, S.A.D.), usually abbreviated to Villarreal CF or just Villarreal, is a Spanish football club based in Vila-real, a city in the province of CastellÃ³n within the Valencian Community. Founded in 1923, it plays in La Liga, holding home games at Estadio de la CerÃ¡mica, with a capacity of 24,890.', 'La Liga', 'The Villan', 'villarreal'),
(10, 'Bayern MÃ¼nchen', '1900-02-27', 'FuÃŸball-Club Bayern MÃ¼nchen e.V., commonly known as FC Bayern MÃ¼nchen, FCB, Bayern Munich, or FC Bayern, is a German sports club based in Munich, Bavaria (Bayern), Germany. It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system, and is the most successful club in German football history, having won a record 26 national titles and 18 national cups.', 'Bundesliga', 'The Bayerner', 'bayernmunich'),
(11, 'Juventus', '1897-01-01', 'Juventus Football Club S.p.A, colloquially known as Juve is a professional Italian association football club based in Turin, Piedmont. Founded in 1897 as Sport-Club Juventus by a group of young Torinese students, among them, who was their first president, Eugenio Canfari, and his brother Enrico, author of the company''s historical memory. They have been managed by the industrial Agnelli family since 1923, which constitutes the oldest sporting partnership in Italy, thus making Juventus the first professional club in the country.', 'Serie A', 'Stripey', 'juventus'),
(12, 'Benfica', '1904-02-28', 'Sport Lisboa e Benfica, commonly known as Benfica, is a Portuguese sports club based in Lisbon, Portugal. It is best known for the professional football team playing in the Primeira Liga, the top flight of Portuguese football. Benfica are the current Portuguese champions, having won three consecutive league titles.', 'Primeira Liga', 'Big Ben', 'benfica'),
(13, 'Paris Saint-Germain', '1970-01-01', 'Paris Saint-Germain Football Club is a French professional association football club based in Paris, whose first team play in the highest tier of French football, the Ligue 1. The club was formed in 1970 by the merger of Paris FC and Stade Saint-Germain. Paris Saint-Germain remain the only club to have never been relegated from Ligue 1.', 'Ligue 1', 'Mr Eifel', 'parisstgermain'),
(14, 'CSKA Moskva', '1911-01-01', 'PFC Central Sport Club of the Army, Moscow is a Russian professional football club. It is based in Moscow, playing its home matches at the 30,000-capacity Arena CSKA. The club is the most known division of the CSKA Moscow sports club. Founded in 1911, CSKA had its most successful period after World War II with five titles in six seasons. It won a total of 7 Soviet Top League championships, including the last-ever season in 1991. The club has also won 6 Russian Premier League titles, and the 2004 05 UEFA Cup.\r\n\r\n', 'Russian Premier League', 'Ivan the Red', 'cskamoscow'),
(15, 'Borussia Dortmund', '1909-12-19', 'Ballspielverein Borussia 09 e.V. Dortmund, commonly known as Borussia Dortmund BVB, or simply Dortmund, is a German sports club based in Dortmund, North Rhine-Westphalia (Borussia is the Latin equivalent of Prussia). The football team is part of a large membership-based sports club with more than 145,000 members, making BVB the second largest sports club by membership in Germany. Dortmund plays in the Bundesliga, the top tier of the German football league system. Dortmund is one of the most successful clubs in German football history.', 'Bundesliga', 'Borris The Dort', 'borussiadortmund'),
(16, 'FC Porto', '1893-09-28', 'Futebol Clube do Porto, MHIH, OM, commonly known as FC Porto or simply Porto, is a Portuguese sports club based in Porto. It is best known for the professional football team playing in the Primeira Liga, the top flight of Portuguese football. Founded on 28 September 1893, Porto is one of the "Big Three" (Portuguese: Os TrÃªs Grandes) teams in Portugal together with Lisbon-based rivals Benfica and Sporting CP  that have appeared in every season of the Primeira Liga since its establishment in 1934.', 'Primeira Liga', 'Porta Potty', 'fcporto'),
(17, 'Napoli', '1926-01-01', 'SocietÃ  Sportiva Calcio Napoli, commonly referred to as Napoli, is a professional Italian football club based in Naples, Campania. Formed in 1926, the club plays in Serie A, the top flight of Italian football. The club has won Serie A twice, and been runners-up six times, the Coppa Italia five times, the Supercoppa Italiana twice, and the 1988â€“89 UEFA Cup.', 'Serie A', 'The Napkin', 'napoli'),
(18, 'Bayer 04 Leverkusen', '1904-01-01', 'Bayer 04 Leverkusen FuÃŸball GmbH, also known as Bayer 04 Leverkusen, Bayer Leverkusen, Leverkusen or simply Bayer, is a German football club based in Leverkusen, North Rhine Westphalia. The club plays in the Bundesliga, the top tier of the German football league system, and hosts matches at the BayArena. The club was founded in 1904 by employees of the German pharmaceutical company Bayer, whose headquarters are in Leverkusen and from which the club draws its name.', 'Bundesliga', 'Lever Cousin', 'bayerleverkusen'),
(19, 'FC Basel', '1893-01-01', 'FC Basel 1893 (Fussball Club Basel 1893), widely known as FC Basel or just Basel, and sometimes referred to as FC Basle in English or FCB, is a Swiss football club based in Basel. They are one of the most successful clubs in Swiss football, having won the Swiss Super League 19 times, the second most for any Swiss club. Besides their current dynasty, they were most successful in the late 1960s and 1970s, winning the title a total of seven times between 1967 and 1980. ', 'Swiss Super League', 'Basel Brush', 'basel'),
(20, 'Dynamo Kyiv', '1927-01-01', 'Football Club Dynamo Kyiv is a Ukrainian professional football club based in Kyiv. Founded in 1927 as part of the Soviet Dynamo Sports Society, the club plays in the Ukrainian Premier League, and has never been relegated to a lower division. Their home is the 70,050 capacity Olimpiyskiy National Sports Complex.', 'Ukrainian Premier League', 'Dynamo', 'dynamokyiv'),
(21, 'Olympique Lyonnais', '1899-01-01', 'Olympique Lyonnais, commonly referred to as simply Lyon, or OL is a French football club based in Lyon. It plays in France''s highest football division, Ligue The club was formed as Lyon Olympique Universitaire in 1899, according to many supporters and sport historians, but was nationally established as a club in 1950.[1] The club''s most successful period has been the 21st century.', 'Ligue 1', 'Lyon the Lion', 'lyon'),
(22, 'PSV Eindhoven', '1913-08-31', 'The Philips Sport Vereniging, abbreviated as PSV and internationally known as PSV Eindhoven is a sports club from Eindhoven, Netherlands. It is best known for its professional football department, which plays in the Eredivisie, the Dutch football top division, since its inception in 1956. Along with Ajax and Feyenoord, PSV is one of the country''s "big three" clubs that have dominated the Eredivisie.', 'Eredivisie', 'Behindhoven', 'psveindhoven'),
(23, 'Sporting CP', '1906-07-01', 'Sporting Clube de Portugal or Sporting CP is a sports club based in Lisbon, Portugal, that is best known for its football team. The club is referred to simply as Sporting in Portuguese-speaking countries; in English-speaking countries it is often named as Sporting Lisbon (in part to differentiate from other organisations such as Sporting de GijÃ³n) but the city does not feature anywhere in the club title.', 'Primeira Liga', 'Sporty Spice', 'sportingcp'),
(24, 'Club Brugge', '1891-11-13', 'Club Brugge commonly referred to as just Club Brugge, is a football club based in Bruges in Belgium. It was founded in 1891 and its home ground is the Jan Breydel Stadium, which has a capacity of 29,472. One of the most decorated clubs in Belgian football, it has been Belgian league champion on 14 occasions, second only to major rivals Anderlecht, and it shares the Jan Breydel Stadium with city rival Cercle Brugge, with whom they contest the Bruges derby.', 'Belgian Pro League', 'Bruggles', 'clubbrugge'),
(25, 'Borussia MÃ¶nchengladbach', '1900-01-01', 'Borussia VfL 1900 MÃ¶nchengladbach e.V., commonly known as Borussia MÃ¶nchengladbach, is a German football club in MÃ¶nchengladbach, North Rhine-Westphalia. Founded in 1900, Borussia MÃ¶nchengladbach play in the Bundesliga, the top tier of the German football league system, making their first appearance in the league during the 1965 66 season. Subsequently the club became one of Germany''s best-known, best-supported, and most successful teams, winning the Bundesliga five times during the 1970s.', 'Bundesliga', 'Munchie', 'borussiamonchengladbach'),
(26, 'Celtic', '1887-01-01', 'The Celtic Football Club is a professional football club based in Glasgow, Scotland, which plays in the Scottish Premiership. The club was founded in 1887 with the purpose of alleviating poverty in the immigrant Irish population in the East End of Glasgow. They played their first match in May 1888, a friendly match against Rangers which Celtic won 5 2. Celtic established itself within Scottish football, winning six successive league titles during the first decade of the 20th century. The club enjoyed their greatest successes during the 1960s and 70s under Jock Stein when they won nine consecutive league titles and the European Cup.', 'Scottish Premiership', 'Hoopy the Huddle Hound', 'celtic'),
(27, 'AS Monaco FC', '1924-01-01', 'Association Sportive de Monaco Football Club (commonly referred to as AS Monaco or simply Monaco) is a Monaco-based football club. The club was founded in 1924 and plays in Ligue 1, the top tier of French football. The team plays its home matches at the Stade Louis II in Fontvieille. Monaco is managed by Leonardo Jardim and is captained by Radamel Falcao.', 'Ligue 1', 'Monny the Manbearpig', 'manaco'),
(28, 'BeÅŸiktaÅŸ', '1903-01-01', 'BeÅŸiktaÅŸ Jimnastik KulÃ¼bÃ¼, known as simply BeÅŸiktaÅŸ, is a Turkish sports club founded in 1903, and based in the BeÅŸiktaÅŸ district of Istanbul. The club''s football team is one of the most successful teams in Turkey, having never been relegated to a lower division. The club last won the Turkish SÃ¼per Lig championship during the 2015 16 season. The home ground of BeÅŸiktaÅŸ is Vodafone Arena, a 41,903 all-seater capacity stadium located next to DolmabahÃ§e Palace.', 'Turkish SÃ¼per Lig ', 'Basset the Hound', 'besiktas'),
(29, 'Legia Warsaw', '1916-03-05', 'Legia Warszawa, known in English as Legia Warsaw, is a professional football club based in Warsaw, Poland. Legia is one of the most successful Polish football clubs in history winning eleven Ekstraklasa Champions titles, a record 18 Polish Cup trophies and four Polish SuperCup matches. The club''s home venue is the Polish Army Stadium.', 'Ekstraklasa', 'Warmachine', 'legiawarsaw'),
(30, 'Dinamo Zagreb', '1911-01-01', 'Dinamo Zagreb, commonly referred to as GNK Dinamo Zagreb or simply Dinamo Zagreb, is a professional Croatian football club based in Zagreb. The club was founded in 1911. They play their home matches at Stadion Maksimir. They are the most successful club in Croatian football, having won 18 Prva HNL titles, 14 Croatian Football Cups and four Croatian Football Super Cups. The club has spent its entire existence in top flight, having been members of the Yugoslav First League from 1946 to 1991, and then the Croatian First League since its foundation in 1992.', 'Prva HNL', 'DynamoZ', 'dinamozagreb'),
(31, 'Ludogorets Razgrad', '2001-06-18', 'Professional Football Club Ludogorets Razgrad, commonly known as Ludogorets Razgrad, or simply as Ludogorets, is a Bulgarian association football club based in Razgrad, that competes in the Parva Liga. In their first season in A Group, Ludogorets became only the third Bulgarian team, after CSKA Sofia and Levski Sofia, to achieve a treble by winning the league, the Bulgarian Cup and the Bulgarian Supercup. Subsequently, the club also made a significant international impact in the 2013 14 UEFA Europa League, where they reached the round of 16 in their debut campaign.', 'Bulgarian First League', 'Razzy', 'ludogorets'),
(32, 'F.C. Copenhagen', '1992-07-01', 'Football Club Copenhagen is a professional Danish football club in Copenhagen, Denmark. F.C. Copenhagen is the most successful club in the history of Danish football having won the Danish Football Championship eleven times, and the Danish Cup seven times. Copenhagen is also the highest ranked Scandinavian club in the UEFA team rankings list.', 'Superliga', 'Copper', 'copenhagen'),
(33, 'FC Rostov', '1930-05-10', 'FC Rostov is a Russian professional football club based in Rostov-on-Don, Rostov Oblast. The club are currently members of the Russian Premier League and play at the Olimp-2 stadium. The club was established on 10 May 1930, and was initially named Selmashstroy. They were renamed Selmash in 1936 and Traktor in 1941. In 1950 the club joined the South Zone of the Azov-Don group of the Russian SFSR Championship', 'Russian Premier League', 'Ross', 'rostov');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `player_id` (`player_id`,`game_id`),
  ADD KEY `game_card` (`game_id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `home_id` (`home_id`,`away_id`,`referee_id`),
  ADD KEY `referee_game` (`referee_id`),
  ADD KEY `away_game` (`away_id`);

--
-- Indexes for table `goal`
--
ALTER TABLE `goal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `player_id` (`player_id`,`game_id`),
  ADD KEY `game_goal` (`game_id`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`),
  ADD KEY `team_id_2` (`team_id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `referee`
--
ALTER TABLE `referee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stadium`
--
ALTER TABLE `stadium`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `card`
--
ALTER TABLE `card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `goal`
--
ALTER TABLE `goal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `referee`
--
ALTER TABLE `referee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `stadium`
--
ALTER TABLE `stadium`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `card`
--
ALTER TABLE `card`
  ADD CONSTRAINT `player_card` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `game_card` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `home_game` FOREIGN KEY (`home_id`) REFERENCES `team` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `away_game` FOREIGN KEY (`away_id`) REFERENCES `team` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `referee_game` FOREIGN KEY (`referee_id`) REFERENCES `referee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `goal`
--
ALTER TABLE `goal`
  ADD CONSTRAINT `game_goal` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `player_goal` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `team_manager` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `team_player` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `stadium`
--
ALTER TABLE `stadium`
  ADD CONSTRAINT `stadium_team` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
