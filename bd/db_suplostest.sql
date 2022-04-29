-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2022 a las 22:03:54
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_suplostest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `databienesraices`
--

CREATE TABLE `databienesraices` (
  `ID` int(50) NOT NULL,
  `Direccion` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `Ciudad` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Telefono` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Codigo_Postal` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Tipo` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `Precio` varchar(40) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `databienesraices`
--
ALTER TABLE `databienesraices`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `databienesraices`
--
ALTER TABLE `databienesraices`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
