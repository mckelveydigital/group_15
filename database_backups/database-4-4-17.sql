-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2017 at 04:04 PM
-- Server version: 5.6.11-log
-- PHP Version: 7.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b00640915`
--

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

CREATE TABLE `card` (
  `id` int(11) NOT NULL,
  `colour` varchar(255) NOT NULL,
  `time` varchar(20) NOT NULL,
  `player_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `player_name` varchar(20) NOT NULL,
  `card_home_away` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `card`
--

INSERT INTO `card` (`id`, `colour`, `time`, `player_id`, `game_id`, `player_name`, `card_home_away`) VALUES
(1, 'Yellow', '32', 70, 1, 'Ronaldo', 'H'),
(2, 'Yellow', '78', 73, 1, 'Lacazette', 'A'),
(3, 'Red', '72', 78, 2, 'Di Maria', 'H'),
(4, 'Yellow', '23', 80, 3, 'Alves', 'H'),
(5, 'Yellow', '45', 90, 4, 'Toure', 'A'),
(6, 'Yellow', '55', 75, 6, 'Suarez', 'H'),
(7, 'Yellow', '67', 84, 7, 'Griezmann', 'H'),
(8, 'Yellow', '7', 76, 9, 'Neymar', 'A'),
(9, 'Yellow', '4', 72, 9, 'Benzema', 'H'),
(10, 'Red', '33', 81, 10, 'Higuaín', 'H'),
(11, 'Yellow', '68', 85, 12, 'Reus', 'H');

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

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`id`, `stage`, `home_goals`, `away_goals`, `date`, `home_id`, `away_id`, `referee_id`) VALUES
(1, 'Quarter Final - Leg 1', 2, 0, '2017-04-04', 6, 21, 3),
(2, 'Quarter Final - Leg 1', 1, 3, '2017-04-04', 13, 5, 1),
(3, 'Quarter Final - Leg 1', 2, 1, '2017-04-05', 11, 7, 10),
(4, 'Quarter Final - Leg 1', 2, 1, '2017-04-05', 15, 2, 2),
(5, 'Quarter Final - Leg 2', 1, 2, '2017-04-18', 21, 6, 7),
(6, 'Quarter Final - Leg 2', 1, 0, '2017-04-18', 5, 13, 12),
(7, 'Quarter Final - Leg 2', 1, 2, '2017-04-19', 7, 11, 4),
(8, 'Quarter Final - Leg 2', 0, 3, '2017-04-19', 2, 15, 6),
(9, 'Semi Final - Leg 1', 1, 0, '2017-05-09', 6, 5, 9),
(10, 'Semi Final - Leg 1', 2, 1, '2017-05-10', 11, 15, 1),
(11, 'Semi Final - Leg 2', 1, 2, '2017-05-16', 5, 6, 10),
(12, 'Semi Final - Leg 2', 0, 3, '2017-05-17', 15, 11, 12),
(13, 'Final', 3, 2, '2017-06-03', 6, 11, 9);

-- --------------------------------------------------------

--
-- Table structure for table `goal`
--

CREATE TABLE `goal` (
  `id` int(11) NOT NULL,
  `minute_scored` varchar(255) NOT NULL,
  `goal_method` varchar(255) NOT NULL,
  `player_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `player_name` varchar(20) NOT NULL,
  `goal_home_away` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `goal`
--

INSERT INTO `goal` (`id`, `minute_scored`, `goal_method`, `player_id`, `game_id`, `player_name`, `goal_home_away`) VALUES
(1, '49th Min', 'Right Foot ', 70, 1, 'Ronaldo', 'H'),
(2, '68th Min ', 'Header ', 71, 1, 'Ramos', 'H'),
(3, '4th Min', 'Left Foot ', 74, 2, 'Messi', 'A'),
(4, '16th Min', 'Right Foot ', 77, 2, 'Cavani', 'H'),
(5, '52nd Min ', 'Header ', 76, 2, 'Neymar', 'A'),
(6, '70th Min ', 'Left Foot ', 75, 2, 'Suarez', 'A'),
(7, '32nd Min', 'Header ', 81, 3, 'Higuaín', 'H'),
(8, '44th Min ', 'Right Foot ', 83, 3, 'Torres', 'A'),
(9, '72nd Min', 'Left Foot ', 80, 3, 'Alves', 'H'),
(10, '2nd Min ', 'Header ', 87, 4, 'Gotze', 'H'),
(11, '34th Min ', 'Right Foot ', 88, 4, 'Aguero', 'A'),
(12, '74th Min ', 'Header ', 86, 4, 'Aubameyang', 'H'),
(13, '58th Min ', 'Right Foot ', 70, 5, 'Ronaldo', 'H'),
(14, '41st Min ', 'Left Foot ', 72, 5, 'Benzema', 'H'),
(15, '87th Min ', 'Penalty ', 73, 5, 'Lacazette', 'A'),
(16, '33rd Min ', 'Left Foot ', 74, 6, 'Messi', 'H'),
(17, '25th Min ', 'Right Foot ', 84, 7, 'Griezmann', 'H'),
(18, '64th Min ', 'Penalty ', 79, 7, 'Dybala', 'A'),
(19, '85th Min', 'Left Foot', 81, 7, 'Higuaín', 'A'),
(20, '5th Min ', 'Right Foot ', 87, 8, 'Gotze', 'A'),
(21, '24th Min ', 'Header ', 87, 8, 'Gotze', 'A'),
(22, '74th Min ', 'Left Foot ', 85, 8, 'Reus', 'A'),
(23, '55th Min ', 'Header ', 71, 9, 'Ramos ', 'H'),
(26, '78th Min ', 'Right Foot ', 81, 10, 'Higuaín', 'A'),
(27, '63rd Min ', 'Left Foot ', 81, 10, 'Higuaín', 'A'),
(29, '8th Min ', 'Left Foot', 74, 11, 'Messi', 'H'),
(30, '53rd Min ', 'Right Foot ', 72, 11, 'Benzema', 'A'),
(39, '61', 'Right Foot ', 82, 10, 'Mandzukic', 'A'),
(40, '63', 'Header', 72, 11, 'Benzema', 'A'),
(41, '41', 'Right Foot ', 81, 12, 'Higuaín', 'A'),
(42, '57', 'Left Foot', 82, 12, 'Mandzukic', 'A'),
(43, '74', 'Left Foot', 80, 12, 'Alves', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`id`, `first_name`, `last_name`, `date_of_birth`, `team_id`) VALUES
(1, 'Craig', 'Shakespeare', '1986-10-26', 1),
(2, 'Pep', 'Guardiola', '1971-01-18', 2),
(3, 'Arsene', 'Wenger', '1949-10-22', 3),
(4, 'Mauricio', 'Pochettino', '1972-03-02', 4),
(5, 'Luis', 'Enrique', '1970-05-08', 5),
(6, 'Zinedine', 'Zidane', '1972-06-23', 6),
(7, 'Diego', 'Simeone', '1970-04-28', 7),
(8, 'Jorge', 'Sampaoli', '1960-03-13', 8),
(9, 'Fran', 'Escriba', '1965-05-03', 9),
(10, 'Carlo', 'Ancelotti', '1969-06-10', 10),
(11, 'Massimiliano', 'Allegri', '1967-08-11', 11),
(12, 'Rui', 'Vitoria', '1970-04-16', 12),
(13, 'Unai', 'Emery', '1971-11-03', 13),
(14, 'Viktor', 'Goncharenko', '1977-06-10', 14),
(15, 'Thomas', 'Tuchel', '1973-08-29', 15),
(16, 'Nuno', 'Espirito Santo', '1974-01-25', 16),
(17, 'Maurizio', 'Sarri', '1959-01-10', 17),
(18, 'Tayfun', 'Korkut', '1974-04-02', 18),
(19, 'Urs', 'Fischer', '1966-02-20', 19),
(20, 'Serhiy', 'Rebrov', '1974-06-03', 20),
(21, 'Bruno', 'Genesio', '1966-09-01', 21),
(22, 'Phillip', 'Cocu', '1970-10-29', 22),
(23, 'Jorge', 'Jesus', '1954-07-24', 23),
(24, 'Michel', 'Preudhomme', '1959-01-24', 24),
(25, 'Dieter', 'Hecking', '1964-09-12', 25),
(26, 'Brendan', 'Rodgers', '1973-01-26', 26),
(27, 'Leonardo', 'Jardim', '1974-08-01', 27),
(28, 'Senol', 'Gunes', '1952-06-01', 28),
(29, 'Jacek', 'Magiera', '1977-01-01', 29),
(30, 'Ivaylo', 'Petev', '1975-07-09', 30),
(31, 'Georgi', 'Dermendzhiev', '1955-01-04', 31),
(32, 'Stale', 'Solbakken', '1968-02-27', 32),
(33, 'Ivan', 'Daniliants', '1953-02-20', 33);

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
  `nationality` varchar(50) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`id`, `first_name`, `last_name`, `date_of_birth`, `position`, `shirt_number`, `nationality`, `team_id`) VALUES
(2, 'Kasper', 'Schmeichel', '1986-11-05', 'Goalkeeper', 1, 'Denmark', 1),
(3, 'Ben', 'Chilwell', '1996-12-21', 'Defender', 3, 'England', 1),
(4, 'Danny', 'Drinkwater', '1990-03-05', 'Midfielder', 4, 'England', 1),
(5, 'Wes', 'Morgan', '1984-01-21', 'Defender', 5, 'Jamaica', 1),
(6, 'Robert', 'Huth', '1984-08-18', 'Defender', 6, 'Germany', 1),
(7, 'Ahmed', 'Musa', '1992-10-14', 'Forward', 7, 'Nigeria', 1),
(8, 'Jamie', 'Vardy', '1987-01-11', 'Forward', 9, 'England', 1),
(9, 'Andy', 'King', '1988-10-29', 'Midfielder', 10, 'Wales', 1),
(10, 'Marc', 'Albrighton', '1989-11-18', 'Midfield', 11, 'England', 1),
(11, 'Ben', 'Hamer', '1987-11-20', 'Goalkeeper', 12, 'England', 1),
(12, 'Daniel', 'Amartey', '1994-12-01', 'Midfielder', 13, 'Ghana', 1),
(13, 'Bartosz', 'Kapustka', '1996-12-23', 'Midfielder', 14, 'Poland', 1),
(14, 'Danny', 'Simpson', '1987-01-04', 'Defender', 17, 'England', 1),
(15, 'Islam', 'Slimani', '1988-06-19', 'Forward', 19, 'Algeria', 1),
(16, 'Shinji', 'Okazaki', '1986-04-16', 'Forward', 20, 'Japan', 1),
(17, 'Ron-Robert', 'Zieler', '1989-02-12', 'Goalkeeper', 21, 'Germany', 1),
(18, 'Demarai', 'Gray', '1996-06-28', 'Midfielder', 22, 'England', 1),
(19, 'Leonardo', 'Ulloa', '1986-07-26', 'Forward', 23, 'Argentina', 1),
(20, 'Nampalys', 'Mendy', '1992-06-09', 'Defender', 24, 'France', 1),
(21, 'Onyinye', 'Ndidi', '1996-12-16', 'Defender', 25, 'Nigeria', 1),
(22, 'Riyad', 'Mahrez', '1991-02-21', 'Midfielder', 26, 'Algeria', 1),
(23, 'Marcin', 'Wasilewski', '1980-06-09', 'Defender', 27, 'Polish', 1),
(24, 'Christian', 'Fuchs', '1986-04-07', 'Defender', 28, 'Polish', 1),
(25, 'Yohan', 'Benalouane', '1987-03-28', 'Defender', 29, 'Tunisia', 1),
(26, 'Claudio', 'Bravo', '1983-04-13', 'Goalkeeper', 1, 'Chile', 2),
(27, 'Willy', 'Caballero', '1981-09-21', 'Goalkeeper', 13, 'Argentina', 2),
(28, 'Gael', 'Clichy', '1985-07-26', 'Defender', 22, 'France', 2),
(29, 'John', 'Stones', '1994-05-28', 'Defender', 24, 'England', 2),
(30, 'Nicolas', 'Otamendi', '1988-02-12', 'Defender', 30, 'Argentina', 2),
(31, 'Aleksandar', 'Kolarov', '1985-11-10', 'Defender', 11, 'Serbia', 2),
(32, 'Vincent', 'Kompany', '1986-04-10', 'Defender', 4, 'Belguim', 2),
(33, 'Bacary', 'Sagna', '1983-02-14', 'Defender', 3, 'France', 2),
(34, 'Ilkay', 'Gundogan', '1990-10-24', 'Midfielder', 8, 'Germany', 2),
(35, 'Pablo', 'Zabaleta', '1985-01-16', 'Defender', 5, 'Argentina', 2),
(36, 'Kevin', 'De Bruyne', '1991-06-28', 'Midfielder', 17, 'Belguim', 2),
(37, 'Leroy', 'Sane', '1996-01-11', 'Midfielder', 19, 'Germany', 2),
(38, 'Fabian', 'Delph', '1989-11-21', 'Midfielder', 18, 'England', 2),
(39, 'Fernandinho', 'Luiz Roza', '1985-05-04', 'Midfielder', 25, 'Brazil', 2),
(40, 'Jesus', 'Navas', '1985-11-21', 'Midfielder', 15, 'Spanish', 2),
(41, 'David', 'Silva', '1986-01-08', 'Midfielder', 21, 'Spain', 2),
(42, 'Raheem', 'Sterling', '1994-12-08', 'Midfielder', 7, 'England', 2),
(43, 'Yaya', 'Toure', '1983-05-13', 'Midfielder', 42, 'Ivory Coast', 2),
(44, 'Gabriel', 'Jesus', '1997-04-03', 'Forward', 33, 'Brazil', 2),
(45, 'Dave', 'Nolito', '1986-10-15', 'Forward', 9, 'Spain', 2),
(46, 'Sergio', 'Aguero', '1988-06-02', 'Forward', 10, 'Argentina', 2),
(47, 'Kelechi', 'Iheanacho', '1996-10-03', 'Forward', 72, 'Nigeria', 2),
(48, 'David', 'Ospina', '1988-08-31', 'Goalkeeper', 13, 'Colombia', 3),
(49, 'Peter', 'Cech', '1982-05-20', 'Goalkeeper', 33, 'Czech Republic', 3),
(50, 'Mathieu', 'Debuchy', '1985-07-28', 'Defender', 2, 'France', 3),
(51, 'Kieran', 'Gibbs', '1989-12-26', 'Defender', 3, 'England', 3),
(52, 'Per', 'Mertesacker', '1984-09-29', 'Defender', 4, 'Germany', 3),
(53, 'Hank', 'Gabriel', '1990-11-22', 'Defender', 5, 'Brazil', 3),
(54, 'Laurent', 'Koscielny', '1985-09-10', 'Defender', 6, 'France', 3),
(55, 'Nacho', 'Monreal', '1986-02-22', 'Defender', 18, 'Spain', 3),
(56, 'Shkodran', 'Mustafi', '1992-04-17', 'Defender', 20, 'Germany', 3),
(57, 'Hector', 'Bellerin', '1995-03-19', 'Defender', 24, 'Spain', 3),
(58, 'Aaron', 'Ramsey', '1990-12-26', 'Midfielder', 8, 'Wales', 3),
(59, 'Mesut', 'Ozil', '1988-10-15', 'Midfielder', 11, 'Germany', 3),
(60, 'Alex', 'Oxlade-Chamberlain', '1993-08-15', 'Midfielder', 15, 'England', 3),
(61, 'Santi', 'Cazorla', '1984-12-13', 'Midfielder', 19, 'Spain', 3),
(62, 'Granit', 'Xhaka', '1992-09-22', 'Midfielder', 29, 'Switzerland', 3),
(63, 'Francis', 'Coquelin', '1991-05-13', 'Midfielder', 34, 'France', 3),
(64, 'Alexis', 'Sanchez', '1988-12-19', 'Forward', 17, 'Chile', 3),
(65, 'Lucas', 'Perez', '1988-09-10', 'Forward', 9, 'Spain', 3),
(66, 'Oliver', 'Grouid', '1986-09-30', 'Forward', 12, 'France', 3),
(67, 'Theo', 'Walcott', '1986-09-30', 'Forward', 14, 'England', 3),
(68, 'Alex', 'Iwobi', '1996-05-03', 'Forward', 17, 'Nigeria', 3),
(69, 'Danny', 'Welbeck', '1990-11-26', 'Forward', 19, 'England', 3),
(70, 'Cristiano ', 'Ronaldo', '1988-03-01', 'Forward', 7, 'Portuguese', 6),
(71, 'Sergio ', 'Ramos', '1984-04-12', 'Defender', 4, 'Spanish ', 6),
(72, 'Karim ', 'Benzema', '1990-06-12', 'Forward', 9, 'French ', 6),
(73, 'Alexandre ', 'Lacazette', '1990-01-10', 'Forward ', 10, 'French ', 21),
(74, 'Lionel ', 'Messi', '1987-05-10', 'Forward ', 10, 'Argentinian', 5),
(75, 'Luis', 'Suarez', '1976-06-15', 'Forward', 9, 'Uruguayan', 5),
(76, 'Da Silva', 'Neymar', '1990-10-10', 'Forward', 11, 'Brazilian ', 5),
(77, 'Edinson', 'Cavani', '1976-06-20', 'Forward', 9, 'Uruguayan', 13),
(78, 'Angel', 'Di Maria', '1988-03-13', 'Midfielder ', 11, 'Argentinian', 13),
(79, 'Paulo ', 'Dybala', '1980-06-15', 'Forward ', 19, 'Argentine', 11),
(80, 'Dani ', 'Alves ', '1982-06-08', 'Defender ', 2, 'Brazilan ', 11),
(81, 'Gonzalo ', 'Higuaín', '1984-06-07', 'Forward ', 9, 'Argentinian', 11),
(82, 'Mario', 'Mandzukic', '1974-10-09', 'Forward', 19, 'Croatian ', 11),
(83, 'Fernando ', 'Torres ', '1979-10-20', 'Forward ', 9, 'Spanish ', 7),
(84, 'Antoine', 'Griezmann', '1991-03-16', 'Forward ', 7, 'French ', 7),
(85, 'Marco ', 'Reus ', '1986-07-13', 'Midfielder ', 11, 'German ', 15),
(86, 'Pierre-Emerick', 'Aubameyang', '1990-10-04', 'Forward ', 17, 'Gambian ', 15),
(87, 'Mario ', 'Gotze ', '1987-05-31', 'Midfielder ', 10, 'German ', 15),
(88, 'Sergio ', 'Aguero', '1991-05-17', 'Forward ', 11, 'Argentinian', 2),
(89, 'Kevin ', 'De Bruyne', '1986-08-09', 'Midfielder ', 17, 'Belgium', 2),
(90, 'Yaya ', 'Toure ', '1983-03-21', 'Midfielder ', 42, 'Ivory-Coast ', 2);

-- --------------------------------------------------------

--
-- Table structure for table `referee`
--

CREATE TABLE `referee` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `nationality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `referee`
--

INSERT INTO `referee` (`id`, `first_name`, `last_name`, `dob`, `nationality`) VALUES
(1, 'Mark', 'Clattenburg', '1975-03-13', 'English'),
(2, 'Cüneyt', 'Çakir', '1976-11-23', 'Turkey'),
(3, 'Martin', 'Atkinson', '1971-03-31', 'England'),
(4, 'Nicola', 'Rizzoli', '1971-10-05', 'Italy'),
(5, 'Björn', 'Kuipers', '1973-03-28', 'Netherlands'),
(6, 'Viktor', 'Kassai', '1975-12-10', 'Hungry'),
(7, 'Felix', 'Brych', '1975-08-03', 'Germany'),
(8, 'Damir', 'Skomina', '1976-08-05', 'Slovenia'),
(9, 'Jonas', 'Eriksson', '1974-03-28', 'Sweden'),
(10, 'Paolo', 'Tagliavento', '1972-09-19', 'Italy'),
(11, 'Milorad', 'Mažic', '1973-03-23', 'Serbia'),
(12, 'Deniz', 'Aytekin', '1978-07-21', 'Germany');

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

--
-- Dumping data for table `stadium`
--

INSERT INTO `stadium` (`id`, `name`, `date_opened`, `capacity`, `country`, `city`, `lat`, `lng`, `team_id`) VALUES
(1, 'King Power Stadium', '2002-07-23', 32312, 'England', 'Leicester', 52.62036930000000000000, -1.14218150000000000000, 1),
(2, 'Etihad Stadium', '2003-08-10', 55097, 'England', 'Manchester', 53.48313810000000000000, -2.20039530000000000000, 2),
(3, 'Emirates Stadium', '2006-07-22', 60432, 'England', 'London', 51.55488850000000000000, -0.10843800000000003000, 3),
(4, 'White Heart Lane', '1899-12-04', 36284, 'England', 'London', 51.60321230000000000000, -0.06573890000000004000, 4),
(5, 'Camp Nou', '1957-09-24', 99354, 'Spain', 'Barcelona', 41.38089600000000000000, 2.12281980000000000000, 5),
(6, 'Santiago Bernabeu', '1947-12-14', 81044, 'Spain', 'Madrid', 40.45305410000000000000, -3.68834450000000000000, 6),
(7, 'Vicente Calderon', '1967-10-02', 54907, 'Spain', 'Madrid', 40.40172430000000000000, -3.72063520000000000000, 7),
(8, 'Ramon Sanchez Pizjuan Stadium', '1958-09-07', 42500, 'Spain', 'Sevilla', 37.38406550000000000000, -5.97069020000000000000, 8),
(9, 'Estadio de la Cerámica', '1923-06-17', 24890, 'Spain', 'Villareal', 39.94410070000000000000, -0.10353319999999999000, 9),
(10, 'Allianz Arena', '2005-05-30', 75021, 'Germany', 'Munich', 48.21879970000000000000, 11.62470720000000000000, 10),
(11, 'Juventus Stadium', '2011-09-08', 41507, 'Italy', 'Turin', 45.10956900000000000000, 7.64126440000000000000, 11),
(12, 'Estadio da Luz', '2003-10-23', 64642, 'Portugal', 'Lisbon', 38.75271100000000000000, -9.18477400000000000000, 12),
(13, 'Parc des Princes', '1972-06-04', 48583, 'France', 'Paris', 48.84143560000000000000, 2.25304870000000000000, 13),
(14, 'VEB Arena', '2016-09-10', 30000, 'Russia', 'Moscow', 55.79141590000000000000, 37.51582750000000000000, 14),
(15, 'Westfalenstadion', '1974-04-02', 81360, 'Germany', 'Dortmund', 51.49258880000000000000, 7.45185740000000000000, 15),
(16, 'Estadio do Dragao', '2003-11-16', 52000, 'Portugal', 'Porto', 41.16177000000000000000, -8.58359100000000000000, 16),
(17, 'Stadio San Paolo', '1959-12-06', 60240, 'Italy', 'Naples', 40.82793650000000000000, 14.19306110000000000000, 17),
(18, 'BayArena', '1958-08-02', 30210, 'Germany', 'Leverkusen', 51.03820910000000000000, 7.00225660000000000000, 18),
(19, 'St. Jakob-Park', '2001-03-15', 37500, 'Switzerland', 'Basel', 47.54158940000000000000, 7.62007560000000000000, 19),
(20, 'Olimpiyskiy Stadium', '1923-08-12', 70050, 'Ukraine', 'Kiev', 50.43340580000000000000, 30.52185600000000000000, 20),
(21, 'Parc Olympique Lyonnais', '2016-01-09', 59186, 'France', 'Lyon', 45.76529500000000000000, 4.98202900000000000000, 21),
(22, 'Philips Stadion', '1910-12-12', 35000, 'Netherlands', 'Eindhoven', 51.44173410000000000000, 5.46744780000000000000, 22),
(23, 'Estadio Jose Alvalade', '2003-08-06', 50095, 'Portugal', 'Lisbon', 38.76122990000000000000, -9.16179560000000000000, 23),
(24, 'Jan Breydel Stadium', '1975-03-16', 29062, 'Belgium', 'Brugge', 51.19335570000000000000, 3.18060910000000000000, 24),
(25, 'Borussia Park', '2004-07-30', 54057, 'Germany', 'Monchengladbach', 51.17456980000000000000, 6.38550550000000000000, 25),
(26, 'Celtic Park', '1892-08-20', 60832, 'Scotland', 'Glasgow', 55.84969600000000000000, -4.20554270000000000000, 26),
(27, 'Stade Louis II', '1985-01-25', 18523, 'France', 'Monaco', 43.72758830000000000000, 7.41549590000000000000, 27),
(28, 'Vodafone Arena', '2016-04-10', 41093, 'Turkey', 'Istanbul', 41.03940360000000000000, 28.99418210000000000000, 28),
(29, 'Polish Army Stadium', '1930-08-09', 31800, 'Poland', 'Warsaw', 52.22046100000000000000, 21.04062800000000000000, 29),
(30, 'Stadion Maksimir', '1912-05-05', 35123, 'Croatia', 'Zagreb', 45.81855670000000000000, 16.01666560000000000000, 30),
(31, 'Ludogorets Arena', '2011-09-25', 8808, 'Bulgaria', 'Razgrad', 43.53459010000000000000, 26.52742720000000000000, 31),
(32, 'Parken Stadium', '1992-09-09', 38065, 'Denmark', 'Copenhagen', 55.70229870000000000000, 12.57155640000000000000, 32),
(33, 'Olimp-2', '1930-03-10', 15840, 'Rostov', 'Russia', 47.24301860000000000000, 39.76095310000000000000, 33);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`, `established`, `description`, `league`, `mascot`, `logo_path`) VALUES
(1, 'Leicester City', '1884-01-01', 'Leicester City Football Club, also known as the Foxes, is an English professional football club based at the King Power Stadium in Leicester. They compete in the Premier League, England\'s top tier of football, and are the current reigning champions. Having been promoted as champions of the Football League Championship in 2013 14, this signalled a return to the top flight of English football after a decade away.', 'Premier League', 'Frank the Fox', 'leicester'),
(2, 'Manchester City', '1894-11-10', 'Manchester City Football Club is a football club in Manchester, England. Founded in 1880 as St. Mark\'s (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club moved to the City of Manchester Stadium in 2003, having played at Maine Road since 1923.', 'Premier League', 'Moonchester Moon Beam', 'manchestercity'),
(3, 'Arsenal FC', '1886-01-01', 'Arsenal Football Club is a professional football club based in Highbury, London, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, 12 FA Cups (a joint record), two League Cups, 14 FA Community Shields, one UEFA Cup Winners\' Cup and one Inter-Cities Fairs Cup.', 'Premier League', 'Gunnersaurus', 'arsenal'),
(4, 'Tottenham Hotspur', '1882-09-05', 'Tottenham Hotspur Football Club, commonly referred to as Spurs, is an English football club located in Tottenham, Haringey, London, that competes in the Premier League. The club\'s home stadium is White Hart Lane. Their newly developed training ground is in Bulls Cross on the northern borders of the London Borough of Enfield.', 'Premier League', 'Chirpy', 'tottenham'),
(5, 'FC Barcelona', '1899-01-01', 'Founded in 1899 by a group of Swiss, English and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "MÃ©s que un club" (English: "More than a club"). Unlike many other football clubs, the supporters own and operate Barcelona. It is the second most valuable sports team in the world, worth $3.56 billion, and the world\'s second richest football club in terms of revenue, with an annual turnover of â‚¬560.8 million.', 'La Liga', 'l\'Avi', 'barcelona'),
(6, 'Real Madrid CF', '1902-01-01', 'Founded in 1902 as Madrid Football Club, the team has traditionally worn a white home kit since inception. The word Real is Spanish for Royal and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 85,454-capacity Santiago BernabÃ©u Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid\'s members (socios) have owned and operated the club throughout its history.', 'La Liga', 'The Banker', 'realmadrid'),
(7, 'Atletico Madrid', '1903-04-26', 'In terms of UEFA competition titles won, Atletico Madrid is Spain\'s third most successful club behind Real Madrid and Barcelona. In terms of the number of titles, AtlÃ©tico Madrid is the fourth most successful club in Spanish football, behind Barcelona, Real Madrid and Athletic Bilbao. AtlÃ©tico have won La Liga on ten occasions, including a league and cup double in 1996; the Copa del Rey on ten occasions; two Supercopas de EspaÃ±a and one Copa Eva Duarte; in Europe, they won the European Cup Winners\' Cup in 1962, were runners-up in 1963 and 1986, were European Cup runners-up in 1974, 2014 and 2016,[2] won the Europa League in 2010 and in 2012, won the UEFA Super Cup in 2010 and 2012, as well as the 1974 Intercontinental Cup.', 'La Liga', 'Locco', 'athleticomadrid'),
(8, 'Sevilla', '1890-01-25', 'Sevilla Football Club, S.A.D. is Spains oldest club solely devoted to football practice. Sevilla FC is based in Seville, capital and largest city of the autonomous community of Andalusia. Sevilla FC is one of the teams that play in Spainâ€™s top flight, La Liga. The club was formed on 25 January 1890, Scot Mr. Edward Farquharson Johnston being their first president. A few years later, on October 14, 1905, the clubâ€™s articles of association were registered in the Civil Government of Seville under the presidency of the Jerez-born JosÃ© Luis Gallegos Arnosa.', 'La Liga', 'The Savage', 'sevilla'),
(9, 'Villarreal CF', '1923-01-01', 'Villarreal Club de FÃºtbol, S.A.D. (Valencian: Vila-real Club de Futbol, S.A.D.), usually abbreviated to Villarreal CF or just Villarreal, is a Spanish football club based in Vila-real, a city in the province of CastellÃ³n within the Valencian Community. Founded in 1923, it plays in La Liga, holding home games at Estadio de la CerÃ¡mica, with a capacity of 24,890.Football', 'La Liga', 'The Villan', 'villarreal'),
(10, 'Bayern Munich', '1900-02-27', 'Football-Club Bayern Munich e.V., commonly known as FC Bayern Munich, FCB, Bayern Munich, or FC Bayern, is a German sports club based in Munich, Bavaria (Bayern), Germany. It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system, and is the most successful club in German football history, having won a record 26 national titles and 18 national cups.', 'Bundesliga', 'The Bayerner', 'bayernmunich'),
(11, 'Juventus', '1897-01-01', 'Juventus Football Club S.p.A, colloquially known as Juve is a professional Italian association football club based in Turin, Piedmont. Founded in 1897 as Sport-Club Juventus by a group of young Torinese students, among them, who was their first president, Eugenio Canfari, and his brother Enrico, author of the company\'s historical memory. They have been managed by the industrial Agnelli family since 1923, which constitutes the oldest sporting partnership in Italy, thus making Juventus the first professional club in the country.', 'Serie A', 'Stripey', 'juventus'),
(12, 'Benfica', '1904-02-28', 'Sport Lisboa e Benfica, commonly known as Benfica, is a Portuguese sports club based in Lisbon, Portugal. It is best known for the professional football team playing in the Primeira Liga, the top flight of Portuguese football. Benfica are the current Portuguese champions, having won three consecutive league titles.', 'Primeira Liga', 'Big Ben', 'benfica'),
(13, 'Paris Saint-Germain', '1970-01-01', 'Paris Saint-Germain Football Club is a French professional association football club based in Paris, whose first team play in the highest tier of French football, the Ligue 1. The club was formed in 1970 by the merger of Paris FC and Stade Saint-Germain. Paris Saint-Germain remain the only club to have never been relegated from Ligue 1.', 'Ligue 1', 'Mr Eifel', 'parisstgermain'),
(14, 'CSKA Moskva', '1911-01-01', 'PFC Central Sport Club of the Army, Moscow is a Russian professional football club. It is based in Moscow, playing its home matches at the 30,000-capacity Arena CSKA. The club is the most known division of the CSKA Moscow sports club. Founded in 1911, CSKA had its most successful period after World War II with five titles in six seasons. It won a total of 7 Soviet Top League championships, including the last-ever season in 1991. The club has also won 6 Russian Premier League titles, and the 2004 05 UEFA Cup.\r\n\r\n', 'Russian Premier League', 'Ivan the Red', 'cskamoscow'),
(15, 'Borussia Dortmund', '1909-12-19', 'Ballspielverein Borussia 09 e.V. Dortmund, commonly known as Borussia Dortmund BVB, or simply Dortmund, is a German sports club based in Dortmund, North Rhine-Westphalia (Borussia is the Latin equivalent of Prussia). The football team is part of a large membership-based sports club with more than 145,000 members, making BVB the second largest sports club by membership in Germany. Dortmund plays in the Bundesliga, the top tier of the German football league system. Dortmund is one of the most successful clubs in German football history.', 'Bundesliga', 'Borris The Dort', 'borussiadortmund'),
(16, 'FC Porto', '1893-09-28', 'Futebol Clube do Porto, MHIH, OM, commonly known as FC Porto or simply Porto, is a Portuguese sports club based in Porto. It is best known for the professional football team playing in the Primeira Liga, the top flight of Portuguese football. Founded on 28 September 1893, Porto is one of the "Big Three" (Portuguese: Os TrÃªs Grandes) teams in Portugal together with Lisbon-based rivals Benfica and Sporting CP  that have appeared in every season of the Primeira Liga since its establishment in 1934.', 'Primeira Liga', 'Porta Potty', 'fcporto'),
(17, 'Napoli', '1926-01-01', 'SocietÃ  Sportiva Calcio Napoli, commonly referred to as Napoli, is a professional Italian football club based in Naples, Campania. Formed in 1926, the club plays in Serie A, the top flight of Italian football. The club has won Serie A twice, and been runners-up six times, the Coppa Italia five times, the Supercoppa Italiana twice, and the 1988â€“89 UEFA Cup.', 'Serie A', 'The Napkin', 'napoli'),
(18, 'Bayer 04 Leverkusen', '1904-01-01', 'Bayer 04 Leverkusen FuÃŸball GmbH, also known as Bayer 04 Leverkusen, Bayer Leverkusen, Leverkusen or simply Bayer, is a German football club based in Leverkusen, North Rhine Westphalia. The club plays in the Bundesliga, the top tier of the German football league system, and hosts matches at the BayArena. The club was founded in 1904 by employees of the German pharmaceutical company Bayer, whose headquarters are in Leverkusen and from which the club draws its name.', 'Bundesliga', 'Lever Cousin', 'bayerleverkusen'),
(19, 'FC Basel', '1893-01-01', 'FC Basel 1893 (Fussball Club Basel 1893), widely known as FC Basel or just Basel, and sometimes referred to as FC Basle in English or FCB, is a Swiss football club based in Basel. They are one of the most successful clubs in Swiss football, having won the Swiss Super League 19 times, the second most for any Swiss club. Besides their current dynasty, they were most successful in the late 1960s and 1970s, winning the title a total of seven times between 1967 and 1980. ', 'Swiss Super League', 'Basel Brush', 'basel'),
(20, 'Dynamo Kyiv', '1927-01-01', 'Football Club Dynamo Kyiv is a Ukrainian professional football club based in Kyiv. Founded in 1927 as part of the Soviet Dynamo Sports Society, the club plays in the Ukrainian Premier League, and has never been relegated to a lower division. Their home is the 70,050 capacity Olimpiyskiy National Sports Complex.', 'Ukrainian Premier League', 'Dynamo', 'dynamokyiv'),
(21, 'Olympique Lyonnais', '1899-01-01', 'Olympique Lyonnais, commonly referred to as simply Lyon, or OL is a French football club based in Lyon. It plays in France\'s highest football division, Ligue The club was formed as Lyon Olympique Universitaire in 1899, according to many supporters and sport historians, but was nationally established as a club in 1950.[1] The club\'s most successful period has been the 21st century.', 'Ligue 1', 'Lyon the Lion', 'lyon'),
(22, 'PSV Eindhoven', '1913-08-31', 'The Philips Sport Vereniging, abbreviated as PSV and internationally known as PSV Eindhoven is a sports club from Eindhoven, Netherlands. It is best known for its professional football department, which plays in the Eredivisie, the Dutch football top division, since its inception in 1956. Along with Ajax and Feyenoord, PSV is one of the country\'s "big three" clubs that have dominated the Eredivisie.', 'Eredivisie', 'Behindhoven', 'psveindhoven'),
(23, 'Sporting CP', '1906-07-01', 'Sporting Clube de Portugal or Sporting CP is a sports club based in Lisbon, Portugal, that is best known for its football team. The club is referred to simply as Sporting in Portuguese-speaking countries; in English-speaking countries it is often named as Sporting Lisbon (in part to differentiate from other organisations such as Sporting de GijÃ³n) but the city does not feature anywhere in the club title.', 'Primeira Liga', 'Sporty Spice', 'sportingcp'),
(24, 'Club Brugge', '1891-11-13', 'Club Brugge commonly referred to as just Club Brugge, is a football club based in Bruges in Belgium. It was founded in 1891 and its home ground is the Jan Breydel Stadium, which has a capacity of 29,472. One of the most decorated clubs in Belgian football, it has been Belgian league champion on 14 occasions, second only to major rivals Anderlecht, and it shares the Jan Breydel Stadium with city rival Cercle Brugge, with whom they contest the Bruges derby.', 'Belgian Pro League', 'Bruggles', 'clubbrugge'),
(25, 'Borussia MÃ¶nchengladbach', '1900-01-01', 'Borussia VfL 1900 MÃ¶nchengladbach e.V., commonly known as Borussia MÃ¶nchengladbach, is a German football club in MÃ¶nchengladbach, North Rhine-Westphalia. Founded in 1900, Borussia MÃ¶nchengladbach play in the Bundesliga, the top tier of the German football league system, making their first appearance in the league during the 1965 66 season. Subsequently the club became one of Germany\'s best-known, best-supported, and most successful teams, winning the Bundesliga five times during the 1970s.', 'Bundesliga', 'Munchie', 'borussiamonchengladbach'),
(26, 'Celtic', '1887-01-01', 'The Celtic Football Club is a professional football club based in Glasgow, Scotland, which plays in the Scottish Premiership. The club was founded in 1887 with the purpose of alleviating poverty in the immigrant Irish population in the East End of Glasgow. They played their first match in May 1888, a friendly match against Rangers which Celtic won 5 2. Celtic established itself within Scottish football, winning six successive league titles during the first decade of the 20th century. The club enjoyed their greatest successes during the 1960s and 70s under Jock Stein when they won nine consecutive league titles and the European Cup.', 'Scottish Premiership', 'Hoopy the Huddle Hound', 'celtic'),
(27, 'AS Monaco FC', '1924-01-01', 'Association Sportive de Monaco Football Club (commonly referred to as AS Monaco or simply Monaco) is a Monaco-based football club. The club was founded in 1924 and plays in Ligue 1, the top tier of French football. The team plays its home matches at the Stade Louis II in Fontvieille. Monaco is managed by Leonardo Jardim and is captained by Radamel Falcao.', 'Ligue 1', 'Monny the Manbearpig', 'monaco'),
(28, 'BeÅŸiktaÅŸ', '1903-01-01', 'BeÅŸiktaÅŸ Jimnastik KulÃ¼bÃ¼, known as simply BeÅŸiktaÅŸ, is a Turkish sports club founded in 1903, and based in the BeÅŸiktaÅŸ district of Istanbul. The club\'s football team is one of the most successful teams in Turkey, having never been relegated to a lower division. The club last won the Turkish SÃ¼per Lig championship during the 2015 16 season. The home ground of BeÅŸiktaÅŸ is Vodafone Arena, a 41,903 all-seater capacity stadium located next to DolmabahÃ§e Palace.', 'Turkish SÃ¼per Lig ', 'Basset the Hound', 'besiktas'),
(29, 'Legia Warsaw', '1916-03-05', 'Legia Warszawa, known in English as Legia Warsaw, is a professional football club based in Warsaw, Poland. Legia is one of the most successful Polish football clubs in history winning eleven Ekstraklasa Champions titles, a record 18 Polish Cup trophies and four Polish SuperCup matches. The club\'s home venue is the Polish Army Stadium.', 'Ekstraklasa', 'Warmachine', 'legiawarsaw'),
(30, 'Dinamo Zagreb', '1911-01-01', 'Dinamo Zagreb, commonly referred to as GNK Dinamo Zagreb or simply Dinamo Zagreb, is a professional Croatian football club based in Zagreb. The club was founded in 1911. They play their home matches at Stadion Maksimir. They are the most successful club in Croatian football, having won 18 Prva HNL titles, 14 Croatian Football Cups and four Croatian Football Super Cups. The club has spent its entire existence in top flight, having been members of the Yugoslav First League from 1946 to 1991, and then the Croatian First League since its foundation in 1992.', 'Prva HNL', 'DynamoZ', 'dinamozagreb'),
(31, 'Ludogorets Razgrad', '2001-06-18', 'Professional Football Club Ludogorets Razgrad, commonly known as Ludogorets Razgrad, or simply as Ludogorets, is a Bulgarian association football club based in Razgrad, that competes in the Parva Liga. In their first season in A Group, Ludogorets became only the third Bulgarian team, after CSKA Sofia and Levski Sofia, to achieve a treble by winning the league, the Bulgarian Cup and the Bulgarian Supercup. Subsequently, the club also made a significant international impact in the 2013 14 UEFA Europa League, where they reached the round of 16 in their debut campaign.', 'Bulgarian First League', 'Razzy', 'ludogorets'),
(32, 'F.C. Copenhagen', '1992-07-01', 'Football Club Copenhagen is a professional Danish football club in Copenhagen, Denmark. F.C. Copenhagen is the most successful club in the history of Danish football having won the Danish Football Championship eleven times, and the Danish Cup seven times. Copenhagen is also the highest ranked Scandinavian club in the UEFA team rankings list.', 'Superliga', 'Copper', 'copenhagen'),
(33, 'FC Rostov', '1930-05-10', 'FC Rostov is a Russian professional football club based in Rostov-on-Don, Rostov Oblast. The club are currently members of the Russian Premier League and play at the Olimp-2 stadium. The club was established on 10 May 1930, and was initially named Selmashstroy. They were renamed Selmash in 1936 and Traktor in 1941. In 1950 the club joined the South Zone of the Azov-Don group of the Russian SFSR Championship', 'Russian Premier League', 'Ross', 'rostov');

-- --------------------------------------------------------

--
-- Table structure for table `test_table`
--

CREATE TABLE `test_table` (
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test_table`
--

INSERT INTO `test_table` (`fname`, `lname`) VALUES
('John ', 'Smith'),
('John ', 'Smith');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Firstname` varchar(20) NOT NULL,
  `Lastname` varchar(25) NOT NULL,
  `Age` varchar(3) NOT NULL,
  `Location` varchar(50) NOT NULL,
  `Info` varchar(200) NOT NULL,
  `Instrument` varchar(100) NOT NULL,
  `Influences` varchar(200) NOT NULL,
  `Experience` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Firstname`, `Lastname`, `Age`, `Location`, `Info`, `Instrument`, `Influences`, `Experience`) VALUES
(1, 'Joe', 'Bloggs', '22', 'Belfast', 'I am a student and in my spare time practice in my home garage with my Electric Guitar and amp', 'Lead Guitarist', 'Influences ', 'Experience '),
(2, 'Megan', 'Smith', '27', 'Amsterdam ', 'I\'ve recently moved to Amsterdam and play 6 gigs a week across the city', 'Vocalist ', 'influences ', 'experience '),
(3, 'Leon', 'Reid', '17', 'Edinburgh', 'I am currently in school and play bass in my band. We usually practise most Wednesday and Friday nights', 'Bass Guitarist ', 'Influences', 'Experience '),
(4, 'Tara', 'Malcolmson', '32', 'London', 'I am a full time music teacher and also play around 5-6 gigs a month at a local pub.', 'Acoustic Guitar', 'Influences', 'Experience'),
(5, 'Abel', 'Graham', '24', 'Los Angeles ', 'I have been rapping for a year and a half now and am currently trying to get my music to a wider audience.', 'Rapper', 'Influences', 'Experience'),
(6, 'Rafael ', 'Costa', '30', 'Madrid', 'I have been drumming since i was 8 years old and been in numerous rock and blues bands', 'Drummer', 'Influences ', 'Experience'),
(7, 'Jermaine', 'Francis', '50', 'New York', 'I live in Nyc and am a well know classical musician in the area', 'Violinist ', 'Influences', 'Experience'),
(8, 'Alyssa', 'Hollande', '19', 'Paris', 'I am a french pianist based in Paris. I play at my uncles restaurant every other saturday', 'Pianist ', 'Influences', 'Experience'),
(9, 'Alessandro', 'Costello ', '29', 'Rome', 'I work in a radio station as well as being a producer in my spare time. I have produced pop songs one of which made it to the Italian charts', 'Producer', 'Influences', 'Experience'),
(10, 'Elsa', 'Bergman', '23', 'Stockholm', 'I am a swedish guitarist and have just started playing in the last year. I am completely self taught.', 'Acoustic Guitarist', 'Influences ', 'Experience'),
(11, 'Martin', 'Reynolds ', '30', 'Belfast ', 'I work in a local supermarket and play drums in all the spare time i get ', 'Drummer ', 'Influences', 'Experience'),
(12, 'Johan', 'Pall', '27', 'Amsterdam ', 'I am a full time school teacher, teaching music and history', 'Drummer', 'Influences', 'Experience'),
(13, 'Aoife', 'McGivern', '19', 'Edinburgh', 'Originally from Ireland and studying Music Theory in Edinburgh.', 'Drummer', 'Influences', 'Experience '),
(14, 'Lola ', 'Pierro', '48', 'Rome', 'I work in a bank in the centre of Rome and have enjoyed playing piano for the last 20 years', 'Pianist', 'Influences', 'Experience ');

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `card`
--
ALTER TABLE `card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `goal`
--
ALTER TABLE `goal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT for table `referee`
--
ALTER TABLE `referee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `stadium`
--
ALTER TABLE `stadium`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `card`
--
ALTER TABLE `card`
  ADD CONSTRAINT `game_card` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `player_card` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON UPDATE CASCADE;

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