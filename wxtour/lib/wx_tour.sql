-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-03-08 08:33:28
-- 服务器版本： 5.7.10-log
-- PHP Version: 5.6.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wx_tour`
--

-- --------------------------------------------------------

--
-- 表的结构 `wx_bill`
--

CREATE TABLE `wx_bill` (
  `bid` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `realname` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `fromto` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `did` varchar(255) NOT NULL,
  `sid` varchar(255) NOT NULL,
  `pid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `wx_list`
--

CREATE TABLE `wx_list` (
  `pid` int(255) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `fromto` varchar(255) NOT NULL,
  `amount` int(255) NOT NULL,
  `price` int(255) NOT NULL,
  `userlist` text NOT NULL,
  `did` int(255) NOT NULL,
  `tmp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `wx_list`
--

INSERT INTO `wx_list` (`pid`, `date`, `time`, `fromto`, `amount`, `price`, `userlist`, `did`, `tmp`) VALUES
(1, '2017-03-23', '8:00;19:00', '南海;威海', 32, 30, '', 2017001, ''),
(2, '2017-03-18', '9:00;15:00', '南海;文登', 27, 20, '', 2017002, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wx_bill`
--
ALTER TABLE `wx_bill`
  ADD PRIMARY KEY (`bid`);

--
-- Indexes for table `wx_list`
--
ALTER TABLE `wx_list`
  ADD PRIMARY KEY (`pid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `wx_bill`
--
ALTER TABLE `wx_bill`
  MODIFY `bid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- 使用表AUTO_INCREMENT `wx_list`
--
ALTER TABLE `wx_list`
  MODIFY `pid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
