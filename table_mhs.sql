-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 14, 2017 at 04:10 
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `table_mhs`
--

CREATE TABLE `table_mhs` (
  `id_mhs` int(11) NOT NULL,
  `nim` int(9) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `prodi` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `table_mhs`
--

INSERT INTO `table_mhs` (`id_mhs`, `nim`, `nama`, `prodi`) VALUES
(11, 4352, 'zulhan Arif', 'Sistem Informasi'),
(12, 43245234, 'Mas Edo', 'Sistem informasi'),
(14, 13485700, 'Suhaili', 'Sistem Informasi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `table_mhs`
--
ALTER TABLE `table_mhs`
  ADD PRIMARY KEY (`id_mhs`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `table_mhs`
--
ALTER TABLE `table_mhs`
  MODIFY `id_mhs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
