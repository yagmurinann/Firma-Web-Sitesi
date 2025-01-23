-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 23 Oca 2025, 09:46:24
-- Sunucu sürümü: 10.4.32-MariaDB
-- PHP Sürümü: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `iletisim`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `form`
--

CREATE TABLE `form` (
  `id` text NOT NULL,
  `email` text NOT NULL,
  `mesaj` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `form`
--

INSERT INTO `form` (`id`, `email`, `mesaj`) VALUES
('sdsbcscss', 'safdsgdsgd@example.com', 'dgrgsd'),
('sdsbcscss', 'safdsgdsgd@example.com', 'dgrgsd'),
('yagmur', 'yagmur@gmail.com', 'merhabsa'),
('sdsbcscss', 'safdsgdsgd@example.com', 'merhaba');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
