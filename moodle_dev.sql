-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-06-2024 a las 16:15:00
-- Versión del servidor: 8.0.36
-- Versión de PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `moodle_dev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mdl_course`
--

CREATE TABLE `mdl_course` (
  `id` int NOT NULL,
  `category` int NOT NULL DEFAULT '0',
  `sortorder` int NOT NULL DEFAULT '0',
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idnumber` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `summary` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `summaryformat` tinyint NOT NULL DEFAULT '0',
  `format` varchar(21) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'topics',
  `showgrades` tinyint NOT NULL DEFAULT '1',
  `newsitems` mediumint NOT NULL DEFAULT '1',
  `startdate` int NOT NULL DEFAULT '0',
  `enddate` int NOT NULL DEFAULT '0',
  `relativedatesmode` tinyint(1) NOT NULL DEFAULT '0',
  `marker` int NOT NULL DEFAULT '0',
  `maxbytes` int NOT NULL DEFAULT '0',
  `legacyfiles` smallint NOT NULL DEFAULT '0',
  `showreports` smallint NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `visibleold` tinyint(1) NOT NULL DEFAULT '1',
  `downloadcontent` tinyint(1) DEFAULT NULL,
  `groupmode` smallint NOT NULL DEFAULT '0',
  `groupmodeforce` smallint NOT NULL DEFAULT '0',
  `defaultgroupingid` int NOT NULL DEFAULT '0',
  `lang` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `calendartype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `theme` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `timecreated` int NOT NULL DEFAULT '0',
  `timemodified` int NOT NULL DEFAULT '0',
  `requested` tinyint(1) NOT NULL DEFAULT '0',
  `enablecompletion` tinyint(1) NOT NULL DEFAULT '0',
  `completionnotify` tinyint(1) NOT NULL DEFAULT '0',
  `cacherev` int NOT NULL DEFAULT '0',
  `originalcourseid` int DEFAULT NULL,
  `showactivitydates` tinyint(1) NOT NULL DEFAULT '0',
  `showcompletionconditions` tinyint(1) DEFAULT NULL,
  `pdfexportfont` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '',
  `imagesrc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '',
  `imagealt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mdl_course`
--

INSERT INTO `mdl_course` (`id`, `category`, `sortorder`, `fullname`, `shortname`, `idnumber`, `summary`, `summaryformat`, `format`, `showgrades`, `newsitems`, `startdate`, `enddate`, `relativedatesmode`, `marker`, `maxbytes`, `legacyfiles`, `showreports`, `visible`, `visibleold`, `downloadcontent`, `groupmode`, `groupmodeforce`, `defaultgroupingid`, `lang`, `calendartype`, `theme`, `timecreated`, `timemodified`, `requested`, `enablecompletion`, `completionnotify`, `cacherev`, `originalcourseid`, `showactivitydates`, `showcompletionconditions`, `pdfexportfont`, `longname`, `imagesrc`, `imagealt`) VALUES
(1, 1, 1, '2º DAW-B - Tutoria', '2º DAW-B', 'ID001', 'Resumen 1', 1, 'topics', 1, 5, 1622559600, 1625161200, 0, 0, 1024, 1, 0, 1, 1, 1, 0, 0, 1, 'es', 'gregorian', 'default', 1622559600, 1625161200, 0, 0, 0, 0, NULL, 0, 0, 'Arial', 'Tutoria', '/storage/course/tutoria.png', ''),
(2, 2, 2, 'M3-B Programación', 'M3-B', 'ID002', 'Resumen 2', 0, 'topics', 1, 10, 1622559600, 1625161200, 0, 0, 2048, 0, 1, 1, 1, 1, 0, 0, 2, 'es', 'gregorian', 'default', 1622559600, 1625161200, 0, 1, 0, 0, NULL, 1, 1, 'Times New Roman', 'Programación', '', ''),
(3, 3, 3, 'M6-B - Desarrollo Web en Entorno Cliente', 'M6-B', 'ID003', 'Resumen 3', 1, 'topics', 1, 15, 1622559600, 1625161200, 1, 0, 4096, 0, 0, 1, 1, 0, 0, 0, 3, 'es', 'gregorian', 'default', 1622559600, 1625161200, 0, 0, 1, 0, NULL, 0, 0, 'Verdana', 'Desarrollo Web en Entorno Cliente', '', ''),
(4, 4, 4, 'M7-B - Desarrollo Web en Entorno Servidor', 'M7-B', 'ID004', 'Resumen 4', 0, 'topics', 1, 20, 1622559600, 1625161200, 0, 0, 8192, 1, 1, 1, 1, 1, 0, 0, 4, 'es', 'gregorian', 'default', 1622559600, 1625161200, 0, 1, 0, 0, NULL, 1, 1, 'Helvetica', 'Desarrollo Web en Entorno Servidor', '', ''),
(5, 5, 5, 'M8-B - Despliegue de Aplicaciones Web', 'M8-B', 'ID005', 'Resumen 5', 1, 'topics', 1, 25, 1622559600, 1625161200, 0, 0, 16384, 0, 0, 1, 1, 0, 0, 0, 5, 'es', 'gregorian', 'default', 1622559600, 1625161200, 1, 0, 1, 0, NULL, 0, 0, 'Courier', 'Despliegue de Aplicaciones Web', '', ''),
(7, 7, 7, 'M12-B - Proyecto', 'M12-B', 'ID007', 'Resumen 7', 1, 'topics', 1, 35, 1622559600, 1625161200, 0, 0, 65536, 0, 0, 1, 1, 0, 0, 0, 7, 'es', 'gregorian', 'default', 1622559600, 1625161200, 0, 0, 1, 0, NULL, 0, 0, 'Impact', 'Proyecto', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mdl_user`
--

CREATE TABLE `mdl_user` (
  `id` int NOT NULL,
  `auth` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'manual',
  `confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `policyagreed` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `suspended` tinyint(1) NOT NULL DEFAULT '0',
  `mnethostid` int NOT NULL DEFAULT '0',
  `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'student',
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idnumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emailstop` tinyint(1) NOT NULL DEFAULT '0',
  `phone1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phone2` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `institution` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `city` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `country` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lang` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `calendartype` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'gregorian',
  `theme` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `timezone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '99',
  `firstaccess` int NOT NULL DEFAULT '0',
  `lastaccess` int NOT NULL DEFAULT '0',
  `lastlogin` int NOT NULL DEFAULT '0',
  `currentlogin` int NOT NULL DEFAULT '0',
  `lastip` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `secret` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `picture` int NOT NULL DEFAULT '0',
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `descriptionformat` tinyint NOT NULL DEFAULT '1',
  `mailformat` tinyint(1) NOT NULL DEFAULT '1',
  `maildigest` tinyint(1) NOT NULL DEFAULT '0',
  `maildisplay` tinyint NOT NULL DEFAULT '2',
  `autosubscribe` tinyint(1) NOT NULL DEFAULT '1',
  `trackforums` tinyint(1) NOT NULL DEFAULT '0',
  `timecreated` int NOT NULL DEFAULT '0',
  `timemodified` int NOT NULL DEFAULT '0',
  `trustbitmask` int NOT NULL DEFAULT '0',
  `imagesrc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagealt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastnamephonetic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstnamephonetic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `middlename` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alternatename` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `moodlenetprofile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mdl_user`
--

INSERT INTO `mdl_user` (`id`, `auth`, `confirmed`, `policyagreed`, `deleted`, `suspended`, `mnethostid`, `role`, `username`, `password`, `idnumber`, `firstname`, `lastname`, `email`, `emailstop`, `phone1`, `phone2`, `institution`, `department`, `address`, `city`, `country`, `lang`, `calendartype`, `theme`, `timezone`, `firstaccess`, `lastaccess`, `lastlogin`, `currentlogin`, `lastip`, `secret`, `picture`, `description`, `descriptionformat`, `mailformat`, `maildigest`, `maildisplay`, `autosubscribe`, `trackforums`, `timecreated`, `timemodified`, `trustbitmask`, `imagesrc`, `imagealt`, `lastnamephonetic`, `firstnamephonetic`, `middlename`, `alternatename`, `moodlenetprofile`) VALUES
(1, 'manual', 0, 0, 0, 0, 0, 'student', 'carlosaragal', '$2a$12$ZLbA9he.tt/ewuHPKevM3OMiR9Pk1q13lg88gXU0/L9w0.8wWyJ4G', '', 'Carlos', 'Araujo Galván', 'carlosaragal@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/carlosaragal.png', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'manual', 0, 0, 0, 0, 0, 'student', 'josepsalrom', '$2a$12$UWXF6Cjy3YzwhIY810k9/.Bmyms1NYPFMxoWgxSXUwJjjpFMNOkvm', '', 'Josep Miquel', 'Sala Romero', 'josepsalrom@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/josepsalrom.png', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'manual', 0, 0, 0, 0, 0, 'student', 'carlessanrod', '$2a$12$REPOWdqeOGG6iWU6kMflxO/bNl1pnF0uTmaHfp44juoN/bb1Wiw0W', '', 'Carles', 'Sanchez Rodriguez', 'carlessanrod@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/carlessanrod.png', NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'manual', 0, 0, 0, 0, 0, 'student', 'albertsorgua', '$2a$12$HewJpDSHoVRl1jRjvcwxguPgj12LKwLXtdgEsSgVH44Z..yHvcaQi', '', 'Albert', 'Soriano Guasch', 'albertsorgua@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/albertsorgua.png', NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'manual', 0, 0, 0, 0, 0, 'teacher', 'javiersalmar', '$2a$12$QdP8/BmgFvQJYESV66I90.62w35.HD31viqLMHuMzk3dGIiSin3fm', '', 'Javier', 'Salvador Marco', 'javiersalmar@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/javiersalmar.png', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'manual', 0, 0, 0, 0, 0, 'teacher', 'robertoman', '$2a$12$4g2srJemhzZKVLMLIkMV5errg8j5obnPfYI1DUen5Pe5Fl5CIAbPy', '', 'Roberto', 'Manca', 'robertoman@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/robertoman.png', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'manual', 0, 0, 0, 0, 0, 'teacher', 'adriaseresl', '$2a$12$6PclfHIsf302XDEUPEMkCOInm.pcqb.sF/zS.NtZxrn8YdF9Tddzi', '', 'Adrià', 'Serrando Eslava', 'adriaseresl@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, '/storage/user/adriaseresl.png', NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'manual', 0, 0, 0, 0, 0, 'admin', 'admin', '$2a$12$jcRDeTif/dhaHyOfKyiTXuZ4M.n66SVFe4AfFAEyKfeYIZhEHSMUi', '', 'Admin', '', 'admin@campus.monlau.com', 0, '', '', '', '', '', '', 'ES', 'es', 'gregorian', '', '99', 0, 0, 0, 0, '', '', 0, NULL, 1, 1, 0, 2, 1, 0, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mdl_user_logs`
--

CREATE TABLE `mdl_user_logs` (
  `id` int NOT NULL,
  `id_user` int NOT NULL,
  `uid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` timestamp NULL DEFAULT NULL,
  `output` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mdl_user_logs`
--

INSERT INTO `mdl_user_logs` (`id`, `id_user`, `uid`, `input`, `output`) VALUES
(1, 1, 'a1b2c3d4', '2024-01-01 09:00:00', '2024-01-01 16:00:00'),
(2, 2, 'e5f6g7h8', '2024-01-02 07:00:00', '2024-01-02 16:30:00'),
(3, 3, 'i9j0k1l2', '2024-01-03 12:31:00', '2024-01-03 17:00:00'),
(4, 4, 'm3n4o5p6', '2024-01-04 06:15:00', '2024-01-04 16:15:00'),
(5, 5, 'q7r8s9t0', '2024-01-05 06:45:00', '2024-01-05 16:45:00'),
(6, 6, 'u1v2w3x4', '2024-01-06 07:30:00', '2024-01-06 17:30:00'),
(7, 7, 'y5z6a7b8', '2024-01-07 06:00:00', '2024-01-07 16:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mdl_course`
--
ALTER TABLE `mdl_course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mdl_cour_cat_ix` (`category`),
  ADD KEY `mdl_cour_idn_ix` (`idnumber`),
  ADD KEY `mdl_cour_ori_ix` (`originalcourseid`),
  ADD KEY `mdl_cour_sho_ix` (`shortname`),
  ADD KEY `mdl_cour_sor_ix` (`sortorder`);

--
-- Indices de la tabla `mdl_user`
--
ALTER TABLE `mdl_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mdl_user_mneuse_uix` (`mnethostid`,`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `mdl_user_alt_ix` (`alternatename`),
  ADD KEY `mdl_user_aut_ix` (`auth`),
  ADD KEY `mdl_user_cit_ix` (`city`),
  ADD KEY `mdl_user_con_ix` (`confirmed`),
  ADD KEY `mdl_user_cou_ix` (`country`),
  ADD KEY `mdl_user_del_ix` (`deleted`),
  ADD KEY `mdl_user_ema_ix` (`email`),
  ADD KEY `mdl_user_fir2_ix` (`firstnamephonetic`),
  ADD KEY `mdl_user_fir_ix` (`firstname`),
  ADD KEY `mdl_user_idn_ix` (`idnumber`),
  ADD KEY `mdl_user_las2_ix` (`lastaccess`),
  ADD KEY `mdl_user_las3_ix` (`lastnamephonetic`),
  ADD KEY `mdl_user_las_ix` (`lastname`),
  ADD KEY `mdl_user_mid_ix` (`middlename`);

--
-- Indices de la tabla `mdl_user_logs`
--
ALTER TABLE `mdl_user_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_mdl_user_logs_id_user` (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mdl_course`
--
ALTER TABLE `mdl_course`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `mdl_user`
--
ALTER TABLE `mdl_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `mdl_user_logs`
--
ALTER TABLE `mdl_user_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mdl_user_logs`
--
ALTER TABLE `mdl_user_logs`
  ADD CONSTRAINT `mdl_user_logs_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `mdl_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
