-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 14 Jan 2020 pada 11.05
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.3.4

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
-- Struktur dari tabel `cart`
--

CREATE TABLE `cart` (
  `id_produk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `nota`
--

CREATE TABLE `nota` (
  `id_transaksi` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `harga_produk` int(11) NOT NULL,
  `total_harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemesan`
--

CREATE TABLE `pemesan` (
  `id_pemesan` int(11) NOT NULL,
  `nama_pemesan` text NOT NULL,
  `nomor_meja` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `nama_produk` text NOT NULL,
  `kategori` text NOT NULL,
  `harga_produk` int(100) NOT NULL,
  `food_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `produk`
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
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
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

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` text NOT NULL,
  `jabatan` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `nama_user`, `username`, `password`, `jabatan`) VALUES
(8, 'admin', 'admin', 'admin', 'admin'),
(10, 'Staff', 'staff', 'staff', 'staff'),
(11, 'Manajer', 'manajer', 'manajer', 'manajer'),
(12, 'Direktur', 'direktur', 'direktur', 'direktur');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pemesan`
--
ALTER TABLE `pemesan`
  ADD PRIMARY KEY (`id_pemesan`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pemesan`
--
ALTER TABLE `pemesan`
  MODIFY `id_pemesan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
