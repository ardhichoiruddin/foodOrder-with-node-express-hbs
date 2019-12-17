-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 17, 2019 at 01:10 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodappppl`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_produk`) VALUES
(7),
(9),
(11),
(6),
(5),
(6),
(5);

-- --------------------------------------------------------

--
-- Table structure for table `nota`
--

CREATE TABLE `nota` (
  `id_transaksi` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `harga_produk` int(11) NOT NULL,
  `total_harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pemesan`
--

CREATE TABLE `pemesan` (
  `id_pemesan` int(11) NOT NULL,
  `nama_pemesan` text NOT NULL,
  `nomor_meja` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `nama_produk` text NOT NULL,
  `kategori` text NOT NULL,
  `harga_produk` int(100) NOT NULL,
  `food_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `nama_produk`, `kategori`, `harga_produk`, `food_image`) VALUES
(2, 'Origins Authentic', 'minuman', 17000, 'upload_gambar-1573528897332.jpg'),
(3, 'Chapayom', 'minuman', 23000, 'upload_gambar-1573528941284.jpg'),
(4, 'Hei Ho!', 'minuman', 18000, 'upload_gambar-1573528987437.jpg'),
(5, 'Rinne Cheese Tea', 'minuman', 23000, 'upload_gambar-1573529128134.jpg'),
(6, 'Ban Ban', 'minuman', 18000, 'upload_gambar-1573529176329.jpg'),
(7, 'Sostel', 'makanan', 21000, 'upload_gambar-1573529482004.jpg'),
(8, 'Indomie Donat', 'makanan', 15000, 'upload_gambar-1573529560374.jpg'),
(9, 'Es Kepal Milo', 'makanan', 23000, 'upload_gambar-1573529592757.jpg'),
(10, 'Thai Mango', 'makanan', 34000, 'upload_gambar-1573529636578.jpg'),
(11, 'Nugget Pisang', 'makanan', 23000, 'upload_gambar-1573529668903.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `nama_pemesan` text NOT NULL,
  `id_produk` int(11) NOT NULL,
  `nomor_meja` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `total_harga` int(120) NOT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_transaksi`, `nama_pemesan`, `id_produk`, `nomor_meja`, `quantity`, `tanggal`, `total_harga`, `status`) VALUES
(2343, '', 7, 0, 2, '2019-12-17', 42000, 'ditolak'),
(2343, '', 9, 0, 2, '2019-12-17', 42000, 'ditolak'),
(2343, '', 11, 0, 2, '2019-12-17', 42000, 'ditolak'),
(2343, '', 6, 0, 2, '2019-12-17', 42000, 'ditolak'),
(2343, '', 5, 0, 2, '2019-12-17', 42000, 'ditolak');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` text NOT NULL,
  `jabatan` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nama_user`, `username`, `password`, `jabatan`) VALUES
(8, 'admin', 'admin', 'admin', 'admin'),
(10, 'Staff', 'staff', 'staff', 'staff'),
(11, 'Manajer', 'manajer', 'manajer', 'manajer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pemesan`
--
ALTER TABLE `pemesan`
  ADD PRIMARY KEY (`id_pemesan`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pemesan`
--
ALTER TABLE `pemesan`
  MODIFY `id_pemesan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;